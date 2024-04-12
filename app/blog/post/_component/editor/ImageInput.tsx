import { useState } from 'react';
import { PostDetail } from '@/model/blog';
import Image from 'next/image';
interface ImageInputProps {
  fieldName: keyof PostDetail;
  disabled: boolean;
  onChange: (e: FormData) => void;
}
export default function ImageInput(props: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onFileInput = (e: any) => {
    const formData = new FormData();
    formData.append('files', e.target.files[0], e.target.files[0].name);
    props.onChange(formData);

    const reader = new FileReader();

    reader.onload = (event) => setImageUrl(event.target?.result as string);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <label htmlFor="imageInput" className={''}>
        <Image
          src={imageUrl ?? ''}
          alt={''}
          className={'w-full h-60 object-cover bg-gray-400'}
        />
      </label>
      <input
        id={'imageInput'}
        className={'hidden'}
        onChange={onFileInput}
        type="file"
        accept={'image/*'}
      />
    </>
  );
}
