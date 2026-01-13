import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '../../lib/utils';
import './BubbleBackground.css';

function BubbleBackground({
  ref,
  className,
  children,
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors = {
    first: '40,150,255',      // Blue - subtle, premium
    second: '139,92,246',     // Violet - elegant
    third: '59,130,246',      // Sky blue - fresh
    fourth: '236,72,153',     // Pink - warm accent
    fifth: '34,197,94',       // Emerald - sophisticated
    sixth: '99,102,241',      // Indigo - interactive
  },
  ...props
}) {
  const containerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => containerRef.current);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);
  
  React.useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e) => {
      const currentContainer = containerRef.current;
      if (!currentContainer) return;
      
      const rect = currentContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;
      
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };
    
    // Attach to window so it works even with pointer-events: none
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);
  
  // Merge inline styles with props.style
  const mergedStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    ...(props.style || {})
  };

  const { style, ...restProps } = props;

  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cn('bubble-background-container', className)}
      style={mergedStyle}
      {...restProps}
    >
      <style>
        {`
            .bubble-1 {
              background: radial-gradient(
                circle at center,
                rgba(${colors.first}, 0.8) 0%,
                rgba(${colors.first}, 0) 50%
              ) !important;
            }
            .bubble-2 {
              background: radial-gradient(
                circle at center,
                rgba(${colors.second}, 0.8) 0%,
                rgba(${colors.second}, 0) 50%
              ) !important;
            }
            .bubble-3 {
              background: radial-gradient(
                circle at center,
                rgba(${colors.third}, 0.8) 0%,
                rgba(${colors.third}, 0) 50%
              ) !important;
            }
            .bubble-4 {
              background: radial-gradient(
                circle at center,
                rgba(${colors.fourth}, 0.8) 0%,
                rgba(${colors.fourth}, 0) 50%
              ) !important;
            }
            .bubble-5 {
              background: radial-gradient(
                circle at center,
                rgba(${colors.fifth}, 0.8) 0%,
                rgba(${colors.fifth}, 0) 50%
              ) !important;
            }
            .bubble-interactive {
              background: radial-gradient(
                circle at center,
                rgba(${colors.sixth}, 0.8) 0%,
                rgba(${colors.sixth}, 0) 50%
              ) !important;
            }
          `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bubble-svg-filter"
      >
        <defs>
          <filter id="bubble-goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="bubble-background-blur">
        <motion.div
          className="bubble bubble-1"
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="bubble-rotator bubble-rotator-1"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div className="bubble bubble-2" />
        </motion.div>
        <motion.div
          className="bubble-rotator bubble-rotator-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <div className="bubble bubble-3" />
        </motion.div>
        <motion.div
          className="bubble bubble-4"
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="bubble-rotator bubble-rotator-3"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          <div className="bubble bubble-5" />
        </motion.div>
        {interactive && (
          <motion.div
            className="bubble bubble-interactive"
            style={{
              x: springX,
              y: springY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
}

export { BubbleBackground };
