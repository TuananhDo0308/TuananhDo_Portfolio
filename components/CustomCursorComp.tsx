import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { useCursorContext } from '../components/CursorContext';

function Cursor() {
  const { initialCursorVariant, animateCursorVariant, animateCursor } = useCursorContext();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const variants = {
    cursorEnter: {
      border: '1px solid #ffffff',
      boxShadow: '0 0 1px 0px #ffffff inset, 0 0 1px 0px #ffffff',
      scale: 1.5,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    cursorLeave: {
      scale: 0,
      border: 0,
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    buttonHover: {
      scale: 0,
      border: 0,
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    click: {
      scale: 0.8,
      backgroundColor: '#ffffff',
      transition: {
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    const app = document.body;

    const mouseMoveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const mouseEnterHandler = () => {
      animateCursor('cursorEnter');
    };

    const mouseLeaveHandler = () => {
      animateCursor('cursorLeave');
    };

    const mouseDownHandler = () => {
      animateCursor('click');
    };

    const mouseUpHandler = () => {
      animateCursor('cursorEnter');
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    app.addEventListener('mouseenter', mouseEnterHandler);
    app.addEventListener('mouseleave', mouseLeaveHandler);
    app.addEventListener('mousedown', mouseDownHandler);
    app.addEventListener('mouseup', mouseUpHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      app.removeEventListener('mouseenter', mouseEnterHandler);
      app.removeEventListener('mouseleave', mouseLeaveHandler);
      app.removeEventListener('mousedown', mouseDownHandler);
      app.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [animateCursor, cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      initial={initialCursorVariant}
      animate={animateCursorVariant}
      style={{
        translateX: cursorX,
        translateY: cursorY,
        transformOrigin: 'center',
      }}
    />
  );
}

export default Cursor;