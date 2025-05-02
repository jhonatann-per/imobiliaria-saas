import { Container } from "./styles";

export const Header = () => {
    return(
        <Container>
            <p>Imobiliária SaaS</p>
            <div>
                <button>Início</button>
                <button>Imóveis</button>
                <button>Contato</button>
                <button>Área Admin</button>
            </div>
        </Container>
    )
};