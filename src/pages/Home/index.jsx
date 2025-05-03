import { Container } from "./styles";
import { Search } from "../../components/Search"
import { BannerApresentation } from "../../components/BannerApresentation";
import { ImoveisList } from "../../components/ImoveisList";
import { useState } from "react";

export const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedState, setSelectedState] = useState("");

    return (
        <Container>
            <BannerApresentation />
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
            />
            <ImoveisList searchText={searchText} selectedState={selectedState} />
        </Container>
    )
};
  