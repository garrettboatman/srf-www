import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/header';
import IMDB from '../../../public/images/imdb.jpg';
import play from '../../../public/images/play.png';

import PAPoster from '../../../public/images/PA_poster.jpg';
import PALaurels from '../../../public/images/PA_laurels.jpg';

import TDWLPoster from '../../../public/images/TDWL_poster.jpg';
import TDWLLaurels from '../../../public/images/TDWL_laurels.jpg';

import UndonePoster from '../../../public/images/Undone_poster.jpg';
import UndoneLaurels from '../../../public/images/Undone_laurels.jpg';

import DoubtPoster from '../../../public/images/Doubt_poster.jpg';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Projects | Seek Refuge Productions | Elma Begovic',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div style={{ paddingTop: 20 }}>
          <div className="project">
            <div className="project-poster-standard">
              <Image
                priority
                sizes="280w"
                src={TDWLPoster}
                alt="The Day We Left | Poster"
                style={{}}
              />
            </div>
            <div className="project-laurels">
              <Image
                priority
                sizes="280w"
                src={TDWLLaurels}
                alt=""
                style={{}}
              />
            </div>
            <p>
              The religious conflict of the Bosnian War drives a pregnant mother
              and her family to flee their village and seek refuge in the land
              of their enemy.
            </p>
            <p className="project-credit">
              Directed by:{' '}
              <a href="https://www.imdb.com/name/nm4449173/">Kaio Kathriner</a>
            </p>
            <div className="project-buttons">
              <a className="imdb" href="https://www.imdb.com/title/tt15746196/">
                <Image sizes="280w" src={IMDB} alt="" />
              </a>
              <a
                className="play button light"
                href="https://www.radiodialfilm.com"
              >
                <Image sizes="280w" src={play} alt="play" /> Play
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-poster-standard">
              <Image
                sizes="280w"
                src={PAPoster}
                alt="Performance Anxiety | Poster"
                style={{}}
              />
            </div>
            <div className="project-laurels">
              <Image sizes="280w" src={PALaurels} alt="" style={{}} />
            </div>
            <p>
              An aspiring rapper travels through the desert with her DJ and
              manager after receiving a suspiciously divine request to perform
              at a secret Coachella afterparty.
            </p>
            <p className="project-credit">
              Directed by:{' '}
              <a href="https://www.imdb.com/name/nm12747219/">Trey Anderson</a>
            </p>
            <div className="project-buttons">
              <a className="imdb" href="https://www.imdb.com/title/tt15089230/">
                <Image sizes="280w" src={IMDB} alt="" />
              </a>
              <a
                className="play button light"
                href="https://vimeo.com/576100408"
              >
                <Image sizes="280w" src={play} alt="" /> Play
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-poster-standard">
              <Image
                sizes="280w"
                src={UndonePoster}
                alt="Undone | Poster"
                style={{}}
              />
            </div>
            <div className="project-laurels">
              <Image sizes="280w" src={UndoneLaurels} alt="" style={{}} />
            </div>
            <p>
              A raw look at the unconventional experiences of an immigrant woman
              trying to make it as a TV personality in Los Angeles.
            </p>
            <p className="project-credit">
              Directed by: <a href="https://www.j-stevens.com">J Stevens</a>
            </p>
            <div className="project-buttons">
              <a className="imdb" href="https://www.imdb.com/title/tt9189370/">
                <Image sizes="280w" src={IMDB} alt="" />
              </a>
              <a
                className="play button light"
                href="https://www.amazon.com/Undone-Elma-Begovic/dp/B07RYBQPHG"
              >
                <Image sizes="280w" src={play} alt="" /> Play
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-poster-square">
              <Image
                sizes="280w"
                alt="Doubt | Poster"
                src={DoubtPoster}
                style={{ paddingBottom: 20 }}
              />
            </div>
            <br />
            <p>
              <strong>&ldquo;Doubt&rdquo;</strong> is a music video for the
              artist &ldquo;Meetch&rdquo;
            </p>
            <p className="project-credit">
              Directed by:{' '}
              <a href="https://www.imdb.com/name/nm3965943/">Elma Begovic</a>
            </p>
            <div className="project-buttons">
              <a
                className="imdb"
                href="#"
                style={{ width: 0, overflow: 'hidden' }}
              >
                <Image sizes="280w" src={IMDB} alt="" />
              </a>
              <a
                className="play button light"
                href="https://www.youtube.com/watch?v=iOUIVrvbbpA"
                style={{ margin: 0 }}
              >
                <Image sizes="280w" src={play} alt="" /> Play
              </a>
            </div>
          </div>

          <div className="project"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
