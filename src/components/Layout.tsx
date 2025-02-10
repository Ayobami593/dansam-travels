"use client";

import React, { ReactNode, useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import CustomFooter from "./Footer";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link href="/" className="">
        Home
      </Link>
    ),
  },
  {
    key: "2",
    label: "Services",
    children: [
      {
        key: "2-1",
        label: <Link href="/services/visa-assistance">Visa Assistance</Link>,
      },
      {
        key: "2-2",
        label: <Link href="/services/approved-visas">Approved Visa</Link>,
      },
      {
        key: "2-3",
        label: <Link href="/services/flight-booking">Flight Booking</Link>,
      },
    ],
  },
  {
    key: "3",
    label: "Study Abroad",
    children: [
      {
        key: "3-1",
        label: (
          <Link href="/studydestinations/study-in-russia">Study in Russia</Link>
        ),
      },
      {
        key: "3-2",
        label: (
          <Link href="/studydestinations/study-in-china">Study in China</Link>
        ),
      },
      {
        key: "3-3",
        label: (
          <Link href="/studydestinations/study-in-belarus">
            Study in Belarus
          </Link>
        ),
      },
    ],
  },
  { key: "4", label: <Link href="/contact-us">Contact Us</Link> },
  { key: "5", label: <Link href="/about-us">About Us</Link> },
  { key: "6", label: <Link href="/faqs">FAQs</Link> },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const color = "#235e5e";
  const menuTextColor = "#ffffff";
  return (
    <Layout>
      <div className="flex flex-col min-h-screen w-full">
        <Header
          className="sticky top-0 z-10 w-full flex items-center"
          style={{ backgroundColor: color, color: menuTextColor }}
        >
          <div className="flex justify-between items-center w-full px-3">
            <Link href="/">
              <img
                src="/companylogoDark.jpg"
                alt=""
                className="size-14 rounded-full"
              />
            </Link>
            <Button
              className="md:hidden text- bg-none"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
            <Menu
              theme="light"
              mode="horizontal"
              style={{
                backgroundColor: color,
                fontSize: "1rem",
                borderBottom: "none",
              }}
              items={items}
              className="hidden md:flex flex-1 justify-end text-white"
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
            items={items}
            onClick={() => setDrawerVisible(false)}
          />
        </Drawer>

        <Content className="px-4 w-full md:px-0 md:w-[90%] mx-auto my-2 md:my-4 flex-1">
          {children}
        </Content>
        <a
          href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
          target="_blank"
          className="fixed bottom-24 right-1"
        >
          <RiWhatsappFill size={50} className="text-green-500" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
          target="_blank"
          className="fixed bottom-10 right-1 flex gap-2 items-center bg-[#183f3f] px-6 py-3 rounded-md"
        >
          <IoLogoWhatsapp size={24} className="text-white" />
          <span className="rounded-full text-white">Chat with us</span>
        </a>
        {/* <div className="fixed bottom-40 right-1 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                className="transform -rotate-12"
              >
                <path
                  id="circle"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text className="text-lg font-bold fill-current text-green-600">
                  <textPath href="#circle" startOffset="15%">
                    We are here!
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappFill size={40} className="text-green-500" />
              </a>
            </div>
          </div>
        </div> */}
        <Footer className="px-2" style={{ backgroundColor: color }}>
          <CustomFooter />
        </Footer>
      </div>
    </Layout>
  );
};

export default AppLayout;
