import './board.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Board = () => {
  // 1. Define your data
  const members = [
    { id: 1, name: "Osan Vimesh", role: "President", img: "src/assets/members/secretry.png" },
    { id: 2, name: "Vishwa M. Wanninayaka", role: "Secretary", img: "src/assets/members/secretry.png" },
    { id: 3, name: "Sithmi", role: "Coordinator", img: "src/assets/members/secretry.png" },
    { id: 4, name: "Sarah Lee", role: "Lead Donor", img: "src/assets/members/secretry.png" },
    { id: 5, name: "Michael Brown", role: "Volunteer", img: "src/assets/members/secretry.png" },
      { id: 6, name: "Michael Brown", role: "Volunteer", img: "src/assets/members/secretry.png" },
      { id: 7, name: "Michael Brown", role: "Volunteer", img: "src/assets/members/secretry.png" },
      { id: 5, name: "Michael Brown", role: "Volunteer", img: "src/assets/members/secretry.png" },
  ];
useEffect(() => {
  AOS.init();
}, []);
  return (
    <section className="board-container">
      <div className="card-container">
        {members.map((member, index) => (

          <div  key={member.id}
                className={`card ${index===0 ? 'featured-card' : ''}`} data-aos="fade-up" >
            <div className="card-header">
              <div className="card-image-placeholder">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-image"
                />
                <div className="card-description">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Board;