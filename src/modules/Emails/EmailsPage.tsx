
import EmailsTable from "./EmailList/EmailTable";

import React, { useState } from 'react';
import { Breadcrumb, Col, FloatButton, Layout, Menu, Row, Typography, theme } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { Email } from "../../models/EmailModel";

const { Header, Content, Footer } = Layout;
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
  name: "Marcela",
  country: "Mexico",
  description: "La casa está en la playa",
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






export const EmailPage: React.FC = () => {
  const [INBOX, setINBOX] = useState<Email[]>(initialINBOX)
  const READ: Email[] = INBOX.filter(email => email.state == true)
  const UNREAD: Email[] = INBOX.filter(email => email.state == false)
  const DELETED: Email[] = INBOX.filter(email => email.deleted == true)
  const NOTDELETED : Email[] = INBOX.filter(email => email.deleted == false)
  const [EMAILS, setEMAILS] = useState<Email[]>([...INBOX])

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function handleMenuClick(index: number, array: Email[]) {
    index === 0 ? array = NOTDELETED : (index === 1 ? array = READ : (index === 2 ? array = UNREAD : array = DELETED))
    setEMAILS (array)
  }

  const handleEmailDelete = (email: Email) => {
    setINBOX(prevInbox => prevInbox.map((e: Email) => e.index === email.index ? { ...e, deleted: true } : e));
    setEMAILS(NOTDELETED)
  }

  const handleEmailRead = (email: Email) => {
    setINBOX(prevInbox => prevInbox.map((e: Email) => e.index === email.index ? { ...e, state: true } : e));
    
  }

  return (
    <Row>
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            
            defaultSelectedKeys={['1']}
            items={new Array(4).fill(null).map((_, index, array) => ({
              key: String(index + 1),
              label: index === 0 ? 'Bandeja de Entrada' : (index === 1 ? 'Leídos' : (index === 2 ? 'No Leídos' : 'Eliminados')),
              onClick:() => handleMenuClick(index, array),
            }))}
          />

        
        
        </Header>
        <Col span={22} offset={1} >
          <Content className="site-layout" style={{ padding: '0 50px' }}>
            <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
              <EmailsTable emailList = {EMAILS} handleEmailDelete={handleEmailDelete} handleEmailRead={handleEmailRead} />
            </div>
          </Content>
        </Col>
        <Footer style={{ textAlign: 'center' }}>Primer App de React de Fer</Footer>
      </Layout>

    </Row>

  );
};



/* export const EmailPage: React.FC = () => {

  return (
    <>
        <EmailsTable/>
    </>

    
  );

} */
