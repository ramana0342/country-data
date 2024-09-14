import React from 'react'
import CountryData from './countryData'

function InitialData() {
  return (
    <>
    <div className='container'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
         {CountryData.map((item,index)=>{
            return(<>
                 <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Country Name:{item.country}</h5>
        <p class="card-text">Country Capital:{item.capital}</p>
        <p class="card-text">Country currency:{item.currency}</p>
        <p class="card-text">Country official_language:{item.official_language}</p>
        <p class="card-text">Country population:{item.population}</p>
      </div>
    </div>
  </div>
            </>)
         })}
         </div>
    </div>
    </>
  )
}

export default InitialData