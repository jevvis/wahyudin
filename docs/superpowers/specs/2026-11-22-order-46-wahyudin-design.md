# Order 46 — Wahyudin (warehouse & inventory / supply chain) — rancangan

Dibuat 22 Nov 2026. Template: Template 1 hijau + tombol "PDF" (Template 1 PDF), tema bawaan hijau. Port dev 3046.

## Dasar teknis
Struktur situs dari Order 45 (turunan Template 1 Perawat, sudah generik untuk profesi non-apoteker), tampilan Template 1. Bagian PDF
(`components/PrintDocument.tsx`, tombol di `Navbar.tsx`, `@media print` di `app/globals.css`, sisipan di `app/layout.tsx`) ditulis ulang untuk data Wahyudin (9 halaman A4 lanskap).

## Sumber data
`Profile (3).pdf` (ekspor LinkedIn, bahasa Indonesia), 3 foto potret, 6 sertifikat (5 PDF + 1 PNG), 4 surat paklaring.

## Isi situs
- Hero/Tentang: nama "Wahyudin"; ringkasan dari "Ringkasan" CV; angka: bekerja sejak 2016, 8 perusahaan, 6 sertifikat, 2 posisi leader.
- Pendidikan (1): SMKN 1 Lemahabang, Teknik Komputer dan Jaringan, 2013-2016.
- Pengalaman kerja (9): Pureo (Leader Inventory; Staff Inventory), Gudang Kita, Java Royal Ice, Maxxis, DHL Supply Chain, Home Credit, Kayaba, Tempo Scan. Tanpa foto (tidak ada foto kerja).
- Sertifikat (6): CIM, Logistic Management (Anak Teknik), Manajemen Logistik dan Gudang (Ioda), ISO 45001 (BSN), GMP/CPPOB (BSN), Microsoft Office.
- Keahlian: 2 kartu teknis (gudang/inventory; produksi/mutu/K3), 6 kemampuan personal, 2 perangkat (WMS, Microsoft Office).
- Kontak: wahyudin1598@gmail.com, 0851-1727-1598 (WhatsApp), linkedin.com/in/wahyudinn, Kota Tangerang, Banten.
- Dihapus karena tidak ada data: bagian Organisasi dan Kegiatan/Prestasi.

## Buatan pembuat situs (diturunkan dari CV)
Judul "Tertib. Terukur. Siap Memimpin Tim.", kutipan, 4 karakter kerja, "bidang fokus", subjudul kartu, tag pengalaman, deskripsi dua kartu keahlian, tagline hero dan kontak, terjemahan EN.

## Foto
- Hero: `4r.jpg` (potret 3/4 badan, latar putih), latar dipotong (rembg birefnet-portrait), tanpa Gemini. `IMG_0460` dipakai di halaman Pendidikan versi PDF. `Foto.jpg` (pas foto latar biru) tidak dipakai.
- Paklaring tidak dipasang (dokumen pribadi); dipakai hanya untuk mencocokkan periode kerja.

## Ketidaksesuaian
Lihat laporan akhir.
