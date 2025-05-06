import { Container, Content, Column, Copyright } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Column>
          <h3>Imobiliária SaaS</h3>
          <p>Soluções imobiliárias de qualidade</p>
        </Column>

        <Column>
          <h4>Links Rápidos</h4>
          <a href="#">Home</a>
          <a href="#">Imóveis</a>
          <a href="#">Contato</a>
        </Column>

        <Column>
          <h4>Contato</h4>
          <p>contato@imobiliariasaas.com</p>
          <p>(11) 9999-9999</p>
        </Column>
      </Content>

      <Copyright>
        © 2025 Imobiliária SaaS. Todos os direitos reservados.
      </Copyright>
    </Container>
  );
};
