import {getTranslations} from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("home");

  return <div className="h-full">{t('title')}</div>;
}