import React from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-wordcloud';

  const myColors = ['#8e5f52', '#8aa1b1', '#c3cdd5', '#3d5467']; 

  const WordCloud = ({ words }) => {
    // Convert the incoming words to ECharts data format
    const echartsWordData = words.map(word => ({
      name: word.text, // ECharts expects 'name' field for the text
      value: word.value, // 'value' remains the same
      textStyle: {
        // Optional: you can customize the style for each word here
        normal: {
          fontFamily: 'sans-serif',
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#8e5f52',
        },
      },
    }));
  
    // Configuration for ECharts Word Cloud
    const option = {
      tooltip: {},
      series: [
        {
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 60], // Minimum and maximum font sizes
          rotationRange: [-90, 90], // Rotation angle range
          shape: 'pentagon',
          width: '100%',
          height: '100%',
          drawOutOfBound: false,
          textStyle: {
            // normal: {
            //   color: () => `rgb(${[
            //     Math.round(Math.random() * 160),
            //     Math.round(Math.random() * 160),
            //     Math.round(Math.random() * 160),
            //   ].join(',')})`,
            // },
            normal: {
                color: () => myColors[Math.floor(Math.random() * myColors.length)],
              },
          },
          data: echartsWordData,
        },
      ],
    };
  
    return (
      <div style={{ width: '100%', height: '400px' }}>
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    );
  };
  
  export default WordCloud;