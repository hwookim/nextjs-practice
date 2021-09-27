import React from 'react';
import { useRouter } from 'next/router';

export default function Post(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;

  return <div>this is post - {id}</div>;
}
