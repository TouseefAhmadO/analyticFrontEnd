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
        const name = opts.w.globals.labels[opts.seriesIndex];
        const value = opts.w.globals.series[opts.seriesIndex].toLocaleString();
        return `${name}\n${value}`;
      },
      style: {
        fontSize: "10px",
        fontWeight: 600,
        textShadow: "0 0 black",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
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
    colors: ["#6ce5e8", "#79e0ff", "#7a91c1", "#7a70ae", "#8c55a1"],
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
        const name = opts.w.globals.labels[opts.seriesIndex];
        const value = opts.w.globals.series[opts.seriesIndex].toLocaleString();
        return `${name}\n${value}`;
      },
      style: {
        fontSize: "10px",
        fontWeight: 600,
        textShadow: "0 0 black",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: 70,
        },
        donut: {
          size: "0%",
        },
      },
    },
    colors: ["#6ce5e8", "#7fbbe9", "#7a91c1", "#a43288"],
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
        colors: ["#fff"],
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
          colors: "#fff",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 25,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#fff",
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
        colors: ["#fff"],
        fontSize: "12px",
      },
    },
    colors: ["#6ce5e8", "#41b8d5"],
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["Jameson", "Khalua", "Absolut"],
      labels: {
        rotate: -45,
        style: {
          colors: "#fff",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 20,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#fff",
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
        colors: ["#fff"],
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
          colors: "#fff",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max:25,
      title: {
        text: "Spend in Millions",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#fff",
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
