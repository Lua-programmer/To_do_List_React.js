import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  const [task, setTask,] = useState({});

  useEffect(() => {

    const getTaskById = async () => {
      const response = await Api.fetchGetById(_id);
      const result = await response.json();
      setTask(result);
    };

    getTaskById();

  }, [_id]);

  const handleFieldsChange = (event) => {
    const campos = { ...task };
    campos[event.target.name] = event.target.value;
    setTask(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    
    const taskObj = { ...task };

    try {
      const response = await Api.fetchPut(taskObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="base mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col subtitle ">
              <h3>Edit Task</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
        <form className="todo-form mt-5" onSubmit={handleSubmit}>
      
      <>
      <div className="row">
        <div className="col md-6 mt-2">
          <label>Tarefa: </label>
          <input
          value={task.title}
            type="text"
            className="todo-input"
            placeholder="Adicione uma nova tarefa"
            name="title"
            id="title"
            onChange={handleFieldsChange}
          />
        </div>

        <div className="col md-6 mt-2">
          <label>Descrição: </label>
          <input
          value={task.description}
            type="text"
            className="todo-input"
            placeholder="Descreva sua tarefa"
            name="description"
            id="description"
            onChange={handleFieldsChange}
          />
        </div>

        <div className="col md-6 mt-2">
          <label>Prioridade: </label>
          <select
           
            className="todo-input"
            name="priority"
            id="priority"
            value={task.priority}
            onChange={handleFieldsChange}
          >
            <option value="vazio"></option>
            <option value="Baixa">Baixa</option>
            <option value="Media">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="col md-6 mt-4">
          <label>Status: </label>
          <select
            
            className="todo-input"
            name="status"
            value={task.status}
            id="status"
            onChange={handleFieldsChange}
          >
            <option value="vazio"></option>
            <option value="Feito">Feito</option>
            <option value="Fazendo">Fazendo</option>
            <option value="Fazer">Fazer</option>
          </select>
        </div>
        
        <div className="col md-6 mt-4">
          <label>Prazo: </label>
          <input className="todo-input" value={task.deadline} type="date" id="data" onChange={handleFieldsChange} name="deadline" maxlength="10" size="" />
        </div>

      </div>

      <div className="row">
        <div className="mt-5">
         <button className="todo-button" type="submit" >Editar</button>
         <button href="/view/:id" className="todo-button" >Voltar</button>
        </div>
      </div>

      </>
      

   
  </form>
        </div>
      </div>
    </div>
  )
}

export default Edicao;