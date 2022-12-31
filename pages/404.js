
import Link from 'next/Link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
const NotFound = () => {
const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push("/")
        },3000)
    },[])

  return (
    <div className="not-found">
        <h1>Ooops...</h1>
        <p>Sorry Mr Amr Samir This Page Not Found </p>
        <p>You Can Go To 
            <Link href="/" legacyBehavior><a> Home Page</a></Link>
        </p>
    </div>
  )
}

export default NotFound