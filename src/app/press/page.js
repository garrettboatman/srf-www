import Footer from '@/components/footer';
import styles from './page.module.css';
import Header from '@/components/header';

export const metadata = {
  title: 'Press | Seek Refuge Productions | Elma Begovic',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div style={{ paddingTop: 20, maxWidth: 600, margin: '0 auto' }}>
          <h1>Press</h1>
          <p>Articles and interviews featuring Elma Begovic.</p>
          <ul className="resources-list">
            <li>
              <a
                target={'_blank'}
                href="https://hnmag.ca/interview/talent-on-tap-elma-begovic-presents-the-day-we-left-at-vsff/"
              >
                Elma Begovic Presents The Day We Left at VSFF | Talent on Tap
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                href="https://www.createastir.ca/articles/the-day-we-left-vsff"
              >
                Refugee experience drives Bosnian drama &lsquo;The Day We
                Left&rsquo; at the Vancouver Short Film Festival
              </a>
            </li>
            <li>
              <a target={'_blank'} href="https://vimeo.com/666921597">
                The Day We Left - Global BC Interview with star Elma Begovic
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                href="https://filmcraziest.wordpress.com/2022/02/01/interview-actress-elma-begovic-on-her-short-film-the-day-we-left-horror-film-bite/"
              >
                Actress Elma Begovic on Her Short Film “The Day We Left,” Horror
                Film “Bite”
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                href="https://horrornews.net/141716/psychological-thriller-tear-us-apart-starring-elma-begovic-bite-makes-world-premiere/"
              >
                Psychological Thriller Tear Us Apart Starring Elma Begovic
                (Bite) Makes World Premiere
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                href="https://www.instagram.com/tv/CKMuZH1hpYA/?hl=en"
              >
                Minute Shorts with Elma Begovic
              </a>
            </li>
            <li>
              <a target={'_blank'} href="https://vimeo.com/540913135">
                Morning For All | Jutro Za Sve Sarajevo - Elma Begovic Interview
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                href="https://melrosetradingpost.org/cutie-pie-of-the-day-dogsofmtp-8/"
              >
                Melrose Trading Post | JAN 13 CUTIE PIE OF THE DAY!
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
