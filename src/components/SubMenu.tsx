import React, { useState } from 'react'
import styled from 'styled-components'
import Palette from '../styles/ColorPalette'
import ActiveLink from './ActiveLink'

interface subItem {
  title: string
  path: string
  icon?: React.ReactNode
}

interface IProps {
  item: {
    title: string
    path: string
    icon?: React.ReactNode
    iconClosed?: React.ReactNode
    iconOpened?: React.ReactNode

    subNav?: subItem[]
  }
}

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  color: #e1e9fc;
  transition: 300ms;

  &:hover {
    border-left: 4px solid ${Palette.alt_5};
    background: #252831;
    cursor: pointer;
  }
`
const SidebarLabel = styled.span`
  margin-left: 16px;
`
const DropdownLink = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 0 5px 3rem;
  font-size: 18px;
  text-decoration: none;
  color: #f5f5f5;
  background: #414757;
  transition: 300ms;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`

const SubMenu: React.FC<IProps> = ({ item }) => {
  const [subNav, setSubNav] = useState(false)

  const showSubNav = () => setSubNav(!subNav)
  if (item.subNav)
    return (
      <>
        <SidebarLink onClick={item.subNav && showSubNav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subNav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subNav &&
          item.subNav.map((item, index) => {
            return (
              <ActiveLink activeClassName="active" href={item.path} key={index}>
                <DropdownLink>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              </ActiveLink>
            )
          })}
      </>
    )
  return (
    <ActiveLink activeClassName="active" href={item.path}>
      <SidebarLink onClick={item.subNav && showSubNav}>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </SidebarLink>
    </ActiveLink>
  )
}

export default SubMenu
