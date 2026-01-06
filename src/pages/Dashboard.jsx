import React, { useMemo, useState } from "react";
import { dataUMKM } from "../dataUMKM";
import StatCard from "../components/StatCard";
import UMKMTable from "../components/UMKMTable";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  /* ================= STATE ================= */
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("table"); // table | grid

  /* ================= STATISTIK RINGKAS ================= */
  const totalUMKM = dataUMKM.length;

  const umkmAktif = useMemo(() => {
    return dataUMKM.filter((u) => u.status === "Aktif").length;
  }, [dataUMKM]);

  const umkmBinaan = useMemo(() => {
    return dataUMKM.filter((u) => u.status === "Binaan").length;
  }, [dataUMKM]);

  const jumlahKecamatan = useMemo(() => {
    return new Set(dataUMKM.map((u) => u.kecamatan)).size;
  }, [dataUMKM]);

  /* ================= DATA CHART ================= */
  const chartData = useMemo(() => {
    const result = dataUMKM.reduce((acc, item) => {
      acc[item.kecamatan] = (acc[item.kecamatan] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(result).map(([name, value]) => ({
      name,
      value,
    }));
  }, [dataUMKM]);

  /* ================= FILTER DATA ================= */
  const filteredData = useMemo(() => {
    return dataUMKM.filter((item) => {
      const keyword = search.toLowerCase();
      return (
        item.nama.toLowerCase().includes(keyword) ||
        item.kecamatan.toLowerCase().includes(keyword)
      );
    });
  }, [dataUMKM, search]);

  /* ================= LIMIT DATA ================= */
  const displayedData = useMemo(() => {
    return filteredData.slice(0, limit);
  }, [filteredData, limit]);

  /* ================= RENDER ================= */
  return (
    <main className="p-3 sm:p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* ================= STAT CARD ================= */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total UMKM" value={totalUMKM} compact />
        <StatCard title="Aktif" value={umkmAktif} compact />
        <StatCard title="Binaan" value={umkmBinaan} compact />
        <StatCard title="Kecamatan" value={jumlahKecamatan} compact />
      </section>

      {/* ================= GRAFIK ================= */}
      <section className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Grafik UMKM per Kecamatan
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                interval={0}
                height={70}
                tick={{ fontSize: 12 }}
              />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ================= CONTROL ================= */}
      <section className="bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex flex-wrap gap-3 items-center justify-between mb-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Cari UMKM..."
            className="border rounded px-3 py-2 text-sm w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-2 items-center">
            {/* Limit */}
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value={10}>10 data</option>
              <option value={15}>15 data</option>
              <option value={20}>20 data</option>
            </select>

            {/* View Mode */}
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-2 rounded text-sm ${
                viewMode === "table"
                  ? "bg-blue-500 text-white"
                  : "border"
              }`}
            >
              Tabel
            </button>

            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 rounded text-sm ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : "border"
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* ================= DATA ================= */}
        {viewMode === "table" && (
          <UMKMTable data={displayedData} />
        )}

        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedData.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 bg-gray-50"
              >
                <h3 className="font-semibold text-gray-800">
                  {item.nama}
                </h3>
                <p className="text-sm text-gray-500">
                  Kecamatan: {item.kecamatan}
                </p>
                <p className="text-sm">{item.kategori}</p>
                <span className="text-xs text-blue-600">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-400 mt-3">
          Menampilkan {displayedData.length} dari {filteredData.length} data
        </p>
      </section>
    </main>
  );
}
