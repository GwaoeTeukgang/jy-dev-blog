'use client'
import React from "react";
import {Editor} from "@tinymce/tinymce-react";

export default function PostEditor() {
    const plugins = 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes autocorrect typography inlinecss markdown'
    const toolbar = 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat';
    return (
        <Editor
            id={'tinyEditor'}
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            init={{
                plugins,
                toolbar,
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            initialValue="Welcome to TinyMCE!"
        />
    );
}