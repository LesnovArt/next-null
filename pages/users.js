import Link from 'next/Link'
import MainContainer from '../components/MainContainer'

export default function Users ({ users }) {
  return (
    <MainContainer keywords='users'>
      <h1>users page</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>
              <a className='link'>{`name: ${name}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

// ! give the edition props
export async function getStaticProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props : { users },
  }
}
