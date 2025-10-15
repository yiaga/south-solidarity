import { generateLocaleStaticParams } from "@/app/libs/locales";
import WatchSessionClient from "./WatchSessionClient";

// ✅ Static export requirement for localized pages
export const generateStaticParams = generateLocaleStaticParams;

export default function WatchSessionPage() {
  return <WatchSessionClient />;
}
