import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/form";
import Ul from "./components/ul"

function App(){      

  const [novaTarefa, setNovaTarefa] = useState('');
  const [indice, setIndice] = useState(-1);

  const [tarefas, setTarefas] = useState(() =>{
    const listaJ = localStorage.getItem('tarefas');
    if (!listaJ) return [];
    return JSON.parse(listaJ)
  });

  useEffect(() =>{
    const tarefasJ = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJ);
  }, [tarefas]);

  const handleSubmit = (e) =>{
   e.preventDefault();
   if (indice === -1){
    setTarefas(prev => {
      if(prev.indexOf(novaTarefa) !== -1) return prev; // evita ficar criando novas variáveis
      return [...prev, novaTarefa];
    });
   }
   else{
    const copia = [...tarefas];
    copia[indice] = novaTarefa;
    setTarefas(copia);
    setIndice(-1)
   }
    
    setNovaTarefa('');
  }

  const mudou =  (e) =>{
    setNovaTarefa(e.target.value);
  }

  const handleDelete = (i) => {
    setTarefas(prev => prev.filter((_, index) => index !== i));
  };

  const handleEdit = (i) =>{
    setIndice(i)
    setNovaTarefa(tarefas[i]);
  }

  return(
    <div className="estado">
      <h1>Lista de tarefas</h1>
      <Form handleSubmit={handleSubmit} mudou={mudou} novaTarefa={novaTarefa}/>
      <Ul tarefas={tarefas} handleDelete={handleDelete} handleEdit={handleEdit}/>
      
    </div>
  );
}

export default App;