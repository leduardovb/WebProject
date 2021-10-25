import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 3.5em;
	background-color: #101117;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
	color: white;
	font-weight: 700;
	font-size: 1.4em;
    margin-left: 0.5em;
    cursor: pointer;
`;

export const Logo = styled.img`
	width: 1.5em;
    margin-right: 0.5em;
`;

export const HeaderNavContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 3.5em;
	margin-left: 1em;
`;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-family: "Montserrat", sans-serif;
`;
export const MoneyCount = styled.label`
	color: #f19a38;
	font-weight: 550;
	margin-right: 2em;
`;
