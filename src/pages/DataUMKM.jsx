import React from "react";
import UMKMTable from "../components/UMKMTable";
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

// const dataUMKM = [
//   { id: 1, nama: "Laundry Bersih Jaya", kategori: "Jasa", kecamatan: "Tembalang", status: "Aktif" },
//   { id: 2, nama: "Warung Makmur", kategori: "Kuliner", kecamatan: "Banyumanik", status: "Binaan" },
//   { id: 3, nama: "Toko Sejahtera", kategori: "Perdagangan", kecamatan: "Semarang Barat", status: "Aktif" },
// ];

export default function DataUMKM() {
  return (
    <div className="p-6">
      <UMKMTable data={dataUMKM} />
    </div>
  );
}
