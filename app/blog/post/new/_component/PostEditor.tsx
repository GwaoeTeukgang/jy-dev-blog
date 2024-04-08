'use client';

import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {FieldErrors} from 'react-hook-form';
import {PostDetail} from '@/model/blog';
import axios from "axios";

interface PostEditorProps {
    onChange: (e: string) => void;
    disabled: boolean;
    errors: FieldErrors<PostDetail>;
}

export default function PostEditor({
                                       onChange,
                                       disabled,
                                       errors,
                                   }: PostEditorProps) {
    const plugins = 'code | image';
    const toolbar =
        'undo redo | styles | bold italic  |  numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | code | image';

    const imageUpload = async (blobInfo: any, progress: any) => {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET ?? '');

        try {
            const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, formData);
            return data.secure_url ?? data.url
        } catch (e) {
            return 'Image upload failed: ' + e;
        }
    };
    return (
        <>
            <Editor
                id={'tinyEditor'}
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                init={{
                    toolbar,
                    plugins,
                    images_upload_handler: imageUpload
                }}
                initialValue=""
                disabled={disabled}
                onEditorChange={(e) => onChange(e)}
            />
            {errors.content?.type === 'required' && (
                <span role="alert">This is required</span>
            )}
            {errors.content?.type === 'maxLength' && (
                <span role="alert">Max length exceeded</span>
            )}
        </>
    );
}
