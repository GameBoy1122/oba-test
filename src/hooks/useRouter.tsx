import { useLocale } from "next-intl";
import { useRouter as useRouterNextIntl } from "next-intl/client";

type IntlNavigateOptions = {
  locale?: string;
};

declare enum PrefetchKind {
  AUTO = "auto",
  FULL = "full",
  TEMPORARY = "temporary",
}

type Options =
  import("next/dist/shared/lib/app-router-context.shared-runtime").NavigateOptions &
    IntlNavigateOptions;

type PrefetchOptions =
  import("next/dist/shared/lib/app-router-context.shared-runtime").PrefetchOptions &
    IntlNavigateOptions;

const useRouter = () => {
  const locale = useLocale();
  const router = useRouterNextIntl();

  return {
    push: (href: string, options?: Options | undefined) => {
      router.push(href, { ...options, locale });
    },
    replace: (href: string, options?: Options | undefined) => {
      router.replace(href, { ...options, locale });
    },
    prefetch: (href: string, options?: PrefetchOptions | undefined) => {
      router.prefetch(href, { ...options, locale, kind: PrefetchKind.AUTO });
    },
    back: () => {
      router.back();
    },
    forward: () => {
      router.forward();
    },
    refresh: () => {
      router.refresh();
    },
  };
};

export default useRouter;
