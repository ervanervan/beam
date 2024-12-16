import CityGrid from "./CityGrid";

type Country = {
  country: string;
  cities: string[];
};

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="flex flex-col gap-16">
      {countries.map((country, index) => (
        <div key={index} className="flex flex-col">
          <h4 className="text-h4 text-text-blackPrimary font-medium">
            {country.country}
          </h4>
          <CityGrid cities={country.cities} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
