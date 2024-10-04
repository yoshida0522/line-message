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
            <Link href="/create">
              <a className={styles.navLink}>データ入力フォームへ</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.navLink}>このアプリについて</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
