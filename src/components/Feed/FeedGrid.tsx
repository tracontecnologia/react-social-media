import { FeedGridItem, FeedGridItemProps } from './FeedGridItem';

type Props = {
  items: FeedGridItemProps[];
  onClick: (item: FeedGridItemProps) => void;
};

export function FeedGrid({ items, onClick }: Props) {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      {items.map((item, index) => (
        <FeedGridItem key={index} {...item} onClick={() => onClick(item)} />
      ))}
    </div>
  );
}
