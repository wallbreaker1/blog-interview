export default function AboutSection() {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About This Interview Project</h1>
        <p className="mb-4 text-lg text-gray-600">
          This component provides information specific to the interview project. It is used exclusively in the About page
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Purpose: Showcase Next.js and Tailwind CSS capabilities</li>
          <li>Features: SSG with getStaticProps, pagination, and hashtag filtering</li>
          <li>Reusable components: PostCard, Pagination, HashtagFilter, and Buttons</li>
        </ul>
      </section>
    );
  }