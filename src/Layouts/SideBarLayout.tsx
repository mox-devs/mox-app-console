import React, { ReactNode } from 'react'
import styled from 'styled-components'
import SubMenu from '../components/SubMenu'
import * as RiIcons from 'react-icons/ri'
import Palette from '../styles/ColorPalette'
import Image from 'next/image'

interface Iprops {
  children: ReactNode
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`
const Content = styled.main`
  padding: 10px;
  background: ${Palette.bg};
`
const SidebarNav = styled.nav`
  display: flex;
  justify-content: center;
  height: calc(100vh);
  background: ${Palette.primary};
`
const SidebarWrap = styled.div`
  width: 100%;
`
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
`

const SideBarLayout: React.FC<Iprops> = ({ children }) => {
  const items = [
    {
      title: 'Inicio',
      path: '/home'
    },
    {
      title: 'Consola',
      path: '/console',
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Usuarios',
          path: '/console/users'
        },
        {
          title: 'On boarding',
          path: '/console/onBoarding'
        }
      ]
    }
  ]
  return (
    <Wrapper>
      <SidebarNav>
        <SidebarWrap>
          <ImgWrapper>
            <Image
              src="https://s3.amazonaws.com/mox.cash/website/615b3d76eef2b86a7a22a186_mox-main-logo-sep21.svg"
              alt="Picture of the author"
              width={130}
              height={30}
              loading="lazy"
            />
          </ImgWrapper>
          {items.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default SideBarLayout
