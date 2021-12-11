import React from 'react';
import Link from 'next/link';
import SvgComponent from '@/components/SvgComponent';

export default function Home(): JSX.Element {
  return (
    <div>
      <SvgComponent />
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
