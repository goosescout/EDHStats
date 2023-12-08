import React from "react"

import styled from "styled-components"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />

      <PageWrapper>{children}</PageWrapper>

      <Footer />
    </>
  )
}

const PageWrapper = styled.div`
  max-width: 1440px;
  margin: calc(74px + 32px) auto 0;
  width: 100%;
`
