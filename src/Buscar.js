export default function Buscar(){
    return(
        <div className="d-flex my-3">
            <input type="search" className="form-control" placeholder="Digite o nome do video"></input>
            <button className="btn btn-sm btn-outline-primary">Buscar</button>
        </div>
    );
}