import Button from "./Button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About This Interview Project</h1>
      <p className="mb-4 text-lg text-gray-600">
        This project is built to demonstrate Next.js and Tailwind CSS capabilities in creating a dynamic, optimized, and responsive blog application.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Core Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Static Site Generation (SSG) using <code>getStaticProps</code> and <code>getStaticPaths</code> for performance optimization</li>
        <li>Pagination for improved navigation through posts</li>
        <li>Hashtag-based search filtering to provide a more interactive user experience</li>
        <li>Reusable UI components: <code>PostCard</code>, <code>Pagination</code>, <code>HashtagFilter</code>, and <code>Buttons</code></li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Considerations on Next.js Data Fetching</h2>
      <p className="text-gray-600 mb-4">
        While <code>getStaticProps</code> and <code>getStaticPaths</code> were used in this implementation, they are now considered somewhat legacy in favor of Next.js's new App Router approach.
        However, many companies still rely on the Pages Router, which is probably why this approach was chosen for this project.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Hashtag Filtering Implementation</h2>
      <p className="text-gray-600 mb-4">
        The provided data did not contain explicit hashtags, so hashtags were dynamically extracted from post titles.
        Words longer than a predefined length were treated as potential hashtags. This allows users to filter posts based on relevant keywords extracted from the available content.
      </p>

      <div className="mt-6">
      <Link href="https://www.andrei-serban.website/#portfolio">
            <Button className="w-full">My Portfolio</Button>
          </Link>
      </div>
    </section>
  );
}
