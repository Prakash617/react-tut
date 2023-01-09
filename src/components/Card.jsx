import React from "react";

const Card = () => {
  const displayalert = (message,e) => {
    alert(`${message} I am alerts ${e.type}`);
  };
  return (
 
    
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://cdn.discordapp.com/attachments/1008571117495140372/1060139245043449906/prakash_aeroplane_in_mount_everest_with_girl_flying_in_sky_e741135f-be20-46b8-833f-52bf2428e68e.png"
          className="card-img-top  w-full"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
          href="/"
          onClick={(e) => displayalert("hello",e )}
          className="btn btn-primary"
        >
          Show alert
        </a>
        </div>
      </div>

  );
};

export default Card;
