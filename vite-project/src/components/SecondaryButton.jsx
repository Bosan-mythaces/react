export default function SecondaryButton({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-block rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-gray-900"
    >
      {children}
    </a>
  );
}
