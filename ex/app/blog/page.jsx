'use client';

import Link from 'next/link';
import { useCustomHook } from '@/app/provider';

export default function Page() {
  const { data } = useCustomHook();
  console.log(data);

  return (
    <div className=" h-screen">
      <div className="p-40">
        <h1 className="text-6xl">블로그 페이지입니다.</h1>
        <Link href={'/'}>home으로 이동</Link>
      </div>
    </div>
  );
}
