import { NavbarLink } from './NavbarLink';

type Props = {
  items: { label: string; href: string }[];
};

export function NavbarLinks({ items }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      {items.map((item, index) => (
        <NavbarLink key={index} href={item.href}>
          {item.label}
        </NavbarLink>
      ))}
    </div>
  );
}
