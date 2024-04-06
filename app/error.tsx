'use client';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={'mt-14 flex flex-col items-center'}>
      <h2 className={'my-12 font-bold text-2xl text-center'}>
        Something went wrong!
      </h2>
      <div>{error.message ?? '알 수 없는 오류'}</div>
      <button
        onClick={reset}
        className={
          'mt-12 shadow-lg py-2 px-4 rounded text-white bg-gray-600 dark:bg-gray-300 dark:text-black'
        }
      >
        재시도
      </button>
    </div>
  );
}
