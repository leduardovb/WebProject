import styled from "styled-components";

interface ContainerProps {
    borderColor: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12em;
    height: 12em;
    border: 4px solid ${props => props.borderColor};
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    font-family: "Montserrat", sans-serif;
    color: white;
    background-color: #1d1e25;
    margin-right: 0.7em;
    margin-bottom: 0.7em;
`

export const GunCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 2em;
`

interface GunValueProps {
    color?: string,
    fontWeight?: number,
    marginRight?: number
}

export const GunValue = styled.label<GunValueProps>`
    color: ${props => props.color ? props.color : "white"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    margin-right: ${props => props.marginRight ? props.marginRight : 0.5}em;
`

export const GunImage = styled.img`
    width: 7.9em;
    align-self: center;
`

export const GunCardFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 3em;
`

export const GunName = styled.label`
    font-weight: 600;
    margin-left: 0.5em;
`

export const GunSkinName = styled.label`
    font-weight: 400;
    margin-left: 0.5em;
`