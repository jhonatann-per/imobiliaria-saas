import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, CardContainer, Card, ButtonImoveis, MobileSlider } from "./styles";

export const ImoveisList = ({ searchText, selectedState }) => {
  const [imoveis, setImoveis] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch("http://localhost:3001/imoveis");
        if (!response.ok) {
          throw new Error("Nenhum imóvel encontrado.");
        }
        const data = await response.json();
        setImoveis(data);
      } catch (err) {
        setError(err.message);
        console.error("Nenhum imóvel encontrado.", err);
      }
    };
    fetchImoveis();
  }, []);
  console.log("Valor atual de searchText:", searchText);

  const imoveisFiltrados = imoveis.filter((imovel) => {
    const nomeCorresponde = imovel.name.toLowerCase().includes(searchText.toLowerCase().trim());
    const estadoCorresponde = selectedState ? imovel.location === selectedState : true;
    return nomeCorresponde && estadoCorresponde;
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };
  
  return (
    <Container className="imoveis-list">
      {error ? (<p style={{ color: "red" }}>{error}</p>) : (
        <>
          <section>
            <h1>Imóveis em Destaque</h1>
            <p>Confira nossas melhores opções de Imóveis disponíveis</p>
          </section>
          
          {/* Versão desktop */}
          <Card className="desktop-cards">
            {imoveisFiltrados.map((imovel) => (
              <CardContainer key={imovel.id} className="card">
                <img src={imovel.imageUrl} alt={imovel.name} />
                <div>
                  <h3>{imovel.name}</h3>
                  <p>R$ {imovel.price}</p>
                  <p>{imovel.location}</p>
                  <button>Ver Detalhes</button>
                </div>
              </CardContainer>
            ))}
          </Card>
          
          {/* Versão mobile (slider) */}
          <MobileSlider className="mobile-slider">
            <Slider {...sliderSettings}>
              {imoveisFiltrados.map((imovel) => (
                <div key={imovel.id}>
                  <CardContainer>
                    <img src={imovel.imageUrl} alt={imovel.name} />
                    <div>
                      <h3>{imovel.name}</h3>
                      <p>R$ {imovel.price}</p>
                      <p>{imovel.location}</p>
                      <button>Ver Detalhes</button>
                    </div>
                  </CardContainer>
                </div>
              ))}
            </Slider>
          </MobileSlider>
          
          <ButtonImoveis>Ver Todos os Imóveis</ButtonImoveis>
        </>
      )}
      {imoveisFiltrados.length === 0 && !error && (
        <p style={{ color: "gray" }}>Nenhum imóvel encontrado.</p>
      )}
    </Container>
  );
};