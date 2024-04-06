'use client';

import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {FieldErrors, UseFormRegisterReturn} from 'react-hook-form';
import {PostDetail} from "@/model/blog";

interface PostEditorProps {
    onChange: (e: string) => void;
    disabled: boolean;
    errors: FieldErrors<PostDetail>;
}

export default function PostEditor({onChange, disabled, errors}: PostEditorProps) {
    const plugins = 'code';
    const toolbar =
        'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent';

    return (
        <>
            <Editor
                id={'tinyEditor'}
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                init={{
                    toolbar,
                    plugins,
                }}
                initialValue=""
                disabled={disabled}
                onEditorChange={e => onChange(e)}
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
