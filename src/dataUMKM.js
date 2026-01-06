// ================= DATA MASTER KECAMATAN =================
// Setiap kecamatan punya beberapa "cluster" lokasi UMKM
const kecamatanSemarang = {
  Tembalang: [
    { lat: -7.0535, lng: 110.4416 },
    { lat: -7.058, lng: 110.448 },
    { lat: -7.047, lng: 110.435 },
  ],
  Banyumanik: [
    { lat: -7.0626, lng: 110.4204 },
    { lat: -7.067, lng: 110.415 },
    { lat: -7.058, lng: 110.425 },
  ],
  "Semarang Barat": [
    { lat: -6.9826, lng: 110.3847 },
    { lat: -6.988, lng: 110.378 },
  ],
  "Semarang Timur": [
    { lat: -6.9681, lng: 110.4413 },
    { lat: -6.972, lng: 110.446 },
  ],
  "Semarang Tengah": [
    { lat: -6.9901, lng: 110.4184 },
    { lat: -6.987, lng: 110.421 },
    { lat: -6.993, lng: 110.414 },
  ],
  "Semarang Selatan": [
    { lat: -7.0051, lng: 110.4212 },
    { lat: -7.010, lng: 110.426 },
  ],
  "Semarang Utara": [
    { lat: -6.9607, lng: 110.4096 },
    { lat: -6.956, lng: 110.414 },
  ],
  Pedurungan: [
    { lat: -7.0025, lng: 110.4701 },
    { lat: -7.007, lng: 110.475 },
  ],
  Genuk: [
    { lat: -6.9514, lng: 110.4789 },
    { lat: -6.946, lng: 110.485 },
  ],
  Gayamsari: [
    { lat: -6.9838, lng: 110.4525 },
    { lat: -6.979, lng: 110.456 },
  ],
  Ngaliyan: [
    { lat: -6.9924, lng: 110.3557 },
    { lat: -6.997, lng: 110.348 },
  ],
  Candisari: [
    { lat: -7.0108, lng: 110.4319 },
    { lat: -7.015, lng: 110.436 },
  ],
  Gunungpati: [
    { lat: -7.0803, lng: 110.3636 },
    { lat: -7.075, lng: 110.358 },
  ],
  Gajahmungkur: [
    { lat: -7.0059, lng: 110.4025 },
    { lat: -7.001, lng: 110.398 },
  ],
};

// ================= MASTER DATA UMKM =================
const jenisUsaha = [
  "Laundry",
  "Warung Makan",
  "Toko Kelontong",
  "Cafe Kopi",
  "Bengkel Motor",
  "Salon",
  "Barbershop",
  "Angkringan",
  "Percetakan",
  "Frozen Food",
];

const akhiranNama = ["Jaya", "Makmur", "Sejahtera", "Mandiri", "Berkah"];
const kategoriList = ["Jasa", "Kuliner", "Perdagangan"];
const statusList = ["Aktif", "Binaan"];

// ================= HELPER =================
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomOffset = () => (Math.random() - 0.5) * 0.02;

// ================= GENERATOR UMKM =================
const generateUMKM = (jumlah = 500) => {
  const kecamatanKeys = Object.keys(kecamatanSemarang);

  return Array.from({ length: jumlah }, (_, i) => {
    const kecamatan = random(kecamatanKeys);
    const clusters = kecamatanSemarang[kecamatan];
    const base = random(clusters);

    return {
      id: i + 1,
      nama: `${random(jenisUsaha)} ${random(akhiranNama)}`,
      kecamatan,
      kategori: random(kategoriList),
      status: random(statusList),
      tahun: 2020 + Math.floor(Math.random() * 6),

      // KOORDINAT PETA (LEBIH MENYEBAR & ALAMI)
      latitude: base.lat + randomOffset(),
      longitude: base.lng + randomOffset(),
    };
  });
};

// ================= EXPORT =================
export const dataUMKM = generateUMKM(500);
export default dataUMKM;
