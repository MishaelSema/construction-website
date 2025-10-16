interface TargetIconProps {
  className?: string;
  size?: number;
}

const TargetIcon = ({ className = "", size = 24 }: TargetIconProps) => {
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
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default TargetIcon;
