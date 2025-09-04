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
    value: "130",
    label: "Partners",
  },

  {
    value: "130",
    label: "Speakers",
  },
];

const Statistics = () => {
  return (
    <ul className=" grid grid-cols-4 gap-8 lg:gap-16 text-color-text">
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
