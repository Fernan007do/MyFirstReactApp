
import EmailsTable from "./EmailList/Table";

import React from 'react';
import { Breadcrumb, Col, Layout, Menu, Row, Typography, theme } from 'antd';

const { Header, Content, Footer } = Layout;

export const EmailPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Row>
      <Layout>
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(4).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: index === 0 ? 'Bandeja de Entrada' : (index === 1 ? 'Leídos' : (index === 2 ? 'No Leídos' : 'Eliminados')),
              }))}
            />
          </Header>
          <Col span={22} offset={1} >
              <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
                  <h1>Bandeja de Entrada</h1>
                  <EmailsTable />
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
