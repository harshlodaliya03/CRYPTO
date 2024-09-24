import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { Coincontext } from '../../context/Coincontext';

const Home = () => {
 

  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const { allCoin, currency } = useContext(Coincontext); // Fixed 'currency' typo
  const [displayCoin, setDisplayCoin] = useState([]); // Fixed useState declaration

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the World's largest cryptocurrency Marketplace.</p>
        <form>
          <input type="text" placeholder='Search crypto..' />
          <button type='submit'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price ({currency.symbol})</p> {/* Display currency symbol */}
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-info">
                <img src={item.image} alt={item.name} className="coin-image" /> {/* Display coin image */}
                <p>{item.name}</p>
              </div>
              <p>{currency.symbol}{item.current_price}</p>
              <p style={{ textAlign: 'center', color: item.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
