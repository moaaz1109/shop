
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";


const App = () => {
  return (
    <Router>
   
     <main>
       <Switch>
         <Route path="/" exact>
           <Home />
         </Route>
         
         <Route path="/Login" exact>
           <Login/>
         </Route>
        
         <Route path="/Register" exact>
           <Register/>
         </Route>
         <Redirect to="/" />
       </Switch>
     </main>

    </Router>
   );
 }

export default App;






