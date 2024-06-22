import Newsletter from "./Newsletter";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <Newsletter />
        <Contact />
      </div>
      <hr />
      <div className="footer-copyright">
        <h6>Copyright &copy; {new Date().getFullYear()} Suderman Solutions</h6>
      </div>
    </div>
  );
}
