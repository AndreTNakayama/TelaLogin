import React from "react";

export default function Video( {video} ){
    return  (
        <div className="row">
            <div className="col-4">
                <img src={video.imagem} className="rounded"/>
            </div>
            <div className="col-7">
                <div className="my-2">
                    <h3>Meu video {video.id}</h3>
                    <span>{video.nome}</span>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                    <button className="btn btn-sm btn-outline-secondary me-1">Estatistica</button>
                    <button className="btn btn-sm btn-outline-success me-1">Comentarios</button>
                    <button className="btn btn-sm btn-outline-warning me-1">Link</button>
                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                </div>
            </div>
            <div className="col-1 d-flex align-items-center">
                <button className="btn btn-lg">❤️</button>
            </div>
        </div>
    )
}