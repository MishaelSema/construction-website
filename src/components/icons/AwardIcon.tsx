interface AwardIconProps {
  className?: string;
  size?: number;
}

const AwardIcon = ({ className = "", size = 24 }: AwardIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15.477 12.89L17 22L12 19L7 22L8.523 12.89"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AwardIcon;
