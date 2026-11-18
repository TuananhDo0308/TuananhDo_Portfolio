"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export function AvatarModel() {
  const { scene } = useGLTF("/TuananhDo_Portfolio/avatar.glb");
  const groupRef = useRef<THREE.Group>(null);
  const bonesMapRef = useRef<Map<string, THREE.Bone>>(new Map());
  const morphMeshesRef = useRef<THREE.Mesh[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  // Animation states
  const timeRef = useRef(0);
  const blinkTimerRef = useRef(0);
  const blinkDurationRef = useRef(0);
  const isBlinkingRef = useRef(false);
  const nextBlinkTimeRef = useRef(3);

  // Interactive reaction state: "Mặt cọc" (Grumpy)
  const isGrumpyRef = useRef(false);
  const grumpyTimerRef = useRef(0);
  const currentSmileRef = useRef(0.02);

  // Auto-rotation state
  const autoRotationRef = useRef(0);

  // Mobile auto-look states
  const [isMobile, setIsMobile] = useState(false);
  const lookChangeTimerRef = useRef(0);
  const nextLookChangeRef = useRef(5); // 4-7 giây
  const targetLookPosRef = useRef({ x: 0, y: 0 });
  const currentLookPosRef = useRef({ x: 0, y: 0 });

  // Track if page is visible
  const isPageVisibleRef = useRef(true);
  const lastFrameTimeRef = useRef(0);

  const triggerGrumpy = () => {
    isGrumpyRef.current = true;
    grumpyTimerRef.current = 0;
  };

  const handleAvatarClick = (e: any) => {
    if (e.stopPropagation) e.stopPropagation();
    triggerGrumpy();
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    // Clone scene
    const cloned = SkeletonUtils.clone(scene);
    const clonedScene = cloned as THREE.Group;

    // Clear and add
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }
    groupRef.current.add(clonedScene);

    // Auto-scale
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;
    clonedScene.scale.setScalar(scale);
    clonedScene.position.set(
      -center.x * scale,
      -center.y * scale - 0.2, // 👈 hạ xuống
      -center.z * scale,
    );

    // Find and store bones and morph meshes
    bonesMapRef.current.clear();
    morphMeshesRef.current = [];
    clonedScene.traverse((child) => {
      if (child instanceof THREE.SkinnedMesh) {
        child.skeleton.bones.forEach((bone) => {
          bonesMapRef.current.set(bone.name, bone);
        });
      }
      if (
        (child instanceof THREE.SkinnedMesh || child instanceof THREE.Mesh) &&
        child.morphTargetDictionary &&
        child.morphTargetInfluences
      ) {
        morphMeshesRef.current.push(child);
      }
    });

    const armPose = {
      RightArm: { x: 1.2, y: 0, z: 0 },
      RightForeArm: { x: 0, y: -0.2, z: -0.3 },
      RightHand: { x: 0, y: 0, z: 0 },

      LeftArm: { x: 1.2, y: 0, z: 0 },
      LeftForeArm: { x: 0, y: 0.2, z: 0.3 },
      LeftHand: { x: 0, y: 0, z: 0 },
    };

    // Apply rotations to bones
    Object.entries(armPose).forEach(([boneName, rotation]) => {
      const bone = bonesMapRef.current.get(boneName);
      if (bone) {
        bone.rotation.set(rotation.x, rotation.y, rotation.z);
      }
    });
  }, [scene]);

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPageVisibleRef.current = false;
      } else {
        isPageVisibleRef.current = true;
        lastFrameTimeRef.current = Date.now();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Track mouse position relative to canvas/avatar center (only on desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      // If hero canvas is scrolled completely out of view, reset to center
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        mousePosRef.current = { x: 0, y: 0 };
        return;
      }

      // Horizontal center of the avatar canvas in viewport pixels
      const centerX = rect.left + rect.width / 2;
      // Vertical eye level of the avatar model (~35% from the top of the canvas)
      const centerY = rect.top + rect.height * 0.35;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const maxDistX =
        Math.max(centerX, window.innerWidth - centerX) || window.innerWidth / 2;
      const maxDistY =
        Math.max(centerY, window.innerHeight - centerY) ||
        window.innerHeight / 2;

      mousePosRef.current = {
        x: THREE.MathUtils.clamp(deltaX / maxDistX, -1, 1),
        y: THREE.MathUtils.clamp(-deltaY / maxDistY, -1, 1),
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: 0, y: 0 };
    };

    const handleCanvasClick = () => {
      triggerGrumpy();
    };

    gl.domElement.style.cursor = "pointer";

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    gl.domElement.addEventListener("click", handleCanvasClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      gl.domElement.removeEventListener("click", handleCanvasClick);
      gl.domElement.style.cursor = "auto";
    };
  }, [gl, isMobile]);

  // Animate
  useFrame((state, delta) => {
    const cappedDelta = Math.min(delta, 0.1);

    const now = Date.now();
    if (lastFrameTimeRef.current === 0) {
      lastFrameTimeRef.current = now;
      return;
    }
    const timeSinceLastFrame = (now - lastFrameTimeRef.current) / 1000;
    lastFrameTimeRef.current = now;

    if (timeSinceLastFrame > 1) {
      return;
    }

    timeRef.current += cappedDelta;
    blinkTimerRef.current += cappedDelta;

    // === AUTO-ROTATION (CHỈ MOBILE) ===
    if (isMobile) {
      autoRotationRef.current += cappedDelta * 0.3;
      if (groupRef.current) {
        groupRef.current.rotation.y = autoRotationRef.current;
      }
    } else {
      // Desktop - reset rotation về 0
      if (groupRef.current && autoRotationRef.current !== 0) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          0,
          cappedDelta * 2,
        );
        if (Math.abs(groupRef.current.rotation.y) < 0.01) {
          autoRotationRef.current = 0;
          groupRef.current.rotation.y = 0;
        }
      }
    }

    // === MOBILE AUTO-LOOK CHANGE ===
    if (isMobile) {
      lookChangeTimerRef.current += cappedDelta;

      // Thời gian đổi góc nhìn
      if (lookChangeTimerRef.current >= nextLookChangeRef.current) {
        lookChangeTimerRef.current = 0;
        nextLookChangeRef.current = 3;

        // Random target position (giới hạn phạm vi để trông tự nhiên)
        targetLookPosRef.current = {
          x: (Math.random() - 0.5) * 0.8,
          y: (Math.random() - 0.5) * 0.6,
        };
      }

      // Smooth transition to target look position
      currentLookPosRef.current.x = THREE.MathUtils.lerp(
        currentLookPosRef.current.x,
        targetLookPosRef.current.x,
        cappedDelta * 2,
      );
      currentLookPosRef.current.y = THREE.MathUtils.lerp(
        currentLookPosRef.current.y,
        targetLookPosRef.current.y,
        cappedDelta * 2,
      );
    }

    // === BREATHING & HUFF ANIMATION ===
    let breathScale = 1 + Math.sin(timeRef.current * 0.8) * 0.015;

    if (isGrumpyRef.current) {
      grumpyTimerRef.current += cappedDelta;
      const t = grumpyTimerRef.current;
      if (t < 2.4) {
        // Annoyed chest puff in the first 0.5s
        if (t < 0.5) {
          breathScale += Math.sin((t * Math.PI) / 0.5) * 0.035;
        }
      } else {
        isGrumpyRef.current = false;
      }
    }

    const chest =
      bonesMapRef.current.get("Spine1") ||
      bonesMapRef.current.get("Spine2") ||
      bonesMapRef.current.get("UpperChest");

    if (chest) {
      chest.scale.setScalar(breathScale);
    }

    // === BLINKING & EYE EXPRESSION ANIMATION ===
    if (
      !isBlinkingRef.current &&
      !isGrumpyRef.current &&
      blinkTimerRef.current >= nextBlinkTimeRef.current
    ) {
      isBlinkingRef.current = true;
      blinkDurationRef.current = 0;
      blinkTimerRef.current = 0;
      nextBlinkTimeRef.current = Math.random() * 3 + 2;
    }

    let eyeScaleY = 1.0;
    if (isBlinkingRef.current) {
      blinkDurationRef.current += cappedDelta;
      const blinkLength = 0.15;
      const blinkProgress = blinkDurationRef.current / blinkLength;

      if (blinkProgress >= 1) {
        isBlinkingRef.current = false;
      }

      const blinkAmount = Math.sin(blinkProgress * Math.PI) * 0.9;
      eyeScaleY = 1 - blinkAmount;
    } else if (isGrumpyRef.current) {
      // Annoyed glaring squint (lườm cọc)
      eyeScaleY = 0.38;
    }

    const leftEye = bonesMapRef.current.get("LeftEye");
    const rightEye = bonesMapRef.current.get("RightEye");

    if (leftEye) {
      leftEye.scale.y = THREE.MathUtils.lerp(
        leftEye.scale.y,
        eyeScaleY,
        cappedDelta * 12,
      );
    }
    if (rightEye) {
      rightEye.scale.y = THREE.MathUtils.lerp(
        rightEye.scale.y,
        eyeScaleY,
        cappedDelta * 12,
      );
    }

    // === SUBTLE IDLE SWAY (CHỈ DESKTOP) ===
    if (!isMobile) {
      const swaySpeed = 0.5;
      const swayAmount = 0.02;
      const sway = Math.sin(timeRef.current * swaySpeed) * swayAmount;

      if (groupRef.current) {
        groupRef.current.rotation.z = sway * 0.5;
        groupRef.current.position.y = Math.abs(sway) * 0.3;
      }
    }

    // === HEAD/NECK/BODY FOLLOW MOUSE OR AUTO-LOOK ===
    const headBone = bonesMapRef.current.get("Head");
    const neckBone = bonesMapRef.current.get("Neck");
    const spineBone =
      bonesMapRef.current.get("Spine") || bonesMapRef.current.get("Spine1");
    const spine1Bone = bonesMapRef.current.get("Spine1");
    const spine2Bone = bonesMapRef.current.get("Spine2");
    const chestBone =
      bonesMapRef.current.get("UpperChest") || bonesMapRef.current.get("Chest");

    // Sử dụng mouse position (desktop) hoặc auto-look position (mobile)
    const activeLookPos = isMobile
      ? currentLookPosRef.current
      : mousePosRef.current;

    const targetRotationY = THREE.MathUtils.clamp(
      activeLookPos.x * 0.28,
      -0.35,
      0.35,
    );
    const targetRotationX = THREE.MathUtils.clamp(
      -activeLookPos.y * 0.18,
      -0.22,
      0.22,
    );

    const idleHeadMovement = {
      y: Math.sin(timeRef.current * 0.3) * 0.02,
      x: Math.cos(timeRef.current * 0.4) * 0.015,
    };

    // === EXPRESSION & MOUTH MORPH TARGETS ===
    let targetSmile = 0.0;

    if (isGrumpyRef.current) {
      targetSmile = 0.0; // mặt cọc, mím môi không cười
    }

    currentSmileRef.current = THREE.MathUtils.lerp(
      currentSmileRef.current,
      targetSmile,
      cappedDelta * 8,
    );

    morphMeshesRef.current.forEach((mesh) => {
      if (mesh.morphTargetDictionary && mesh.morphTargetInfluences) {
        const smileIdx = mesh.morphTargetDictionary["mouthSmile"];
        if (typeof smileIdx === "number") {
          mesh.morphTargetInfluences[smileIdx] = currentSmileRef.current;
        }
        const openIdx = mesh.morphTargetDictionary["mouthOpen"];
        if (typeof openIdx === "number") {
          mesh.morphTargetInfluences[openIdx] = THREE.MathUtils.lerp(
            mesh.morphTargetInfluences[openIdx] || 0,
            0,
            cappedDelta * 10,
          );
        }
      }
    });

    let extraHeadRotX = 0;
    let extraHeadRotY = 0;
    let extraHeadRotZ = 0;

    if (isGrumpyRef.current) {
      const t = grumpyTimerRef.current;
      // Annoyed head shake (lắc đầu quầy quậy phản đối/bực mình)
      const shakeDecay = Math.max(0, 1 - t / 1.6);
      const headShake = Math.sin(t * 22) * 0.24 * shakeDecay;
      // Turns head away in a huff (ngoảnh mặt đi giận dỗi)
      const turnAway = Math.min(t / 0.45, 1) * 0.35;
      extraHeadRotY = turnAway + headShake;
      extraHeadRotX = 0.07; // hơi chúi xuống lườm
      extraHeadRotZ = -0.06;
    }

    // Head - moves the most (100%)
    if (headBone) {
      headBone.rotation.y = THREE.MathUtils.lerp(
        headBone.rotation.y,
        THREE.MathUtils.clamp(
          targetRotationY + idleHeadMovement.y + extraHeadRotY,
          -0.6,
          0.6,
        ),
        cappedDelta * 6,
      );
      headBone.rotation.x = THREE.MathUtils.lerp(
        headBone.rotation.x,
        THREE.MathUtils.clamp(
          targetRotationX + idleHeadMovement.x + extraHeadRotX,
          -0.35,
          0.35,
        ),
        cappedDelta * 6,
      );
      headBone.rotation.z = THREE.MathUtils.lerp(
        headBone.rotation.z,
        extraHeadRotZ,
        cappedDelta * 6,
      );
    }

    // Neck - follows the head gently so it never twists behind the body.
    if (neckBone) {
      neckBone.rotation.y = THREE.MathUtils.lerp(
        neckBone.rotation.y,
        THREE.MathUtils.clamp(
          (targetRotationY + extraHeadRotY) * 0.22,
          -0.16,
          0.16,
        ),
        cappedDelta * 4,
      );
      neckBone.rotation.x = THREE.MathUtils.lerp(
        neckBone.rotation.x,
        THREE.MathUtils.clamp(
          (targetRotationX + extraHeadRotX) * 0.18,
          -0.1,
          0.1,
        ),
        cappedDelta * 4,
      );
    }

    // Upper chest/spine2 - follows 20% of head movement
    if (chestBone) {
      chestBone.rotation.y = THREE.MathUtils.lerp(
        chestBone.rotation.y,
        targetRotationY * 0.08,
        cappedDelta * 3.5,
      );
      chestBone.rotation.x = THREE.MathUtils.lerp(
        chestBone.rotation.x,
        targetRotationX * 0.06,
        cappedDelta * 3.5,
      );
    }

    // Mid spine - follows 15% of head movement
    if (spine2Bone && spine2Bone !== chestBone) {
      spine2Bone.rotation.y = THREE.MathUtils.lerp(
        spine2Bone.rotation.y,
        targetRotationY * 0.06,
        cappedDelta * 3,
      );
      spine2Bone.rotation.x = THREE.MathUtils.lerp(
        spine2Bone.rotation.x,
        targetRotationX * 0.04,
        cappedDelta * 3,
      );
    }

    // Lower spine/spine1 - follows 10% of head movement
    if (spine1Bone) {
      spine1Bone.rotation.y = THREE.MathUtils.lerp(
        spine1Bone.rotation.y,
        targetRotationY * 0.04,
        cappedDelta * 2.5,
      );
      spine1Bone.rotation.x = THREE.MathUtils.lerp(
        spine1Bone.rotation.x,
        targetRotationX * 0.03,
        cappedDelta * 2.5,
      );
    }

    // Base spine - minimal follow (5%)
    if (spineBone) {
      spineBone.rotation.y = THREE.MathUtils.lerp(
        spineBone.rotation.y,
        targetRotationY * 0.02,
        cappedDelta * 2,
      );
      spineBone.rotation.x = THREE.MathUtils.lerp(
        spineBone.rotation.x,
        targetRotationX * 0.015,
        cappedDelta * 2,
      );
    }

    // Add subtle hip/pelvis movement (very minimal, just a hint)
    const hips =
      bonesMapRef.current.get("Hips") || bonesMapRef.current.get("Pelvis");
    if (hips) {
      hips.rotation.y = THREE.MathUtils.lerp(
        hips.rotation.y,
        targetRotationY * 0.02,
        cappedDelta * 1.5,
      );
    }

    // === ARM MOVEMENTS (NATURAL IDLE & REACTIONS) ===
    const armSwaySpeed = 0.6;
    const armSway = Math.sin(timeRef.current * armSwaySpeed) * 0.025;

    const rightArm = bonesMapRef.current.get("RightArm");
    const rightForeArm = bonesMapRef.current.get("RightForeArm");
    const rightHand = bonesMapRef.current.get("RightHand");
    const leftArm = bonesMapRef.current.get("LeftArm");
    const leftForeArm = bonesMapRef.current.get("LeftForeArm");
    const leftHand = bonesMapRef.current.get("LeftHand");

    let armReactZ = 0;
    if (isGrumpyRef.current) {
      // Tense arms slightly closer to sides when grumpy
      armReactZ = -0.04;
    }

    if (leftArm) {
      leftArm.rotation.x = 1.2;
      leftArm.rotation.y = 0;
      leftArm.rotation.z = -armSway - armReactZ;
    }
    if (leftForeArm) {
      leftForeArm.rotation.x = 0;
      leftForeArm.rotation.y = 0.2;
      leftForeArm.rotation.z = 0.3;
    }
    if (leftHand) {
      leftHand.rotation.set(0, 0, 0);
    }

    if (rightArm) {
      rightArm.rotation.x = 1.2;
      rightArm.rotation.y = 0;
      rightArm.rotation.z = armSway + armReactZ;
    }
    if (rightForeArm) {
      rightForeArm.rotation.x = 0;
      rightForeArm.rotation.y = -0.2;
      rightForeArm.rotation.z = -0.3;
    }
    if (rightHand) {
      rightHand.rotation.set(0, 0, 0);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handleAvatarClick}
      onPointerOver={() => {
        gl.domElement.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        gl.domElement.style.cursor = "auto";
      }}
    />
  );
}

useGLTF.preload("/TuananhDo_Portfolio/avatar.glb");
