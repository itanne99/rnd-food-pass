import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [data, setData] = useState(null)

  const getPass = () =>{
    fetch(process.cwd()+'api/Pass-Gen').then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }

  return (<div className={
    styles.container
  }>
    <main className={
      styles.main
    }>
      <button onClick={getPass}>Generate Pass</button>
      <h1>{data}</h1>
    </main>
  </div>)
}
