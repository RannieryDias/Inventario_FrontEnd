import "./user-form.css"
import React from "react"
import { useState } from "react";

export default function UserForm() {

    const [occupation, setOccupation] = useState("");
    const [department, setDepartment] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitHandler = (event) => {
        const data = {occupation, department, name, password, cpf, email};
        event.preventDefault();
        PostUser("https://localhost:7115/api/Employees", data)
        .then((value) => value.json())
        .then(console.log)
        .catch(console.log);
	//Form submission happens here
    }

    function PostUser(url, data){
        return  fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
    }

    return (<form className="user-form">
        <fieldset>
        <input placeholder="Cargo" label="Cargo" required onChange={(event) => setOccupation(event.target.value)}/>
        <input type="number" placeholder="Departamento" label="Departamento" required onChange={(event) => setDepartment(event.target.value)}/>
        <input placeholder="Nome" label="Nome" required onChange={(event) => setName(event.target.value)}/>
        <input placeholder="Senha" label="Senha" required onChange={(event) => setPassword(event.target.value)}/>
        <input placeholder="CPF" label="CPF" required onChange={(event) => setCpf(event.target.value)}/>
        <input placeholder="E-mail" label="E-mail" required onChange={(event) => setEmail(event.target.value)}/>
        </fieldset>
        <input type="submit" onClick={onSubmitHandler}/>
    </form>)
}

//https://localhost:7115/api/Employees