import classNames from 'classnames';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={classNames(
        'outline-none bg-brandPrimary/500 hover:bg-brandPrimary/600 hover:shadow-none focus:bg-brandPrimary/700 focus:shadow-none active:bg-brandPrimary/800 focus:ring-2 active:shadow-none ring-brandPrimary/100 text-white font-bold text-base px-4 py-2 rounded-[4px] shadow-md transition-all duration-150',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
