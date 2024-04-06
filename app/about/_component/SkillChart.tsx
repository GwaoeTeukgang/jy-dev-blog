'use client'

import {Bubble} from "react-chartjs-2";
import React from "react";
import {Chart as ChartJS, LinearScale, PointElement, Tooltip,} from 'chart.js';
import JSIcon from '@/public/icon/js-icon.png';

ChartJS.register(LinearScale, PointElement, Tooltip);


export default function SkillChart() {
    const options = {
        scales: {
            y: {
                grid: {
                    // display: false
                },
                beginAtZero: true,
                ticks: {
                    min: 0,
                    max: 4,
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
                        size: 20,
                        weight: 'bold',
                        color: 'black',

                    },
                },
            },
            x: {
                display: false
            }
        },
        plugins: {
            hover: {
                mode: null // 마우스 호버 이벤트 비활성화
            }
        }
    } as any;

    const getData = (label: string, level: number, img: string, seqNo: number, size: number = 15) => {
        return {
            label,
            data: [
                {x: seqNo, y: level, r: size}
            ],
            pointStyle: JSIcon,
            pointRadius: size
        }
    }


    const data = {
        datasets: [
            {
                points: [
                    {
                        x: 1,
                        y: 1,
                        z: 20,
                        name: ' item.country',
                        marker_size: 20,
                        label_text:
                            '<img src=' +
                            JSIcon.src +
                            ' width=' +
                            20 +
                            ' height=' +
                            20 +
                            '>'
                    }
                ]
            }
        ],
    } as any;

    return <Bubble
        options={options}
        // plugins={[drawHorizontalBackgroundStripesPlugin]}
        data={data}
    />
}