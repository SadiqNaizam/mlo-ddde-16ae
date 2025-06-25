import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  /** The target value to animate to. */
  value: number;
  /** Optional className to be applied to the span element for styling. */
  className?: string;
}

/**
 * A component that displays a numerical value and smoothly animates the transition
 * when the number changes.
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log('AnimatedCounter loaded or value changed to:', value);
    const node = nodeRef.current;

    if (!node) {
      return;
    }

    const currentValue = parseFloat(node.textContent?.replace(/,/g, '') || '0');

    // Only animate if the new value is different from the current one.
    if (currentValue !== value) {
      const controls = animate(currentValue, value, {
        duration: 0.8,
        ease: 'easeOut',
        onUpdate(latest) {
          // Format with commas and no decimal places for better readability.
          node.textContent = Math.round(latest).toLocaleString('en-US');
        },
      });

      // Cleanup function to stop the animation if the component unmounts.
      return () => controls.stop();
    } else {
      // If the value is the same, ensure it's correctly formatted on initial render.
      node.textContent = value.toLocaleString('en-US');
    }

  }, [value]);

  return (
    <span
      ref={nodeRef}
      className={cn(
        "font-heading text-3xl md:text-4xl font-bold text-primary", // Using theme colors and fonts
        className
      )}
    >
      {/* Initial value is set here to prevent a flash of empty content */}
      {value.toLocaleString('en-US')}
    </span>
  );
};

export default AnimatedCounter;