import {
  Card,
  CardContent,
  CommonCardHeader,
  Separator,
  Temperature,
  TodayInfoItem,
} from '@/components';
import { CalendarDays, MapPinned } from 'lucide-react';

function TodayCard() {
  return (
    <Card className="w-1/4">
      <CommonCardHeader
        title="Today"
        description="오늘 현재 날씨를 조회하고 있습니다."
      />
      <CardContent>
        {/* 날씨 표시 영역 */}
        <div className="flex items-center gap-2">
          <img src="src/assets/icons/1000d.svg" alt="" className="w-16 h-16" />
          <Temperature value={20} size="large" />
        </div>
        <Separator className="mt-4 mb-6" />
        {/* 날짜 및 공간 표시 영역 */}
        <TodayInfoItem
          svg={<CalendarDays className="w-4 h-4" />}
          text="2024-11-13"
        />
        <TodayInfoItem
          svg={<MapPinned className="w-4 h-4" />}
          text="Seoul, South Korea"
        />
      </CardContent>
    </Card>
  );
}

export { TodayCard };
