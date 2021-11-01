import {
	Container,
	HeaderNavContainer,
	Logo,
	LogoContainer,
	MoneyCount,
	SubContainer,
} from "./HeaderBase";
import WebLogo from "../../images/icons/logo.svg";
import HeaderNav from "./components/headerNav/HeaderNav";
import UserProfile from "./components/userProfile/UserProfile";
import { Link } from "react-router-dom";
import { navBarItems } from "../utils/NavbarItems";

function Header() {
	return (
		<Container>
			<SubContainer>
				<Link to="/" style={{ textDecoration: "none" }}>
					<LogoContainer>
						<Logo src={WebLogo} />
						MyCase
					</LogoContainer>
				</Link>
				<HeaderNavContainer>
					{navBarItems.map((value) => {
						return (
							<HeaderNav
								navTitle={value.title}
								navIcon={value.icon}
								navHoverIcon={value.hoverIcon}
							/>
						);
					})}
				</HeaderNavContainer>
			</SubContainer>
			<SubContainer>
				<UserProfile />
				<MoneyCount>R$ 100,00</MoneyCount>
			</SubContainer>
		</Container>
	);
}

export default Header;
