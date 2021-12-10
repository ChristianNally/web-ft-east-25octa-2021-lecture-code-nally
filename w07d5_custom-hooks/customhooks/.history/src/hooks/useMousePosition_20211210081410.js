import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseHandler = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', mouseHandler);

    return () => document.removeEventListener('mousemove', mouseHandler);
  }, []);

  return coords;
};

export default useMousePosition;