import {
  HighlightsCard,
  HourlyCard,
  MapCard,
  TodayCard,
  WeeklyWeatherCard,
} from '@/components';
import { Header } from '@/components';

function HomePage() {
  return (
    <div className="page">
      <div className="w-full h-full page__container pb-6">
        <Header />
        <div className="w-full flex flex-col items-center justify-start px-6 gap-6">
          {/* 상단 3개 위젯 영역 */}
          <div className="w-full flex items-center gap-6">
            <TodayCard />
            <HourlyCard />
            <MapCard />
          </div>
          {/* 하단 2개 위젯 영역 */}
          <div className="w-full flex gap-6">
            <HighlightsCard />
            <WeeklyWeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
