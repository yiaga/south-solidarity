import Heading from "../Headers/Heading";

interface Props {
  label: string;
  value: string;
}

const Stat = ({ label, value }: Readonly<Props>) => {
  return (
    <div className="">
      <Heading
        variant="h2"
        bold={false}
        className=" text-4xl font-bold flex space-x-1"
      >
        <span>{value}</span> <span className=" text-[#CB0706]">+</span>
      </Heading>
      <p className=" text-lg">{label}</p>
    </div>
  );
};

export default Stat;
