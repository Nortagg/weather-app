import { useState } from "react";
import "./search.styles.scss";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?limit=10&namePrefix=${inputValue}&sort=-population`,
        geoApiOptions
      );
      const response_data = await response.json();
      const options = response_data.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));
      return { options };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#010d0fc",
      borderRadius: "8px",
      border: "1px solid #576c69",
      width: "100%",
      boxShadow: state.isFocused ? "0 0 0 2px #576c69" : null,
      "&:hover": {
        backgroundColor: "#010d0c",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#010d0f",
      color: state.isFocused ? "whitesmoke" : null,
      color: "whitesmoke",
      "&:hover": {
        backgroundColor: "#a7b1b1",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "whitesmoke",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#010d0fc",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "whitesmoke",
    }),
  };
  return (
    <AsyncPaginate
      placeholder="Search cities..."
      className="search-input"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};
export default Search;
