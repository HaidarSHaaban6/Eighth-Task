import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerSection">
        <div id="firstSon">
          <div className="d-flex mb-2">
            <img src="../src/assets/images/logo.png" alt="" />
            <p>.agency</p>
          </div>
          <p id="headOffice" className="mb-2">
            Head Office
          </p>
          <p>Syria - Latakia - grh2+hjx</p>
          <p className="mb-2"> 35.5199518</p>
        </div>
        <div>
          <p className="fs-2 mb-1">Sales</p>
          <p>contact@focal-x.com</p>
          <p className="mb-2">+963 953 666 056</p>
          <p className="fs-2 mb-1">Public Relations</p>
          <p>pr@focal-x.com</p>
          <p className="mb-2">+963 953 666 052</p>
        </div>
        <div>
          <p className="mb-1 fs-2">Customer Support</p>
          <p>info@focal-x.com</p>
          <p className="mb-2">+963 953 666 054</p>
          <p className="fs-2 mb-1">Human Resources</p>
          <p className="mb-2">hr@focal-x.com</p>
        </div>
        <div>
          <p className="fs-2 mb-1">Useful Links</p>
          <p>Clients & Partners</p>
          <p>Check Certificat ID</p>
          <p>Check for employee</p>
          <p>Our Brand ID guidlines</p>
        </div>
        <div>
          <p className="mb-1 fs-2">Keep In Touch</p>
          <div className="keepInTouchIconContainer">
            <a href="#">
              <span>
                <FaFacebookF />
              </span>
            </a>
            <a href="#">
              <span>
                <FaInstagram />
              </span>
            </a>
            <a href="#">
              <span>
                <FaTwitter />
              </span>
            </a>
            <a href="#">
              <span>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="underFooterSection">
        <div>© 2021 - 2023 focal X L.L.C All Right Reserved</div>
        <div id="addingFlexGrow"></div>
      </div>
    </>
  );
}
export default Footer;
