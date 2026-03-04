'use client';

import { useEffect } from 'react';

/**
 * Hook to handle scroll reveal animations using Intersection Observer.
 * It targets elements with .reveal, .reveal-l, and .reveal-r classes
 * and adds the .vis class when they enter the viewport.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          // Once the element is revealed, we stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements that should be revealed on scroll
    const revealElements = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup function to disconnect observer on unmount
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;