import {
  Card,
  CardContent,
  CommonCardHeader,
  WeeklyWeatherItem,
} from '@/components';

function WeeklyWeatherCard() {
  return (
    <Card className="w-1/4">
      <CommonCardHeader
        title="7 Days"
        description="이번주 날씨를 조회하고 있습니다."
      />
      <CardContent className="w-full flex flex-col items-center gap-2">
        <WeeklyWeatherItem
          highest={20}
          lowest={14}
          imgUrl="src/assets/icons/1000d.svg"
          date="03 Nov"
          day="일요일"
        />
        <WeeklyWeatherItem
          highest={23}
          lowest={16}
          imgUrl="src/assets/icons/1003d.svg"
          date="04 Nov"
          day="월요일"
        />
        <WeeklyWeatherItem
          highest={20}
          lowest={14}
          imgUrl="src/assets/icons/1000d.svg"
          date="05 Nov"
          day="화요일"
        />
        <WeeklyWeatherItem
          highest={23}
          lowest={16}
          imgUrl="src/assets/icons/1003d.svg"
          date="06 Nov"
          day="수요일"
        />
        <WeeklyWeatherItem
          highest={20}
          lowest={14}
          imgUrl="src/assets/icons/1000d.svg"
          date="07 Nov"
          day="목요일"
        />
        <WeeklyWeatherItem
          highest={23}
          lowest={16}
          imgUrl="src/assets/icons/1003d.svg"
          date="08 Nov"
          day="금요일"
        />
        <WeeklyWeatherItem
          highest={23}
          lowest={16}
          imgUrl="src/assets/icons/1030d.svg"
          date="09 Nov"
          day="토요일"
        />
      </CardContent>
    </Card>
  );
}

export { WeeklyWeatherCard };
