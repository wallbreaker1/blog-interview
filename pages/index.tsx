import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/fetchPosts';
import { useState } from 'react';
import HashtagFilter from '@/components/HashtagFilter';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomePageProps {
  posts: Post[];
  hashtags: string[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts: Post[] = await getAllPosts();
  const hashtags: string[] = Array.from(
    new Set(
      posts.flatMap((post: Post) => post.title.split(' ').filter((word: string) => word.length > 9))
    )
  );

  return {
    props: {
      posts,
      hashtags,
    },
  };
};

export default function HomePage({ posts, hashtags }: HomePageProps) {
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = selectedHashtag
    ? posts.filter((post: Post) => post.title.includes(selectedHashtag))
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Blog Posts</h1>

      <HashtagFilter
        hashtags={hashtags}
        selectedHashtag={selectedHashtag}
        onSelectHashtag={(tag) => {
          setSelectedHashtag(tag);
          setCurrentPage(1);
        }}
        onClearFilter={() => {
          setSelectedHashtag(null);
          setCurrentPage(1);
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
        
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={() => setCurrentPage((prev) => prev + 1)}
        onPrev={() => setCurrentPage((prev) => prev - 1)}
      />
    </div>
  );
} 
