
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
        <h1 className={styles.title}>
          <Link href="/locations">Locations</Link>
        </h1>
  )
}
