import React, { useEffect, useState } from "react";
import { Container, CardContainer, Card, ButtonImoveis} from "./styles";

export const ImoveisList = ({ searchText, selectedState }) => {
  const [imoveis, setImoveis] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch("http://localhost:3001/imoveis");
        if (!response.ok) {
          throw new Error("Erro ao buscar imóveis");
        }
        const data = await response.json();
        setImoveis(data);
      } catch (err) {
        setError(err.message);
        console.error("Erro ao buscar Imóveis", err);
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
  
  return (
    <Container className="imoveis-list">

      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {imoveisFiltrados.length === 0 && !error && (
        <p style={{ color: "gray" }}>Nenhum imóvel encontrado.</p>
      )}
      <section>
        <h1>Imóveis em Destaque</h1>
        <p>Confira nossas melhores opções de Imóveis disponíveis</p>
      </section>
      <Card>
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
      <ButtonImoveis>Ver Todos os Imóveis</ButtonImoveis>
      
    </Container>
  );
};
