
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
        <h1 className={styles.title}>
          <Link href="/locations">Locations</Link>
        </h1>
    </div>
  )
}
