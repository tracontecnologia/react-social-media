import classNames from 'classnames';

type Props = {
  userName: string;
  src?: string;
  onClick?: VoidFunction;
};

export function UserNameSmall({
  userName,
  src = '/img/user.png',
  onClick,
}: Props) {
  return (
    <div
      className={classNames('flex items-center justify-center gap-2', {
        'cursor-pointer': !!onClick,
      })}
      onClick={onClick}
    >
      <img
        src={src}
        alt={userName}
        className="w-[28px] h-[28px] rounded-[28px]"
      />
      <p className="font-bold">{userName}</p>
    </div>
  );
}
