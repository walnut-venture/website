import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en-US", "de-DE"],
  defaultLocale: "en-US"
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
