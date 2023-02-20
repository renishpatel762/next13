import styles from './page.module.css'
import User from './user';
import {notFound} from 'next/navigation'
// export const revalidate = 12
export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //after 60 second it will again fetch data instead of cache
  const res = await data.json();
  // console.log(res);
  // if(0===0){
  //   notFound();
  // }
  return (
    <main className={styles.main}>
      <h1>Hello NextJS 13🔥</h1>
      <div className='grid gap-20 grid-cols-fluid'>
        {
          res.map((pitem) =>
          (
              <User id={pitem.id} name={pitem.name} email={pitem.email}
              username={pitem.username}
              key={pitem.id}
              />
          ))
        }
      </div>
    </main>
  )
}
