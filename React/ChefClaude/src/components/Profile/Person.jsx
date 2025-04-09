import React from "react";
import Star from "./Star";

export default function PersonCard() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const avatar = "src/images/user.png";

  return (
    <main className="person-main">
      <article className="card">
        <img src={avatar} className="avatar" alt="User profile picture of John Doe" />
        <div className="info">
          <Star isFilled={contact.isFavorite} onClick={toggleFavorite} />
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
