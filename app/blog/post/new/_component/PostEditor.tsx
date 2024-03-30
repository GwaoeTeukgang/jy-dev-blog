'use client'
import React from "react";
import {Editor} from "@tinymce/tinymce-react";
import {UseFormRegisterReturn} from "react-hook-form";

export default function PostEditor(props: UseFormRegisterReturn) {
    const plugins = 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes autocorrect typography inlinecss markdown'
    const toolbar = 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat';
    return (
        <Editor
            id={'tinyEditor'}
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            init={{
                plugins,
                toolbar,
            }}
            initialValue=""
            disabled={props.disabled}
            {...props}
        />
    );
}