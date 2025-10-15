import { generateLocaleStaticParams } from "@/app/libs/locales";
import SpeakersClient from "./SpeakersClient";

// ✅ Add generateStaticParams for static export
export const generateStaticParams = generateLocaleStaticParams;

export default function SpeakersPage() {
  return <SpeakersClient />;
}
