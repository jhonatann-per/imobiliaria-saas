import React, { useState } from "react";
import { Container, Input, Select, Button } from "./styles";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleSearch = () => {
    console.log("Buscar por:", searchText, "no estado:", selectedState);

  };

  return (
    <Container>
      
        <Input
          type="text"
          placeholder="Buscar por nome ou código..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Todos os Estados</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
        </Select>
        <Button onClick={handleSearch}>Buscar</Button>
     
        
    </Container>
  );
};
