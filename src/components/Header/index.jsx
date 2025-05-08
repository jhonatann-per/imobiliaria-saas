import { useState } from "react";
import { Container, ButtonBlue, ButtonWhite, ButtonDiv, SlideMenu, Overlay } from "./styles";
import { Building, HomeIcon, PhoneIcon, MenuIcon, X } from 'lucide-react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <section>
                <Building size={32} color="#2563EB" />
                <strong>Imobiliária SaaS</strong>
            </section>

            <div className="menu-desktop">
                <ButtonDiv>
                    <HomeIcon size={20} />
                    <ButtonWhite>Início</ButtonWhite>
                </ButtonDiv>
                <ButtonDiv>
                    <Building size={20} />
                    <ButtonWhite>Imóveis</ButtonWhite>
                </ButtonDiv>
                <ButtonDiv>
                    <PhoneIcon size={20} />
                    <ButtonWhite>Contato</ButtonWhite>
                </ButtonDiv>
                <ButtonBlue>Área Admin</ButtonBlue>
            </div>

            <MenuIcon className="menu-icon" size={28} color="#2563EB" onClick={() => setIsOpen(true)} />

            {/* Menu Slide */}
            {isOpen && (
                <>
                    <Overlay onClick={() => setIsOpen(false)} />
                    <SlideMenu>
                        <div className="menu-header">
                            <strong>Menu</strong>
                            <X size={28} onClick={() => setIsOpen(false)} />
                        </div>

                        <ButtonDiv>
                            <HomeIcon size={20} />
                            <ButtonWhite>Início</ButtonWhite>
                        </ButtonDiv>
                        <ButtonDiv>
                            <Building size={20} />
                            <ButtonWhite>Imóveis</ButtonWhite>
                        </ButtonDiv>
                        <ButtonDiv>
                            <PhoneIcon size={20} />
                            <ButtonWhite>Contato</ButtonWhite>
                        </ButtonDiv>
                        <ButtonBlue>Área Admin</ButtonBlue>
                    </SlideMenu>
                </>
            )}
        </Container>
    );
};
