export type FeedGridItemProps = {
  imgSrc: string;
  description: string;
};

export function FeedGridItem({ imgSrc, description }: FeedGridItemProps) {
  return (
    <div>
      <img
        src={imgSrc}
        alt={description}
        title={description}
        className="w-full object-contain"
      />
    </div>
  );
}
