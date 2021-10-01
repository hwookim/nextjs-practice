import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, []);

  return <div>404</div>;
}
