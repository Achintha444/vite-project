import { useState } from 'react';
import './App.css';

function CountryListAssignment() {
  const countries = [
    {
      name: 'USA',
      cities: ['Washington, D.C.', 'New York City'],
      population: 331002651,
      area: 9372610
    },
    {
      name: 'India',
      cities: ['New Delhi', 'Mumbai'],
      population: 1380004385,
      area: 3287263
    },
    {
      name: 'China',
      cities: ['Beijing', 'Shanghai'],
      population: 1439323776,
      area: 9640011
    }
  ];

  const [country, setCountry] = useState(countries[0]);

  return (
    <div className="card">
      <h4>
        Drop down one
      </h4>
      <select
        value={country.name}
        onChange={
          (e) => setCountry(countries.find((c) => c.name === e.target.value)!)
        }
      >
        {
          countries.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)
        }
      </select>

      <h4>
        Drop down two
      </h4>
      <select
        value={country.cities[0]}
      >
        {
          country.cities.map((c) => <option key={c} value={c}>{c}</option>)
        }
      </select>
    </div>
  )
}

export default CountryListAssignment
