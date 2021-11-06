import styled from "styled-components";
import InventoryBackground from "../../../../images/profileBackground.png";

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 10em;
	font-family: "Montserrat", sans-serif;
	color: white;
	background-image: url(${InventoryBackground});
	background-position: center;
`;

export const ProfileContainer = styled.div`
	display: flex;
	height: 100%;
	margin-right: 3em;
`;

export const ProfilePictureImage = styled.img`
	width: 8em;
	height: 8em;
	border-radius: 50%;
	margin-right: 1em;
	margin-left: 2em;
	align-self: center;
	border-radius: 50%;
`;

export const ProfileDescritpionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
`;

export const SocialMediaIcons = styled.div`
	display: flex;
	margin-top: 1em;
`;

export const SocialMediaButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3em;
	height: 3em;
	border: 2px solid #728e04;
	background-color: #03390c;
	margin-right: 0.4em;
	cursor: pointer;
`;

export const SocialMediaIcon = styled.img`
	width: 1.5em;
`;

export const TitleDescription = styled.label`
	font-weight: 600;
	font-size: 1.1em;
	margin-top: 1em;
`;
