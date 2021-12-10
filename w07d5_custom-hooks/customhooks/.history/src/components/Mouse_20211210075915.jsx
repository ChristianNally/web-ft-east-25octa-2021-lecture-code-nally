// Create a component called `Mouse` with logic to listen for the mouse position
// import useMousePosition from '../hooks/useMousePosition';
import { useEffect } from 'react';

const Mouse = () => {

  // const position = useMousePosition();

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseHandler = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', mouseHandler);

    return () => document.removeEventListener('mousemove', mouseHandler);
  }, []);

  return (
    <div>
      <h4>position: { JSON.stringify(coords) }</h4>
    </div>
  );
};

export default Mouse;
