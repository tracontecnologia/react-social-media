import classNames from 'classnames';

type Props = {
  userName: string;
  name: string;
  src?: string;
  onClick?: VoidFunction;
};

export function UserNameLarge({
  userName,
  name,
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
        className="w-[58px] h-[58px] rounded-[58px]"
      />
      <div>
        <p className="font-bold">{userName}</p>
        <p className="text-lg leading-4">{name}</p>
      </div>
    </div>
  );
}
