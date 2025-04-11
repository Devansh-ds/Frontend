export default function Language(props) {
  const styles = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };
  return (
    <div style={styles} className={props.isLost ? "lang-item lost" : "lang-item"}>
      {props.name}
    </div>
  );
}
