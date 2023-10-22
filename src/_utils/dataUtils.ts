import { getDgs10, getGnpca, getT10Y2Y } from "@/_actions";
import { filterGnpcaData } from "./dataFilters";

import type { Observation } from "@/_lib/types";

export const fetchGnpcaData = async (): Promise<Array<Observation>> => {
  try {
    const gnpca = await getGnpca();
    return filterGnpcaData(gnpca);
  } catch (error: any) {
    throw new Error(`Error filtering GNP data: ${error.message}`);
  }
};

export const fetchDGS10MinusT10Y2Y = async (): Promise<
  {
    date: string;
    value: number;
  }[]
> => {
  try {
    const dgs10Data = await getDgs10();
    const t10y2ieData = await getT10Y2Y();

    const difference = dgs10Data.observations.map((dgs10Item, index) => {
      const t10yieValue = t10y2ieData.observations[index]?.value || 0;
      return Number(dgs10Item.value) - Number(t10yieValue);
    });

    const observations = dgs10Data.observations.map((dgs10Item, index) => {
      return {
        date: dgs10Item.date,
        value: difference[index],
      };
    });

    return observations;
  } catch (error: any) {
    throw new Error(`Error filtering GNP data: ${error.message}`);
  }
};

export const fetchT10Y2Y = async () => {
  try {
    const t10y2ieData = await getT10Y2Y();

    return t10y2ieData.observations;
  } catch (error: any) {
    throw new Error(`Error filtering GNP data: ${error.message}`);
  }
};
