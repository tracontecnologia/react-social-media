type Props = {
  children: React.ReactNode;
};

export function Navbar({ children }: Props) {
  return (
    <nav className="w-full h-20 bg-white shadow-md">
      <div className="w-full h-full m-auto max-w-5xl flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
}
