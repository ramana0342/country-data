import React from 'react'

function SingleCountry({data}) {
    console.log(data)
  return (
    <>
    <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center" ,width:"30%" ,marginTop:'8%'} }>
    {data.map((item,index)=>{
            return(<>
                 <div class="col" >
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
    </>
  )
}

export default SingleCountry