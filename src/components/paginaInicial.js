// import Header from './Header';
// import Buscar from  './Buscar';
// import ListVideo from './ListVideos';
// import { videos } from './data/Videos';

export default function PaginaInicial({logado, setLogado}){
    return (
        <>
          <h1>{logado.nome}</h1>
          <button onClick={() => setLogado(undefined)}>Sair</button>
          {/* <div className='container'>
            <VideoContext.Provider value={videos}>
              <Header />
              <Buscar />
              <ListVideo />
            </VideoContext.Provider>
          </div> */}
        </>
    );
}