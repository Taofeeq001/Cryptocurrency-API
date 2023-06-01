import React from 'react'
import './CoinDetails.css'

const CoinDetails=({image, name, symbol, price, volume, priceChange, marketcap})=>{
    return(
        <div className='coin-info'>
            <div className='details'>
                <div className='coin'>
                    <img src={image} alt="" />
                    <h2 className='coin-name'>{name}</h2>
                </div>
                <div className='coin-data'>
                    <p className='coin-symbol'>{symbol}</p>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (<p className='coin-percentage red'>{priceChange.toFixed(2)}%</p>): (<p className='coin-percentage green'>{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-marketcap">
                        Mkt cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CoinDetails;