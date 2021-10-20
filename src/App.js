import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cadastro from '../src/pages/Cadastro/Cadastro';
import Home from '../src/pages/Home/Home';
import TaskView from '../src/pages/TaskView/TaskView';
import Edicao from '../src/pages/Edicao/Edicao'



function App() {
  return (
    <div className="app">
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/view/:id" component={TaskView}/>
          <Route path="/edit/:id" component={Edicao}/>
        </Switch>
     
    </div>
  );
}

export default App;