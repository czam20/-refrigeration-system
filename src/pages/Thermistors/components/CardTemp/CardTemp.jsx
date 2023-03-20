import { Card, Flex, Title as MantineTitle } from "@mantine/core";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import { userStyles } from "../../../../styles/ThermistorsStyle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const CardTemp = ({ name, dataset }) => {
  const { classes } = userStyles();
  const lastTemp = dataset? dataset[dataset.length - 1]?.y / 100 : 0;
  const data = {
    datasets: [
      {
        label: "Temperatura",
        data: dataset,
        borderColor: "rgb(250,176,5)",
        backgroundColor: "rgba(250, 176, 5, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          y: { min: -100 },
          x: { min: 0 },
        },
        zoom: {
          wheel: {
            enabled: true, // SET SCROOL ZOOM TO TRUE
          },
        },
        pan: {
          enabled: true,
          mode: "xy",
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
        },
        stacked: true,
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,

        stacked: true,
      },
    },
    zoom: {
      wheel: {
        enabled: true,
      },
    },
  };

  return (
    <Card withBorder h={550} w={"98%"} radius="md" padding="xl">
      <MantineTitle className={classes.titleCard}>{name}</MantineTitle>
      <Flex align={"center"} justify={"space-between"}>
        <GaugeChart
          id={name}
          nrOfLevels={20}
          arcPadding={0.025}
          cornerRadius={3}
          percent={lastTemp}
          style={{
            width: 400,
            fontWeight: 500,
          }}
          textColor="#00000"
          formatTextValue={(value) => value + " °C"}
        />
        <div className={classes.chartContent}>
          <Line data={data} options={options}></Line>
        </div>
      </Flex>
    </Card>
  );
};
