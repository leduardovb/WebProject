import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 7em;
    height: 3.5em;
    border: 1px solid #201A26;
    align-items: center;
    justify-content: center;
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
`

export const NavButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 1em;
    transition: 0.3s;

    :hover {
        color: #F19A38;
    }
`