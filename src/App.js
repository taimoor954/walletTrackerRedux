import {BrowserRouter, Switch , Route} from 'react-router-dom' 
import Home from './Pages/Home/home'
import Edit from './Pages/Edit/edit'
import Header from './Components/Header/header' 
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/"  exact={true} component={Home}  />
      <Route path="/transaction/:id"  exact={true} component={Edit}  />

    </Switch>
    </BrowserRouter>      
    </div>
);
}

export default App;
