import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faArrowLeft, faArrowRight, faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const AddressBar = styled.input`
  background-color: #fff;
  border-radius: 28px;
  height: 28px;
  border: none;
  padding: 0 8px;
  margin: 0;
  outline: none;
  color: black;
  width: 100%;
`;

const KeepDistance = styled.div`
  margin: 0 4px;
`;

const ButtonWrapper: React.FC<{icon: IconDefinition, onClick: () => void}> = ({ icon, onClick }) => <KeepDistance><Button onClick={onClick}><FontAwesomeIcon icon={icon}/></Button></KeepDistance>
export const ReloadButton: React.FC<{ onClick: () => void }> = (props) => <ButtonWrapper {...props} icon={faRedo} />;
export const BackButton: React.FC<{ onClick: () => void }> = (props) => <ButtonWrapper {...props} icon={faArrowLeft} />;
export const ForwardButton: React.FC<{ onClick: () => void }> = (props) => <ButtonWrapper {...props} icon={faArrowRight} />;
export const HomeButton: React.FC<{ onClick: () => void }> = (props) => <ButtonWrapper {...props} icon={faHome} />;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 4px;
`;
