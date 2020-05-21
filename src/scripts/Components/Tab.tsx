import * as React from "react";
import styled from "styled-components";
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";


export const Tabs = styled.div`
  display: flex;
  justify-content: left;
  background-color: #ccc;
`;

interface Props {
  selected?: boolean;
  icon?: string;
  onClick: () => void;
}

const TabOuter = styled.div<Props>`
  display: flex;
  cursor: pointer;
  user-select: none;
  background-color: ${({ selected }) => selected ? "#eee" : "#ccc"};
  border-radius: ${({ selected }) => selected ? "16px 16px 0 0" : "0"};
  height: 38px;
  justify-content: space-between;
  align-items: center;
  max-width: 220px;
  width: 220px;
  padding: 0 8px;
`;

export const Tab: React.FC<Props & { onClose: () => void }> = ({ selected, icon, onClick, onClose, children }) =>
  <TabOuter selected={selected} icon={icon} onClick={onClick}>
    {icon ? <img style={{ width: "24px" }} src={icon} /> : <div style={{ minWidth: "24px" }}></div>}
    <div style={{ width: "100%", marginLeft: "8px" }}>{children}</div>
    <Button onClick={(e) => (e.stopPropagation(), onClose())}><FontAwesomeIcon icon={faTimes} /></Button>
  </TabOuter>

const AddOuter = styled.div`
  display: flex;
  height: 38px;
  width: 42px;
  border: none;
  outline: none;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

export const AddTab: React.FC<{ onClick: () => void }> = ({ onClick }) => <AddOuter><Button onClick={onClick}><FontAwesomeIcon icon={faPlus}/></Button></AddOuter>;
