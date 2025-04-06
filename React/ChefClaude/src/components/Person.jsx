import React from "react";

export default function PersonCard() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const avatar = "src/images/user.png";
  let star = "src/images/star-" + (contact.isFavorite ? "filled.png" : "empty.png");


  return (
    <main className="person-main">
      <article className="card">
        <img src={avatar} className="avatar" alt="User profile picture of John Doe" />
        <div className="info">
          <button onClick={toggleFavorite} aria-pressed={false} className="favorite-button">
            <img src={star} alt="empty star icon" className="favorite" />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );

  function toggleFavorite() {
    setContact((obj) => {
      return {
        ...obj,
        isFavorite: !obj.isFavorite,
      };
    });
  }
}
