import styles from './StartScreen.module.css';

function StartScreen() {
  return (
    <div>
      StartScreen
      <div className={styles.logoContainer}>
        <img
          src="../../../public/ico.png"
          alt="logo"
          className={styles.logo}
        ></img>
      </div>
      <section className={styles.layers}>
        <div className={styles.layers__container}>
          <div className={`${styles.layers__item} ${styles.item1}`}></div>
          <div className={`${styles.layers__item} ${styles.item2}`}></div>
          <div className={`${styles.layers__item} ${styles.item3}`}>
            <div className={styles.content}>
              <h1>Shvarts Denis</h1>
              <h4>front-end developer</h4>
              <div className={styles.buttonContainer}>buttons</div>
            </div>
          </div>
          <div className={`${styles.layers__item} ${styles.item4}`}></div>
        </div>
      </section>
    </div>
  );
}

export default StartScreen;
