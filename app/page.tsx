import styles from "./page.module.css";
import { headers } from 'next/headers'

export default function Home() {
  const headersList = headers();
  
  return (
    <main className={styles.main}>
      <div className="container-1">request header: 
      <pre>{JSON.stringify(headersList, null, 2)}</pre></div>
      <div>request body: </div>
    </main>
  );
}
