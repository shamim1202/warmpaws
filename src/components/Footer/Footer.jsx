import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200">
      <footer className="text-base-content px-6 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ------- Contact Info ------- */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
            <p>123 Main Street, City, Country</p>
            <p>Email: support@mybrand.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          {/* ------- Social Links ------- */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex gap-4 text-2xl">
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
                <FaTwitter />
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
            <h2 className="text-lg font-semibold mb-3">Legal</h2>
            <ul className="space-y-2">
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
        <div className="text-center mt-10 border-t pt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Warm-Paws. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
