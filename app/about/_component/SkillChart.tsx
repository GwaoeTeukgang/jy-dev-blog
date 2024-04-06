'use client';

import { Bubble } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip } from 'chart.js';
import { useMediaQuery } from '@/hooks/useMediaQuery';

ChartJS.register(LinearScale, PointElement, Tooltip);

const customCanvasBackgroundColor = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart: any) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

export default function SkillChart() {
  const xMap: number[] = [];
  const isMobile = useMediaQuery('(max-width: 768px)');
  const getData = (
    label: string,
    level: number,
    imgSrc: string,
    size: number = 15,
  ) => {
    const icon = new Image();
    icon.src = imgSrc;
    icon.width = isMobile ? size / 4 : size;
    icon.height = isMobile ? size / 4 : size;

    let x = Math.floor(Math.random() * 20) * 5 + 5;

    while (!xMap.every((it) => it !== Math.floor(x))) {
      console.log(
        xMap.every((it) => it !== Math.floor(x)),
        x,
      );
      x = Math.floor(Math.random() * 20) * 5 + 5;
    }

    xMap.push(Math.floor(x));

    return {
      label,
      data: [{ x, y: level, r: 40 }],
      pointStyle: icon,
      pointRadius: 40,
    };
  };

  const data = {
    datasets: [
      { data: [{ x: 0, y: 0, r: 0 }] },
      { data: [{ x: 25, y: 3, r: 0 }] },

      getData('Oracle DB', 0.3, '/icon/oracle-icon.svg', 40),
      getData('Git', 2.3, '/icon/git-icon.svg', 55),
      getData('GitHib', 2, '/icon/github-icon.svg', 55),
      getData('GitLab', 2.5, '/icon/gitlab-icon.svg', 55),
      getData('maira DB', 1, '/icon/mariadb-icon.svg', 60),
      getData('vue.js', 1.7, '/icon/vue-icon.svg', 70),
      getData('Next.js', 2.5, '/icon/nextjs-icon.svg', 80),
      getData('spring', 2, '/icon/spring-icon.svg', 80),
      getData('java', 2, '/icon/java-icon.svg', 90),
      getData('typescript', 2.2, '/icon/ts-icon.png', 110),
      getData('React.js', 2.5, '/icon/react-icon.svg', 110),
      getData('javascript', 2.5, '/icon/js-icon.png', 130),
    ],
  };

  const options = {
    scales: {
      y: {
        grid: {
          // display: false
        },
        beginAtZero: true,
        ticks: {
          min: 1,
          max: 10,
          stepSize: 0.5,
          callback: (value: any, index: any, values: any) => {
            switch (value) {
              case 0.5:
                return 'Experience  ';
              case 1.5:
                return 'Knowledge  ';
              case 2.5:
                return 'Strong  ';
              default:
                return '';
            }
          },
          font: {
            family: 'LeferiPoint-BlackObliqueA',
            size: isMobile ? 10 : 16,
            weight: 'bold',
            color: 'black',
          },
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (
              context.datasetIndex !== undefined &&
              context.dataIndex !== undefined
            ) {
              const datasetLabel =
                context.chart.data.datasets[context.datasetIndex].label || '';
              return datasetLabel;
            }
            return '';
          },
        },
        backgroundColor: '#FFF',
        bodyColor: '#000',
        bodyFont: {
          family: 'LeferiPoint-BlackObliqueA',
          size: 15,
          color: 'black',
        },
        padding: 10,
        xAlign: 'center',
        yAlign: 'bottom',
        borderColor: '#fc5f6a',
        borderWidth: 1,
        displayColors: false,
      },
    },
  } as any;

  return (
    <div className={'p-1 lg:m-10 mb-10 bg-white rounded-lg'}>
      <Bubble
        options={options}
        plugins={[customCanvasBackgroundColor]}
        data={data}
      />
    </div>
  );
}
