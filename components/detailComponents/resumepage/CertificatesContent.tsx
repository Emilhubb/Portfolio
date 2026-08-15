"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { StaticImageData } from "next/image";

import IELTSCERT from "../../../public/certificates/ielts.jpg";
import CFF from "../../../public/certificates/cff.jpg";
import COP29 from "../../../public/certificates/cop29.jpg";
import ITU from "../../../public/certificates/itu.jpg";
import Kronos from "../../../public/certificates/kronos.jpg";
import Lucebra from "../../../public/certificates/lucebra.jpg";
import ModernWeb from "../../../public/certificates/modernweb.jpg";
import F1 from "../../../public/certificates/f1.jpg";
import WUF13 from "../../../public/certificates/wuf13.jpg";

interface CertificateType {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  badge?: string;
  image: string | StaticImageData | (string | StaticImageData)[];
  skills?: string[];
}

const CertificatesData: CertificateType[] = [
  {
    id: 1,
    title: "International English Language Testing System (IELTS - 7.5)",
    issuer: "IELTS Official",
    issueDate: "Jan 2026",
    expiryDate: "Jan 2028",
    badge: "Overall Score: 7.5",
    image: IELTSCERT,
  },
  {
    id: 2,
    title: "Certificate of Appreciation — ICT Team at WTDC-25",
    issuer: "International Telecommunication Union (ITU)",
    issueDate: "Nov 2025",
    badge: "Appreciation Certificate",
    image: ITU,
  },
  {
    id: 3,
    title: "Front-end Development Certificate",
    issuer: "Lucebra",
    issueDate: "May 2025",
    badge: "Frontend Internship",
    image: Lucebra,
  },
  {
    id: 4,
    title: "Certificate of Appreciation — ICT Team at WUF13",
    issuer: "WUF13 Azerbaijan Operations Company",
    issueDate: "May 2025",
    badge: "Appreciation Certificate",
    image: WUF13,
  },
  {
    id: 5,
    title: "Front-end Development Certificate of Honor",
    issuer: "Algorithmics",
    issueDate: "Feb 2025",
    badge: "Honor Certificate (100% Score)",
    image: CFF,
  },
  {
    id: 6,
    title: "Modern Web Geliştirme Kursu | Sıfırdan İleri Seviyeye",
    issuer: "Udemy",
    issueDate: "2024",
    badge: "Web Development",
    image: ModernWeb,
  },
  {
    id: 7,
    title: "Appreciation & Kronos Certificate — ICT Team (COP29)",
    issuer: "COP29 Azerbaijan & UN",
    issueDate: "Nov 2024",
    expiryDate: "Nov 2024",
    badge: "Appreciation Certificate",
    image: [COP29, Kronos],
  },
  {
    id: 8,
    title: "Appreciation Certificate — Crowd Management",
    issuer: "Baku City Circuit (Formula 1)",
    issueDate: "Apr 2023",
    expiryDate: "Apr 2023",
    badge: "Operations & Safety",
    image: F1,
  },
  {
    id: 9,
    title: "Uygulamalarla SQL Server Öğreniyorum: A'dan Z'ye",
    issuer: "Udemy",
    issueDate: "2024",
    badge: "Database Architecture",
    image: ModernWeb,
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateType | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getImageSrc = (img: string | StaticImageData) => {
    return typeof img === "string" ? img : img.src;
  };

  return (
    <section className="w-full p-6 mb-5 select-none">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-(--primary-color) drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          # Certificates & Credentials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CertificatesData.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group relative flex flex-col  justify-between p-5 rounded-md shadow-[0_2px_10px_rgba(59,130,246,0.3)] hover:border-(--primary-color) 
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 
                       transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="text-base max-md:text-2xl max-2xl:text-[20px] font-bold text-white group-hover:text-blue-700 transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-3">
                <span className="font-semibold max-md:text-[15px] max-2xl:text-[15px] text-cyan-700">
                  {cert.issuer}
                </span>
                <span>•</span>
                <span className="max-md:text-[15px] max-2xl:text-[14px]">{cert.issueDate}</span>
                {cert.badge && (
                  <>
                    <span>•</span>
                    <span className=" font-medium max-md:text-[15px] max-2xl:text-[15px] ">
                      {cert.badge}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {mounted &&
        selectedCert &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-(--secondary-color) border border-(--primary-color)/40 
                         rounded-2xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {selectedCert.issuer} — {selectedCert.issueDate}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-neutral-400 hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg text-sm font-bold transition-all cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>
              <div className="relative w-full max-h-[70vh]  rounded-xl border border-white/5 bg-black/40 flex flex-col md:flex-row items-center justify-center gap-4 p-4">
                {Array.isArray(selectedCert.image) ? (
                  selectedCert.image.map((img, index) => (
                    <img
                      key={index}
                      src={getImageSrc(img)}
                      alt={`${selectedCert.title} - ${index + 1}`}
                      className="w-full md:w-1/2 h-auto object-contain rounded-lg border border-white/10"
                    />
                  ))
                ) : selectedCert.image ? (
                  <img
                    src={getImageSrc(selectedCert.image)}
                    alt={selectedCert.title}
                    className="max-h-[60vh] w-auto object-contain rounded-lg"
                  />
                ) : (
                  <div className="py-12 text-center text-neutral-400 text-sm font-mono">
                    📷 Preview image not uploaded yet.
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center text-xs text-neutral-400 pt-1">
                <span>{selectedCert.badge || "Official Certification"}</span>
                <span className="font-mono text-[11px] text-neutral-500">
                  Click anywhere outside to exit
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
