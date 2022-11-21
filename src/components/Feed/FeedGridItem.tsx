import classNames from 'classnames';

export type FeedGridItemProps = {
  imgSrc: string;
  description: string;
  onClick?: VoidFunction;
};

export function FeedGridItem({
  imgSrc,
  description,
  onClick,
}: FeedGridItemProps) {
  return (
    <div className="relative group">
      <div
        onClick={onClick}
        className="transition-all z-10 w-full h-full bg-black absolute top-0 left-0 cursor-pointer opacity-0 group-hover:opacity-25"
      ></div>
      <img
        src={imgSrc}
        alt={description}
        title={description}
        className="w-full object-contain"
      />
    </div>
  );
}
