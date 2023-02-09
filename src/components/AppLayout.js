import React from 'react';
import styles from '../styles/AppLayout.module.css';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className="flex flex-col pt-[2.5em] items-center w-full h-full rounded-lg bg-accentColor">
          <img className="h-[30px] mb-[4em]" src="/assets/logo.svg" />
          <div className="[&>*]:mb-[1.5rem]">
            <img className="h-[25px]" src="/assets/icon-nav-home.svg" />
            <img className="h-[25px]" src="/assets/icon-nav-movies.svg" />
            <img className="h-[25px]" src="/assets/icon-nav-tv-series.svg" />
            <img className="w-[25px]" src="/assets/icon-nav-bookmark.svg" />
          </div>
          <img
            className="h-[50px] rounded-full mt-auto mb-[4em] border-[2px] border-solid border-white-400"
            src="/assets/image-avatar.png"
          />
        </div>
      </nav>
      <section className={styles.content}>{children}</section>
    </div>
  );
};
export default AppLayout;
