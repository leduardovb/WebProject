import styled from "styled-components";
import backgroundCase from '../../../images/profileBackground.png'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundCase});
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding-left: 8.5em;
  padding-right: 2em;
`;

export const ListItem = styled.li`
  height: fit-content;
  cursor: pointer;
`;

export const CaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  color: white;
  width: 35em;
  height: 11em;
  margin-top: 8em;
  margin-left: 44rem;
  padding-bottom: 2em;
  margin-bottom: 3em;
`;

export const CaseTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 25px;
  opacity: 1;
  margin-left: 9em;
  margin-top: -2em;
  margin-bottom: -1em;
`;

interface CaseValueDescriptionProps {
  marginLeft?: number;
  marginRight?: number;
  color?: string;
}

export const CaseButton = styled.button`
  width: 10em;
  height: 3em;
  margin-top: 3em;
  background-color: #34553f;
  border-color: #43cd57;
  margin-left: 27em;
  cursor: pointer;
`

export const CaseValueDescription = styled.label<CaseValueDescriptionProps>`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 700;
  cursor: pointer;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 1)}em;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 1)}em;
`;

export const CaseDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CaseImage = styled.img`
  width: 16em;
  position: absolute;
  margin-top: 1em;
  transition: 0.3s;
  padding-left: 3em;
`;
