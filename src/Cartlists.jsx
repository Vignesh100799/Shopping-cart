import React from 'react'
import { TrashFill } from 'react-bootstrap-icons';


const Cartlists = ({item,handleRemoveitem}) => {
  return (
    
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.title} 
</div>           
      </div>
      <span className="p-2 mx-5 badge bg-dark rounded-pill">
      &#36;{
        item.newprice
      }</span>
      
      <button onClick={(e)=>{{e.preventDefault(); handleRemoveitem(item)}}} className="p-2 badge bg-danger">
     <TrashFill/>
     </button>
    </li>
 
  )
}

export default Cartlists