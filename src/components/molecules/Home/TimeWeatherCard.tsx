import { Card, Temperature } from '@/components';

interface Props {
  time: string;
  imgUrl: string;
  temperature: number;
}

function TimeWeatherCard({ time, imgUrl, temperature }: Props) {
  return (
    <Card className="min-w-24 flex flex-col items-center justify-center p-4">
      <p className="text-sm">{time}</p>
      <img src={imgUrl} alt="" className="w-12 h-12" />
      <Temperature value={temperature} size="small" />
    </Card>
  );
}

export { TimeWeatherCard };
