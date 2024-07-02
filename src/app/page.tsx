import Image from "next/image";
import styles from "./page.module.css";
import TestView from "./comp/webrtc";

export default function Home() {
  return (
    <main className={styles.main}>
     <TestView />
    </main>
  );
}
