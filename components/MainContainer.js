import Head from "next/head";
import React from "react";
import styles from "../styles/MainContainer.module.css";
import A from "./A";

function MainContainer({ children, keywords, title }) {
  return (
    <div>
      <Head>
        <meta keywords={"nextjs " + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className={styles.navbar}>
        <A href="/">Main</A>
        <A href="/users">Users</A>
      </div>
      {children}
    </div>
  );
}

export default MainContainer;
