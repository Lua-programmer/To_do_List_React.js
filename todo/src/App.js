import './App.css';
import { Switch, Route } from 'react-router-dom';
import TodoForm from '../src/pages/TodoForm'


function App() {
  return (
    <div className="app">
      
        <Switch>
          {/* <Route path="/" exact={true} component={Home}/> */}
          <Route path="/registragion" component={TodoForm}/>
          {/* <Route path="/view/:id" component={VagaView}/>
          <Route path="/edit/:id" component={Edicao}/> */}
        </Switch>
      
    </div>
  );
}

export default App;