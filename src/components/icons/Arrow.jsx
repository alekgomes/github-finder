const Arrow = (attributes) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      stroke="black"
    >
      <path
        d="M7 17V1M7 1L13 7M7 1L1 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Arrow
