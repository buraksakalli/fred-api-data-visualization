import { filterGnpcaData } from "@/_utils/dataFilters";

describe("filterGnpcaData", () => {
  it("should filter observations correctly", () => {
    const mockData = {
      observations: [
        { date: "2004-01-01", value: "100" },
        { date: "2022-01-01", value: "200" },
      ],
    };

    const result = filterGnpcaData(mockData);

    expect(result).toEqual([
      { date: "2004-01-01", value: "100" },
      { date: "2022-01-01", value: "200" },
    ]);
  });
});
