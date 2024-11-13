import { Card } from '@/components';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKakaoLoader';

function MapCard() {
  useKakaoLoader();

  return (
    <Card className="w-1/4 min-w-[25%] h-full">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.715133,
          lng: 126.734086,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
        level={13} // 지도의 확대 레벨
      />
    </Card>
  );
}

export { MapCard };
