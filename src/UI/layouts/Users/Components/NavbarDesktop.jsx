import { Main, Logo, LogoLetters, StyledLink, Navbar, LogoContainer } from "../../../Styles/LayoutsStyles/NavbarStyleDesktop";

function NavbarDesktop() {
    return (
        <Main>
            <Navbar>
                <StyledLink to={"/"}>
                    <LogoContainer>
                        <Logo src="/assets/images/logos/logo.webp" />
                        <LogoLetters> Elisa </LogoLetters>
                    </LogoContainer>
                </StyledLink>
            </Navbar>
        </Main>
    );

};

export { NavbarDesktop };