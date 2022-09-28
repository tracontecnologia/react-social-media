import { Link } from 'react-router-dom';

import {
  Button,
  FeedGrid,
  Logo,
  Navbar,
  NavbarLinks,
  UserDetailed,
  UserNameSmall,
} from 'components';

export function ProfilePage() {
  return (
    <>
      <Navbar>
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center justify-center gap-4">
          <NavbarLinks
            items={[
              { label: 'Início', href: '/' },
              { label: 'Explorar', href: '/explorar' },
            ]}
          />
          <UserNameSmall userName="leobritob" onClick={() => {}} />
          <Button>Criar novo post</Button>
        </div>
      </Navbar>

      <section className="w-full max-w-5xl py-12 m-auto">
        <section className="w-full flex items-center justify-center p-4">
          <UserDetailed
            userName="leobritob"
            name="Leonardo Brito"
            postsCount={5}
            followersCount={100}
            followingCount={100}
            biography="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cum placeat explicabo molestias accusantium id velit dolor impedit alias molestiae quia autem vel quidem labore, illum nihil repudiandae delectus rerum."
          />
        </section>
        <section className="w-full p-4">
          <FeedGrid
            items={new Array(9).fill({
              imgSrc: '/img/feed.png',
              description: 'lorem ipsum',
            })}
          />
        </section>
      </section>
    </>
  );
}
