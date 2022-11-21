import { PostComment } from './PostComment';

type Props = {
  comments: { comment: string }[];
};

export function PostComments({ comments }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => (
        <PostComment key={index} {...comment} />
      ))}
    </div>
  );
}
