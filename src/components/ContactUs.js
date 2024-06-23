export default function ContactUs() {
  return (
    <div className="contactus-container">
      <h3>ContactUs</h3>
      <div className="contactus-row">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />{" "}
        {/* TODO: Link Newsletter and Email with Redux as 2 way binded controls */}
      </div>
      <div className="contactus-row">
        <textarea rows={6} />
      </div>
      <div className="contactus-row">
        <button>Submit</button>
      </div>
    </div>
  );
}
