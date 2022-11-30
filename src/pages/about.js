import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/about.module.scss";

export default function About() {
  return (
    <Layout>
      <div className='site-header'>
          <article className={styles.body}>
            <h1 className={styles.nadpis}>About me</h1>
            <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
      </div>
    </Layout>
  )
}
