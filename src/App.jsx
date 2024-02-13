import { useEffect } from "react";
import { useState } from "react"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState('');

  useEffect(()=> {
    fetch(`https://restcountries.com/v3.1/${input ? `/name/${input}` : 'all'}`)
    .then((res) => res.json())
    .then( (res) => {console.log(res)
    let country = res;
    setCountries(country);
    })
    .catch(err => setError(err))
  },[input])

  return (
    <div className="">
      <div className="flex justify-center">
      <input onChange={(e)=> setInput(e.target.value)} type="text" placeholder="enter country name" className="border w-[300px] h-[60px] mb-8 mt-9 text-center rounded-xl bg-slate-300 text-black"></input>
      </div>
      <div className="grid grid-cols-4 gap-5">
      {countries.map(item => (<div className= "border-2 text-center" key={item.cca3}>
        <span className="flex flex-col justify-center items-center"><img className="w-[120px] h-[100px]" src={item.flags.png} alt={`a flag of ${item.name.common}`}></img></span>
        <p>Name: {item.name.official}</p>
        <p>capital: {item?.capital}</p>
        <p> Population: {item.population}</p>
        <p>{item.independent ? 'Independent' : 'Dependent'}</p>
      </div>))}
    </div>
    </div>
  )
}

export default App
