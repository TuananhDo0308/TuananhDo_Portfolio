"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  const groupRef = useRef<THREE.Group>(null);
  const bonesMapRef = useRef<Map<string, THREE.Bone>>(new Map());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { size } = useThree();

  // Animation states
  const timeRef = useRef(0);
  const blinkTimerRef = useRef(0);
  const blinkDurationRef = useRef(0);
  const isBlinkingRef = useRef(false);
  const nextBlinkTimeRef = useRef(Math.random() * 3 + 2);

  // Auto-rotation state
  const autoRotationRef = useRef(0);

  // Mobile auto-look states
  const [isMobile, setIsMobile] = useState(false);
  const lookChangeTimerRef = useRef(0);
  const nextLookChangeRef = useRef(Math.random() * 3 + 4); // 4-7 giây
  const targetLookPosRef = useRef({ x: 0, y: 0 });
  const currentLookPosRef = useRef({ x: 0, y: 0 });

  // Track if page is visible
  const isPageVisibleRef = useRef(true);
  const lastFrameTimeRef = useRef(Date.now());

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

    // Find and store bones
    bonesMapRef.current.clear();
    clonedScene.traverse((child) => {
      if (child instanceof THREE.SkinnedMesh) {
        child.skeleton.bones.forEach((bone) => {
          bonesMapRef.current.set(bone.name, bone);
        });
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

  // Track mouse position (only on desktop)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isMobile) {
        setMousePos({
          x: (event.clientX / size.width) * 2 - 1,
          y: -(event.clientY / size.height) * 2 + 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size, isMobile]);

  // Animate
  useFrame((state, delta) => {
    const cappedDelta = Math.min(delta, 0.1);

    const now = Date.now();
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
          x: (Math.random() - 0.5) * 1.5, // -0.75 đến 0.75
          y: (Math.random() - 0.5) * 1.2, // -0.6 đến 0.6
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

    // === BREATHING ANIMATION ===
    const breathingSpeed = 0.8;
    const breathingAmount = 0.015;
    const breathCycle = Math.sin(timeRef.current * breathingSpeed);

    const chest =
      bonesMapRef.current.get("Spine1") ||
      bonesMapRef.current.get("Spine2") ||
      bonesMapRef.current.get("UpperChest");

    if (chest) {
      chest.scale.setScalar(1 + breathCycle * breathingAmount);
    }

    // === BLINKING ANIMATION ===
    if (
      !isBlinkingRef.current &&
      blinkTimerRef.current >= nextBlinkTimeRef.current
    ) {
      isBlinkingRef.current = true;
      blinkDurationRef.current = 0;
      blinkTimerRef.current = 0;
      nextBlinkTimeRef.current = Math.random() * 3 + 2;
    }

    if (isBlinkingRef.current) {
      blinkDurationRef.current += cappedDelta;
      const blinkLength = 0.15;
      const blinkProgress = blinkDurationRef.current / blinkLength;

      if (blinkProgress >= 1) {
        isBlinkingRef.current = false;
      }

      const blinkAmount = Math.sin(blinkProgress * Math.PI) * 0.9;

      const leftEye = bonesMapRef.current.get("LeftEye");
      const rightEye = bonesMapRef.current.get("RightEye");

      if (leftEye) {
        leftEye.scale.y = 1 - blinkAmount;
      }
      if (rightEye) {
        rightEye.scale.y = 1 - blinkAmount;
      }
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
    const activeLookPos = isMobile ? currentLookPosRef.current : mousePos;

    const targetRotationY = activeLookPos.x * 0.5;
    const targetRotationX = -activeLookPos.y * 0.5;

    const idleHeadMovement = {
      y: Math.sin(timeRef.current * 0.3) * 0.05,
      x: Math.cos(timeRef.current * 0.4) * 0.03,
    };

    // Head - moves the most (100%)
    if (headBone) {
      headBone.rotation.y = THREE.MathUtils.lerp(
        headBone.rotation.y,
        targetRotationY + idleHeadMovement.y,
        cappedDelta * 5,
      );
      headBone.rotation.x = THREE.MathUtils.lerp(
        headBone.rotation.x,
        targetRotationX + idleHeadMovement.x,
        cappedDelta * 5,
      );
    }

    // Neck - follows 30% of head movement
    if (neckBone) {
      neckBone.rotation.y = THREE.MathUtils.lerp(
        neckBone.rotation.y,
        targetRotationY * 0.3,
        cappedDelta * 4,
      );
      neckBone.rotation.x = THREE.MathUtils.lerp(
        neckBone.rotation.x,
        targetRotationX * 0.3,
        cappedDelta * 4,
      );
    }

    // Upper chest/spine2 - follows 20% of head movement
    if (chestBone) {
      chestBone.rotation.y = THREE.MathUtils.lerp(
        chestBone.rotation.y,
        targetRotationY * 0.2,
        cappedDelta * 3.5,
      );
      chestBone.rotation.x = THREE.MathUtils.lerp(
        chestBone.rotation.x,
        targetRotationX * 0.15,
        cappedDelta * 3.5,
      );
    }

    // Mid spine - follows 15% of head movement
    if (spine2Bone && spine2Bone !== chestBone) {
      spine2Bone.rotation.y = THREE.MathUtils.lerp(
        spine2Bone.rotation.y,
        targetRotationY * 0.15,
        cappedDelta * 3,
      );
      spine2Bone.rotation.x = THREE.MathUtils.lerp(
        spine2Bone.rotation.x,
        targetRotationX * 0.1,
        cappedDelta * 3,
      );
    }

    // Lower spine/spine1 - follows 10% of head movement
    if (spine1Bone) {
      spine1Bone.rotation.y = THREE.MathUtils.lerp(
        spine1Bone.rotation.y,
        targetRotationY * 0.1,
        cappedDelta * 2.5,
      );
      spine1Bone.rotation.x = THREE.MathUtils.lerp(
        spine1Bone.rotation.x,
        targetRotationX * 0.08,
        cappedDelta * 2.5,
      );
    }

    // Base spine - minimal follow (5%)
    if (spineBone) {
      spineBone.rotation.y = THREE.MathUtils.lerp(
        spineBone.rotation.y,
        targetRotationY * 0.05,
        cappedDelta * 2,
      );
      spineBone.rotation.x = THREE.MathUtils.lerp(
        spineBone.rotation.x,
        targetRotationX * 0.03,
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

    // === SUBTLE ARM MOVEMENT ===
    const armSwaySpeed = 0.6;
    const armSway = Math.sin(timeRef.current * armSwaySpeed) * 0.03;

    const rightArm = bonesMapRef.current.get("RightArm");
    const leftArm = bonesMapRef.current.get("LeftArm");

    if (rightArm) {
      rightArm.rotation.z = armSway;
    }
    if (leftArm) {
      leftArm.rotation.z = -armSway;
    }
  });

  return <group ref={groupRef} />;
}

useGLTF.preload("/avatar.glb");
