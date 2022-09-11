import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import * as Rotas from './constantes/routes';
import HomeLogado from './Pages/Private/HomeLogado/homeLogado';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={Rotas.HOME}  element={ <Home /> }/>
        <Route path={Rotas.LOGIN}  element={ <Login /> }/>
        <Route path={Rotas.HOME_LOGADO} element={ <RequireAuth><HomeLogado /></RequireAuth> }/>
      </Routes>
    </div>
  );
}

export default App;
