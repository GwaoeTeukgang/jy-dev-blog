import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className={'w-dvw bg-black border-t border-t-gray text-white p-5 pt-8'}
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
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <div className={'flex gap-4'}>
            <Link href={'mailto:ljy10499@gmail.com'}>
              <Image
                src={'/icon/email-icon.svg'}
                className={'fill-gray-500'}
                alt={'ljy10499@gmail.com'}
                width={25}
                height={25}
              />
            </Link>
            <Link href={'https://twitter.com/yook_oh'}>
              <Image
                src={'/icon/x-icon.svg'}
                alt={'@yook_oh'}
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-right">&copy; 2024 JIYOON LEE. All Rights Reserved.</p>
    </footer>
  );
}
