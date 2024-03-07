import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const logo = (
  <img
    className="w-120 h-50 bg-cover bg-no-repeat"
    src="https://cdn.greatpages.com.br/www.digitalgrowth.marketing/1708373178/imagens/desktop/5031532.png"
    alt="logo"
  />
);

const Header = () => {
  return (
    <header className="bg-slate-600 flex justify-between items-center p-2 gap-5 ">
      {logo}
      <h1 className="text-3xl text-slate-50">Estágio Front End</h1>
      <div className="flex">
        <a
          className="text-3xl p-1.5 text-slate-50 hover:text-opacity-80"
          href="https://www.linkedin.com/in/victor-erick/"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-3xl p-1.5 text-slate-50 hover:text-opacity-80"
          href="https://github.com/verickmr"
        >
          <FaSquareGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
