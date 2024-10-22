import { useState } from "react";
import "./country.css";

const CountriesShow = ({country, visitedListHandle}) => {
    const {name, capital, region,flags,population,area,cca2,timezones} =  country

    // console.log(Object.values(languages).join(','))
// console.log(Object.keys(currencies)[0]) //destructure a variable gula reove kore deya hoice ===>>problem holo colsole korle data pawya jay but jsx component a dynamic data place korle tokhon r load hoy na
const [visited, setVisited] = useState(false)
const visitedHandle =()=>{
    setVisited(!visited)
}
    return (
        <div >
            <div className="country" style={{border: visited?'2px solid lightgreen':'',boxShadow: visited? '0 0 15px 0 lightgreen':''}}>
            <img className="img" src={flags.png} alt="" />
            <h4>{name.common}</h4>
            <div>
                <ul className="details">
                    <li>Capital: {capital}</li>
                    <li>CCA2: {cca2}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Time Zone: {timezones[0]}</li>
                    <li>Area: {area} KM<sup>2</sup></li>
                    
                    {/* <li>{Object.values(languages).join(',')}</li> */}
                    {/* <li>Currencies: {Object.keys(currencies)[0]}</li> */}

                </ul>
                    <button style={{backgroundColor: visited ? 'lightgreen': '',}} className="btn" onClick={()=>{visitedHandle(); visitedListHandle(country);}}>{visited ? "Visited" : 'Interested'}</button>
            </div>
            
        </div>
        </div>
    );
};

export default CountriesShow;