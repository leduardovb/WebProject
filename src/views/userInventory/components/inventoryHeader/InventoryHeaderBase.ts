import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10em;
    background-color: #15161E;
    font-family: "Montserrat", sans-serif;
    color: white;
`

export const ProfileContainer = styled.div`
    display: flex;
    height: 100%;
    margin-right: 3em;
`

export const ProfilePictureImage = styled.img`
    width: 8em;
    height: 8em;
    border-radius: 50%;
    margin-right: 1em;
    margin-left: 2em;
    align-self: center;
    border-radius: 50%;
`

export const ProfileDescritpionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`

export const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1em;
`

export const SocialMediaButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    border: 2px solid #728E04;
    background-color: #03390C;
    margin-right: 0.4em;
    cursor: pointer;
`

export const SocialMediaIcon = styled.img`
    width: 1.5em;
`

export const TitleDescription = styled.label`
    font-weight: 600;
    font-size: 1.1em;
    margin-top: 1em;
`