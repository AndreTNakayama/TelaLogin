import { useContext } from "react";
import { useState } from "react";
import { UsuarioContext } from "../usuarioContext";

export default function Login({setLogado}){
    const dbUsuario = useContext(UsuarioContext)
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    function CheckLogin(){
        dbUsuario.map((user) => <>{user.nome === usuario && user.senha === senha && setLogado({nome: user.nome})}</>)   
    }

    return (
        <div>
          Usuario: <input type="text" onChange={(e) => setUsuario(e.target.value)} />
          Senha: <input type="password" onChange={(e) => setSenha(e.target.value)} />
          <button onClick={CheckLogin}>Login</button>
        </div>
    );
}