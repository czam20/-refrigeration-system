import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Title, Center, LoadingOverlay, Card } from "@mantine/core";
import { userStyles } from "../../styles/ThermistorsStyle";
import CardTemp from "./components/CardTemp";
import { useGetDates } from "../../hooks/useGetDates";
import { useOnValue } from "../../hooks/useOnValue";
import { formatDataset } from "../../utils/fomatter";

export const Thermistors = () => {
  const { classes } = userStyles();
  const therm1 = useOnValue("Refrigerador/TThe1");
  const therm2 = useOnValue("Refrigerador/TThe2");
  const therm3 = useOnValue("Refrigerador/TThe3");
  const dates = useGetDates();

  const loading =
    therm1.length && therm2.length && therm3.length && dates.length;

  const dat = [
    {
      name: "Termistor 1",
      dataset: formatDataset(dates, therm1),
    },
    {
      name: "Termistor 2",
      dataset: formatDataset(dates, therm2),
    },
    {
      name: "Termistor 3",
      dataset: formatDataset(dates, therm3),
    },
  ];

  return (
    <div>
      <Title className={classes.title}>Temperaturas</Title>
      {!loading ? (
        <Card withBorder h={550} w={"98%"} radius="md" padding="xl">
          <Center h={500}>
            <LoadingOverlay
              loaderProps={{ size: "xl", color: "#4ADE80" }}
              overlayOpacity={0.3}
              visible
            />
          </Center>
        </Card>
      ) : (
        <>
          <Carousel
            withIndicators
            draggable={false}
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {dat.map((data) => (
              <Carousel.Slide key={data.name} className={classes.contentCar}>
                <CardTemp dataset={data.dataset} name={data.name}></CardTemp>
              </Carousel.Slide>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
};
