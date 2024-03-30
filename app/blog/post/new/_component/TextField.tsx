'use client'

import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {PostDetail} from "@/app/blog/_model/blog";
import * as style from '@/app/blog/post/new/_component/field.style';
import {summaryInput} from "@/app/blog/post/new/_component/field.style";

interface TextFieldProps  {
    fieldName: keyof PostDetail;
    placeholder: string;
    errors: FieldErrors<PostDetail>;
    inputProps: UseFormRegisterReturn
}

export default function TextField(props: TextFieldProps) {
    const {fieldName, errors, placeholder, inputProps} = props;

    return <div>
        {fieldName === 'title' ?
            <input
                className={style.titleInput()}
                {...{...inputProps, placeholder}}/> :
            <textarea
                className={style.summaryInput()}
                {...{...inputProps, placeholder}}/>
        }
        {errors[fieldName]?.type === "required" && (
            <span role="alert">This is required</span>
        )}
        {errors[fieldName]?.type === "maxLength" && (
            <span role="alert">Max length exceeded</span>
        )}
    </div>
}