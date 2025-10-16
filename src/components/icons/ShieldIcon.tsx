interface ShieldIconProps {
  className?: string;
  size?: number;
}

const ShieldIcon = ({ className = "", size = 24 }: ShieldIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22S8 18 8 12V5L12 3L16 5V12C16 18 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldIcon;
