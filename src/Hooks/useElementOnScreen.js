import { useRef, useState, useEffect } from 'react';

const useElementOnScreen = (options, className) => {
  const [hiddenClassName, setHiddenClassName] = useState(className);
  const containerRef = useRef(null);
  const callbackFunction = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    setHiddenClassName('');
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, hiddenClassName];
};
export default useElementOnScreen;
