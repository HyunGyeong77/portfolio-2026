export default function LoadingSvg({width = "32", height = "6"}: {width: string, height: string}) {
  return (
    <svg 
      version="1.1" 
      width={width} 
      height={height} 
      viewBox="0 0 32 6"
      xmlns="http://www.w3.org/2000/svg" 
      shape-rendering="crispEdges"
    >
      <rect x="1" y="0" width="30" height="1" fill="#FFFFFF" />
      <rect x="0" y="1" width="1" height="4" fill="#FFFFFF" />
      <rect x="31" y="1" width="1" height="4" fill="#FFFFFF" />
      <rect x="1" y="5" width="30" height="1" fill="#FFFFFF" />
    </svg>
  );
}