import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getAllPosts, getPostById } from '@/lib/fetchPosts';
import Link from 'next/link';
import Button from '@/components/Button';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostDetailsProps {
  post: Post;
  hashtags: string[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailsProps> = async (context: GetStaticPropsContext) => {
  const { id } = context.params as { id: string };
  const post = await getPostById(id);
  const hashtags = post.title.split(' ').filter((word: string) => word.length > 5);

  return {
    props: {
      post: post as Post,
      hashtags,
    },
  };
};

export default function PostDetails({ post, hashtags }: PostDetailsProps) {
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-600">{post.title}</h1>
      <p className="text-lg text-gray-800 mb-6 leading-relaxed">{post.body}</p>

      <div className="mb-4 text-sm text-gray-500">
        <strong>ID:</strong> {post.id} | <strong>Author:</strong> {post.userId}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {hashtags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
            #{tag}
          </span>
        ))}
      </div>

      <Link href="/">
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition">
          ← Back
        </Button>
      </Link>
    </div>
  );
}
