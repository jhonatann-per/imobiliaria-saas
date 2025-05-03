import { Container, ButtonBlue, ButtonWhite, ButtonDiv } from "./styles";
import { Building, HomeIcon, PhoneIcon, MenuIcon } from 'lucide-react';

export const Header = () => {
    return (
        <Container>
            <section>
                <Building size={32} color="#2563EB" />
                <strong>Imobiliária SaaS</strong>
            </section>

            <div>
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
                <ButtonBlue>Aréa Admin</ButtonBlue>
            </div>
        </Container>
    );
};