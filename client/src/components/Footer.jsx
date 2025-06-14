import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-amber-50">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-orange-300/40 text-gray-700">
        {/* Logo & Description */}
        <div>
          <img className="w-36 md:w-32" src={assets.logo} alt="IcePop Logo" />
          <p className="max-w-[400px] mt-4 text-sm md:text-base leading-relaxed">
            Serving happiness in every bite! Juicy’nCrazy Ice Pops bring you fruity, flavorful delights delivered fresh to your door. Cool down. Pop up!
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-6">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-orange-600 md:mb-4 mb-2">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:underline hover:text-orange-500 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-orange-600/70">
        © {new Date().getFullYear()} Juicy’nCrazy Ice Pops. All rights reserved. Stay Cool 🍧
      </p>
    </div>
  );
};

export default Footer;
