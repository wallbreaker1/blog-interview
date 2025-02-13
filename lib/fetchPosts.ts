export async function getAllPosts() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await res.json();
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
  
  export async function getPostById(id: string) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch post');
      }
      const post = await res.json();
      return post;
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
      return null;
    }
  }
  