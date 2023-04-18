import { useState } from "react";
import { Email } from "../../../models/EmailModel";
import { EmailRow } from "./EmailRow";
import { Col, List, Row } from "antd";

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

export const EmailList: React.FC = () => {

    const [Emails, setEmails] = useState<Array<Email>>(INITIAL_STATE)
    return (
        <List
        itemLayout="horizontal"
        dataSource={Emails}
        renderItem={(email) => <EmailRow email={email} />}
        />
      );
}
