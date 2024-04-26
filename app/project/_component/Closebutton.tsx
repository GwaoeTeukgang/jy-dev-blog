'use client';

import { useRouter } from 'next/navigation';

export default function CloseButton({
  isInterceptor,
}: {
  isInterceptor: boolean;
}) {
  const router = useRouter();

  const onClose = () => {
    isInterceptor ? router.back() : router.push('/project');
  };

  return (
    <div className={'h-4 size-6 ml-auto sticky top-0 right-0'} onClick={onClose}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03 text-black dark:text-white"
      >
        <g>
          <path
            fill={'currentColor'}
            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
