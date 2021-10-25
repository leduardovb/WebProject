import { Container, HeaderNavContainer, Logo, LogoContainer, MoneyCount, SubContainer } from "./HeaderBase"
import WebLogo from "../../images/icons/logo.svg"
import HeaderNav from "./components/headerNav/HeaderNav"
import UserProfile from "./components/userProfile/UserProfile"

type Props = {
    aa: (ttt: boolean) => void
}

function Header(props: Props) {
    const {aa} = props
    return (
        <Container>
            <SubContainer>
                <LogoContainer  onClick={() => aa(!true)} >
                    <Logo src={WebLogo}/>
                    MyCase
                </LogoContainer>
                <HeaderNavContainer>
                    <HeaderNav tt={aa} navTitle="Shop"/>
                </HeaderNavContainer>
            </SubContainer>
            <SubContainer>
                <UserProfile />
                <MoneyCount>
                    R$ 100,00
                </MoneyCount>
            </SubContainer>
        </Container>
    )
}

export default Header