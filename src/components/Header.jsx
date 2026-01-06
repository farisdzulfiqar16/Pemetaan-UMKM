export default function Header({ title, onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="h-14 sm:h-16 flex items-center px-4 sm:px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden mr-4 text-gray-600 text-2xl"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold text-gray-800">
        {title}
      </h1>

      <span className="ml-auto text-sm text-gray-500">
        Kota Semarang
      </span>
      </div>
    </header>
  );
}
