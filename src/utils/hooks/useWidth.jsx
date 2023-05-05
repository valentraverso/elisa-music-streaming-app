import { useState, useEffect } from "react";

const UseWidth = (thresholds = {
  0: 'mobile',
  720: 'tablet',
  1024: 'desktop',
}) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      
      const newWidth = Object.entries(thresholds)
        .reverse()
        .find(([threshold]) => window.innerWidth >= threshold)?.[1];

      setWidth(newWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [thresholds]);

  return width;
};

export default UseWidth;
