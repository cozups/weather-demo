import {
  Card,
  CardContent,
  CommonCardHeader,
  TimeWeatherCard,
} from '@/components';

function HourlyCard() {
  return (
    <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
      <CommonCardHeader
        title="Hourly"
        description="오늘의 시간대별 날씨를 조회하고 있습니다."
      />
      <CardContent className="flex items-center gap-2 overflow-x-scroll">
        <TimeWeatherCard
          time="오전 0시"
          imgUrl="src/assets/icons/1000n.svg"
          temperature={17}
        />
        <TimeWeatherCard
          time="오전 1시"
          imgUrl="src/assets/icons/1000n.svg"
          temperature={18}
        />
        <TimeWeatherCard
          time="오전 2시"
          imgUrl="src/assets/icons/1000n.svg"
          temperature={19}
        />
        <TimeWeatherCard
          time="오전 3시"
          imgUrl="src/assets/icons/1000n.svg"
          temperature={19}
        />
        <TimeWeatherCard
          time="오전 4시"
          imgUrl="src/assets/icons/1000n.svg"
          temperature={19}
        />
        <TimeWeatherCard
          time="오전 5시"
          imgUrl="src/assets/icons/1000d.svg"
          temperature={19}
        />
        <TimeWeatherCard
          time="오전 6시"
          imgUrl="src/assets/icons/1000d.svg"
          temperature={19}
        />
        <TimeWeatherCard
          time="오전 7시"
          imgUrl="src/assets/icons/1000d.svg"
          temperature={19}
        />
      </CardContent>
    </Card>
  );
}

export { HourlyCard };
