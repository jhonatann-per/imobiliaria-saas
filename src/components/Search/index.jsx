import React from "react";
import { Container, Input, Select, Button, ContainerSearch } from "./styles";

export const Search = ({
  searchText,
  setSearchText,
  selectedState,
  setSelectedState
}) => {

  const handleSearch = () => {
    console.log("Buscar por:", searchText, "no estado:", selectedState);

  };

  return (
    <Container>
        <p>Buscar Imóveis</p>
        <ContainerSearch>
          <Input 
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="O que você está procurando?"
          />

          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Localização</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </Select>
          <Button onClick={handleSearch}>Buscar</Button>
        </ContainerSearch>
    </Container>
  );
};
