import React from 'react'
import Todo from './Todo';
function Check(props) {
  return (
    <div>
      <ul class="list-group mb-0">{
                   props.toDos.map((value,index)=>{
                    if (props.tab==='all') {
                        return (
                            <li  key={index}class="list-group-item d-flex  align-items-center border-0 mb-2 rounded"
                             style={{backgroundColor: '#f4f6f7'}}>{
                              
                             }
                             <input class="form-check-input me-2" type="checkbox" onChange={(e)=>props.setTodos(props.toDos.filter(same=>{
                               if (same.id===value.id){
                                 ///console.log(e.target.checked)
                                 console.log(props.value)
                                 same.status=e.target.checked
                               }
                               return same
                             }))} checked={value.status}  />
                             <Todo  key={index} setTodos={props.setTodos} toDos={props.toDos} tab={props.tab} {...value}/>
                             
         
                           </li>
                           ) 
                    }
                    else if(props.tab==='active') {
                        if(value.status===false){
                        return (
                            <li  key={index}class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                             style={{backgroundColor: '#f4f6f7'}}>
                             <input class="form-check-input me-2" type="checkbox" onChange={(e)=>props.setTodos(props.toDos.filter(same=>{
                               if (same.id===value.id){
                                 ///console.log(e.target.checked)
                                 //console.log(props.value)
                                 same.status=e.target.checked
                               }
                               return same
                             }))} checked={value.status}  />
                             <Todo  key={index} setTodos={props.setTodos} toDos={props.toDos} tab={props.tab} {...value}/>
                             
         
                           </li>
                           )
                        }}
                        else{
                          if(value.status===true){
                          return (
                              <li  key={index}class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                               style={{backgroundColor: '#f4f6f7'}}>
                               <input class="form-check-input me-2" type="checkbox" onChange={(e)=>props.setTodos(props.toDos.map((same)=>{
                                 if (same.id===value.id){
                                   ///console.log(e.target.checked)
                                   //console.log(props.value)
                                   same.status=e.target.checked
                                 }
                                 return same
                               }))}
                               checked={value.status}  />
                               <Todo   setTodos={props.setTodos} toDos={props.toDos} tab={props.tab} {...value}/>
                               
           
                             </li>
                             )
                          }}
                   })}                 
                </ul>
    </div>
  )
}

export default Check
