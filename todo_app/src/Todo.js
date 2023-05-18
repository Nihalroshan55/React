import React from 'react'

function todo(props) {
    const del=(id)=>{
        props.setTodos(props.toDos.filter((obj)=>obj.id!==id));
        
      }
    
    if (props.tab==='all') {
        
    if ( props.status === true) {
        return(
        <div>
            <s>{props.text}</s><i class="fa fa-close text-danger " onClick={()=>del(props.id ,props.toDos,props.setTodos)}></i></div>
        )
        }
    else{
        return(
        
        <div>
            {props.text}<i class="fa fa-close text-danger" onClick={()=>del(props.id ,props.toDos,props.setTodos)}></i>
    </div>
    )
    }
}
else if(props.tab==='active') {
        
    if ( props.status === false) {
        
        return(<div>{props.text}
        <i class="fa fa-close text-danger" onClick={()=>del(props.id ,props.toDos,props.setTodos)}></i>
        </div>)
        }
    
    
}
else
{
    if ( props.status === true) {
        return(<div><s>{props.text}</s>
        <i class="fa fa-close text-danger" onClick={()=>del(props.id ,props.toDos,props.setTodos)}></i>
        </div>)
        }
}
}

export default todo
