import { useEffect, useState, useCallback, useMemo } from "react";
import Reveal from "./Reveal.jsx";
import { videos } from "../data.js";

/* Dropbox share URL -> direct, streamable link for <video>. */
function toDirectVideo(raw) {
  if (!raw) return "";
  let url = String(raw).trim();
  if (!/dropbox\.com/.test(url)) return url;
  url = url
    .replace("www.dropbox.com", "dl.dropboxusercontent.com")
    .replace("://dropbox.com", "://dl.dropboxusercontent.com");
  const [base, query = ""] = url.split("?");
  const params = new URLSearchParams(query);
  const rlkey = params.get("rlkey");
  return rlkey ? `${base}?rlkey=${rlkey}` : base;
}

function getClips(video) {
  const list = Array.isArray(video.urls) ? video.urls : [];
  return list.map((u) => String(u).trim()).filter(Boolean);
}

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

/*
 * ONE card that works in two modes:
 *  - mode "category" (All view): a preview of a whole category. Shows the total
 *    video count and, when clicked, opens that category's filter.
 *  - mode "single" (a specific filter is active): one individual clip that
 *    plays in the lightbox when clicked.
 */
function Card({ item, index, mode, onOpen }) {
  const has = !!item.src;

  return (
    <Reveal
      delay={index * 0.06}
      className={`card group overflow-hidden ${has || mode === "category" ? "cursor-pointer" : ""}`}
      onClick={has || mode === "category" ? onOpen : undefined}
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        {has ? (
          <video
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={`${item.src}#t=0.5`}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-neutral-600">
            Coming soon
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-md bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
          {item.category}
        </span>

        {/* Total-count badge (category / All view) */}
        {mode === "category" && item.count > 0 && (
          <span className="absolute right-3 top-3 rounded-md bg-gold/90 px-2 py-0.5 text-[10px] font-bold text-ink backdrop-blur">
            {item.count} {item.count === 1 ? "video" : "videos"}
          </span>
        )}

        {/* Hover overlay */}
        {mode === "category" ? (
          item.count > 0 && (
            <span className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 transition group-hover:opacity-100">
              <span className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink">
                View all {item.count} →
              </span>
            </span>
          )
        ) : (
          has && (
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
                <PlayIcon />
              </span>
            </span>
          )
        )}
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{item.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Lightbox({ video, onClose }) {
  const clips = video._clips || [];
  const total = clips.length;
  const [idx, setIdx] = useState(0);
  const go = useCallback((d) => setIdx((i) => (i + d + total) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && total > 1) go(1);
      else if (e.key === "ArrowLeft" && total > 1) go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, go, total]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
      onClick={onClose}
    >
      <button
        className="absolute right-5 top-5 text-3xl text-neutral-400 hover:text-white"
        aria-label="Close"
      >
        ×
      </button>
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <video
          key={idx}
          src={clips[idx]}
          className="w-full rounded-xl"
          controls
          autoPlay
          playsInline
          controlsList="nodownload"
        />
        {total > 1 && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} className="btn-ghost px-4 py-2">
              ‹ Prev
            </button>
            <span className="text-sm text-neutral-400">
              {idx + 1} / {total}
            </span>
            <button onClick={() => go(1)} className="btn-ghost px-4 py-2">
              Next ›
            </button>
          </div>
        )}
        <a
          href={video._raw?.[idx]}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-xs text-neutral-500 hover:text-gold"
        >
          Trouble playing? Open in Dropbox ↗
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  // Group entries by category, keeping every clip.
  const groups = useMemo(() => {
    const map = new Map();
    videos.forEach((v) => {
      if (!map.has(v.category))
        map.set(v.category, { category: v.category, entries: [] });
      map.get(v.category).entries.push(v);
    });
    return Array.from(map.values()).map((g) => {
      const clips = g.entries.flatMap(getClips);
      const tags = Array.from(new Set(g.entries.flatMap((e) => e.tags || [])));
      return { ...g, clips, tags, count: clips.length };
    });
  }, []);

  const cats = useMemo(() => ["All", ...groups.map((g) => g.category)], [groups]);

  // ALL view -> one preview card per category (with total count).
  const categoryCards = useMemo(
    () =>
      groups.map((g) => ({
        category: g.category,
        title: g.category,
        tags: g.tags.slice(0, 3),
        count: g.count,
        src: g.count ? toDirectVideo(g.clips[0]) : "",
      })),
    [groups]
  );

  // FILTERED view -> every individual clip in the category as its own card.
  const singleCards = useMemo(() => {
    const g = groups.find((x) => x.category === filter);
    if (!g) return [];
    if (!g.count) {
      // Category with no clips yet — show a single "coming soon" card.
      return g.entries.map((e) => ({
        category: e.category,
        title: e.title,
        tags: e.tags || [],
        src: "",
        _clips: [],
        _raw: [],
      }));
    }
    return g.entries.flatMap((e) => {
      const clips = getClips(e);
      return clips.map((clip, i) => ({
        category: e.category,
        title: clips.length > 1 ? `${e.title} — ${i + 1}` : e.title,
        tags: e.tags || [],
        src: toDirectVideo(clip),
        _clips: [toDirectVideo(clip)],
        _raw: [clip],
      }));
    });
  }, [groups, filter]);

  const isAll = filter === "All";
  const shown = isAll ? categoryCards : singleCards;

  return (
    <section id="work" className="border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Reveal as="p" className="eyebrow mb-4">
          Selected Work
        </Reveal>
        <Reveal className="mt-4 max-w-xl text-neutral-400">
          {isAll
            ? "One highlight from each category — pick a filter to see every video."
            : `All ${filter} videos. Click any piece to watch.`}
        </Reveal>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                filter === c
                  ? "border-gold bg-gold text-ink"
                  : "border-line text-neutral-400 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, i) => (
            <Card
              key={`${filter}-${item.title}-${i}`}
              item={item}
              index={i}
              mode={isAll ? "category" : "single"}
              onOpen={
                isAll
                  ? () => setFilter(item.category)
                  : item.src
                  ? () => setActive(item)
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {active && <Lightbox video={active} onClose={() => setActive(null)} />}
    </section>
  );
}
