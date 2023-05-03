import { Email } from '../../../models/EmailModel';
import { Table, Button, Avatar, Col, TableProps, List } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './table.css'
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import EmailModal from './EmailModal';

interface EmailTableProps {
  emailList: Email[];
  handleEmailDelete: (email: Email) => void;
  handleEmailRead: (email: Email) => void;
}




const EmailsTable = ({emailList, handleEmailDelete, handleEmailRead}:EmailTableProps): JSX.Element => {
  
  const columns: ColumnsType<Email> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Email) => (
        <div style={{display:'flex', alignItems: 'start', width:'100%' }}>
          <Avatar style={{display: 'inline-block  '}}src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${record.index}`} />
          <span style={{display:'flex', flexDirection:'column', alignItems: 'start', width:'100%', marginLeft:'1rem'}}>
            <span style={{fontWeight:'bold'}}>{text}</span>
            <p style={{margin:'0', fontStyle:'italic', color:'grey'}}>{record.description.slice(0, 50)}...</p>   
          </span>
                 
        </div>

      ),
      align: 'center',
      width: '33%',

    },
    {
      title: 'Fecha',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (created_at: string, record: Email) => (
        <span>
            {created_at}
        </span>
      ),
      align: 'center',
      width: '33%',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record:Email) => (
        <span>
          <Button type="primary" icon={<EditOutlined />}>Editar</Button>

          {/* VER: */}
          <EmailModal emailModal={record} handleEmailRead={handleEmailRead}/>

          {/* ELIMINAR :  diferentes botones dependiendo de si está eliminado o no */}
          {record.deleted == false ? 
          (
            <Button danger style={{ marginLeft: '8px' }} icon={<DeleteOutlined /> } onClick={() => handleEmailDelete(record)} >Eliminar</Button>
          ): 
          (
            <Button danger disabled style={{ marginLeft: '8px' }} icon={<DeleteOutlined /> }>Eliminar</Button>
          )
          }

        </span>
      ),
      align: 'center',
      width: '33%',
    },
  ];
  const pagination = {
        pageSize: 10,
        showTotal: (total: number, range: [number, number]) => `Total = ${total} Mostrar = ${range[1] - range[0] + 1}`,
      };
  return (
    <Col span={20} offset={2}>
        <Table dataSource={emailList} columns={columns} pagination={pagination} />
    </Col>
    
  );
};

export default EmailsTable;
