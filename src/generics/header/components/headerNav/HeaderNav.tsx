import { Container, NavButton } from './HeaderNavBase'

type Props = {
    navTitle: string
    tt: (ttt: boolean) => void
}

function HeaderNav(props: Props) {
    const { navTitle,tt } = props

    return (
        <Container>
            <NavButton onClick={() => tt(!false)}>
                {navTitle}
            </NavButton>
        </Container>
    )
}

export default HeaderNav
