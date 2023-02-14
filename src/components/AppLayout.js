import React from 'react';
import styles from '../styles/AppLayout.module.css';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <main className="flex bg-bgColor overflow-x-hidden px-[2rem] w-full max-w-[unset]">
      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className="flex flex-col pt-[2.5em] items-center w-full h-full rounded-lg bg-accentColor max-[1271px]:flex-row max-[1271px]:px-[2rem] max-[1271px]:justify-between max-[1271px]:py-[1rem]">
            <Link href="/">
              <img
                className="h-[30px] mb-[4em] max-[1271px]:mb-0"
                src="/assets/logo.svg"
              />
            </Link>
            <div className="[&>a>img]:mb-[1.5rem] max-[1271px]:[&>a>img]:mb-0 max-[1271px]:flex max-[1271px]:w-[50%] max-[1271px]:justify-between max-[1271px]:[&>a>img]:mx-[auto]">
              <Link href="/">
                <img className="h-[25px]" src="/assets/icon-nav-home.svg" />
              </Link>
              <Link href="/movies">
                <img className="h-[25px]" src="/assets/icon-nav-movies.svg" />
              </Link>
              <Link href="/series">
                <img
                  className="h-[25px]"
                  src="/assets/icon-nav-tv-series.svg"
                />
              </Link>
              <Link href="/bookmarked">
                <img
                  className="w-[25px] max-[1271px]:h-[25px] max-[1271px]:last:mr-0"
                  src="/assets/icon-nav-bookmark.svg"
                />
              </Link>
            </div>
            <img
              className="h-[50px] rounded-full mt-auto mb-[4em] max-[1271px]:mb-0 border-[2px] border-solid border-white-400"
              src="/assets/image-avatar.png"
            />
          </div>
        </nav>

        <section className={styles.content}>
          <div className="flex mb-[2rem] mt-[2.1rem]">
            <button className="mr-[20px]">
              <img className="w-[32px]" src="/assets/icon-search.svg" />
            </button>
            <input
              className="bg-transparent text-[20px] font-[300] w-full"
              type="text"
              placeholder="Search for Movies or TV"
              value=""
              onChange={() => {}}
            />
          </div>
          {children}
        </section>
      </div>
    </main>
  );
};
export default AppLayout;
