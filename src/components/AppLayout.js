import React from 'react';
import styles from '../styles/AppLayout.module.css';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className="flex flex-col pt-[2.5em] items-center w-full h-full rounded-lg bg-accentColor max-[1271px]:flex-row max-[1271px]:px-[2rem] max-[1271px]:justify-between max-[1271px]:py-[1rem]">
          <img className="h-[30px] mb-[4em] max-[1271px]:mb-0" src="/assets/logo.svg" />
          <div className="[&>*]:mb-[1.5rem] max-[1271px]:[&>*]:mb-0 max-[1271px]:flex max-[1271px]:w-[50%] max-[1271px]:justify-between max-[1271px]:[&>*]:mx-[auto]">
            <img className="h-[25px]" src="/assets/icon-nav-home.svg" />
            <img className="h-[25px]" src="/assets/icon-nav-movies.svg" />
            <img className="h-[25px]" src="/assets/icon-nav-tv-series.svg" />
            <img className="w-[25px] max-[1271px]:h-[25px] max-[1271px]:last:mr-0" src="/assets/icon-nav-bookmark.svg" />
          </div>
          <img
            className="h-[50px] rounded-full mt-auto mb-[4em] max-[1271px]:mb-0 border-[2px] border-solid border-white-400"
            src="/assets/image-avatar.png"
          />
        </div>
      </nav>
      <section className={styles.content}>{children}</section>
    </div>
  );
};
export default AppLayout;
