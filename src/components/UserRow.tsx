import React from 'react'
import Link from 'next/link'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { UserListInfo } from './UserList'

interface IProps {
  user: UserListInfo
}

const UserRow: React.FC<IProps> = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.rfc}</td>
      <td>{user.entidad}</td>
      <td>
        <Link href={`/console/${user.id}`}>
          <a>
            <BsFillInfoCircleFill />
          </a>
        </Link>
      </td>
    </tr>
  )
}

export default UserRow
