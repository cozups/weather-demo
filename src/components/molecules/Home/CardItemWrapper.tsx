import { Card, CardContent, CardDescription, CardHeader } from '@/components';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  labelKo: string;
  labelEn: string;
}

function CardItemWrapper({ labelKo, labelEn, children }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription className="flex gap-2 font-bold text-neutral-700">
          {labelKo}
          <span className="text-neutral-400 font-normal ml-1">{labelEn}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-between">
        {children}
      </CardContent>
    </Card>
  );
}

export { CardItemWrapper };
