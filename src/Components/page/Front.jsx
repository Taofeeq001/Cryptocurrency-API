import React, { useState, useEffect } from "react";
import "./Front.css";
import CoinDetails from "./CoinDetails";

const Front = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const base_url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    try {
      const response = await fetch(base_url, {mode:"cors"})
        .then((res) => res.json())
        .catch((error) => console.log(error));
      setCoin(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="father">
      <h1>Simsuraj Crytocurrency Monitoring Table</h1>
      <form>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Input your coin here"
        />
      </form>
      <div className="coinss">
        {filteredCoins.map((coin) => (
          <CoinDetails
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketcap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        ))}
      </div>
    </div>
  );
};

export default Front;







// import React, {useState, useEffect} from "react"
// import './Front.css'
// import CoinDetails from "./CoinDetails"
// // import axios from "axios"

// const Front =()=>{
//     const [coin, setCoin] = useState([{}])
//     const [search, setSearch] = useState("")
//     const fetchData=async()=>{
//         const base_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page1&sparkline=false"
//         const response = await fetch(base_url)
//         .then(res=>res.json())
//         .catch(error=> console.log(error))
//         setCoin(response)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])

//     const handleChange=(e)=>{
//         e.preventDefault()
//         setSearch(e.target.value)

//     }

//         const filteredCoins = coin.filter((coin) =>
//             coin.name.toLowerCase().includes(search.toLowerCase())
//         );
//     // const filteredCoins= coin.filter((coin)=>
//     //         coin.name.toLowerCase().includes(search.toLowerCase())
//     //     );
    
//     return(
//         <div>
//             <h1>Simsuraj coin summary</h1>
//             <form action="">
//                 <input type="text" 
//                 value={search} 
//                 onChange={handleChange}
//                 placeholder="Input your coin here"
//                 />
//                 <button type="submit">search</button>
//             </form>
//             <div>
//                 {filteredCoins.map(coin=>{
//                     return(
//                         <CoinDetails key={coin.id}
//                         name={coin.name}
//                         image={coin.image} 
//                         Symbol={coin.symbol}
//                         volume={coin.market_cap}

//                         />

//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
// export default Front;