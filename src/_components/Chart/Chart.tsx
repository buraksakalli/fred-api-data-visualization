"use client";

import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";

import type { Observation } from "@/_lib/types";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  suspense: true,
  loading: () => (
    <div
      style={{ height: 288 }}
      className="h-[288px] w-full animate-pulse bg-white/50 flex items-center justify-center"
    >
      chart is loading
    </div>
  ),
});

export const Chart = ({
  data,
  type = "line",
  name,
}: {
  data: Array<any>;
  type: "line" | "area" | "bar";
  name: string;
}) => {
  const filteredData = useMemo(() => {
    const MAX_DATA_POINTS = 15000;

    if (data.length <= MAX_DATA_POINTS) {
      return data;
    }

    const step = Math.ceil(data.length / MAX_DATA_POINTS);
    return data.filter((_, index) => index % step === 0);
  }, [data]);

  const series = [
    {
      name,
      data: filteredData
        .map((item) => [item.date, Number(item.value)])
        .filter((item) => !isNaN(Number(item[1])) && item[1] !== undefined),
    },
  ];

  const options = {
    chart: {
      animations: {
        enabled: false,
      },
      type,
      stacked: false,
      height: 350,
      zoom: {
        type: "x" as "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom" as "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    colors: ["#7052ed"],
    xaxis: {
      type: "datetime" as "datetime",
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          return value.toFixed(2);
        },
        type,
      },
    },
    fill:
      type === "area"
        ? {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100],
            },
          }
        : {
            type: "solid",
            opacity: 1,
          },
    tooltip: {
      theme: "dark",
      shared: false,
      x: {
        format: "dd MMM yyyy",
      },
    },
  };

  return (
    <div className="mt-12 w-full">
      <Suspense fallback={<div>loadingsss</div>}>
        <ApexCharts
          options={options}
          series={series}
          type={type}
          height={400}
          width="100%"
        />
      </Suspense>
    </div>
  );
};
