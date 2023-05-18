import './App.css';
import {useState} from 'react'
import Check from './Check';
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  const [tab,setTab]=useState('all')
  return (
    <div className="App">
      <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">

        <div class="card">
          <div class="card-body p-5">

            <for class="d-flex justify-content-center align-items-center mb-4">
              <div class="form-outline flex-fill ">
                <input  onChange={(event)=> setTodo(event.target.value)} type="text" placeholder="New task..." id="form2" class="form-control" />
              </div>
              <button onClick={()=>{
                let flag=0;
                for (let i=0;i<toDo.length;i++){
                  if (toDo[i] !== ' '&& toDo[i]!=="."){
                    flag=1;
                  }
                }
                for(let j=0;j<toDos.length;j++){
                  if(toDo===toDos[j].text){
                    flag=0;
                  }
                }

                if (flag===1) {
                  return((setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])))}}
                  
                } 
                class="btn btn-info ms-2">Add</button>
            </for>

            <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
              <li class="nav-item" role="presentation">{ tab ==='all' ?
                <a onClick={()=>setTab('all')} class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" role="tab"
                   aria-selected="true">All</a>:<a onClick={()=>setTab('all')} class="nav-link" id="ex1-tab-1" data-mdb-toggle="tab"  role="tab"
                   aria-selected="true">All</a>}
              </li>
              <li class="nav-item" role="presentation">{tab==='active' ?
                <a onClick={()=>setTab('active')} class="nav-link active " id="ex1-tab-2" data-mdb-toggle="tab" role="tab"
                  aria-controls="ex1-tabs-2" aria-selected="false">Active</a> : <a onClick={()=>setTab('active')} class="nav-link " id="ex1-tab-2" data-mdb-toggle="tab"  role="tab"
                  aria-controls="ex1-tabs-2" aria-selected="false">Active</a>}
              </li>
              <li class="nav-item" role="presentation">{ tab ==='complete' ?
                <a onClick={()=>setTab('complete')} class="nav-link active" id="ex1-tab-3" data-mdb-toggle="tab"  role="tab"
                   aria-selected="false">Completed</a>: <a onClick={()=>setTab('complete')} class="nav-link " id="ex1-tab-3" data-mdb-toggle="tab"  role="tab"
                  aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>}
              </li>
            </ul>

            <div class="tab-content" id="ex1-content">
              
              <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                aria-labelledby="ex1-tab-1">
                <Check toDos={toDos} tab={tab} toDo={toDo} setTodo={setTodo} setTodos={setTodos}   />
              </div> 
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
