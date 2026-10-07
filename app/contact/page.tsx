import {ContactContent} from '@/components/detailComponents/contactpage/ContactContent'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Emil Kazimov",
    url: "/contact",
  },
};

const Contact = () => {
  return (
    <>
    <ContactContent/>
    </>
  )
}

export default Contact
