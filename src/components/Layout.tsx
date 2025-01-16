"use client";

import React, { ReactNode, useState } from "react";
import { Layout, Menu, theme, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import CustomFooter from "./Footer";
import { RiWhatsappFill } from "react-icons/ri";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link href="/" className="text-white">
        Home
      </Link>
    ),
  },
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
      <div className="flex flex-col min-h-screen">
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
              style={{ backgroundColor: color, color: "white" }}
              // defaultSelectedKeys={["1"]}
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

        <Content className="px-4 md:px-12 my-2 md:my-6 flex-1">
          {children}
        </Content>
        <a href="">
          <RiWhatsappFill
            size={40}
            className="text-green-500 fixed bottom-40 right-1"
          />
        </a>
        <Footer className="">
          <CustomFooter />
        </Footer>
      </div>
    </Layout>
  );
};

export default AppLayout;
