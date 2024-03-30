'use client'

import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {PostDetail} from "@/app/blog/_model/blog";
import * as style from '@/app/blog/post/new/_component/field.style';

interface TextFieldProps extends UseFormRegisterReturn {
    fieldName: keyof PostDetail;
    placeholder: string;
    errors: FieldErrors<PostDetail>;
}

export default function TextField(props: TextFieldProps) {
    const {fieldName, errors, ...rest} = props;
    const inputProps = {
        id: fieldName,
        'aria-invalid': errors[fieldName] !== null,
        ...rest
    }

    return <div>
        {fieldName === 'title' ?
            <input
                className={style.titleInput()}
                {...inputProps}/> :
            <textarea
                className={style.summaryInput()}
                {...inputProps}/>
        }
        {errors[fieldName]?.type === "required" && (
            <span role="alert">This is required</span>
        )}
        {errors[fieldName]?.type === "maxLength" && (
            <span role="alert">Max length exceeded</span>
        )}
    </div>
}