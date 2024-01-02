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
          <div className={`${styles.layers__item} ${styles.item3}`}></div>
          <div className={`${styles.layers__item} ${styles.item4}`}>
            <div className={styles.content}>
              <h1>Shvarts Denis</h1>
              <h4>Front-end Developer</h4>
              <div className={styles.buttonContainer}>buttons</div>
            </div>
          </div>
          <div className={`${styles.layers__item} ${styles.item5}`}></div>
        </div>
      </section>
    </div>
  );
}

export default StartScreen;
