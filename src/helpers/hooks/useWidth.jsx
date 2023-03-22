import { useState, useEffect } from "react";

const thresholds = {
  0: 'mobile',
  720: 'tablet',
  2144: 'desktop',
};

const useWidth = () => {
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
  }, []);

  return width;
};

export default useWidth;