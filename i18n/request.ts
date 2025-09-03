import {hasLocale} from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
import { routing } from './routing';


export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages: AbstractIntlMessages =
        (await import(`./messages/${locale}.json`)).default;

    return {locale, messages};
});