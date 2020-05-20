import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { IconDefinition, faHome, faBlog, faQuestion, faCog, faHandPointer, faCube, faMapMarked, faWrench, faBrain, faGamepad, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Background = styled.div`
  background-color: #eee;
  padding: 8px;
`;

const Favorites: { title: string, icon: IconDefinition, url: string }[] = [
  { title: "About", icon: faUser, url: "https://naoki-tomita.github.io/portfolio/about.html" },
  { title: "Home", icon: faHome, url: "https://naoki-tomita.github.io/blog/dist/index.html" },
  { title: "dnevnik(blog1)", icon: faBlog, url: "https://kojiro-ueda-dnevnik.herokuapp.com/" },
  { title: "dolphin(inline-chat)", icon: faQuestion, url: "https://naoki-tomita.github.io/inline-chat/index.html" },
  { title: "blog2", icon: faBlog, url: "https://simple-blog-ef2c7.web.app/" },
  { title: "GraphQlApp", icon: faHome, url: "https://graph-ql-ueda.herokuapp.com/" },
  { title: "RustApp", icon: faCog, url: "https://webassembly-todo-app.herokuapp.com/" },
  { title: "Draft", icon: faHandPointer, url: "https://ten-draft.herokuapp.com/" },
  { title: "3D", icon: faCube, url: "https://naoki-tomita.github.io/first-3d-engine/dist/" },
  { title: "Route", icon: faMapMarked, url: "https://naoki-tomita.github.io/old-siori/dist" },
  { title: "TestApp", icon: faWrench, url: "https://wizardly-babbage-e7f43d.netlify.com/" },
  { title: "BBS", icon: faBrain, url: "https://brave-jang-8f2dbd.netlify.com/" },
  { title: "Tetris", icon: faGamepad, url: "https://naoki-tomita.github.io/tetris.js/" },
];

export const FavoriteBar: React.FC<{ onClick: (url: string) => void }> = ({ onClick }) => {
  return (
    <Background>
      {Favorites.map((it, i) => (
        <Button style={{ marginRight: 2 }} key={i} onClick={(e) => (onClick(it.url))}>
          <FontAwesomeIcon icon={it.icon} /><span style={{ marginLeft: 4 }}>{it.title}</span>
        </Button>
      ))}
    </Background>
  );
}
