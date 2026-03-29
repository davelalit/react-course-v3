import { useMousePosition } from "../hooks/useMousePosition";

const TrackMouse = (props: any) => {
  const position = useMousePosition({
  throttleTime: props.throttleTime || 200
});

  return (
    <div>
      Last mouse position - x: {position.x}, y: {position.y}
    </div>
  );
};

export default TrackMouse;
