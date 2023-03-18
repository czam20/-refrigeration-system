import { Card, Flex, Title } from "@mantine/core";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import { userStyles } from "../../../../styles/ThermistorsStyle";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as titl,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    titl,
    Tooltip,
    Legend
  );
export const CardTemp = ({name}) => {
    const { classes } = userStyles();
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [200,600,200,500,400,300,800],
            borderColor: 'rgb(250,176,5)',
            backgroundColor: 'rgba(250, 176, 5, 0.5)',
          }
        ],
      };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

    return(
        <Card withBorder h={550} w={650} radius="md" padding="xl">
            <Title className={classes.titleCard}>{name}</Title>
            <Flex align={"center"} justify ={"space-between"} direction={"column"}>
                <GaugeChart id="gauge-chart1"
                    nrOfLevels={20} 
                    arcPadding={0.025} 
                    cornerRadius={3} 
                    percent={0.6} 
                    style={{
                        width: 400,
                        fontWeight: 500
                    }}
                    textColor="#00000" 
                    formatTextValue={value => value+' °C'} />
                    <div className={classes.chartContent}>
                        <Line data={data} options={options}></Line> 
                    </div>           
            </Flex>
        </Card>
    );
}