'use client';

import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import TextField from '@/app/blog/post/_component/editor/TextField';
import {PostDetail, PostItemRequest} from '@/model/blog';
import TagInputField from '@/app/blog/post/_component/editor/TagInputField';
import {useEffect, useState} from 'react';
import PostEditor from '@/app/blog/post/_component/editor/PostEditor';
import AdminPopup from '@/app/blog/post/_component/editor/AdminPopup';
import {createNewPost, uploadImage} from "@/lib/api/blog";
import ImageInput from "@/app/blog/post/_component/editor/ImageInput";

export default function BlogPostEditor({postData}: { postData?: PostDetail }) {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [image, setImage] = useState<FormData | null>(null);
    const {
        handleSubmit,
        register,
        control,
        formState: {errors},
    } = useForm<PostDetail>({disabled, defaultValues: postData});

    useEffect(() => {
        if (postData) {
            setEditMode(true);
        }
    }, [postData]);
    const onSubmit: SubmitHandler<PostDetail> = async (postData) => {
        try {
            const request: PostItemRequest = {...postData, thumbnail: null};
            if (image) {
                const {data} = await uploadImage(image);
                request.thumbnail = {id: data[0].id};
            }

            const res = createNewPost({data: request});
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <main>
            <div
                className={
                    'p-14 m-4 max-sm:p-0 max-sm:m-0 max-sm:mt-20 [&_[role="alert"]]:text-red-500'
                }
            >
                <form
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                >
                    <ImageInput
                        fieldName={'thumbnail'}
                        disabled={disabled}
                        onChange={(content) => setImage(content)}
                    />
                    <TextField
                        isText
                        fieldName={'title'}
                        placeholder={'제목'}
                        errors={errors}
                        inputProps={register('title', {required: true, maxLength: 80})}
                    />
                    <TextField
                        isText
                        className={'text-sm'}
                        fieldName={'slug'}
                        placeholder={'slug'}
                        errors={errors}
                        inputProps={register('slug', {required: true, maxLength: 250})}
                    />
                    <TextField
                        isText={false}
                        className={'text-lg'}
                        fieldName={'summary'}
                        placeholder={'요약'}
                        errors={errors}
                        inputProps={register('summary', {maxLength: 250})}
                    />
                    <Controller
                        name="tags"
                        control={control}
                        render={({field}) => (
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
                        render={({field}) => (
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
                            className={'bg-primary text-white py-2 px-4 rounded-lg'}
                        >
                            {' '}
                            게시{' '}
                        </label>
                        <input id={'submit-input'} type={'submit'} className={'none'}/>
                    </div>
                </form>
            </div>
            <AdminPopup setDisabled={(value) => setDisabled(value)}/>
        </main>
    );
}
