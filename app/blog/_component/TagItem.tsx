export default function TagItem({ label }: { label: string }) {
  return (
    <span
      className={
        ' bg-gray-400 px-2 py-1 rounded-lg text-xs text-white select-none cursor-pointer font-sans max-sm:text-2xs'
      }
    >
      {label}
    </span>
  );
}
