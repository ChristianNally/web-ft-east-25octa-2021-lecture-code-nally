// Create a component called `Mouse` with logic to listen for the mouse position
import useMousePosition from '../hooks/useMousePosition';

const Mouse = () => {

  const position = useMousePosition();

  return (
    <div>
      <h4>position: { JSON.stringify(position) }</h4>
    </div>
  );
};

export default Mouse;
