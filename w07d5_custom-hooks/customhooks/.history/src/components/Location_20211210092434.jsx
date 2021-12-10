import useLocationData from '../hooks/useLocationData';

const Location = () => {
  const coords = useLocationData();

  const buttonClickHandler = () => {
    const message = `lat: ${coords.lat.toFixed(2)}, lon: ${coords.lon.toFixed(2)}`;
    alert(message);
  };

  return (
    <button onClick={buttonClickHandler}>See Your Location!</button>
  );
};

export default Location;