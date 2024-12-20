import React from 'react';

interface ChipProps {
    text: string,
    backgroundColor?: string,
}

export default function Chip({ text, backgroundColor = 'bg-black' }: ChipProps) {
    const chipClasses = [
        'text-white text-xs py-1 px-3 rounded-full font-bold no-wrap',
        backgroundColor
    ].join(' ').trim();

    return (
        <span className={chipClasses}>{text}</span>
    );
}
