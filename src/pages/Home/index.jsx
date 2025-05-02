import { Container, Banner, ImoveisSection } from "./styles";
import { Search } from "../../components/Search"
import { BannerApresentation } from "../../components/BannerApresentation";
export const Home = () => {
    return (
        <Container>
            <BannerApresentation />
            <Search />
            <ImoveisSection>
                <div>
                    <h1>Imóveis em Destaque</h1>
                    <p>Confira nossas melhores opções de imóveis disponíveis</p>
                </div>
            </ImoveisSection>
        </Container>
    )
};
  