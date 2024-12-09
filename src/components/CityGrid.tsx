interface CityGridProps {
  cities: string[];
}

const CityGrid = ({ cities }: CityGridProps) => {
  return (
    <div className="grid grid-cols-4 items-center mt-3 gap-y-2">
      {cities.map((city, index) => (
        <p
          key={index}
          className="text-text-blackSecondary text-body2 whitespace-nowrap"
        >
          {city}
        </p>
      ))}
    </div>
  );
};

export default CityGrid;
