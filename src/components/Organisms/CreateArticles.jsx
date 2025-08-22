import React from 'react'
import FormMolecule from "../Molecules/FormMolecule"

function CreateArticles() {
    return (
        <>
            <div className="pt-10 w-full">
                <hr className="border-2"></hr>
            </div>
            <p>
                Criação, Registo e Verificação de Códigos de Artigos /
                Articles Codes Creation, Verification and Registration
            </p>
            <FormMolecule />
        </>
    )
}

export default CreateArticles