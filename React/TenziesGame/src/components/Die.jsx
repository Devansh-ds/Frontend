export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      onClick={() => {
        props.toggle(props.id);
      }}
      style={styles}
      aria-label={`Die with value ${props.value}, ${props.held ? "held" : "not held"}`}
      aria-pressed={props.isHeld}
    >
      {props.value}
    </button>
  );
}
