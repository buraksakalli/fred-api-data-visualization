import { Chart, Section } from "@/_components";

import {
  fetchDGS10MinusT10Y2Y,
  fetchGnpcaData,
  fetchT10Y2Y,
} from "@/_utils/dataUtils";

export default async function Page() {
  const [t10y2y, gnpca, dgs10] = await Promise.all([
    fetchT10Y2Y(),
    fetchGnpcaData(),
    fetchDGS10MinusT10Y2Y(),
  ]);

  return (
    <>
      <Section
        title="T10Y2Y -Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity"
        id="t10y2y"
      >
        <div className="w-full">
          <p className="text-primary-white text-sm tracking-tight mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Chart data={t10y2y} type="area" name="T10Y2Y" />
        </div>
      </Section>

      <Section
        title="GNPCA - Gross National Product in Constant Prices"
        id="gnpca"
      >
        <div className="w-full">
          <p className="text-primary-white text-sm tracking-tight mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Chart data={gnpca} type="bar" name="GNPCA" />
        </div>
      </Section>

      <Section
        title="DGS10 minus T10YIE - Yield Spread: 10-Year Treasury Minus 10-Year Inflation Expectations"
        id="dgs10"
      >
        <div className="w-full">
          <p className="text-primary-white text-sm tracking-tight mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Chart data={dgs10} type="line" name="DGS10" />
        </div>
      </Section>
    </>
  );
}
