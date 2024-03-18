import React, { useState }  from 'react';

const SearchBar = () => {

const [SearchInput, setSearchInput] = useState("");

const countries = [
{region: "London", country: "United Kingdom"},
{region: "Cornwall", country:"United Kingdom"},
{region: "California", country: "United States"},
{region: "Colorado", country:"United States"},
{region: "New York", country: "United States"},
{region: "Bali", country:"Indonesia"},
{region: "Paris", country: "France"},
{region: "Provence", country:"France"},
{region: "Crete", country: "Greece"},
{region: "Santorini", country:"Greece"},
{region: "Phuket", country: "Thailand"},
{country:"Switzerland"},
{country: "Maldives"},
{country:"Ireland"},
{region: "Alberta", country: "Canada"},
{region: "Berlin", country:"Germany"},
{region: "Tyrol", country: "Austria"},
{country:"Norway"},
{region: "Mallorca", country: "Spain"},
{country:"Italy"}
];

const handleChange = (e) => {
e.preventDefault();
setSearchInput(e.target.value);
};
const filteredCountries = countries.filter((country) =>{
return country.region.toLowerCase().includes(SearchInput.toLowerCase()); ||
country.country.toLowerCase().includes(SearchInput.toLowerCase()); 
    })
}
return (
<div>
<input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={SearchInput} />

   <table>
  <tr>
    <th>Region</th>
    <th>Country</th>

  </tr>

{filteredCountries.map((country, index) => {
<tr key={index}>
<td> {country.region} </td>
<td> {country.country} </td>
</tr>
})}
</table>
</div>
)