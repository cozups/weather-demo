import { CardDescription, CardHeader, CardTitle } from '@/components';

interface Props {
  title: string;
  description: string;
}

function CommonCardHeader({ title, description }: Props) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
}

export { CommonCardHeader };
