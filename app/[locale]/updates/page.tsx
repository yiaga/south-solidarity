import { generateLocaleStaticParams } from "@/app/libs/locales";
import UpdatesClient from "./UpdatesClient";

// ✅ Allow static export for [locale] route
export const generateStaticParams = generateLocaleStaticParams;

export default function UpdatesPage() {
  return <UpdatesClient />;
}
