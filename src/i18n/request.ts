import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Tentukan tipe Locale
type Locale = "en" | "fr" | "id"; // Sesuaikan dengan routing.locales

export default getRequestConfig(async ({ requestLocale }) => {
  // Menunggu hasil requestLocale yang bisa berupa string atau undefined
  let locale: string | undefined = await requestLocale;

  // Pastikan locale valid dan termasuk dalam routing.locales
  if (locale && routing.locales.includes(locale as Locale)) {
    // locale sudah valid, tidak perlu perubahan
  } else {
    // Jika locale tidak valid atau undefined, setel nilai default
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
