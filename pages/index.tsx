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
  hashtags: Array<string>;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts: Post[] = await getAllPosts();
  const hashtags: string[] = Array.from(
    new Set(
      posts.flatMap((post: Post) =>
        post.title.split(' ').filter((word: string) => word.length > 9)
      )
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
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  function handleToggleHashtag(tag: string) {
    setSelectedHashtags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function handleClearHashtags() {
    setSelectedHashtags([]);
  }

  const filteredPosts =
    selectedHashtags.length > 0
      ? posts.filter((post) =>
          selectedHashtags.every((tag) => post.title.includes(tag))
        )
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
        selectedHashtag={selectedHashtags.join(', ')}
        onSelectHashtag={handleToggleHashtag}
        onClearFilter={handleClearHashtags}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post: Post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-gray-500">No posts match the selected hashtags.</p>
        )}
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
