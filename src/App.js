
import './App.css';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Home from './Components/Home';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
  return (


    
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/" component={Login}>

            </Route>
         <Route path="/sign-up" component={Registeration}>
         </Route>
         <Route path="" component={Home}>
         </Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
