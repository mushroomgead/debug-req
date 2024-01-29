import styles from "./page.module.css";
import { headers } from 'next/headers'

export default function Home() {
  const headersList = headers();
  
  return (
    <main className={styles.main}>
      <div className="container-1">request header: {JSON.stringify(headersList, null, 2)}</div>
      <div>request body: </div>
    </main>
  );
}
