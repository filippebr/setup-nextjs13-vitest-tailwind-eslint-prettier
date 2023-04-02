import Link from 'next/link';

export default function Home() {
  return (
    <Link className="text-3xl flex justify-center items-center" href="/about">
      About
    </Link>
  );
}
