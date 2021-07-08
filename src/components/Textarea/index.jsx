import React from 'react';

export default function Textarea({ className, description, onChange }) {
    return <div><textarea value={description} className={className} onChange={(e) => onChange(e)}/></div>
}