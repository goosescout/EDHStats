import React from "react"

import styled from "styled-components"

import Navbar from "@/components/Navbar"

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />

      <PageWrapper>{children}</PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
