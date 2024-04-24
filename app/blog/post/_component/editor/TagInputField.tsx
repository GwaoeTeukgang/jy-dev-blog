'use client';

import { useEffect, useRef, useState } from 'react';
import { createTag, getTags } from '@/lib/api/blog';
import { Tag } from '@/model/blog';
import * as style from './tagInputField.style';
import { listItem } from './tagInputField.style';
import TagItem from '@/app/blog/_component/TagItem';
interface TextInputProps {
  onChange: (e: Tag[]) => void;
  disabled: boolean;
  selectedTags?: Tag[];
}

interface SelectedTag extends Tag {
  selected: boolean;
}

export default function TagInputField({
  onChange,
  disabled,
  selectedTags,
}: TextInputProps) {
  const [tags, setTags] = useState<SelectedTag[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const tagSeqNo = useRef<number>(0);

  useEffect(() => {
    if (selectedTags) {
      setSelectedTag(selectedTags);
    }
  }, [selectedTags]);


  const onBlur = async () => {
    if (value.length <= 0) return;
    try {
      const { data } = await createTag({ data: { tagLabel: value.trim() } });
      setSelectedTag([...selectedTag, data]);
      onChange([...selectedTag, data])
      setValue('');
    } catch (e) {
      alert('태그 생성 실패! \n' + e);
    }
  };

  const onFocus = async () => {
    const { data } = await getTags();
    setTags(data.map((it) => ({ ...it, selected: false })));
    tagSeqNo.current = Math.max(...data.map((it) => it.id)) + 1;
  }

  const isSelected = (id: number) => {
    return selectedTag.some((it) => it.id === id);
  };

  const onAddTag = (tag: Tag) => {
    if (isSelected(tag.id)) {
      return;
    }
    setSelectedTag([...selectedTag, tag]);
  };

  const onRemoveTag = (tag: Tag) => {
    setSelectedTag(selectedTag.filter((it) => tag.id !== it.id));
  };

  return (
    <div className={'mb-4'}>
      <input
        value={value}
        onClick={() => setIsOpen(!isOpen)}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        className={`border-2 rounded-lg text-sm p-1 w-full bg-transparent`}
      />
      <div className={style.container({ opened: isOpen })}>
        <ul className={style.list()}>
          {tags.map((it) => (
            <li
              className={style.listItem({ selected: isSelected(it.id) })}
              onClick={(e) => onAddTag(it)}
              key={it.id}
            >
              {it.tagLabel}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(false)}
          type={'button'}
          className={style.closeButton()}
        >
          닫기
        </button>
      </div>
      <ul className={'mt-4 flex flex-wrap gap-1'}>
        {selectedTag.map((it) => (
          <li key={it.id} onClick={() => onRemoveTag(it)}>
            <TagItem label={it.tagLabel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
