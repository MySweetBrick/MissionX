import React, { useState } from 'react';
import {
    NavbarContainer, 
    LeftContainer, 
    MiddleContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLink,
    NavbarLinkContainer,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    LogInLink,
    LanguageButton,
    LangContainer,
} from './Navbar.style';
import LogoImg from '../images/Home/Star Logo 07-2.png';
import NZ from '../images/Home/NZ Flag.png';
import tinoRangatiratanga from '../images/Home/Maori flag.png';


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <LeftContainer>
            <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <MiddleContainer>
            <NavbarLinkContainer>
            <NavbarLink to='/' >Home</NavbarLink>
            <NavbarLink to='/features' >Features</NavbarLink>
            <NavbarLink to='/teachers' >Teachers</NavbarLink>
            <OpenLinksButton onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}
            >
            {extendNavbar ? <> &#10005;</> : <> &#8801; </>}
            </OpenLinksButton>
            </NavbarLinkContainer>
        </MiddleContainer>
        <RightContainer>
            <LangContainer>LANG
                <LanguageButton src={NZ} ></LanguageButton>
                <LanguageButton src={tinoRangatiratanga} ></LanguageButton>
            </LangContainer>
            <LogInLink to='/login' >Register/Log In</LogInLink>
        </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to='/' >Home</NavbarLinkExtended>
            <NavbarLinkExtended to='/features' >Features</NavbarLinkExtended>
            <NavbarLinkExtended to='/teachers' >Teachers</NavbarLinkExtended>
        </NavbarExtendedContainer>
        )}
        </NavbarContainer>
    );
}

export default Navbar;
