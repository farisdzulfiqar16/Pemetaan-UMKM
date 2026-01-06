import React from "react";

export default function UMKMTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">
        Tidak ada data UMKM
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      {/* WRAPPER SCROLL */}
      <div className="max-h-[420px] overflow-y-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          
          {/* ================= STICKY HEADER (DESKTOP) ================= */}
          <thead className="bg-gray-100 sticky top-0 z-10 hidden sm:table-header-group">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Nama Usaha
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Kategori
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Kecamatan
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((umkm) => (
              <tr
                key={umkm.id}
                className="border-t hover:bg-gray-50 transition block sm:table-row"
              >
                <td className="px-4 py-2 text-sm text-gray-800 block sm:table-cell">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Nama Usaha:
                  </span>{" "}
                  {umkm.nama}
                </td>

                <td className="px-4 py-2 text-sm text-gray-600 block sm:table-cell">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Kategori:
                  </span>{" "}
                  {umkm.kategori}
                </td>

                <td className="px-4 py-2 text-sm text-gray-600 block sm:table-cell">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Kecamatan:
                  </span>{" "}
                  {umkm.kecamatan}
                </td>

                <td className="px-4 py-2 block sm:table-cell">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Status:
                  </span>{" "}
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium inline-block
                      ${
                        umkm.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {umkm.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
