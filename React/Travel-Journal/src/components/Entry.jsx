export default function Entry(props) {
  return (
    <article>
      <div className="container">
        <img src={props.img} alt={props.alt} className="entry-img" />
        <div className="details">
          <div className="location">
            <img src="src/images/marker.png" className="marker" />
            <h4>{props.country}</h4>
            <a href={props.googleMapsLink} className="google-maps">
              View on Google Maps
            </a>
          </div>
          <h1 className="location-place">{props.title}</h1>
          <h2 className="location-date">{props.dates}</h2>
          <p className="location-desc">{props.text}</p>
        </div>
      </div>
    </article>
  );
}
