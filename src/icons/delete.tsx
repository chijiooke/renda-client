const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
  >
    <rect width={40} height={40} fill="#fff" rx={6} />
    <rect
      width={39}
      height={39}
      x={0.5}
      y={0.5}
      stroke="#000"
      strokeOpacity={0.5}
      rx={5.5}
    />
    <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M14 16h12M24.667 16v9.334a1.333 1.333 0 0 1-1.333 1.333h-6.667a1.333 1.333 0 0 1-1.333-1.333V16m2 0v-1.333a1.334 1.334 0 0 1 1.333-1.333h2.667a1.334 1.334 0 0 1 1.333 1.333V16M18.666 19.334v4M21.334 19.334v4"
    />
  </svg>
);
export { DeleteIcon };
