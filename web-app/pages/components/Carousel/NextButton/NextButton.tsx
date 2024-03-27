import { useSwiper } from 'swiper/react';
import styles from "./styles.module.css";

export const NextButton = () => {
  const swiper = useSwiper();
  const handleNextButtonClick = () => {
    swiper.slideNext();
  };

  return (
    <button className={styles.nextButton} onClick={handleNextButtonClick}>SIGUIENTE</button>
  )
};
