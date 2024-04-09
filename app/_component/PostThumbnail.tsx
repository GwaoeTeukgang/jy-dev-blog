import { ImageInfo } from '@/model';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

interface PostThumbnailProps {
  img: ImageInfo | null;
  title: string;
  className: string;
}

const textStyle = tv({
  base: [
    'text-4xl',
    'font-bold',
    'text-white',
    'text-wrap',
    'w-full',
    'min-h-64',
    'p-4',
    'bg-gradient-to-br',
    'from-purple-300',
    'to-pink-500',
  ],
});
export default function PostThumbnail({
  img,
  title,
  className,
}: PostThumbnailProps) {
  return (
    <div className={className}>
      {img ? (
        <Image
          src={`${img.url}`}
          className={'w-full h-full object-cover'}
          alt={'thumbnail'}
          width={img.formats?.medium?.width ?? 300}
          height={img.formats?.medium?.height ?? 500}
        />
      ) : (
        <div className={`${textStyle()} ${className}`}>{title}</div>
      )}
    </div>
  );
}
