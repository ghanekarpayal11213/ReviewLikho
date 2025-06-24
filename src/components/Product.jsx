import React from 'react'
export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary  ">
            {props.product.reviews}
          </span>
        </h2> 
      </div>
      
     <div style={{ display: "flex", margin: "0"}}>
      <button style={{marginLeft: "auto"}}
       className='col-2 btn btn-danger'
      onClick={()=>{
        props.removeItem(props.index)
      }}
      >
         Remove
      </button>
      </div>
    </div>
  )
}
