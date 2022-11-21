import { Link, useNavigate } from 'react-router-dom';

import { Button, Logo, UserNameSmall, NavbarLinks } from 'components';
import { IUser } from 'interfaces';

type Props = {
  links: { label: string; href: string }[];
  user?: IUser;
};

export function Navbar({
  links,
  user = { id: '1', username: 'leobritob' },
}: Props) {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-20 bg-white shadow-md">
      <div className="w-full h-full m-auto max-w-5xl flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center justify-center gap-4">
          <NavbarLinks items={links} />
          {user ? (
            <>
              <UserNameSmall
                userName={user.username}
                onClick={() => navigate(`/perfil/${user.username}`)}
              />
              <Button onClick={() => navigate('/post/novo')}>
                Criar novo post
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate('/criar-conta')}>
              Criar nova conta
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
