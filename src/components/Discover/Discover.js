import React from "react";
import "./Discover.css";
import profile from "../../images/profile.png";
import profile2 from "../../images/profile2.png";
import profile3 from "../../images/profile3.png";
import { IoStarSharp } from "react-icons/io5";
import river from "../../images/river2.png";

const Profile = ({ name, image, stars, testimonial }) => {
  return (
    <div className="discover-1--div">
      <div className="profile-container">
        <img src={image} alt="profile" />
        <div className="names-stars--container">
          <h2>{name}</h2>
          {Array(stars)
            .fill()
            .map((_, index) => (
              <IoStarSharp key={index} fill="yellow" size={20} />
            ))}
        </div>
      </div>
      <p>{testimonial}</p>
    </div>
  );
};

const Discover = () => {
  return (
    <div className="section-discover">
      <h2>Discover</h2>
      <div className="container grid grid-three-cools">
        <Profile
          name="Arjun Raghav"
          image={profile}
          stars={4}
          testimonial="I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me."
        />
        <div className="discover-2--div">
          <img src={river} alt="river" className="river-img" />
          <Profile
            name="Ramu"
            image={profile2}
            stars={4}
            testimonial="I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me."
          />
        </div>
        <div className="discover-3--div">
          <Profile
            name="Harish"
            image={profile3}
            stars={4}
            testimonial="I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me."
          />
          <Profile
            name="Arjun Raghav"
            image={profile}
            stars={4}
            testimonial="I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me."
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
