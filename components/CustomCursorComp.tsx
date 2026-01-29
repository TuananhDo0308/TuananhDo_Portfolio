import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { useCursorContext } from '../components/CursorContext';

function Cursor() {
  const { animateCursorVariant } = useCursorContext() as {
    animateCursorVariant: 'cursorLeave' | 'buttonHover';
  };

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const variants = {
    cursorLeave: {
      scale: 1,
      boxShadow: '0 0 0 1px #fff',
      backgroundColor: 'transparent',
      transition: { duration: 0.2 },
    },
    buttonHover: {
      scale: 0,
      boxShadow: '0 0 0 0px #fff',
      backgroundColor: 'transparent',
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={animateCursorVariant}
      initial={false}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}

export default Cursor;
