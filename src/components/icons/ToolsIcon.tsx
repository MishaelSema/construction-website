interface ToolsIconProps {
  className?: string;
  size?: number;
}

const ToolsIcon = ({ className = "", size = 24 }: ToolsIconProps) => {
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
        d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9L13.8 4C13.4 3.6 12.8 3.6 12.4 4L11.5 4.9C11.1 5.3 11.1 5.9 11.5 6.3L12.4 7.2C12.8 7.6 13.4 7.6 13.8 7.2L14.7 6.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 11.7C9.7 11.3 9.7 10.7 9.3 10.3L8.4 9.4C8 9 7.4 9 7 9.4L6.1 10.3C5.7 10.7 5.7 11.3 6.1 11.7L7 12.6C7.4 13 8 13 8.4 12.6L9.3 11.7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12L12 20L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ToolsIcon;
