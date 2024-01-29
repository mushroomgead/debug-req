import { NextResponse } from "next/server";
import styles from "./page.module.css";
import { headers } from 'next/headers'


export default async function Home() {
  const headersList = headers();
  
  return (
    <main className={styles.main}>
      <div className="container-1">request header: 
      <pre>{JSON.stringify(headersList, null, 2)}</pre></div>
      <div>request body: </div>
    </main>
  );
}
