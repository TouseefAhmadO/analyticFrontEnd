export const HDChart = {
  series: [1200000, 800000, 100000, 400000, 110000],
  options: {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: [
      "Halo Branded Solutions",
      "HUB Folding Box",
      "Motive Marketing Group",
      "Ben S. Loeb",
      "AJ Displays",
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // const name = opts.w.globals.labels[opts.seriesIndex];
        const value = opts.w.globals.series[opts.seriesIndex].toLocaleString();
        return `${value}`;
      },
      style: {
        fontSize: "10px",
        fontWeight: 600,
        textShadow: "0 0 black",
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      position: "right",
    },
    plotOptions: {
      pie: {
        dataLabels: {
        },
        donut: {
          size: "50%",
        },
      },
    },
    colors: ["#02a5ae", "#09b9c5", "#01d6e1", "#087e82", "#6ce5e8"],
  },
};

export const SDDChart = {
  series: [1200000, 800000, 100000, 400000],
  options: {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: [
      "Signature Marketing",
      "Motive Marketing Group",
      "HUB Folding Box",
      "Halo Branded Solutions Inc",
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // const name = opts.w.globals.labels[opts.seriesIndex];
        const value = opts.w.globals.series[opts.seriesIndex].toLocaleString();
        return `${value}`;
      },
      style: {
        fontSize: "10px",
        fontWeight: 600,
        textShadow: "0 0 black",
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      show: false,
    },
    legend: {
      show: true,
      position: "right",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: 10,
        },
        donut: {
          size: "0%",
        },
      },
    },
    colors: ["#02a5ae", "#09b9c5", "#01d6e1", "#087e82"],
  },
};

