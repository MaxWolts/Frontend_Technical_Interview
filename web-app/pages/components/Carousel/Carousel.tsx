import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Card } from "./Card";
import { SuccessCard } from "./SuccessCard";
import { NextButton } from "./NextButton";
import dataCards from "../../dataCards.json";
import styles from "./styles.module.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {
  const [isEnd, setIsEnd] = useState(false);
  const modules = [Navigation, Scrollbar, A11y]

  const handleSlideChange = (isEnd: boolean) => {
    setIsEnd(isEnd);
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} ${styles.paginationButton} ${index === 4 && styles.disappear}"></span>`;
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper.isEnd)}
        className={isEnd? `hiddenPagination ${styles.heightInLastCard}` : ""}
      >
        {dataCards.map((data, index) => (
          <SwiperSlide key={index}>
            <Card
              title={data.title}
              subtitleStrong={data.subtitleStrong}
              subtitle={data.subtitle}
              image={data.image}
              description={data.description}
              descriptionStrong={data.descriptionStrong}
              background={data.background}
              index={index}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <SuccessCard />
        </SwiperSlide>
        {!isEnd && <NextButton />}
      </Swiper>
    </div>
  );
};
