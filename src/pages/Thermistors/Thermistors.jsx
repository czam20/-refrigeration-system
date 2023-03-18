import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { userStyles } from "../../styles/ThermistorsStyle";
import CardTemp from "./components/CardTemp";

export const Thermistors = () => {
    const { classes } = userStyles();

    var dat = [
      {
        name: 'Termistor 1'
      },
      {
        name: 'Termistor 2'
      },
      {
        name: 'Termistor 3'
      },
      {
        name: 'Termistor 4'
      }
    ];
  
    return (
      <div>
        <Title className={classes.title}>Temperaturas</Title>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >{dat.map((data) => (
          <Carousel.Slide key={data.name} className={classes.contentCar}>
            <CardTemp name={data.name}></CardTemp>
          </Carousel.Slide>
        ))}
        </Carousel>
      </div>
    );
  };