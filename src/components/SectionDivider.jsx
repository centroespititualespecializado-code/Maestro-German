export default function SectionDivider({ top = false }) {
  return (
    <div
      className={`absolute left-0 right-0 ${top ? 'top-0' : 'bottom-0'} h-6 bg-gold`}
      aria-hidden="true"
    />
  );
}
