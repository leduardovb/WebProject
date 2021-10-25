import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 57em;
  background-color: #27262b;
  justify-content: space-around;
  align-items: center;
`;

export const ListItemCase = styled.div`
  height: fit-content;
  cursor: pointer;
`;

export const ListCase = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Box = styled.img`
  width: 16em;
  margin-top: 1em;
  :hover {
    margin-top: 0.3em;
  }
  transition: 0.3s;
`;
export const CaseTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 600;
`;

export const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  color: white;
  width: 16em;
  height: 13em;
`;

interface CaseValueDescriptionProps {
  marginLeft?: number;
  marginRight?: number;
  color?: string;
}

export const CaseValueDescription = styled.label<CaseValueDescriptionProps>`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 700;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}em;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}em;
`;
