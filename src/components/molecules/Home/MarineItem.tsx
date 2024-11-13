interface Props {
  label: string;
  time: string;
}

function MarineItem({ label, time }: Props) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm">{label}</p>
      <p className="text-lg font-bold">{time}</p>
    </div>
  );
}

export { MarineItem };
