'use client';
import { PostIndex } from '@/app/blog/post/[slug]/_model';
import * as style from '@/app/blog/post/[slug]/_component/indexNav.style';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {useEffect, useLayoutEffect, useState} from 'react';

export default function IndexNav({ indexList }: { indexList: PostIndex[] }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selected, setSelected] = useState<string>('');
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('content-container'));
  }, []);

  if (!element) {
    return <></>;
  }

  const onMove = (indexInfo: PostIndex) => {
    const { level, id } = indexInfo;
    if (!element) {
      return;
    }

    const target = element.querySelectorAll(`h${level}`)[id];
    target.scrollIntoView({ behavior: 'smooth' });
    setSelected(getId(id, level));
  };

  const getId = (id: number, level: number) => {
    return `${level}-${id}`;
  };

  return (
    <>
      {!isMobile ? (
        <nav className={style.indexNavBox()}>
          <ul>
            {indexList.map((it) => (
              <li
                key={getId(it.id, it.level)}
                id={getId(it.id, it.level)}
                onClick={() => onMove(it)}
                className={style.indexItem({
                  level: it.level as 1 | 2 | 3,
                  selected: selected === getId(it.id, it.level),
                })}
              >
                {it.text}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
