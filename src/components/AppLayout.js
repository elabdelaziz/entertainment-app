import React from 'react';
import styles from '../styles/AppLayout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AppLayout = ({ children }) => {
  const router = useRouter();

  return (
    <main className="flex bg-bgColor overflow-x-hidden px-[2rem] w-full max-w-[unset]">
      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className="flex flex-col pt-[2.5em] items-center w-full h-full rounded-lg bg-accentColor max-[1271px]:flex-row max-[1271px]:px-[2rem] max-[1271px]:justify-between max-[1271px]:py-[1rem]">
            <Link href="/">
              <Image
                width={40}
                height={30}
                className="h-[30px] mb-[4em] max-[1271px]:mb-0"
                src="/assets/logo.svg"
              />
            </Link>
            <div className="[&>a>img]:mb-[1.5rem] [&>a>img]:transition-[0.3s] max-[1271px]:[&>a>img]:mb-0 max-[1271px]:flex max-[1271px]:w-[50%] max-[1271px]:justify-between max-[1271px]:[&>a>img]:mx-[auto]">
              <Link href="/">
                <Image
                  width={25}
                  height={25}
                  className={`${
                    router.pathname === '/' &&
                    'filter brightness-[0] invert-[1]'
                  } h-[25px] hover:translate-x-[3px] hover:filter hover:brightness-[0] hover:invert-[1]`}
                  src="/assets/icon-nav-home.svg"
                />
              </Link>
              <Link href="/movies">
                <Image
                  width={25}
                  height={25}
                  className={`${
                    router.pathname === '/movies' &&
                    'filter brightness-[0] invert-[1]'
                  } hover:translate-x-[3px] hover:filter hover:brightness-[0] hover:invert-[1]} h-[25px] hover:translate-x-[3px] hover:filter hover:brightness-[0] hover:invert-[1]`}
                  src="/assets/icon-nav-movies.svg"
                />
              </Link>
              <Link href="/series">
                <Image
                  width={25}
                  height={25}
                  className={`${
                    router.pathname === '/series' &&
                    'filter brightness-[0] invert-[1]'
                  } hover:translate-x-[3px] hover:filter hover:brightness-[0] hover:invert-[1]`}
                  src="/assets/icon-nav-tv-series.svg"
                />
              </Link>
              <Link href="/bookmarked">
                <Image
                  width={25}
                  height={25}
                  className={`${
                    router.pathname === '/bookmarked' &&
                    'filter brightness-[0] invert-[1]'
                  } hover:translate-x-[3px] max-[1271px]:last:mr-0 hover:filter hover:brightness-[0] hover:invert-[1]`}
                  src="/assets/icon-nav-bookmark.svg"
                />
              </Link>
            </div>
            <Image
              width={50}
              height={50}
              className="h-[50px] rounded-full mt-auto mb-[4em] max-[1271px]:mb-0 border-[2px] border-solid border-white-400"
              src="/assets/image-avatar.png"
            />
          </div>
        </nav>

        <section className={styles.content}>{children}</section>
      </div>
    </main>
  );
};
export default AppLayout;
