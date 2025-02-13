import { useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-slate-600 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="text-xl font-bold">My Blog</p>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
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
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-2 mt-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Button variant='secondary' className="w-full">Home</Button>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <Button variant='secondary' className="w-full">About</Button>
          </Link>
          <Link href="https://www.andrei-serban.website/#portfolio" onClick={() => setIsOpen(false)}>
            <Button className="w-full">My Portfolio</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
