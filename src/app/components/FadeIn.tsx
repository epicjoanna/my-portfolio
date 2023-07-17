import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeIn;
