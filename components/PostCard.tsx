import Link from 'next/link';
import Button from '@/components/Button';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-700 mb-4">
          {post.body.substring(0, 100)}...
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <Button href={`/post/${post.id}`} variant="primary">
          Read More
        </Button>
      </div>
    </div>
  );
}