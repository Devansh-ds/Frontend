export default function KeyboardLetter(props) {
  return <button onClick={() => props.onClick(props.id)}>{props.letter}</button>;
}
