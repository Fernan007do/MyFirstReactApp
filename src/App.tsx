import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';



function App() {

  const [Emails, setEmails] = useState<Array<Email>>([])

  useEffect (() => {
    setEmails(INITIAL_STATE)
  }, [])



  interface Email {
    name: string
    country: string
    description: string
    state: boolean
    created_at: string
    updated_at: string
  }


  const INITIAL_STATE: Array<Email>= [
    {name:"Fernando", country:"ARgetina", description:"Tres tristes tigres tragan trigo en un trigal", state:true, created_at: "2003", updated_at: "2012"},
    {name:"Gustavo", country:"Francia", description:"Casa de herrero cuchillo de palo", state: false, created_at: "2000", updated_at: "2023"},
    {name:"Tomas", country:"Italia", description:"Camarón que se duerme se lo lleva la corriente", state:true, created_at: "2005", updated_at: "2050"}
  ];

  const EmailItem = (email:Email) => {
    return (
      <div>

        <li >{email.name}</li>
        <h2>{email.description.substring(0, 100)}</h2>
        <h2> Se creó en {email.created_at} y te llegó en {email.updated_at} </h2>


      </div>
    )
  }





  return (
    <div className="App">
      <ul>
        {
          Emails.map(email => {
            return (
              <>
              <li> {email.name}</li>
              <h2>{email.description.substring(0, 100)}</h2>
              <h2> Se creó en {email.created_at} y te llegó en {email.updated_at} </h2>
              <Button>Leído</Button>
              </>
            )
          })


        }
      </ul>
    </div>
  );
}

export default App;
