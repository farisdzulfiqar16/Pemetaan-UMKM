import React from "react";
import StatCard from "../components/StatCard";
import { dataUMKM } from "../dataUMKM";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

console.log("STATISTIK DATA:", dataUMKM);


export default function Statistik() {
  // ================== GUARD DATA KOSONG ==================
  if (!Array.isArray(dataUMKM) || dataUMKM.length === 0) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400">
          Belum ada data UMKM untuk ditampilkan
        </div>
      </div>
    );
  }

  // ================== RINGKASAN ==================
  const totalUMKM = dataUMKM.length;
  const umkmAktif = dataUMKM.filter(u => u.status === "Aktif").length;
  const umkmBinaan = dataUMKM.filter(u => u.status === "Binaan").length;

  // ================== DATA PER KECAMATAN ==================
  const dataPerKecamatan = dataUMKM.reduce((acc, item) => {
    acc[item.kecamatan] = (acc[item.kecamatan] || 0) + 1;
    return acc;
  }, {});

  const chartKecamatan = Object.entries(dataPerKecamatan).map(
    ([kecamatan, jumlah]) => ({
      name: kecamatan,
      value: jumlah,
    })
  );


  // ================== DATA PER TAHUN ==================
  const dataPerTahun = dataUMKM.reduce((acc, item) => {
    acc[item.tahun] = (acc[item.tahun] || 0) + 1;
    return acc;
  }, {});

  const chartTahun = Object.entries(dataPerTahun)
    .sort(([a], [b]) => a - b)
    .map(([tahun, jumlah]) => ({
      tahun,
      jumlah,
    }));

  return (
    <div className="p-6 space-y-8">

      {/* JUDUL */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Statistik UMKM Kota Semarang
        </h1>
        <p className="text-sm text-gray-500">
          Visualisasi dan ringkasan data UMKM
        </p>
      </div>

      {/* STAT CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total UMKM" value={totalUMKM} />
        <StatCard title="UMKM Aktif" value={umkmAktif} />
        <StatCard title="UMKM Binaan" value={umkmBinaan} />
      </div>

      {/* ================== BAR CHART KECAMATAN ================== */}
      <section className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Grafik UMKM per Kecamatan
        </h2>

        <p className="text-xs text-gray-400 mb-4">
          Data akan berubah otomatis sesuai input UMKM
        </p>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartKecamatan}>
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

              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                isAnimationActive
                animationDuration={700}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>


      {/* ================== BAR CHART TAHUN ================== */}
      <section className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Tren UMKM per Tahun
        </h2>

        <p className="text-xs text-gray-400 mb-4">
          Data akan berubah otomatis sesuai jumlah UMKM yang ditambahkan tiap tahun
        </p>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartTahun}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="tahun"
                tick={{ fontSize: 12 }}
              />

              <YAxis allowDecimals={false} />
              <Tooltip />

              <Bar
                dataKey="jumlah"
                fill="#22c55e"
                radius={[4, 4, 0, 0]}
                isAnimationActive
                animationDuration={700}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  );
}
