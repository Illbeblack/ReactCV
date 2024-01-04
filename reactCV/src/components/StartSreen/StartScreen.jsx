import styles from './StartScreen.module.css';

function StartScreen() {
  document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
      style: `
      --moveX: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --moveY: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
      `,
    });
  });
  return (
    <div>
      {/* <section className={styles.layers}>
        <div className={styles.layers__container}>
          <div className={`${styles.layers__item} ${styles.item1}`}></div>
          <div className={`${styles.layers__item} ${styles.item2}`}></div>
          <div className={`${styles.layers__item} ${styles.item3}`}></div>
          <div className={`${styles.layers__item} ${styles.item4}`}>
            <div className={styles.content}>
              <h1>Shvarts Denis</h1>
              <h4>Front-end Developer</h4>
              <div className={styles.buttonContainer}>
                <a
                  href="https://www.linkedin.com/in/denis-shvarts-051081275/"
                  className={styles.LinkedIn}
                >
                  <img
                    src="../../../public/linkedin-96.svg"
                    alt="link to LinkedIn"
                  />
                </a>
                <button className={styles.startButton}>move to CV</button>
                <a
                  href="mailto:ShvartsDenisA@gmail.com"
                  className={styles.gmail}
                >
                  <img src="../../../public/gmail-96.svg" alt="link to Gmail" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.layers__item} ${styles.item5}`}></div>
        </div>
      </section> */}
      <section className={styles.layers}>
        <div className={styles.layers__container}>
          <div className={`${styles.layers__item} ${styles.item1}`}></div>
          <div className={`${styles.layers__item} ${styles.item2}`}></div>
          <div className={`${styles.layers__item} ${styles.item3}`}></div>
          <div className={`${styles.layers__item} ${styles.item4}`}></div>
          <div className={`${styles.layers__item} ${styles.item5}`}>
            <div className={styles.content}>
              <h1>Shvarts Denis</h1>
              <h4>Front-end Developer</h4>
              <div className={styles.buttonContainer}>
                <a
                  href="https://www.linkedin.com/in/denis-shvarts-051081275/"
                  className={styles.LinkedIn}
                >
                  <img
                    src="../../../public/linkedin-96.svg"
                    alt="link to LinkedIn"
                  />
                </a>
                <button className={styles.startButton}>move to CV</button>
                <a
                  href="mailto:ShvartsDenisA@gmail.com"
                  className={styles.gmail}
                >
                  <img src="../../../public/gmail-96.svg" alt="link to Gmail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartScreen;
