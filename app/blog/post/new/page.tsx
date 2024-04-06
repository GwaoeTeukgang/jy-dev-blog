'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@/app/blog/post/new/_component/TextField';
import { PostDetail } from '@/model/blog';
import TagInputField from '@/app/blog/post/new/_component/TagInputField';
import { useState } from 'react';
import PostEditor from '@/app/blog/post/new/_component/PostEditor';
import AdminPopup from '@/app/blog/post/new/_component/AdminPopup';

export default function NewPost() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<PostDetail>({ disabled });
  const onSubmit: SubmitHandler<PostDetail> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div
        className={
          'p-14 m-4 max-sm:p-0 max-sm:m-0 max-sm:mt-20 [&_[role="alert"]]:text-red-500'
        }
      >
        <form
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <TextField
            fieldName={'title'}
            placeholder={'제목'}
            errors={errors}
            inputProps={register('title', { required: true, maxLength: 30 })}
          />
          <TextField
            fieldName={'summary'}
            placeholder={'요약'}
            errors={errors}
            inputProps={register('summary', { maxLength: 30 })}
          />

          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <TagInputField
                disabled={disabled}
                onChange={(content) => field.onChange(content)}
              />
            )}
          />
          <Controller
            name="content"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <PostEditor
                onChange={(content) => field.onChange(content)}
                errors={errors}
                disabled={disabled}
              />
            )}
          />
          <div className={'mt-5 flex justify-end'}>
            <label
              htmlFor={'submit-input'}
              className={'bg-gray-400 py-2 px-4 rounded-lg'}
            >
              {' '}
              게시{' '}
            </label>
            <input id={'submit-input'} type={'submit'} className={'none'} />
          </div>
        </form>
      </div>
      <AdminPopup setDisabled={(value) => setDisabled(value)} />
    </main>
  );
}
