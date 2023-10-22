import { cache } from "react";

import type { Response } from "@/_lib/types";

export const getGnpca = cache(async (): Promise<Response> => {
  try {
    const response = await fetch(
      `${String(
        process.env.FRED_API_URL
      )}/fred/series/observations?series_id=GNPCA&api_key=${
        process.env.FRED_API_KEY
      }&file_type=json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching GNP data: ${error.message}`);
  }
});

export const getT10Y2Y = cache(async (): Promise<Response> => {
  try {
    const response = await fetch(
      `${String(
        process.env.FRED_API_URL
      )}/fred/series/observations?series_id=T10Y2Y&api_key=${
        process.env.FRED_API_KEY
      }&file_type=json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching T10Y2Y data: ${error.message}`);
  }
});

export const getDgs10 = cache(async (): Promise<Response> => {
  try {
    const response = await fetch(
      `${String(
        process.env.FRED_API_URL
      )}/fred/series/observations?series_id=DGS10&api_key=${
        process.env.FRED_API_KEY
      }&file_type=json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching DGS10 data: ${error.message}`);
  }
});

export const t10Yie = cache(async (): Promise<Response> => {
  try {
    const response = await fetch(
      `${String(
        process.env.FRED_API_URL
      )}/fred/series/observations?series_id=T10YIE&api_key=${
        process.env.FRED_API_KEY
      }&file_type=json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching T10YIE data: ${error.message}`);
  }
});
