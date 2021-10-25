import { Container, NavButton } from './HeaderNavBase'

type Props = {
    navTitle: string
}

function HeaderNav(props: Props) {
    const { navTitle } = props

    return (
        <Container>
            <NavButton>
                {navTitle}
            </NavButton>
        </Container>
    )
}

export default HeaderNav
