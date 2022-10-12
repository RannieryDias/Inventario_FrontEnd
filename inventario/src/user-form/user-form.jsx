import "./user-form.css"
import React from "react"

export default function UserForm() {

    return (<form className="user-form">
        <fieldset>
        <input placeholder="Nome" label="Nome" required/>
        <input placeholder="Senha" label="Senha"required/>
        <input placeholder="CPF" label="CPF" required/>
        <input placeholder="E-mail" label="E-mail"  required/>

        </fieldset>
    </form>)
}

