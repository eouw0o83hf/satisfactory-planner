import { useState, useEffect } from 'react';
import { Coordinates } from '../types';

/** [width, height] */
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return [width, height] as Coordinates;
};

/** [width, height] */
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
