import React, { useState } from 'react'
import data from './data'
import './style.css'

export default function Acordeian() {
    const[selected , setSelected] = useState(false)
    function singleSelection(id){
        // setSelected(id)
        setSelected(!selected)
        
    }
  return (
    <div className='wrapper'>
       {
        data.length > 0 ?
        data.map((items)=>(
            <div className='item'>
                <div onClick={()=>singleSelection(items.id)} className='question'>{items.title}</div>
                {
                    // selected === items.id 
                    selected ? <div key={items.id} className='answer'>
                        {items.content}
                    </div> : <div></div>
                }
            </div>            
        ))
      
        
        
        : <div>No Data</div>
       }
    </div>
  )
}
