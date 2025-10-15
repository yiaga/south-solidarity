import PageBanner from "../components/Banners/PageBanner";
import Program from "../components/Programmes/Program";
import { generateLocaleStaticParams } from "@/app/libs/locales";


export const generateStaticParams = generateLocaleStaticParams;


export default async function Programme({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
 
  const { locale } = await params;

  void locale

  
  return (
    <section>
      <PageBanner title="OUR PROGRAMMES" />
      <Program />
    </section>
  );
}
