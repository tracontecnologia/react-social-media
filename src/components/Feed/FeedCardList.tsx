import { FeedCard, FeedCardProps } from './FeedCard';

type Props = {
  list: FeedCardProps[];
};

export function FeedCardList({ list }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {list?.map((item, index) => (
        <FeedCard key={index} {...item} />
      ))}
    </div>
  );
}
