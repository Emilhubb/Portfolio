"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import English from "../public/english.png";
import German from "../public/german.png";
import Italian from "../public/italian.png";
import Russian from "../public/russian.png";

const FLAGS: Record<string, StaticImageData> = {
  de: German,
  it: Italian,
  en: English,
  ru: Russian,
};

interface DuolingoCourse {
  id: string;
  authorId?: string;
  fromLanguage?: string;
  learningLanguage: string;
  title: string;
  xp: number;
  crowns?: number;
}

interface DuolingoStats {
  id: number;
  name: string;
  username: string;
  streak: number;
  streakData?: {
    currentStreak: {
      startDate: string;
      endDate?: string;
      length?: number;
    };
  };
  courses: DuolingoCourse[];
  totalXp: number;
}

export default function DuolingoCard() {
  const [stats, setStats] = useState<DuolingoStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://android-api-cf.duolingo.com/2017-06-30/users?username=emilkaziml",
    )
      .then((res) => res.json())
      .then((data: { users?: DuolingoStats[]; error?: string }) => {
        const user = data.users?.[0];
        if (data.error || !user) {
          setError(true);
        } else {
          setStats(user);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-500">
        Could not fetch Duolingo stats.
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-400 animate-pulse">
        Loading...
      </div>
    );
  }

  const startYear = stats.streakData?.currentStreak?.startDate?.slice(0, 4);
  const maxXp = Math.max(...stats.courses.map((c) => c.xp), 1);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#347501] p-7 text-white shadow-[0_8px_0_0_#3d9100] max-w-md select-none">
      <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-white/5" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Duolingo profile
          </p>
          <h2 className="mt-1 text-2xl font-extrabold">{stats.name}</h2>
          <a
            href={`https://www.duolingo.com/profile/${stats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70"
          >
            @{stats.username}
          </a>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-white/15 px-4 py-2 backdrop-blur-sm">
          <span className="text-3xl leading-none">🔥</span>
          <span className="mt-1 text-xl font-extrabold leading-none">
            {stats.streak}
          </span>
          <span className="text-[10px] uppercase tracking-wide text-white/70">
            days
          </span>
        </div>
      </div>

      {startYear && (
        <p className="relative mt-2 text-xs text-white/70 italic">
          Streak Since - {startYear}
        </p>
      )}

      <div className="relative mt-6 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
        <span className="text-xl">⭐</span>
        <span className="text-lg">
          {stats.totalXp.toLocaleString("az-AZ")} XP
        </span>
        <span className="ml-auto text-xs text-white/70">Total XP</span>
      </div>

      <div className="relative mt-6 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Latest courses
        </p>
        {stats.courses.map((course) => (
          <div key={course.id} className="flex items-center gap-3">
            <span className="text-xl">
              {(FLAGS as any)[course.learningLanguage] ? (
                <Image
                  src={(FLAGS as any)[course.learningLanguage]}
                  alt={course.learningLanguage}
                  width={24}
                  height={24}
                />
              ) : (
                "🏳️"
              )}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm">
                <span className="">{course.title}</span>
                <span className="text-white/70">
                  {course.xp.toLocaleString("az-AZ")} XP
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${(course.xp / maxXp) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
