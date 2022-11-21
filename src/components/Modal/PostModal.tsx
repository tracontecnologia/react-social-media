import {
  Button,
  LikeButton,
  Textarea,
  UserNameSmall,
  PostComments,
} from 'components';

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<boolean>;
};

export function PostModal({ isVisible, setIsVisible }: Props) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="z-50 fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/25">
      <button
        onClick={() => setIsVisible(false)}
        className="border border-transparent hover:border-gray-500 py-2 px-4 transition-all rounded-[4px] text-2xl font-light text-black absolute top-10 right-10"
      >
        X
      </button>

      <div className="w-auto lg:w-full max-w-5xl h-[600px] flex flex-col lg:flex-row items-start justify-center  bg-white rounded-md shadow-lg">
        <div className="flex-1 h-full">
          <img
            src="/img/feed.png"
            alt=""
            title=""
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-[400px] flex flex-col h-full p-4">
          <div className="flex-1 overflow-y-auto pb-4">
            <div className="flex flex-col items-start justify-start gap-4 pb-10">
              <UserNameSmall src="/img/user.png" userName="leobritob" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae sequi quaerat eos ullam, error, debitis nemo nisi
                illo laboriosam earum id? Error, magni inventore! Eos a tempora
                voluptatibus deleniti accusamus.
              </p>
            </div>

            <PostComments comments={new Array(10).fill({})} />
          </div>
          <div className="flex flex-col gap-4 items-start border-t border-gray-100 p-4">
            <LikeButton count={100} isLiked={false} onClick={() => {}} />
            <Textarea
              rows={2}
              name="comment"
              id="comment"
              placeholder="Escreva um comentário"
            />
            <Button>Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
