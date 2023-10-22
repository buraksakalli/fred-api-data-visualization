import type { Observation } from "@/_lib/types";

export const filterGnpcaData = (gnpca: any): Array<Observation> => {
  const filteredData = gnpca.observations.filter((observation: Observation) => {
    const observationYear = new Date(observation.date).getFullYear();
    const currentYear = new Date().getFullYear();

    if (isNaN(observationYear)) {
      return false;
    }

    const yearsDifference = currentYear - observationYear;
    return yearsDifference <= 20;
  });

  return filteredData;
};
