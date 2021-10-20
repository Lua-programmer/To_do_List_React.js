import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cadastro from '../src/pages/Cadastro/Cadastro'
import Home from '../src/pages/Home/Home'


function App() {
  return (
    <div className="app">
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          {/* <Route path="/view/:id" component={VagaView}/>
          <Route path="/edit/:id" component={Edicao}/> */}
        </Switch>
     
    </div>
  );
}

export default App;