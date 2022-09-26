import classNames from 'classnames';

import { HeartIcon } from 'components';

type Props = {
  isLiked?: boolean;
  count?: number;
  onClick?: VoidFunction;
};

export function LikeButton({ isLiked = false, count = 0, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames('flex gap-2 items-center justify-center', {
        'cursor-pointer': !!onClick,
      })}
    >
      <HeartIcon
        fill={isLiked ? '#f00' : '#fff'}
        borderColor={isLiked ? '#f00' : '#000'}
      />
      <span className="font-bold">
        {count} curtida{count === 1 ? '' : 's'}
      </span>
    </button>
  );
}
