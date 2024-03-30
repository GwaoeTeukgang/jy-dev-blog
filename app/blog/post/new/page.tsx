'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import TextField from "@/app/blog/post/new/_component/TextField";
import {PostDetail} from "@/app/blog/_model/blog";
import TagInputField from "@/app/blog/post/new/_component/TagInputField";
import {useState} from "react";
import PostEditor from "@/app/blog/post/new/_component/PostEditor";
import AdminPopup from "@/app/blog/post/new/_component/AdminPopup";

export default function NewPost() {
    const [disabled, setDisabled] = useState<boolean>(false);
    const {handleSubmit, register, formState: {errors}} = useForm<PostDetail>({disabled})
    const onSubmit: SubmitHandler<PostDetail> = (data) => console.log(data)

    return <>
        <div className={'p-14 m-4 max-sm:p-0 max-sm:m-0 max-sm:mt-20'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField fieldName={'title'}
                           placeholder={'제목'}
                           errors={errors}
                           inputProps={register("title", {required: true, maxLength: 30})}/>
                <TextField fieldName={'summary'}
                           placeholder={'요약'}
                           errors={errors}
                           inputProps={register("summary", {maxLength: 30})}/>
                <TagInputField  {...register("tags", {maxLength: 100})} />
                <PostEditor {...register("content", {required: true})} disabled={disabled}/>

                <div>
                    <label htmlFor={'submit-input'}> 게시 </label>
                    <input id={'submit-input'} type={'submit'} className={'none'}/>
                </div>

            </form>
        </div>
        <AdminPopup setDisabled={value => setDisabled(value)}/>
    </>
}