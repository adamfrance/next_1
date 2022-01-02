import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan aliquam elit sit amet tincidunt. Nunc dictum vitae velit et
          luctus. Mauris tempor nunc sed erat semper feugiat volutpat a lectus.
          Integer a magna ut est mattis sodales. Pellentesque ac felis pharetra,
          tristique libero nec, egestas nisl. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
          volutpat. Ut ligula libero, semper ut enim at, blandit luctus est.
          Mauris vehicula id libero eget scelerisque.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan aliquam elit sit amet tincidunt. Nunc dictum vitae velit et
          luctus. Mauris tempor nunc sed erat semper feugiat volutpat a lectus.
          Integer a magna ut est mattis sodales. Pellentesque ac felis pharetra,
          tristique libero nec, egestas nisl. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
          volutpat. Ut ligula libero, semper ut enim at, blandit luctus est.
          Mauris vehicula id libero eget scelerisque.
        </p>
        <Link href="/file1">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  );
}
