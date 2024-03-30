'use client'

import {useForm} from "react-hook-form";
import TextField from "@/app/blog/post/new/_component/TextField";
import {PostDetail} from "@/app/blog/_model/blog";
import TagInputField from "@/app/blog/post/new/_component/TagInputField";

export default function NewPost() {
    const {control, handleSubmit, register, formState: {errors}} = useForm<PostDetail>()
    const onSubmit = () => {
    };

    return <div className={'p-14'}>
        <form action={onSubmit}>
            <TextField fieldName={'title'}
                       placeholder={'제목'}
                       errors={errors}
                       {...register("title", {required: true, maxLength: 30})}/>
            <TextField fieldName={'summary'}
                       placeholder={'요약'}
                       errors={errors}
                       {...register("summary", {required: false, maxLength: 100})}/>
            <TagInputField  {...register("tags", {required: false, maxLength: 100})} />
        </form>

    </div>
}