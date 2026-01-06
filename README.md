# 📊 Sistem Informasi Pemetaan & Statistik UMKM Kota Semarang

Web dashboard interaktif untuk **visualisasi, pemetaan, dan analisis data UMKM Kota Semarang** berbasis web.  
Proyek ini dikembangkan sebagai **tugas UAS Mata Kuliah MPTI** dan juga sebagai **portofolio pengembangan sistem informasi**.

---

## 🎯 Tujuan Proyek
- Menyajikan **data UMKM secara visual dan mudah dipahami**
- Menampilkan **persebaran UMKM berbasis peta**
- Memberikan **ringkasan statistik UMKM** untuk mendukung analisis kebijakan
- Menjadi prototype sistem pendukung keputusan (Decision Support System) skala awal

---

## 🧩 Fitur Utama

### 📁 Manajemen Data UMKM
- Data UMKM berbasis dummy (simulasi)
- Informasi UMKM:
  - Nama usaha
  - Kecamatan
  - Kategori usaha
  - Status (Aktif / Binaan)
  - Tahun terdaftar
- Tabel data UMKM dengan tampilan rapi

### 📊 Statistik UMKM
- Total UMKM
- Jumlah UMKM Aktif & Binaan
- Grafik:
  - Jumlah UMKM per Kecamatan
  - Tren UMKM per Tahun
- Visualisasi menggunakan **Recharts**

### 🗺️ Peta Persebaran UMKM
- Peta interaktif berbasis **Leaflet**
- Marker UMKM dengan koordinat latitude & longitude
- Persebaran UMKM dibuat lebih alami menggunakan:
  - Multi cluster per kecamatan
  - Random offset agar tidak menumpuk di satu titik

### 🎨 Antarmuka
- Sidebar navigasi
- Header dinamis sesuai halaman
- Desain responsif menggunakan **Tailwind CSS**

---

## 🧠 Konsep Analisis (MPTI)
Sistem ini mengimplementasikan konsep:
- **Geospatial Visualization**
- **Statistical Summary**
- **Exploratory Data Analysis**
- **Prototype Decision Support System (DSS)**

Proyek ini **belum menggunakan big data atau AI penuh**, namun dirancang agar **mudah dikembangkan ke tahap lanjutan** seperti:
- Heatmap UMKM
- Clustering
- Analisis sektor unggulan
- Integrasi data eksternal

---

## ⚙️ Teknologi yang Digunakan
- **React JS**
- **React Router**
- **Tailwind CSS**
- **Recharts**
- **React Leaflet**
- **JavaScript (ES6)**

---

## 📂 Struktur Folder Singkat
    src/
    ├── components/
    │ ├── Sidebar.jsx
    │ ├── Header.jsx
    │ ├── StatCard.jsx
    ├── pages/
    │ ├── Dashboard.jsx
    │ ├── DataUMKM.jsx
    │ ├── Statistik.jsx
    │ ├── PetaUMKM.jsx
    ├── dataUMKM.js
    ├── App.jsx


---

## 🚀 Cara Menjalankan Project
1. Clone repository

        git clone https://github.com/username/nama-repo.git
  
2. Install dependency

        npm install

3. Jalankan aplikasi

        npm run dev

---
Catatan Pengembangan
Dataset masih menggunakan data simulasi (dummy)
Skala optimal saat ini: ±500–1000 data UMKM
Project ini fokus pada visualisasi dan konsep sistem informasi, bukan sistem produksi nasional

---
Konteks Akademik
Mata Kuliah: Manajemen Proyek Teknologi Informasi (MPTI)
Jenis: UAS / Proyek Akhir Mata Kuliah
Tahun: 2026

---
Lisensi

Proyek ini bersifat akademik & pembelajaran.
Bebas dikembangkan lebih lanjut untuk kebutuhan riset atau portofolio pribadi.

---
Dikembangkan oleh
Faris Dzulfiqar
Mahasiswa Teknik Informatika
