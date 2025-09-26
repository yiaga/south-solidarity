import Stat from "./Stat";

const stats = [
  {
    value: "130",
    label: "Delegates",
  },

  {
    value: "24",
    label: "Countries",
  },

  {
    value: "40",
    label: "Speakers",
  },
];

const Statistics = () => {
  return (
    <ul className="grid grid-cols-3 gap-8 lg:gap-16 text-color-text **mx-auto**">
      {stats.map(({ label, value }) => {
        return (
          <li key={label}>
            <Stat label={label} value={value} />{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default Statistics;
