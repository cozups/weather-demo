interface Props {
  value: number;
  unit: string;
}

function Degree({ value, unit }: Props) {
  return (
    <div>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-lg font-bold">{unit}</span>
    </div>
  );
}

export { Degree };
