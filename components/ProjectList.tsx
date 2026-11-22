'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Leader Inventory", en: "Inventory Leader" },
    description: { id: "Memimpin gudang bahan baku dan produk jadi, melapor ke COO, dan merancang 4 sistem Google Sheets yang kini menjadi file kerja resmi.", en: "Leads the raw material and finished goods warehouse, reports to the COO, and designed 4 Google Sheets systems that are now official working files." },
    framework: "PT PUREO KOSMETIK MASINDO, JUNI 2026 — SEKARANG",
    techStack: ["WMS", "Google Sheets"],
  },
  {
    number: '02',
    title: { id: "Staff Inventory", en: "Inventory Staff" },
    description: { id: "Laporan inventaris mingguan dan bulanan terintegrasi serta analisis buffer stock; dipromosikan dalam 13 bulan.", en: "Integrated weekly and monthly inventory reports and buffer stock analysis; promoted within 13 months." },
    framework: "PT PUREO KOSMETIK MASINDO, MEI 2025 — MEI 2026",
    techStack: ["Inventory", "Buffer Stock"],
  },
  {
    number: '03',
    title: { id: "Leader Produksi", en: "Production Leader" },
    description: { id: "Menekan cacat produk dan barang hilang, memimpin jadwal tim, dan menyelesaikan kendala lantai produksi.", en: "Reduced product defects and lost goods, led the team schedule, and resolved shop-floor issues." },
    framework: "PT GUDANG KITA, NOVEMBER 2023 — NOVEMBER 2024",
    techStack: ["Leadership", "Control"],
  },
  {
    number: '04',
    title: { id: "Supervisor", en: "Supervisor" },
    description: { id: "Memimpin tim serta mengelola stok dan distribusi bahan pokok; dipromosikan dalam 10 bulan.", en: "Led the team and managed stock and staple goods distribution; promoted within 10 months." },
    framework: "PT JAVA ROYAL ICE, JANUARI — OKTOBER 2023",
    techStack: ["Supervisor", "Stock"],
  },
  {
    number: '05',
    title: { id: "Operator Mesin", en: "Machine Operator" },
    description: { id: "Memaksimalkan output mesin lewat pemantauan parameter dan perawatan rutin.", en: "Maximized machine output through parameter monitoring and routine maintenance." },
    framework: "PT JAVA ROYAL ICE, MARET — DESEMBER 2022",
    techStack: ["Machine", "Maintenance"],
  },
  {
    number: '06',
    title: { id: "Curing Operator", en: "Curing Operator" },
    description: { id: "Menyetel mesin curing mold per jenis ban agar sesuai spesifikasi.", en: "Adjusted curing mold machines per tire type to meet specifications." },
    framework: "MAXXIS INTERNATIONAL, FEBRUARI 2021 — FEBRUARI 2022",
    techStack: ["Curing", "Production"],
  },
  {
    number: '07',
    title: { id: "Quality Control", en: "Quality Control" },
    description: { id: "Menekan produk NG dan memastikan truk serta barang sesuai data sebelum diproses gudang.", en: "Reduced NG products and ensured trucks and goods matched the data before warehouse processing." },
    framework: "PT DHL SUPPLY CHAIN, MARET 2020 — JANUARI 2021",
    techStack: ["QC", "Warehouse"],
  },
  {
    number: '08',
    title: { id: "Sales Agent", en: "Sales Agent" },
    description: { id: "Target 25 — 30 unit kredit sepeda motor per bulan dan penjualan tertinggi di Jabodetabek.", en: "A target of 25 — 30 motorcycle credit units per month and the top sales in Jabodetabek." },
    framework: "HOME CREDIT INDONESIA, SEPTEMBER 2019 — JANUARI 2020",
    techStack: ["Sales"],
  },
  {
    number: '09',
    title: { id: "Operator Produksi", en: "Production Operator" },
    description: { id: "Target produksi 100%, lisensi S-Proses, dan penerapan white line serta line danger.", en: "A 100% production target, the S-Proses license, and white line and line danger implementation." },
    framework: "PT KAYABA INDONESIA, APRIL 2017 — APRIL 2019",
    techStack: ["Assembly", "S-Proses"],
  },
  {
    number: '10',
    title: { id: "Quality Control", en: "Quality Control" },
    description: { id: "Menurunkan tingkat cacat lewat analisis dan pengawasan tiap tahap produksi.", en: "Reduced defect rates through analysis and supervision at every production stage." },
    framework: "PT TEMPO SCAN PACIFIC TBK, JUNI 2016 — JANUARI 2017",
    techStack: ["QC", "Defect"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'WORK PORTFOLIO' : 'PORTOFOLIO KERJA'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Warehouse, Production & Quality Experience' : 'Pengalaman Gudang, Produksi & Mutu'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of work from 2016 to the present across warehousing, inventory control, production, quality control, and sales.'
              : 'Rekam jejak kerja dari 2016 hingga sekarang di bidang pergudangan, inventory control, produksi, quality control, dan penjualan.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
