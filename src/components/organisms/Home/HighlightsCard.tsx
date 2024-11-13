import {
  Card,
  CardContent,
  CardItemWrapper,
  CommonCardHeader,
  Degree,
  MarineItem,
} from '@/components';

function HighlightsCard() {
  return (
    <Card className="flex-1">
      <CommonCardHeader
        title="Today's highlights"
        description="오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다."
      />
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <CardItemWrapper
            labelKo="해양 및 조수 데이터"
            labelEn="Marine and Sailing"
          >
            <img src="src/assets/icons/Waves.png" alt="" className="w-14" />
            <div className="grid grid-cols-4 gap-4">
              <MarineItem label="1회 - 간조" time="05:48 am" />
              <MarineItem label="1회 - 간조" time="05:48 am" />
              <MarineItem label="1회 - 간조" time="05:48 am" />
              <MarineItem label="1회 - 간조" time="05:48 am" />
            </div>
          </CardItemWrapper>

          <CardItemWrapper labelKo="일출/일몰" labelEn="Sunrise and Sunset">
            <div className="w-fit flex items-center gap-4">
              <img src="src/assets/icons/1000d.svg" alt="" className="w-14" />
              <div>
                <p className="text-sm text-neutral-400">Sunrise</p>
                <p className="font-bold text-2xl">07:00 AM</p>
              </div>
            </div>
            <div className="w-fit flex items-center gap-4">
              <img src="src/assets/icons/1000n.svg" alt="" className="w-14" />
              <div>
                <p className="text-sm text-neutral-400">Sunset</p>
                <p className="font-bold text-2xl">05:34 PM</p>
              </div>
            </div>
          </CardItemWrapper>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <CardItemWrapper labelKo="습도" labelEn="Humidity">
            <img src="src/assets/icons/Humidity.svg" alt="" className="w-14" />
            <Degree value={80} unit="%" />
          </CardItemWrapper>

          <CardItemWrapper labelKo="기압" labelEn="Pressure">
            <img src="src/assets/icons/Wind.svg" alt="" className="w-14" />
            <Degree value={1000} unit="hPa" />
          </CardItemWrapper>

          <CardItemWrapper labelKo="가시거리" labelEn="Visibility">
            <img src="src/assets/icons/Fog.svg" alt="" className="w-14" />
            <Degree value={10} unit="km" />
          </CardItemWrapper>

          <CardItemWrapper labelKo="체감온도" labelEn="Feels Like">
            <img src="src/assets/icons/Hot.svg" alt="" className="w-14" />
            <Degree value={19} unit="℃" />
          </CardItemWrapper>
        </div>
      </CardContent>
    </Card>
  );
}

export { HighlightsCard };
