import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/components/header';
import BigLogo from '../../public/images/logo@2x.png';

export const metadata = {
  title: 'Seek Refuge Productions | Elma Begovic',
  description:
    'Seek Refuge Productions is a production company in Los Angeles founded by Elma Begovic.',
};

export default function Home() {
  return (
    <>
      <Header isHome={true} />
      <main className={styles.main}>
        <div style={{ textAlign: `center`, paddingTop: 100 }}>
          <Image
            priority
            src={BigLogo}
            alt="Seek Refuge Productions"
            sizes="300w"
            style={{ maxWidth: 300, height: `auto` }}
          />

          <div
            style={{
              marginTop: 40,
              marginBottom: 100,
            }}
          >
            <div className="nav-item-wrapper">
              <Link href="/about" className="button light outline">
                About
              </Link>
            </div>
            <div className="nav-item-wrapper">
              <Link href="/projects" className="button light outline">
                Projects
              </Link>
            </div>
            <div className="nav-item-wrapper">
              <Link href="/press" className="button light outline">
                Press
              </Link>
            </div>
            <div className="nav-item-wrapper">
              <Link href="/resources" className="button light outline">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
