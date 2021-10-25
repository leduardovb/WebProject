import { Container, NavButton } from './HeaderNavBase'

type Props = {
    navTitle: string
    clickOpen: (open: boolean) => void
}

function HeaderNav(props: Props) {
    const { navTitle,clickOpen } = props

    return (
        <Container>
            <NavButton onClick={() => clickOpen(!false)}>
                {navTitle}
            </NavButton>
        </Container>
    )
}

export default HeaderNav
