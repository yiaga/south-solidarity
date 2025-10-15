import { generateLocaleStaticParams } from "@/app/libs/locales";
import ResourcesClient from "./ResourcesClient";

// ✅ This enables static export for all locales
export const generateStaticParams = generateLocaleStaticParams;

export default function ResourcesPage() {
  return <ResourcesClient />;
}
