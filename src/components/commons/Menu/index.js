import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo/Index.js";

const Menu = () => {
  const links = [
    {
      texto: "Home",
      url: "/",
    },
    {
      texto: "Perguntas Frequentes",
      url: "/faq",
    },
    {
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
        <h1>diego</h1>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
