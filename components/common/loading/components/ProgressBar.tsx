export default function ProgressBar() {
  return (
    <svg 
      version="1.1" 
      width="100%"
      height="100%"
      viewBox="0 0 32 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="0" width="30" height="1" fill="#FFFFFF" />
      <rect x="0" y="1" width="1" height="4" fill="#FFFFFF" />
      <rect x="31" y="1" width="1" height="4" fill="#FFFFFF" />
      <rect x="1" y="5" width="30" height="1" fill="#FFFFFF" />
    </svg>
  );
}