export const HBChart = {
  series: [
    {
      name: "2024",
      data: [18, 10, 8, 1, 2],
    },
    {
      name: "2025",
      data: [20, 16, 14, 3, 1],
    },
  ],
  options: {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "90%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -25,

      style: {
        colors: ["#747474"],
        fontSize: "12px",
      },
    },
    colors: ["#6ce5e8", "#41b8d5"],
    stroke: {
      show: false,
    },
    xaxis: {
      categories: [
        "Permanent Visibility",
        "Disposable Display",
        "Garments & Accessories",
        "Drinkware",
        "Gifts",
      ],
      labels: {
        rotate: -45,
        style: {
          colors: "#747474",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 25,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#747474",
        },
      },
      labels: {
        style: {
          colors: "#747474",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#747474",
      },
      markers: {
        radius: 12,
      },
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export const HSBChart = {
  series: [
    {
      name: "2024",
      data: [3, 8, 16],
    },
    {
      name: "2025",
      data: [6, 14, 18],
    },
  ],
  options: {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "90%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -25,
      style: {
        colors: ["#747474"],
        fontSize: "12px",
      },
    },
    colors: ["#04b105", "#04a4aa"],
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["Jameson", "Khalua", "Absolut"],
      labels: {
        rotate: -45,
        style: {
          colors: "#747474",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 20,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#747474",
        },
      },
      labels: {
        style: {
          colors: "#747474",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#747474",
      },
      markers: {
        radius: 12,
      },
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export const SDSBChart = {
  series: [
    {
      name: "2024",
      data: [3, 8, 16, 5, 20, 10, 5, 8, 10, 16, 10, 4],
    },
    {
      name: "2025",
      data: [10, 18, 6, 8, 10, 6, 11, 18, 3, 6, 20, 18],
    },
    {
      name: "Orders",
      data: [5, 12, 9, 15, 10, 4, 15, 18, 2, 6, 1, 14],
    },
  ],
  options: {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -25,
      style: {
        colors: ["#747474"],
        fontSize: "12px",
      },
    },
    colors: ["#6ce5e8", "#41b8d5", "#ed955f"],
    stroke: {
      show: false,
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      labels: {
        rotate: -45,
        style: {
          colors: "#747474",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 25,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#747474",
        },
      },
      labels: {
        style: {
          colors: "#747474",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#747474",
      },
      markers: {
        radius: 12,
      },
    },
    tooltip: {
      theme: "dark",
    },
  },
};

// //   series: [
// //     {
// //       name: "2024",
// //       group: "budget",
// //       color: "#008FFB",
// //       data: [18, 10, 8, 1],
// //     },

// //     {
// //       name: "2025",
// //       group: "actual",
// //       color: "#80c7fd",
// //       data: [20, 16, 14, 3],
// //     },
// //     {
// //       name: "2024",
// //       group: "budget",
// //       color: "red",
// //       data: [8, 10, 8, 1],
// //     },
// //   ],
// //   options: {
// //     chart: {
// //       type: "bar",
// //       background: "transparent",
// //       // stacked: true,
// //       toolbar: {
// //         show: false,
// //       },
// //     },
// //     grid: {
// //       show: true,
// //     },
// //     plotOptions: {
// //       bar: {
// //         horizontal: false,
// //         columnWidth: "90%",
// //         borderRadius: 5,
// //         borderRadiusApplication: "end",
// //         dataLabels: {
// //           position: "top",
// //         },
// //       },
// //     },
// //     dataLabels: {
// //       enabled: false,
// //       offsetY: -25,

// //       style: {
// //         // colors: ["#fff"],
// //         fontSize: "12px",
// //       },
// //     },
// //     colors: ["#6ce5e8", "#41b8d5"],
// //     stroke: {
// //       show: false,
// //     },
// //     xaxis: {
// //       categories: ["FEB", "MAR", "APR", "MAY"],
// //       labels: {
// //         rotate: -45,
// //         style: {
// //           colors: "#fff",
// //           fontSize: "12px",
// //         },
// //       },
// //     },
// //     yaxis: {
// //       max: 25,
// //       title: {
// //         // text: "Spend in Millions",
// //         style: {
// //           color: "#fff",
// //         },
// //       },
// //       labels: {
// //         style: {
// //           colors: "#fff",
// //         },
// //       },
// //     },
// //     legend: {
// //       position: "bottom",
// //       horizontalAlign: "center",
// //       labels: {
// //         colors: "#fff",
// //       },
// //       markers: {
// //         radius: 12,
// //       },
// //     },
// //     tooltip: {
// //       theme: "dark",
// //     },
// //   },
// // };

// export const StackedChart = {
//   series: [
//     {
//       name: "Category A",
//       color: "#00B050",
//       group: "budget",
//       data: [30, 20, 55, 30],
//     },
//     {
//       name: "Category B",
//       color: "#00B0F0",
//       data: [31, 30, 15, 40],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       background: "transparent",
//       stacked: true,
//       toolbar: {
//         show: false,
//       },
//     },
//     grid: {
//       show: true,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "65%",
//         borderRadius: 5,
//         borderRadiusApplication: "end",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       categories: ["FEB", "MAR", "APR", "MAY"],
//       labels: {
//         rotate: 0,
//         style: {
//           colors: "#fff",
//           fontSize: "12px",
//         },
//       },
//     },
//     yaxis: {
//       max: 75,
//       labels: {
//         style: {
//           colors: "#fff",
//         },
//       },
//     },
//     legend: {
//       position: "bottom",
//       horizontalAlign: "center",
//       labels: {
//         colors: "#fff",
//       },
//       markers: {
//         radius: 12,
//       },
//     },
//     tooltip: {
//       theme: "dark",
//     },
//     colors: ["#00B050", "#00B0F0", "#92D050"],
//   },
// };

export const StackedChart = {
  series: [
    {
      name: "2024",
      data: [4800, 7300, 6500, 7000],
    },
    {
      name: "2025",
      data: [4000, 4500, 5000, 3000],
    },
  ],
  options: {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: { show: false },
    },
    grid: { show: true },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#04b105", "#04a4aa"],
    stroke: { show: false },
    xaxis: {
      categories: ["FEB", "MAR", "APR", "MAY"],
      labels: {
        rotate: -45,
        style: {
          colors: "#747474",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 7500,
      labels: {
        style: { colors: "#747474" },
        formatter: (val) => `$ ${val / 1000}K`,
      },
    },
    legend: { show: false },
    tooltip: { theme: "dark" },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: { columnWidth: "60%" },
          },
          xaxis: {
            labels: {
              rotate: -30,
              style: { fontSize: "10px" },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: { columnWidth: "50%" },
          },
          xaxis: {
            labels: {
              rotate: -20,
              style: { fontSize: "9px" },
            },
          },
        },
      },
    ],
  },
};

export const DonutChart = {
  series: [26250, 20000, 23750, 10000],
  options: {
    chart: {
      type: "donut",
      width: "100%",
      background: "transparent",
    },
    labels: ["$26,250", "$20,000", "$23,750", "$10,000"],
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        const value = opts.w.globals.series[opts.seriesIndex].toLocaleString();
        return `${name}\n${value}`;
      },
      style: {
        fontSize: "30px",
        fontWeight: 600,
        textShadow: "0 0 black",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
    },
    legend: {
      show: true,
      labels: {
        fontSize: "36px",
      },
      position: "right",
      verticalAlign: "center",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: 30,
        },
        donut: {
          size: "50%",
        },
      },
    },
    colors: ["#02a5ae", "#09b9c5", "#01d6e1", "#087e82"],
  },
};

export const LineChart = {
  series: [
    {
      name: "Desktops",
      data: [0, 3500, 4500, 7000],
    },
  ],
  options: {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: { show: false },
    },
    grid: { show: true },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#04b105", "#04a4aa"],
    // stroke: "curve",
    xaxis: {
      categories: ["Q1", "Q2", "Q3", "Q4"],
      labels: {
        rotate: -45,
        style: {
          colors: "#747474",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 7500,
      labels: {
        style: { colors: "#747474" },
        formatter: (val) => `$ ${val / 1000}K`,
      },
    },
    legend: { show: false },
    tooltip: { theme: "dark" },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: { columnWidth: "60%" },
          },
          xaxis: {
            labels: {
              rotate: -30,
              style: { fontSize: "10px" },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: { columnWidth: "50%" },
          },
          xaxis: {
            labels: {
              rotate: -20,
              style: { fontSize: "9px" },
            },
          },
        },
      },
    ],
  },
};
