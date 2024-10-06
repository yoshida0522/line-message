import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>ようこそ！</h1>
      <p>このアプリでは、LINEメッセージAPIを使ってデータを送信できます。</p>

      <nav>
        <ul>
          <li>
            <Link className={styles.navLink} href="/create">
              データ入力フォームへ
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/about">
              このアプリについて
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
