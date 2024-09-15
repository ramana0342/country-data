import React from 'react'

function SheimerEffect() {

    const arr=[1,2,3,4,5,6,7,8,9,0,0,0]


  return (
    <>
     <div className='container'>
     <div class="row row-cols-1 row-cols-md-3 g-4">

    {arr.map((item,index)=>{
        return(<>
<div className='col'>
<div class="card" aria-hidden="true">
     
     <div class="card-body">
       <h5 class="card-title placeholder-glow">
         <span class="placeholder col-9"></span>
       </h5>
       <p class="card-text placeholder-glow">
         <span class="placeholder col-7"></span>
         <span class="placeholder col-7"></span>
         <span class="placeholder col-7"></span>
         <span class="placeholder col-7"></span>
          </p>
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

export default SheimerEffect