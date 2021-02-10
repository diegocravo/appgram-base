import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";

const Menu = () => {
  const links = [
    {
      index: 1,
      texto: "Home",
      url: "/",
    },
    {
      index: 2,
      texto: "Perguntas Frequentes",
      url: "/faq",
    },
    {
      index: 3,
      texto: "Sobre",
      url: "/sobre",
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link, index) => {
          return (
            <li key={`link___${index}`}>
              <a href={link.url}>{link.texto}</a>
            </li>
          );
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
