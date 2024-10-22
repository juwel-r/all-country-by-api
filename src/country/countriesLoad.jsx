import { useEffect } from "react";
import { useState } from "react";
import CountriesShow from "./countriesShow";
const CountriesLoad = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const sortedData = data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
    });
    setCountries(sortedData);

      console.log(Array.isArray(data))
    };
    loadCountries();
  }, []);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const visitedListHandle = (country) => {
    const updateVisitedList = visitedCountries.includes(country)
      ? visitedCountries.filter((visitedC) => visitedC !== country)
      : [...visitedCountries, country];
    //ekhane filter deya hoice je... existing array or visitedCountries vetor "visitedC" loop kore every array check korbe je kono valu === country kina.... jodi true hoi tahole oi bad dia new array make korbe otherwise false or jodi existing array  (visitedCountries) ar vitor (country ) na thake tahole add korbe...
    setVisitedCountries(updateVisitedList);
    console.log(visitedCountries);
  };

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <h3>Total Visited Countries: {visitedCountries.length}</h3>
      <h4>Visited Country List:</h4>
      <ul className="visitedCountry">
        {visitedCountries.map((visitedCountry) => (
          <li key={visitedCountry.cca2}>{visitedCountry.name.common}</li>
        ))}
      </ul>
      <br />
      <div className="countriesContainer">
        {countries.map((country) => (
          <CountriesShow
            key={country.cca2}
            country={country}
            visitedListHandle={visitedListHandle}
          ></CountriesShow>
        ))}
      </div>
    </div>
  );
};

export default CountriesLoad;
