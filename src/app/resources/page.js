import Footer from '@/components/footer';
import styles from './page.module.css';
import Header from '@/components/header';

export const metadata = {
  title: 'Resources | Seek Refuge Productions | Elma Begovic',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div style={{ paddingTop: 20, maxWidth: 600, margin: '0 auto' }}>
          <h1>Resources</h1>
          <p>
            Below is a growing directory of organizations and establishments
            that champion indie filmmaking and storytelling.
          </p>
          <ul className="resources-list">
            <li>
              <a href="https://womenandhollywood.com">Women and Hollywood</a>
            </li>
            <li>
              <a href="https://nofilmschool.com">No Film School</a>
            </li>
            <li>
              <a href="https://shotdeck.com">Shot Deck</a>
            </li>
            <li>
              <a href="https://www.sharegrid.com/losangeles">Sharegrid</a>
            </li>
            <li>
              <a href="https://womeninfilm.org">Women In Film</a>
            </li>
            <li>
              <a href="https://freethework.com">Free The Work</a>
            </li>
            <li>
              <a href="https://arraynow.com">Array</a>
            </li>
            <li>
              <a href="https://pillarsfund.org">Pillars Fund</a>
            </li>
            <li>
              <a href="https://collab.sundance.org">Sundance Collab</a>
            </li>
            <li>
              <a href="https://telefilm.ca/en">Telefilm</a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
