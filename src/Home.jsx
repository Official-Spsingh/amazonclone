import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
                <div className='home__row'>
                    <Product id={121} title="Women's Micam-102 Running Shoes for daily running on tracks" image="https://images-na.ssl-images-amazon.com/images/I/91Ea343mZoL._UL1500_.jpg" price={629.00} rating={4} />
                    <Product id={122} title="Women's Micam-103 Running Shoes for daily running on tracks" image="https://images-na.ssl-images-amazon.com/images/I/81i%2BGGsaXuL._UL1500_.jpg" price={699.00} rating={4} />
                </div>
                <div className='home__row'>
                    <Product id={123} title="Redmi Note 9 (Arctic White, 4GB RAM, 64GB Storage) LED Light ultra high speed" image="https://images-na.ssl-images-amazon.com/images/I/714qRVfu2vL._SL1500_.jpg" price={11999.00} rating={5} />
                    <Product id={124} title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)" image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg" price={17499.00} rating={5} />
                    <Product id={125} title="itel A46 (Fiery Red, 2GB RAM, 16GB Storage) with best camera quality" image="https://images-na.ssl-images-amazon.com/images/I/61C-ID8ptcL._SL1500_.jpg" price={5331.00} rating={4} />
                </div>
                <div className='home__row'>
                    <Product id={126} title="Philips 164 cm (65 inches) 6700 Series 4K Ambilight LED Smart TV with totally great figital and modern experience" image="https://images-na.ssl-images-amazon.com/images/I/71qKhUI6WRL._SL1500_.jpg" price={79999.00} rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
