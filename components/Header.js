import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import styles from '/styles/Header.module.css';

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Clerk Playground</a>
      </Link>
      <SignedOut>
        {asPath !== '/sign-in' ? (
          <p className={styles.p}>
            Been here before?{' '}
            <Link href="/sign-in">
              <a className={styles.link}>Sign in</a>
            </Link>
          </p>
        ) : (
          <p className={styles.p}>
            New user?{' '}
            <Link href="/sign-up">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
        )}
      </SignedOut>
      <SignedIn>
        <UserButton
          userProfileURL="/user"
          afterSignOutAll="/"
          afterSignOutOneUrl="/"
        />
      </SignedIn>
    </header>
  );
};

export default Header;
