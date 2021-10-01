import React from 'react';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <div>
      <div>hello next.js world!</div>
      <div>
        <Link href="/about">소개</Link>
      </div>
      <div>
        <Link href="/about/me">me</Link>
      </div>
      <div>
        <Link href="/about/my">my</Link>
      </div>
    </div>
  );
}
