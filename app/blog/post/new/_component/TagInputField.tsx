'use client';

import { useEffect, useState } from 'react';
import {getTags} from "@/lib/api/blog";

interface TextInputProps {
  onChange: (e: string[]) => void;
  disabled: boolean;
}

export default function TagInputField(props: TextInputProps) {
  const [tags, setTags] = useState<string>('');

  useEffect(() => {
    requestTags();
  }, []);

  const requestTags = async () => {
    const { data } = await getTags();
    // setTags(data.data);
  };

  const onBlur = () => {
    props.onChange(tags.split(', ').map((it) => it.trim()));
  };

  return (
    <div className={'mb-4'}>
      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        onBlur={onBlur}
        disabled={props.disabled}
        className={`border-2 rounded-lg text-sm p-1 w-full`}
      />
    </div>
  );
}
