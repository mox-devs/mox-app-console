import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Palette from '../styles/ColorPalette'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import UserRow from './UserRow'

// ----- Types -----
export type UserListInfo = {
  id: string
  name: string
  rfc: string
  entidad: string
}

type Values = {
  search: string
}

type formikFunctions = {
  setSubmitting: (boolean: boolean) => void
  resetForm: () => void
}

// ----- Mock Info -----
const users: UserListInfo[] = [
  { id: '1', name: 'John Doe', rfc: 'JODO167846NL', entidad: 'Uber' },
  { id: '2', name: 'Xavier Doe', rfc: 'XADO167846NL', entidad: 'Deel' },
  { id: '3', name: 'Mike Hill', rfc: 'MIHIO167846NL', entidad: 'Uber' },
  { id: '4', name: 'Marta Hill', rfc: 'MAHI167846NL', entidad: 'Deel' },
  { id: '5', name: 'Zack Lopez', rfc: 'ZALO167846NL', entidad: 'Uber' },
  { id: '6', name: 'Rob Rob', rfc: 'RORO167846NL', entidad: 'Deel' }
]

// ----- Styles -----
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

const Card = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 40px 34px;
  width: 724px;
  min-height: 319px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`

const List = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    text-align: center;

    th {
      border-bottom: 2px solid ${Palette.success};
      padding: 0.9rem 0;

      &:first-child {
        text-align: left;
      }

      &:hover {
        color: ${Palette.primary};
        cursor: pointer;
      }

      &:active {
        color: ${Palette.dark};
      }
    }

    .no-sort:hover {
      color: ${Palette.dark};
      cursor: auto;
    }
  }

  tbody {
    text-align: center;

    td {
      border-bottom: 1px solid ${Palette.gray};
      padding: 0.8rem 0;
      font-weight: 350;

      &:first-child {
        text-align: left;
      }
    }
    a {
      color: ${Palette.info};
    }
  }
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const Input = styled(Field)`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0 15px;
  width: 30%;
  height: 40px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  text-align: left;
  background: ${Palette.bg_input};
`
const Button = styled.button`
  margin: 0 10px 0 15px;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 10px;
  height: 40px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 1em;
  color: ${Palette.light};
  background: ${Palette.primary};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: ${Palette.secondary};
  }

  &.danger {
    background: ${Palette.danger};
  }
`

// ----- Component Logic -----

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<UserListInfo[]>([])
  const [searchResult, setSearchResult] = useState<UserListInfo[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [sorted, setSorted] = useState({
    name: false,
    nameArrow: '▲',
    entity: false,
    entityArrow: '▲'
  })

  useEffect(() => {
    setUserList(users)
  })

  const initialValues: Values = { search: '' }

  // ----- Sorting Functions -----

  const sortByName = (userArray: UserListInfo[]) => {
    if (sorted.nameArrow === '▲') {
      setSorted({ name: true, nameArrow: '▼', entity: false, entityArrow: '▲' })
      return userArray.sort((a, b) => {
        return a.name < b.name ? -1 : 1
      })
    } else if (sorted.nameArrow === '▼') {
      setSorted({ name: true, nameArrow: '▲', entity: false, entityArrow: '▲' })
      return userArray.sort((a, b) => {
        return a.name > b.name ? -1 : 1
      })
    }
  }

  const sortByEntity = async (userArray: UserListInfo[]) => {
    if (sorted.entityArrow === '▲') {
      setSorted({ name: false, nameArrow: '▲', entity: true, entityArrow: '▼' })
      return userArray.sort((a, b) => {
        return a.entidad < b.entidad ? -1 : 1
      })
    } else if (sorted.entityArrow === '▼') {
      setSorted({ name: false, nameArrow: '▲', entity: true, entityArrow: '▲' })
      return userArray.sort((a, b) => {
        return a.entidad > b.entidad ? -1 : 1
      })
    }
  }

  // ----- Search Functions -----

  const handleClear = () => {
    setSorted({ name: false, nameArrow: '▲', entity: false, entityArrow: '▲' })
    setSearchResult([])
    setIsSearching(false)
  }

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: formikFunctions
  ) => {
    setSubmitting(true)

    setSorted({ name: false, nameArrow: '▲', entity: false, entityArrow: '▲' })

    const nameSearch = new RegExp(values.search.trim().toLowerCase())
    const rfcSearch = new RegExp(values.search.trim())

    setSearchResult(
      userList.filter(
        user =>
          nameSearch.test(user.name.toLowerCase()) || rfcSearch.test(user.rfc)
      )
    )
    setIsSearching(true)
    resetForm()
    setSubmitting(false)
  }

  const validationSchema = Yup.object({
    search: Yup.string().required()
  })

  return (
    <Container>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) =>
            handleSubmit(values, { setSubmitting, resetForm })
          }
        >
          {({ values, handleChange }) => (
            <StyledForm>
              <Input
                name="search"
                value={values.search}
                onChange={handleChange}
                placeholder="Busca un usuario"
              />
              <Button type="submit">Buscar</Button>
              {isSearching && (
                <Button className="danger" onClick={handleClear}>
                  Limpiar busqueda
                </Button>
              )}
            </StyledForm>
          )}
        </Formik>
        <List>
          <thead>
            <tr>
              <th
                onClick={() => {
                  isSearching ? sortByName(searchResult) : sortByName(userList)
                }}
              >
                Nombre y Apellido{' '}
                {sorted.name && <span>{sorted.nameArrow}</span>}
              </th>
              <th className="no-sort">RFC</th>
              <th
                onClick={() => {
                  isSearching
                    ? sortByEntity(searchResult)
                    : sortByEntity(userList)
                }}
              >
                Entidad Registrada{' '}
                {sorted.entity && <span>{sorted.entityArrow}</span>}
              </th>
              <th className="no-sort">Info</th>
            </tr>
          </thead>
          <tbody>
            {isSearching
              ? searchResult.map(user => <UserRow key={user.id} user={user} />)
              : userList.map(user => <UserRow key={user.id} user={user} />)}
          </tbody>
        </List>
      </Card>
    </Container>
  )
}

export default UserList
