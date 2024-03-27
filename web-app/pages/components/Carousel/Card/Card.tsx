import Image from "next/image";
import localFont from 'next/font/local';
import styles from "./styles.module.css";

interface Props {
  title: string;
  subtitleStrong: string;
  subtitle: string;
  description: string;
  descriptionStrong: string;
  image: string;
  background: string;
  index: number;
}

const myFont = localFont({
  src: '../../../../public/fonts/Fontspring-DEMO-integralcf-regular.otf',
});

export const Card = ({
  title,
  subtitleStrong,
  subtitle,
  description,
  descriptionStrong,
  image,
  background,
  index,
}: Props) => {
  const IMAGE_STYLES_CLASS = [styles.imageStyle0, styles.imageStyle1, styles.imageStyle2, styles.imageStyle3];
  const BACKGROUND_TYPES = [styles.backgroundStyle0, styles.backgroundStyle1]

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeaderText}>
        <span className={`${myFont.className} ${styles.title}`}>{title}</span>
        {(subtitleStrong || subtitle) && <p className={styles.subtitle}>{subtitleStrong && <strong className={styles.subtitleStrong}>{subtitleStrong}</strong>} {subtitle && subtitle}</p>}
        {(descriptionStrong || description) && <p className={styles.description}>{description && description} {descriptionStrong && <strong className={styles.descriptionStrong}>{descriptionStrong}</strong>}</p>}
      </div>
      <div className={`${styles.imageContainer} ${IMAGE_STYLES_CLASS[index]}`}>
        {image && (
          <Image src={`${image}`} alt={`imagen ilustrativa de: ${title}`} fill />
        )}
      </div>
      {background && (
        <div className={`${styles.background} ${BACKGROUND_TYPES[index]}`} >
          <Image src={background} alt={"imagen vectorial de fondo"} fill />
        </div>
      )}
      <button className={styles.nextButton}>SIGUIENTE</button>
    </div>
  )
};
