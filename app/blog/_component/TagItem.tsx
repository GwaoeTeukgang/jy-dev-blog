export default function TagItem({label}: { label: string }) {
    return <span className={' bg-gray-400 p-1 rounded-lg text-xs text-white select-none cursor-pointer font-sans'}>
        {label}
    </span>
}