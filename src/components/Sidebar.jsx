import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Data UMKM", path: "/data-umkm" },
    { name: "Statistik", path: "/statistik" },
    { name: "Peta UMKM", path: "/peta-umkm" },
  ];

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-100 text-blue-600 font-semibold"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:relative
          top-0 left-0 z-50
          h-screen w-64
          bg-white shadow-md
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:block
        `}
      >
        <div className="h-16 flex items-center px-6 font-bold text-lg text-blue-600 border-b">
          UMKM Semarang
        </div>

        <nav className="px-4 py-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
