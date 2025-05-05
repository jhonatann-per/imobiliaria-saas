import { Container, ContainerServices, Content } from "./styles";
import { CreditCard, MapPin, HomeIcon } from "lucide-react";

const Services = [
  {
    id: 1,
    title: "Venda De Imoveis",
    descricao: "Encontre o imóvel perfeito para você e sua família com nossa seleção exclusiva.",
    icon: HomeIcon
  },
  {
    id: 2,
    title: "Financiamento",
    descricao: "Facilitamos o seu financiamento imobiliário com as melhores taxas e condições.",
    icon: CreditCard
  },
  {
    id: 3,
    title: "Consultoria",
    descricao: "Conte com nossos especialistas para tomar a melhor decisão na hora de comprar ou vender.",
    icon: MapPin
  }
];

export const Solutions = () => {
  return (
    <Container>
      <section>
        <h1>Nossos Serviços</h1>
        <p>Oferecemos soluções completas para você</p>
      </section>

      <ContainerServices>
        <Content>
          {Services.map((data) => (
            <div key={data.id}>
              <data.icon size={45} color="#2563EB" strokeWidth={1.2} />
              <h1>{data.title}</h1>
              <p>{data.descricao}</p>
            </div>
          ))}
        </Content>
      </ContainerServices>
    </Container>
  );
};

