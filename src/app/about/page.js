import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/components/header';
import Elma from '../../../public/images/elma.jpg';
import Footer from '@/components/footer';

export const metadata = {
  title: 'About | Seek Refuge Productions | Elma Begovic',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div style={{ maxWidth: 480, margin: `0 auto` }}>
          <div style={{ padding: `0 20px` }}>
            <div className="about-elma">
              <Image
                priority
                src={Elma}
                alt="Elma Begovic"
                sizes="440w"
                style={{ height: 'auto' }}
              />
            </div>
            <p style={{ marginTop: 5, fontSize: 14 }}>
              Artist:{' '}
              <a href="https://www.meganschreiberdesigns.com">
                Megan Schreiber Designs
              </a>
            </p>
            <p>
              The amalgamation of my personal world and movies came around age
              8, when I watched <i>Bridges of Madison County</i> for the first
              time. I was a refugee in east Berlin, calling a repurposed dorm
              room my temporary home, and Meryl and Clint were dubbed in German.
              At such a turbulent time, one encompassed in grief and a whole lot
              of trauma bonding with my family, movies offered the ultimate
              escape - and in later years, inspiration to pursue a career in the
              industry.
            </p>
            <p>
              I started acting as soon as my family found fair footing in a new
              country and I finessed the English language. My first credits are
              in horror, a genre I uncovered as a teenager, while working at a
              movie theatre in northeast Edmonton. I saw <i>The Omen</i> on my
              16th birthday, which fell on 6/6/6, and a natural progression
              toward genre films ensued.
            </p>
            <p>
              In 2017, I moved from Toronto to LA, where I&rsquo;ve been living
              that &lsquo;alien of extraordinary ability&rsquo; life [iykyk]. I
              pivoted toward writing and producing my own work as a way to weave
              themes of migration and identity, religious exploration, and the
              womxn immigrant experience into the industry&rsquo;s tapestry. I
              started SRP to become a better storyteller and grow my creative
              community. Building a story from inception to screening is an
              unmatched experience, like syzygy in space. I am reminded of that
              well misquoted line from <i>Field of Dreams</i> (another movie I
              first saw dubbed in Deutsch), &lsquo;if you build it, they will
              come&rsquo;. This site hosts work I have written and produced -
              independently, with collaborators, and via grants.
            </p>
            <p>
              <strong>[tl;dr]</strong> I love movies, love making them too.
              Reach out if you&rsquo;re into that as well.
            </p>
            <p>- Elma Begovic</p>
            <br />
            <a
              style={{ margin: 0 }}
              href="mailto:hello@seekrefugeproductions.com"
              className="button light"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
