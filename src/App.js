import PaginaInicial from "./components/paginaInicial";
import Login from "./components/login";
import React from 'react';
import { UsuarioContext } from "./usuarioContext";
import { usuarios } from "./data/usuarios";

function App() {
  const [logado, setLogado] = React.useState();

  return(
    <div>
      <UsuarioContext.Provider value={usuarios}>
        {logado? <PaginaInicial logado={logado} setLogado={setLogado}/> : <Login setLogado={setLogado}/>}
      </UsuarioContext.Provider>
    </div>
  )

}
export default App;