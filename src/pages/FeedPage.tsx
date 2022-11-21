import { Link, useNavigate } from 'react-router-dom';

import { FeedCardList, Navbar, UserNameLarge } from 'components';

export function FeedPage() {
  return (
    <>
      <Navbar
        links={[
          { label: 'Início', href: '/' },
          { label: 'Explorar', href: '/explorar' },
        ]}
      />

      <section className="w-full max-w-5xl py-12 m-auto grid grid-cols-1 lg:grid-cols-[1fr,380px]">
        <section className="w-full">
          <FeedCardList
            list={new Array(10).fill({
              userName: 'leobritob',
              userSrc: '/img/user.png',
              defaultLiked: false,
              likesCount: 10,
              feedSrc: '/img/feed.png',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel ipsum maxime dolores accusamus nesciunt voluptatum? Possimus voluptatum corrupti, temporibus, dicta illum fugiat sequi iusto excepturi vitae ipsum recusandae iste.',
            })}
          />
        </section>
        <section className="">
          <UserNameLarge
            name="Leonardo Brito"
            userName="leobritob"
            onClick={() => {}}
          />
        </section>
      </section>
    </>
  );
}
