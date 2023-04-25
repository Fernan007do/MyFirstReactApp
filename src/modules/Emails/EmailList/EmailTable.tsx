import { Email } from '../../../models/EmailModel';
import { Table, Button, Avatar, Col, TableProps } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './table.css'
import { ColumnsType } from 'antd/es/table';

interface EmailTableProps {
  emailList: Email[];
}
const columns: ColumnsType<Email> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
    render: (created_at: string, record: Email) => (
      <span>
          {created_at}
      </span>
    ),
    width: '100px'
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
    align: 'center'
    
    
  },
];

const EmailsTable = ({emailList}:EmailTableProps): JSX.Element => {
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