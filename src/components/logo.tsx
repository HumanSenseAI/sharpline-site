export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="34"
      height="26"
      viewBox="0 0 34 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="0" y="10.4" width="5" height="15.6" rx="2.5" fill="#F57B3C" />
      <rect x="7.25" y="0" width="5" height="26" rx="2.5" fill="#0B73BC" />
      <rect x="14.5" y="5.72" width="5" height="20.28" rx="2.5" fill="#F89449" />
      <rect x="21.75" y="0" width="5" height="26" rx="2.5" fill="#055AAA" />
      <rect x="29" y="13.52" width="5" height="12.48" rx="2.5" fill="#A6C4DE" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-2 ${className ?? ""}`}>
      <LogoMark />
      <span className="font-sans leading-none font-bold tracking-[0.01em] text-brand-orange [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
        SHARPLINE
      </span>
    </span>
  );
}
