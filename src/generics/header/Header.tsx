import { Container, HeaderNavContainer, Logo, LogoContainer, MoneyCount, SubContainer } from "./HeaderBase"
import WebLogo from "../../images/icons/logo.svg"
import HeaderNav from "./components/headerNav/HeaderNav"
import UserProfile from "./components/userProfile/UserProfile"

type Props = {
    clickOpen: (open: boolean) => void
}

function Header(props: Props) {
    const {clickOpen} = props
    return (
        <Container>
            <SubContainer>
                <LogoContainer>
                    <Logo src={WebLogo}/>
                    MyCase
                </LogoContainer>
                <HeaderNavContainer>
                    <HeaderNav clickOpen={clickOpen} navTitle="Shop"/>
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