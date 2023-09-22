import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100000744409594">
            <BsFacebook />
          </a>
          <a href="https://github.com/johnaarondelacruz">
            <BsGithub />
          </a>
          <a href="https://www.facebook.com/messages/t/100000744409594">
            <BsMessenger />
          </a>
        </div>
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
