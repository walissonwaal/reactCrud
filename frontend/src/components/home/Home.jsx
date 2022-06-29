import React from "react";
import Main from "../template/Main";

export default props => {
    return (
        <Main icon="home" title="Início"
                subtitle="Crud com React Js">
                    <div className="display-4">Bem vindo!</div>
                    <hr />
                    <p className="mb-0">Sistema criado para exemplificar a construção de um crud desenvolvido em React.</p>
            </Main>
    )
}