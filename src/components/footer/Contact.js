import {
  FaSquareFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="contact">
      <span>123 Technology St, Fort Worth, TX 99999</span>
      <span>555.555.5555</span>
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
