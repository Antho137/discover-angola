import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    const thisYear = new Date().getFullYear();

  return (
    <div className="w-100 bg-secondary bg-opacity-20 text-white p-4 mt-5 fw-bold" id='footer'>
        <div className="d-flex flex-column align-items-start justify-content-start gap-3 px-3 flex-lg-row justify-content-around">
            <div className="mb-2">
                <h5 className="text-warning">DiscoverAngola</h5>
                <p>
                    <a href="" className="text-white">                        
                        <FaEnvelope className="text-white" size={20} />
                        &#160; discoverAngola.co.ao
                    </a>
                </p>
                <p><FaPhone className="text-white" size={15} /> Tel. 244 923 506 453</p>
                <p>Luanda - Angola</p>
                <p>&copy; <span>{thisYear}</span>&#160;All rights reserved.</p>
            </div>
            <div className="mb-2">
                <h5 className="text-warning">Pages Link:</h5>
                <div className="d-flex flex-column align-items-start justify-content-start gap-1" id="link"> 
                    <Link className="text-white" to="/">Home</Link>
                    <Link className="text-white" to="/about">About</Link>
                    <Link className="text-white" to="/discovery">Discovery</Link>
                    <Link className="text-white" to="/hotels">Hotels</Link>
                    <Link className="text-white" to="/contact">Contact</Link>
                </div>
            </div>
            <div className="mb-2">
                <h5 className="text-warning">Follow us:</h5>
                <div className="d-flex flex-column align-items-start justify-content-start gap-1" id="social">
                    <a className="text-white" href="#">
                        <FaFacebook size={20} /> Facebook
                    </a>
                    <a className="text-white" href="#">
                        <FaInstagram size={20} /> Instagram
                    </a>
                    <a className="text-white" href="#">
                        <FaLinkedinIn size={20} /> LinkedIn
                    </a>
                    <a className="text-white" href="#">
                        <FaWhatsapp size={20} /> Whatsapp
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
