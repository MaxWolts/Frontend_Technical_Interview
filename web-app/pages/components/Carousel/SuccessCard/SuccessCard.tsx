import Image from "next/image";
import localFont from 'next/font/local';

import styles from "./styles.module.css";

const myFont = localFont({
  src: '../../../../public/fonts/Fontspring-DEMO-integralcf-regular.otf',
});

export const SuccessCard = () => {
  return (
    <div className={styles.successContent}>
      <div className={styles.checkImage}>
        <Image src={"images/card5.svg"} alt={"check success"} fill/>
      </div>
      <div>
        <span className={`${styles.title} ${myFont.className}`}>¡FELICITACIONES!</span>
        <p className={styles.subtitle}>Bienvenido a WIN</p>
      </div>
      <p className={styles.description}>Ya puedes ser parte del mundo del deporte</p>
    </div>
  )
};
