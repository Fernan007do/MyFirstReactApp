import { Avatar, Button, Col, List, Row } from "antd"
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons'
import { Email } from "../../../models/EmailModel"

export const EmailRow = (props: { email: Email }) => {
    const { email } = props
    return (
        <List.Item
            actions={[<Button type="primary" icon={<EditOutlined />}>Editar</Button>, <Button>Ver</Button>, <Button danger icon={<DeleteOutlined />}>Eliminar</Button>]}
        >
            <List.Item.Meta
                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${email.index}`} />}
                title={email.name}
                description={email.description}
            />
        </List.Item>
    )
}