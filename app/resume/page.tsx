import ResumeDetails from "@/components/detailComponents/resumepage/ResumeDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Emil Kazimov",
    url: "/resume",
  },
};

export default function Resume() {
  return (
    <>
      <ResumeDetails />
    </>
  );
}
