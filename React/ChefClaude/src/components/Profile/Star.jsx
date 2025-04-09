export default function Star(prop) {
  let star = "src/images/star-" + (prop.isFilled ? "filled.png" : "empty.png");

  return (
    <button onClick={prop.onClick} aria-pressed={false} className="favorite-button">
      <img src={star} alt="empty star icon" className="favorite" />
    </button>
  );
}
