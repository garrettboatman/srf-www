import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/logo@2x.png';

const Header = ({ isHome = false }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      padding: `0 20px`,
    }}
  >
    <div
      style={{
        position: `absolute`,
        left: -9999,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Seek Refuge Productions
        </Link>
      </h1>
    </div>
    {!isHome && (
      <div style={{ maxWidth: 920, margin: `20px auto 0`, display: `flex` }}>
        <Link style={{ marginTop: 15 }} href="/">
          <span
            style={{
              display: `block`,
              width: 35,
              height: 3,
              background: `#FBDD78`,
              marginBottom: 7,
            }}
          ></span>
          <span
            style={{
              display: `block`,
              width: 35,
              height: 3,
              background: `#FBDD78`,
              marginBottom: 7,
            }}
          ></span>
          <span
            style={{
              display: `block`,
              width: 35,
              height: 3,
              background: `#FBDD78`,
            }}
          ></span>
        </Link>
        <div style={{ width: `100%`, textAlign: `center` }}>
          <Link href="/">
            <Image
              priority
              src={Logo}
              alt="Seek Refuge Productions"
              sizes="170w"
              style={{ maxWidth: 170, marginLeft: -35, height: 'auto' }}
            />
          </Link>
        </div>
      </div>
    )}
  </header>
);

export default Header;
