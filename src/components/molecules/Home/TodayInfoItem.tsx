import { ReactNode } from 'react';

interface Props {
  svg: ReactNode;
  text: string;
}

function TodayInfoItem({ svg, text }: Props) {
  return (
    <div className="flex items-center gap-2">
      {svg}
      {text}
    </div>
  );
}

export { TodayInfoItem };
