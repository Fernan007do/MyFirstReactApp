import React, { useState } from 'react';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Email } from '../../../models/EmailModel';
import EmailsTable from './EmailTable';


const initialINBOX: Email[] = [
    { name: "Fernando",
    country: "ARgetina",
    description: "Tres tristes tigres tragan trigo en un trigal",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2012",
    index: 1,
    deleted: false
  },
  {
    name: "Martina",
    country: "Brasil",
    description: "La va a tocar para Tin, ahí la tiene Tini, la marcan dos, pisa la pelota Tini, arranca por la derecha la genio del fútbol mundial, y deja el tendal y va a tocar para Fercho… ¡Siempre Tini Mirandona! ¡Genia! ¡Genia! ¡Genia! Ta-ta-ta-ta-ta-ta… Goooooool… Gooooool… ",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2021",
    index: 2,
    deleted: false
  },
  {
    name: "Diego",
    country: "Argentina",
    description: "El auto rojo se estrelló contra el árbol",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2020",
    index: 3,
    deleted: false
  },
  {
    name: "Ana",
    country: "España",
    description: "La vida es como una caja de chocolates",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2018",
    index: 4,
    deleted: false
  },
  {
    name: "Luis",
    country: "Perú",
    description: "El perro ladra pero no muerde",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2022",
    index: 5,
    deleted: false
  },
  {
    name: "Lucía",
    country: "Chile",
    description: "Aprendiendo a programar con JavaScript",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2017",
    index: 6,
    deleted: false
  },
  {
    name: "Jorge",
    country: "México",
    description: "Mi abuela tenía un gato negro",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2019",
    index: 7,
    deleted: false
  },
  {
    name: "Sofía",
    country: "Argentina",
    description: "La música es el lenguaje del alma",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2020",
    index: 8,
    deleted: false
  },
  {
    name: "María",
    country: "Colombia",
    description: "El mundo es un pañuelo",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2016",
    index: 9,
    deleted: false
  },
  {
    name: "Andrés",
    country: "España",
    description: "El tiempo vuela cuando te diviertes",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2022",
    index: 10, deleted: false
  },
  {
    name: "Carlos",
    country: "México",
    description: "La lluvia en Sevilla es una maravilla",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2021",
    index: 11, deleted: false
  },
  {
    name: "Laura",
    country: "Argentina",
    description: "El sol siempre sale por el este",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2022",
    index: 12, deleted: false
  },
  {
    name: "Pedro",
    country: "Perú",
    description: "El mar es un mundo lleno de vida",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2019",
    index: 13, deleted: false
  },
  {
    name: "Marina",
    country: "Chile",
    description: "La felicidad está en las cosas más simples",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2018",
    index: 14, deleted: false
  },
  {
    name: "Felipe",
    country: "Colombia",
    description: "La noche es más oscura justo antes del amanecer",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2020",
    index: 15, deleted: false
  },
  {
    name: "Giselle",
    country: "España",
    description: "El mejor maestro es la experiencia",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2022",
    index: 16, deleted: false
  },
  {
    name: "Adriana",
    country: "México",
    description: "La risa es el mejor remedio para el estrés",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2021",
    index: 17, deleted: false
  },
  {
    name: "Mauricio",
    country: "Argentina",
    description: "La vida es una aventura que hay que disfrutar",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2020",
    index: 18, deleted: false
  },
  {
    name: "Florencia",
    country: "Perú",
    description: "El amor es la fuerza más poderosa del universo",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2017",
    index: 19, deleted: false
  },
  {
    name: "Javier",
    country: "Chile",
    description: "El que persevera, alcanza",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2019",
    index: 20, deleted: false
  },
  {
    name: "Lucas",
    country: "Colombia",
    description: "La imaginación es la clave para la creatividad",
    state: true,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2018",
    index: 21, deleted: false
  },
  {
    name: "Marisol",
    country: "España",
    description: "La naturaleza es la mejor obra de arte",
    state: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: "2022",
    index: 22, deleted: false
  }
] 

const onChange = (key: string) => {
  console.log(key);
};

const operations = <Button>Extra Action</Button>;



const EmailTab: React.FC = () => {
    /* ARRAYS QUE MANEJAN LOS MAILS CON FUNCION FILTER */
    const [INBOX, setINBOX] = useState<Email[]>(initialINBOX)
    const NOTDELETED : Email[] = INBOX.filter(email => email.deleted == false)
    const READ: Email[] = NOTDELETED.filter(email => email.state == true)
    const UNREAD: Email[] = NOTDELETED.filter(email => email.state == false)
    const DELETED: Email[] = INBOX.filter(email => email.deleted == true)
    const [EMAILS, setEMAILS] = useState<Email[]>([...INBOX])

    /* FUNCIONES PARA MANEJAR ACCIONES DE LOS BOTONES */



    const handleEmailDelete = (email: Email) => {
      setINBOX(prevInbox => prevInbox.map((e: Email) => e.index === email.index ? { ...e, deleted: true } : e));
      setEMAILS(NOTDELETED)
    }
  
    const handleEmailRead = (email: Email) => {
      setINBOX(prevInbox => prevInbox.map((e: Email) => e.index === email.index ? { ...e, state: true } : e));
      
    }

    /* ITEMS DE TAB */
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Bandeja de Entrada`,
          children: (
            <>
                <EmailsTable emailList = {NOTDELETED} handleEmailDelete={handleEmailDelete} handleEmailRead={handleEmailRead} />
            </>
        ),
        },
        {
          key: '2',
          label: `Leídos`,
          children: (
              <>
                  <EmailsTable emailList = {READ} handleEmailDelete={handleEmailDelete} handleEmailRead={handleEmailRead} />
              </>
          ),
        },
        {
          key: '3',
          label: `No Leídos`,
          children: (
            <>
                <EmailsTable emailList = {UNREAD} handleEmailDelete={handleEmailDelete} handleEmailRead={handleEmailRead} />
            </>
        ),
        },
        {
          key: '4',
          label: `Eliminados`,
          children: (
            <>
                <EmailsTable emailList = {DELETED} handleEmailDelete={handleEmailDelete} handleEmailRead={handleEmailRead} />
            </>
        ),
        },
      ];

    return(
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarExtraContent={operations}/>
    ) 
} ;

export default EmailTab;