export default function Count(prop) {
  console.log("Count render");
  return <h2 className="count">{prop.countNumber}</h2>;
}
