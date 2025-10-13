import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation'; 


export default getRequestConfig(async ({ locale }) => {
 
  if (!locale) {
    notFound();
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    
    return {
      locale: locale, 
      messages: messages
    };
  } catch (error) {
    notFound();
  }
});