interface Props {
  value: number;
  size: string;
  color?: string;
}

function Temperature({ value, size, color }: Props) {
  let valueClassName = '';
  let unitClassName = '';
  if (size === 'small') {
    valueClassName = 'text-xl';
    unitClassName = 'text-sm';
  }
  if (size === 'medium') {
    valueClassName = 'text-2xl';
    unitClassName = 'text-md';
  }
  if (size === 'large') {
    valueClassName = 'text-6xl';
    unitClassName = 'text-3xl';
  }

  if (color) {
    valueClassName += ` ${color}`;
  }

  return (
    <div className="flex items-start gap-[2px]">
      <span
        className={`${valueClassName} scroll-m-20 font-extrabold tracking-tight`}
      >
        {value}
      </span>
      <span className={`${unitClassName} font-bold mt-1`}>&#8451;</span>
    </div>
  );
}

export { Temperature };
