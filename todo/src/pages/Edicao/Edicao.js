import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [task, setTask,] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualizo o meu estado de acordo com o resultado.
    setTask(result);
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do estado
    const campos = { ...task };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.name] = event.target.value;

    // atualizo o meu estado com esse novo objeto.
    setTask(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    
    const taskObj = { ...task };

    try {
      const response = await Api.fetchPut(taskObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edicao da Vagaa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={task.title}
                    className="form-control"
                    name="titulo"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={task.description}
                    className="form-control"
                    name="salario"
                    id="floatingsalario"
                    placeholder="Digite o Salario"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingsalario">Salario</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={task.priority}
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descricao"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Descricao</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select value={task.status}
                    className="form-control"
                    name="senioridade"
                    id="floatingsenioridade"
                    onChange={handleFieldsChange}
                    >
                    <option value="junior">Junior</option>
                    <option value="pleno">pleno</option>
                    <option value="senior">senior</option>
                  </select>
                  <label htmlFor="floatingsenioridade">Senioridade</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;