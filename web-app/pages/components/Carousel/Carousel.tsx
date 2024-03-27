import { Card } from "./Card";
import { SuccessCard } from "./SuccessCard";
import dataCards from "../../dataCards.json";

export const Carousel = () => {
  // console.log(React.Children.count(children));

  return (
    <div>
      {dataCards.map((data, index) => (
        <Card
          title={data.title}
          subtitleStrong={data.subtitleStrong}
          subtitle={data.subtitle}
          image={data.image}
          description={data.description}
          descriptionStrong={data.descriptionStrong}
          background={data.background}
          key={index}
          index={index}
        />
      ))}
      <SuccessCard />
    </div>
  );
};
