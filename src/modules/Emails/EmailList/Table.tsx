import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Email } from '../../../models/EmailModel';
import { Table, Button, Avatar, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './table.css'

const INITIAL_STATE: Array<Email>= [

    {
        name: "Fernando",
        country: "ARgetina",
        description: "Tres tristes tigres tragan trigo en un trigal",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2012",
        index: 1,
    },
    {
        name: "Marcela",
        country: "Mexico",
        description: "La casa está en la playa",
        state: false,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2021",
        index: 2,
    },
    {
        name: "Diego",
        country: "Argentina",
        description: "El auto rojo se estrelló contra el árbol",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2020",
        index: 3,
    },
    {
        name: "Ana",
        country: "España",
        description: "La vida es como una caja de chocolates",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2018",
        index: 4,
    },
    {
        name: "Luis",
        country: "Perú",
        description: "El perro ladra pero no muerde",
        state: false,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2022",
        index: 5,
    },
    {
        name: "Lucía",
        country: "Chile",
        description: "Aprendiendo a programar con JavaScript",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2017",
        index: 6,
    },
    {
        name: "Jorge",
        country: "México",
        description: "Mi abuela tenía un gato negro",
        state: false,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2019",
        index: 7,
    },
    {
        name: "Sofía",
        country: "Argentina",
        description: "La música es el lenguaje del alma",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2020",
        index: 8,
    },
    {
        name: "María",
        country: "Colombia",
        description: "El mundo es un pañuelo",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2016",
        index: 9,
    },
    {
        name: "Andrés",
        country: "España",
        description: "El tiempo vuela cuando te diviertes",
        state: false,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2022",
        index: 10,
    },
    {
      name: "Carlos",
      country: "México",
      description: "La lluvia en Sevilla es una maravilla",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2021",
      index: 11,
  },
  {
      name: "Laura",
      country: "Argentina",
      description: "El sol siempre sale por el este",
      state: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2022",
      index: 12,
  },
  {
      name: "Pedro",
      country: "Perú",
      description: "El mar es un mundo lleno de vida",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2019",
      index: 13,
  },
  {
      name: "Marina",
      country: "Chile",
      description: "La felicidad está en las cosas más simples",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2018",
      index: 14,
  },
  {
      name: "Felipe",
      country: "Colombia",
      description: "La noche es más oscura justo antes del amanecer",
      state: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2020",
      index: 15,
  },
  {
      name: "Giselle",
      country: "España",
      description: "El mejor maestro es la experiencia",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2022",
      index: 16,
  },
  {
      name: "Adriana",
      country: "México",
      description: "La risa es el mejor remedio para el estrés",
      state: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2021",
      index: 17,
  },
  {
      name: "Mauricio",
      country: "Argentina",
      description: "La vida es una aventura que hay que disfrutar",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2020",
      index: 18,
  },
  {
      name: "Florencia",
      country: "Perú",
      description: "El amor es la fuerza más poderosa del universo",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2017",
      index: 19,
  },
  {
      name: "Javier",
      country: "Chile",
      description: "El que persevera, alcanza",
      state: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2019",
      index: 20,
  },
  {
      name: "Lucas",
      country: "Colombia",
      description: "La imaginación es la clave para la creatividad",
      state: true,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2018",
      index: 21,
  },
  {
      name: "Marisol",
      country: "España",
      description: "La naturaleza es la mejor obra de arte",
      state: false,
      created_at: new Date().toLocaleDateString(),
      updated_at: "2022",
      index: 22,
  }
];


const columnss = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '33%',
    render: (text: string, record: Email) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${record.index}`} />
        <span style={{ marginLeft: '12px' }}>{text}</span>
      </div>
    ),
  },
  {
    title: 'Fecha',
    dataIndex: 'created_at',
    key: 'created_at',
    width: '33%',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text: string, record: Email) => (
      <span>
        <Button type="primary" icon={<EditOutlined />}>Editar</Button>
        <Button style={{ marginLeft: '8px' }}>Ver</Button>
        <Button danger style={{ marginLeft: '8px' }} icon={<DeleteOutlined />}>Eliminar</Button>
      </span>
    ),
    width: '33%',
  },
];

const EmailsTable = (): JSX.Element => {
    const pagination = {
        pageSize: 10,
        showTotal: (total: number, range: [number, number]) => `Total = ${total} Mostrar = ${range[1] - range[0] + 1}`,
      };
  return (
    <Col span={20} offset={2}>
        <Table<Email> dataSource={INITIAL_STATE} columns={columnss} pagination={pagination} />
    </Col>
    
  );
};

export default EmailsTable;

/* const columns: ColumnsType<Email> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (<i>{text}</i>) ,
  },
  {
    title: 'Date',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="small">
        <Button> Ver</Button>
        <Button type="primary" icon={<EditOutlined />}></Button>
        <Button danger icon={<DeleteOutlined />}></Button>
      </Space>
    )
  }
];

const INITIAL_STATE: Array<Email>= [
    {
        name: "Fernando",
        country: "ARgetina",
        description: "Tres tristes tigres tragan trigo en un trigal",
        state: true,
        created_at: new Date().toLocaleDateString(),
        updated_at: "2012",
        index: 1
    },
  
    {
        name: "Gustavo",
        country: "Francia",
        description: "Casa de herrero cuchillo de palo",
        state: false,
        created_at: "2000", updated_at: "2023",
        index: 2
    },

    {
        name: "Tomas",
        country: "Italia",
        description: "Camarón que se duerme se lo lleva la corriente",
        state: true,
        created_at: "2005",
        updated_at: "2050",
        index: 3
    }
];

const EmailsTable: React.FC = () => <Table columns={columns} dataSource={INITIAL_STATE} />;

export default EmailsTable; */