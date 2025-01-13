import React, { ReactNode, useState } from "react";
import { Layout, Menu, theme, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import CustomFooter from "./Footer";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "1", label: <Link href="/">Home</Link> },
  {
    key: "2",
    label: "Services",
    children: [
      { key: "2-1", label: <Link href="/services/visa">Visa Services</Link> },
      { key: "2-2", label: <Link href="/services/hotel">Hotel Services</Link> },
    ],
  },
  { key: "3", label: <Link href="/contact-us">Contact Us</Link> },
  {
    key: "4",
    label: "Study Abroad",
    children: [
      {
        key: "4-1",
        label: (
          <Link href="/studydestinations/study-in-russia">Study in Russia</Link>
        ),
      },
      {
        key: "4-2",
        label: (
          <Link href="/studydestinations/study-in-china">Study in China</Link>
        ),
      },
      {
        key: "4-3",
        label: (
          <Link href="/studydestinations/study-in-belarus">
            Study in Belarus
          </Link>
        ),
      },
    ],
  },
  { key: "5", label: <Link href="/about-us">About Us</Link> },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const color = "#429a98";

  return (
    <Layout>
      <Header
        className="sticky top-0 z-10 w-full flex items-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <div className="text-white font-bold cursor-pointer">
              Dansam Travels and Educonsult
            </div>
          </Link>
          <Button
            className="md:hidden text- bg-none"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
          <Menu
            theme="light"
            mode="horizontal"
            style={{ backgroundColor: color }}
            defaultSelectedKeys={["1"]}
            items={items}
            className="hidden md:flex flex-1 justify-end"
          />
        </div>
      </Header>
      <Drawer
        placement="right"
        closable
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="md:hidden"
        width={300}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={() => setDrawerVisible(false)}
        />
      </Drawer>

      <Content className="px-6 md:px-12 my-6">
        <div
          className="p-6 min-h-screen"
          style={{ background: "", borderRadius: "" }}
        >
          {children}
        </div>
      </Content>
      <Footer className="">
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default AppLayout;
