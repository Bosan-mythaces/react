export default function MenuButton() {
  return (
    <button
      type="button"
      className="-m-2.5 flex items-center justify-center rounded-lg p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
