// import React, { useEffect, useState } from "react";
// import { Search } from "../../components/Search";
// import { ImoveisList } from "../../components/ImoveisList";
// export const ImoveisPage = () => {
//   const [imoveis, setImoveis] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const [selectedState, setSelectedState] = useState("");

//   useEffect(() => {
//     const fetchImoveis = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/imoveis");
//         if (!response.ok) {
//           throw new Error("Erro ao buscar imóveis");
//         }
//         const data = await response.json();
//         setImoveis(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Erro ao buscar Imóveis", err);
//       }
//     };
//     fetchImoveis();
//   }, []);

//   // Função que filtra os imóveis com base nos critérios
//   const filtrarImoveis = () => {
//     return imoveis.filter((imovel) => {
//       const nomeMatch = imovel.name.toLowerCase().includes(searchText.toLowerCase());
//       const estadoMatch = selectedState ? imovel.location === selectedState : true;
//       return nomeMatch && estadoMatch;
//     });
//   };

//   return (
//     <div>
//       <Search
//         searchText={searchText}
//         setSearchText={setSearchText}
//         selectedState={selectedState}
//         setSelectedState={setSelectedState}
//       />
//       <ImoveisList imoveis={filtrarImoveis()} error={error} />
//     </div>
//   );
// };
