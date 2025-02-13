import Button from '@/components/Button';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-slate-600 text-white">
      <Link href="/">
        <p className="text-xl font-bold">My Blog</p>
      </Link>
      <div className="flex space-x-4">
        <Link href="/">
          <Button variant='secondary'>Home</Button>
        </Link>
        <Link href="/about">
          <Button variant='secondary'>About</Button>
        </Link>
        <Link href="https://www.andrei-serban.website/#portfolio">
          <Button>My Portfolio</Button>
        </Link>
      </div>
    </nav>
  );
}