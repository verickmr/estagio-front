import { useState } from 'react';

const Menu = ({ items }) => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [clickMenu, setClickMenu] = useState(null);
  const handleClick = (index) => {
    if (clickMenu === null) {
      setClickMenu(index);
    } else {
      setClickMenu(null);
    }
  };

  const handleNull = () =>{
    setClickMenu(null)
    setShowSubMenu(null)

  }

  const renderSubMenu = (subcategorias) => {
    return (
      <ul className="absolute top-full left-0 bg-white shadow-md rounded-md" style={{ display: showSubMenu !== null ? 'block' : 'none' }}>
        {subcategorias.map((subcategoria, index) => (
          <li
            key={index}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer relative rounded-md active:bg-gray-500 duration-300"
            onClick={() => handleClick(index)}
          >
            {subcategoria.nome}
            {subcategoria.subcategorias && clickMenu === index ? (
              <div className="absolute top-0 left-[94px] bg-white shadow-md rounded-md ml-4">
                {renderSubMenu(subcategoria.subcategorias)}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="relative">
      <ul className="flex justify-center ">
        {items.map((item, index) => (
          <li
            key={index}
            className="py-2 px-4 relative cursor-pointer mx-2 active:text-opacity-80"
            onMouseEnter={() => setShowSubMenu(index)}
            onMouseLeave={() => handleNull()}
          >
            <a className='text-white hover:underline'>{item.nome}</a>
            {index === showSubMenu && renderSubMenu(item.subcategorias)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
