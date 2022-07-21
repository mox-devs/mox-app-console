import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../images/128x128.png'
import { List, UserListInfo, users } from './UserList'

// ----- Types & Interfaces -----

interface IProps {
  id: string
}

// ----- Styles -----

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 10px;
  width: 724px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`

const ImgContainer = styled.div`
  margin: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 20px;
  width: 100%;
`

const SideInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 20px;
`

const SideInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 4rem;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 4rem;
`

const Title = styled.h4`
  margin: 0;
  font-weight: 600;
  line-height: 19px;
`

const P = styled.p`
  margin: 8px 0 10px;
  font-weight: 400;
`

// ----- Component Logic ------

const UserDetail: React.FC<IProps> = ({ id }) => {
  const [user, setUser] = useState<UserListInfo>()

  useEffect(() => {
    setUser(users.find(user => user.id === id))
  })

  return (
    <Container>
      <Card>
        <ImgContainer>
          <Image src={img} alt="user-profile" width="128px" height="128px" />
        </ImgContainer>
        <SideInfo>
          <SideInfoWrapper>
            <Title>Nombre y Apellido</Title>
            <P>{user?.name}</P>
          </SideInfoWrapper>
          <SideInfoWrapper>
            <Title>Fecha de Nacimiento</Title>
            <P>18/10/2002</P>
          </SideInfoWrapper>
        </SideInfo>
      </Card>
      <Card>
        <ContentWrapper>
          <TextWrapper>
            <Title>RFC</Title>
            <P>{user?.rfc}</P>
          </TextWrapper>
          <TextWrapper>
            <Title>Fecha de Contratación</Title>
            <P>13/04/2018</P>
          </TextWrapper>
          <TextWrapper>
            <Title>Período de pago</Title>
            <P>Quincena</P>
          </TextWrapper>
          <TextWrapper>
            <Title>Remuneración</Title>
            <P>$2600</P>
          </TextWrapper>
        </ContentWrapper>
      </Card>
      <Card>
        <ContentWrapper>
          <List>
            <thead>
              <tr>
                <th className="no-sort">Servicio</th>
                <th className="no-sort">Entidad</th>
                <th className="no-sort">Habilitado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crédito</td>
                <td>Entidad</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Crédito</td>
                <td>Entidad</td>
                <td>No</td>
              </tr>
            </tbody>
          </List>
        </ContentWrapper>
      </Card>
    </Container>
  )
}

export default UserDetail
