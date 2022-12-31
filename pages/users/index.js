import styles from '../../styles/Ninja.module.css'
import Link from 'next/Link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
    return {
        props: {users: data}
    }
}


const Users = ({users}) => {
  return (
    <div>
        <h1>All Users list</h1>
        {users.map(user => (
            <div key={user.id}>
                <Link href={`users/${user.id}`} >
                    <h1 className={styles.single}>{user.name}</h1>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Users