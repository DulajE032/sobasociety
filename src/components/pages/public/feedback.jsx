import './feedback.css';

const Feedback = () => {
  return (
    <section className="feedback-container">
      <div className="feedback-content">
        <h2>We Value Your Feedback</h2>
        <form className="feedback-form">
          <input type="text" placeholder="Your Name" className="clean-input" required />
          <input type="email" placeholder="Your Email" className="clean-input" required />
          <textarea placeholder="Your Feedback" rows="4" className="clean-input" required></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
