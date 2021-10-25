import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    padding-left: 40px;
    padding-right: 40px;
`

export const ListItem = styled.li`
    height: fit-content;
    cursor: pointer;
`

export const CaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    color: white;
    width: 16em;
    height: 13em;
`

export const CaseTitle = styled.label`
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 600;
`


interface CaseProps {
    color: string
}

export const BoxCard = styled.div<CaseProps>`
	display: flex;
	height: 0.2em;
	background-color: ${(props) => props.color ? props.color :  '#8047D6'};
	width: 15em;
	align-items: center;
	border: 2px solid #7d6ea7;
	:hover {
		background-color: #8047D6;
	}
	justify-content: center;
`
export const CaseDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CaseImage = styled.img`
    width: 16em;
    position: absolute;
    margin-top: 1em;
    transition: 0.3s;
    :hover {
        margin-top: 0.3em;
    }
`