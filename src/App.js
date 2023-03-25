import Header from './Header';
import Video from  './Video';
import Buscar from  './Buscar';
import { videos } from './data/Videos';
import { VideoContext } from './VideoContext';
import ListVideo from './ListVideos';
import React from 'react';

function App() {
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();
  const [logado, setLogado] = React.useState();

  function CheckLogin(){
    if(usuario == "Andre" && senha == "Senha123"){
      setLogado({
        nome: "André Nakayama"
      });
    }
  }

  function Deslogar(){
    setLogado();
    setUsuario("");
    setSenha("");
  }

  if(!logado){
    return (
      <div>
        Usuario: <input type="text" onChange={(e) => setUsuario(e.target.value)} />
        Senha: <input type="password" onChange={(e) => setSenha(e.target.value)} />
        <button onClick={CheckLogin}>Login</button>
      </div>
      
    );
  }else{
    return (
      <>
        <h1>{logado.nome}</h1>
        <button onClick={Deslogar}>Deslogar</button>
        <div className='container'>
          <VideoContext.Provider value={videos}>
            <Header />
            <Buscar />
            <ListVideo />
          </VideoContext.Provider>
        </div>
      </>)
  }
}
export default App;