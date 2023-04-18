import { useState } from "react"
import { Email } from "../../models/EmailModel"
import { Button, Col, Row } from "antd";
import { EmailRow } from "./EmailList/EmailRow";
import { EmailList } from "./EmailList/EmailList"




export const EmailPage: React.FC = () => {

  return (
    <Row>
        <Col span={16} offset={4}>
            <EmailList/>
        </Col>
    </Row>
  );

}
