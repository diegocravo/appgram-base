import React from "react";
import { Text } from "../../foundation/Text";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";
import Logo from "../../../theme/Logo/index";

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: "/", name: "Home" },
          { url: "/faq", name: "Perguntas Frequentes" },
          { url: "/sobre", name: "Sobre" },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
