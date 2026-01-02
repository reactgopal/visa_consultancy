import footer1 from "../../images/footer/footer-1.jpg";
import footer2 from "../../images/footer/footer-2.jpg";
import footer3 from "../../images/footer/footer-3.jpg";
import footer4 from "../../images/footer/footer-4.jpg";
import footer5 from "../../images/footer/footer-5.jpg";
import footer6 from "../../images/footer/footer-6.jpg";
import HeaderLogo from "../../images/header/logo.png";

const Footer = () => {
  const images = [footer1, footer2, footer3, footer4, footer5, footer6];
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-8xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Contact */}
          <div className="space-y-4">
            <img src={HeaderLogo} alt="logo" className="h-12" />

            <p className="text-sm text-gray-400">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi.
            </p>

            <div className="space-y-2 text-sm">
              <p>📞 +88 12345 6987 231</p>
              <p>✉️ info@example.com</p>
              <p>📍 380 St Kilda Road, Melbourne</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">📘</span>
              <span className="cursor-pointer">📸</span>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>Employment & Jobs</li>
              <li>Government & Elections</li>
              <li>Real Estate & Buildings</li>
              <li>Health & Medical</li>
              <li>Transport & Traffic</li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li>Administration</li>
              <li>Fire Services</li>
              <li>Business</li>
              <li>Taxation</li>
              <li>Circulars And Go's</li>
            </ul>
          </div>

          {/* Column 4 - Recent Projects */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recent Projects</h3>

            <div className="grid grid-cols-3 gap-2">
              {images.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt="project"
                  className="rounded-md object-cover h-20 w-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} immigratie. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
