import { useState } from 'react';

import { FeedGrid, Navbar, PostModal, UserDetailed } from 'components';

export function ProfilePage() {
  const [isPostModalVisible, setIsPostModalVisible] = useState(false);

  return (
    <>
      <Navbar
        links={[
          { label: 'Início', href: '/' },
          { label: 'Explorar', href: '/explorar' },
        ]}
      />

      <PostModal
        isVisible={isPostModalVisible}
        setIsVisible={setIsPostModalVisible}
      />

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
            onClick={(item) => setIsPostModalVisible(true)}
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
