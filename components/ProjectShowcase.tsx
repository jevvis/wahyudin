'use client'

import { useState } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

const SYSTEMS = [1, 2, 3, 4]
const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8]

/** Proyek unggulan: 4 sistem Google Sheets (kartu ringkas) + penampil dokumentasi 8 gambar. */
export default function ProjectShowcase() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const go = (d: number) => setActive((a) => (a + d + IMAGES.length) % IMAGES.length)
  const n = IMAGES[active]
  const src = `/galeri/proj-${n}.jpg`

  return (
    <section id="project" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('project.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <TypewriterTitle text={t('project.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-2xl">{t('project.subtitle')}</p>
        </div>

        {/* Empat sistem */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 mb-4 font-semibold">{t('project.sys')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
          {SYSTEMS.map((s) => (
            <div key={s} className="group p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
              <span className="text-5xl font-light text-[var(--muted)] group-hover:text-emerald-500 transition-colors">{`0${s}`}</span>
              <h3 className="text-lg font-bold mt-4 mb-2 leading-snug">{t(`project.sys.${s}.n`)}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-5 grow">{t(`project.sys.${s}.d`)}</p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--card-border)]/60">
                {t(`project.sys.${s}.tags`).split('|').map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-medium">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Penampil dokumentasi */}
        <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] p-4 sm:p-6 md:p-8 shadow-sm">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--background)] aspect-video group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={src} src={src} alt={t(`project.img.${n}.t`)} className="w-full h-full object-contain animate-in fade-in duration-300" draggable={false} />
            <button type="button" onClick={() => go(-1)} aria-label="Sebelumnya" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Berikutnya" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-medium backdrop-blur-md border border-white/20">{active + 1} / {IMAGES.length}</span>
          </div>

          <div className="mt-5 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="max-w-3xl">
              <h3 className="text-lg md:text-xl font-bold">{t(`project.img.${n}.t`)}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mt-1">{t(`project.img.${n}.c`)}</p>
            </div>
            <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
              {t('project.viewFull')}
            </a>
          </div>

          <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
            {IMAGES.map((i, idx) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={t(`project.img.${i}.t`)}
                className={`relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 ${
                  idx === active ? 'border-emerald-500 ring-2 ring-emerald-500/50 scale-105 shadow-md' : 'border-[var(--card-border)] opacity-70 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/galeri/proj-${i}.jpg`} alt="" className="w-full h-full object-cover" loading="lazy" draggable={false} />
              </button>
            ))}
          </div>
          <p className="text-[11px] text-[var(--muted)] mt-5 leading-relaxed">{t('project.note')}</p>
        </div>
      </div>
    </section>
  )
}
