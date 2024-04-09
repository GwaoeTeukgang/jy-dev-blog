'use client';

import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { PostDetail } from '@/model/blog';
import * as style from '@/app/blog/post/_component/editor/field.style';
import { summaryInput } from '@/app/blog/post/_component/editor/field.style';

interface TextFieldProps {
  isText: boolean;
  className?: string;
  fieldName: keyof PostDetail;
  placeholder: string;
  errors: FieldErrors<PostDetail>;
  inputProps: UseFormRegisterReturn;
}

export default function TextField(props: TextFieldProps) {
  const { fieldName, errors, placeholder, inputProps } = props;

  return (
    <div>
      {props.isText ? (
        <input
          className={`${style.textInput()} ${props.className}`}
          {...{ ...inputProps, placeholder }}
        />
      ) : (
        <textarea
          className={`${style.textInput()} ${props.className}`}
          {...{ ...inputProps, placeholder }}
        />
      )}
      {errors[fieldName]?.type === 'required' && (
        <span role="alert">This is required</span>
      )}
      {errors[fieldName]?.type === 'maxLength' && (
        <span role="alert">Max length exceeded</span>
      )}
    </div>
  );
}
