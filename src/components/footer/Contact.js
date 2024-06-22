import {
  FaSquareFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <span>209 Flower Ridge Dr, Fort Worth, TX 76108</span>
      <span>817.718.4891</span>
      <span>sudermansolutions@gmail.com</span>
      <div className="socials">
        <FaSquareFacebook className="social-icon" />
        <FaXTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaLinkedin className="social-icon" />
      </div>
    </div>
  );
}
