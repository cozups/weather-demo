import { Temperature } from '@/components';

interface Props {
  highest: number;
  lowest: number;
  imgUrl: string;
  date: string;
  day: string;
}

function WeeklyWeatherItem({ highest, lowest, imgUrl, date, day }: Props) {
  return (
    <div className="w-full flex justify-between bg-neutral-50 rounded-sm px-2 py-1">
      <div className="flex items-center gap-3">
        <img src={imgUrl} alt="" />
        <Temperature value={highest} size="small" color="text-red-400" />
        <Temperature value={lowest} size="small" color="text-blue-400" />
      </div>
      <div className="flex items-center text-neutral-700 gap-3">
        <p>{date}</p>
        <p>{day}</p>
      </div>
    </div>
  );
}

export { WeeklyWeatherItem };
