import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import menuData from "../menu.json";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const logo = (
    <img
      className="w-120 h-50 bg-cover bg-no-repeat"
      src="https://cdn.greatpages.com.br/www.digitalgrowth.marketing/1708373178/imagens/desktop/5031532.png"
      alt="logo"
    />
  );

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <div >
      <div className="w-full h-lvh bg-cover bg-no-repeat bg-blue-900">
        <img
          className="w-full h-lvh bg-cover bg-no-repeat opacity-30 "
          src="https://cdn.greatpages.com.br/www.digitalgrowth.marketing/1708373178/imagens/desktop/560654.webp"
          alt="logo"
        />
      </div>
      <div className="top-0 fixed w-full flex justify-center">
  <div className="w-[1000px] flex justify-between items-center p-5">
    {logo}
    <Menu items={menuItems} />
    <div className="flex">
      <a
        className="text-4xl p-1.5 text-slate-50 hover:text-opacity-80"
        href="https://www.linkedin.com/in/victor-erick/"
      >
        <FaLinkedin />
      </a>
      <a
        className="text-4xl p-1.5 text-slate-50 hover:text-opacity-80"
        href="https://github.com/verickmr"
      >
        <FaSquareGithub />
      </a>
    </div>
  </div>
</div>
    </div>
  );
};

export default App;
