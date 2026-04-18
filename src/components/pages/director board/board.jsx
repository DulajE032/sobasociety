import './board.css';

const Board = () => {
  const executives = [
    { role: "President", name: "Name Here", phone: "+94 70 123 4567", email: "pres@soba.lk" },
    { role: "Vice President", name: "Name Here", phone: "+94 77 234 5678", email: "vp@soba.lk" },
    { role: "Secretary", name: "Name Here", phone: "+94 74 345 6789", email: "sec@soba.lk" },
    { role: "Treasurer", name: "Name Here", phone: "+94 71 456 7890", email: "tres@soba.lk" }
  ];

  const directors = [
    { role: "Senior Editor", name: "Name Here", phone: "+94 78 567 8901", email: "sred@soba.lk" },
    { role: "Junior Editor", name: "Name Here", phone: "+94 76 678 9012", email: "jred@soba.lk" },
    { role: "Web Master", name: "Name Here", phone: "+94 72 789 0123", email: "web@soba.lk" }
  ];

  const renderMember = (member, index) => (
    <div key={index} className="board-member-clean fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="member-photo-placeholder">
        <span>Photo</span>
      </div>
      <h3 className="member-name">{member.name}</h3>
      <h4 className="member-role">{member.role}</h4>
      <p className="member-contact">{member.phone}</p>
      <p className="member-contact">{member.email}</p>
    </div>
  );

  return (
    <section className="board-container">
      <div className="board-heading fade-in-up">
        <h2>Management</h2>
      </div>

      <div className="board-section fade-in-up" style={{animationDelay: '0.1s'}}>
        <h3 className="board-subheading">Executive Leadership Team</h3>
        <div className="board-grid">
          {executives.map(renderMember)}
        </div>
      </div>

      <div className="board-section fade-in-up" style={{animationDelay: '0.3s'}}>
        <h3 className="board-subheading">Board of Directors</h3>
        <div className="board-grid">
          {directors.map(renderMember)}
        </div>
      </div>
    </section>
  );
};

export default Board;
