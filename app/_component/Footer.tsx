import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className={'w-dvw bg-black border-t border-t-gray text-white p-2 pt-8'}
    >
      <div className="flex justify-around">
        <ul className="flex flex-col justify-around gap-4">
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
          </li>
        </ul>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Contact</h4>
          <div className={'flex justify-center  gap-4'}>
            <Link href={'mailto:ljy10499@gmail.com'}>
              <Image
                src={'/icon/email-icon.svg'}
                className={'fill-gray-500'}
                alt={'ljy10499@gmail.com'}
                width={20}
                height={20}
              />
            </Link>
            <Link href={'https://twitter.com/yook_oh'}>
              <Image
                src={'/icon/x-icon.svg'}
                alt={'@yook_oh'}
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-right text-xs">
        &copy; 2024 JIYOON LEE. All Rights Reserved.
      </p>
    </footer>
  );
}
