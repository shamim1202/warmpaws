import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-sky-50">
      <footer className="text-base-content px-6 pb-3 md:pb-6 pt-6 md:pt-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-between text-center gap-8">
          {/* ------- Contact Info ------- */}
          <div>
            <h2 className="md:text-lg font-semibold mb-3">Contact Info</h2>
            <p className="text-sm md:text-base">
              Bazar Road, Muladi, Barishal, Bangladesh
            </p>
            <p className="text-sm md:text-base">Email: support@warm-paws.com</p>
            <p className="text-sm md:text-base">Phone: +88 0177 000 111</p>
          </div>

          {/* ------- Social Links ------- */}
          <div>
            <h2 className="md:text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex flex-row justify-center gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* ------- Privacy Policy ------- */}
          <div>
            <h2 className="md:text-lg font-semibold mb-3">Legal</h2>
            <ul className="md:space-y-2 text-sm md:text-base">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ------- Bottom bar (right & reserved) ------- */}
        <div className="text-center mt-6 md:mt-10 border-t pt-3 md:pt-5 text-xs md:text-base text-gray-500">
          © {new Date().getFullYear()} Warm-Paws. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
