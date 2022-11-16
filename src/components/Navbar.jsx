import { Link } from "react-router-dom";
import { site_data } from "../utils";

const Navbar = ({ lang, setLang }) => {
  //  render options inside select :
  const renderLangugesList = () => {
    const options = [];
    for (const key in site_data) {
      options.push(
        <option key={key} value={key}>
          {key}
        </option>
      );
    }
    return options;
  };

  return (
    <nav className="py-4 bg-blue-600 text-white flex justify-between items-center gap-4">
      <div className="px-2 md:px-6">
        <Link
          className="text-xl font-bold hover:text-blue-100 hover:tracking-wider transition-all duration-300"
          to="/"
        >
          Logo
        </Link>
      </div>
      <ul className="px-2 md:px-6 flex justify-between items-center gap-3 md:gap-8 text-sm font-medium">
        {site_data[lang].routes.map((route) => (
          <li
            key={route.name}
            className={site_data[lang].isRTL ? "font-bold" : ""}
          >
            <Link
              className="capitalize text-blue-100 hover:text-blue-200 hover:tracking-wider transition-all duration-300"
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}

        <li>
          <select
            className="px-6 py-1 rounded-sm text-gray-700 cursor-pointer"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {renderLangugesList()}
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
