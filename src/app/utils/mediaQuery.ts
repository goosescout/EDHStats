import UAParser from "ua-parser-js"

export const SCREEN_SIZES = {
  MOBILE: 700,
  DESKTOP: 1200,
}

const size = {
  mobile: `(max-width: ${SCREEN_SIZES.MOBILE}px)`,
  tablet: `(max-width: ${SCREEN_SIZES.DESKTOP}px) and (min-width: ${SCREEN_SIZES.MOBILE}px)`,
  tabletOrLess: `(max-width: ${SCREEN_SIZES.DESKTOP}px)`,
  desktop: `(min-width: ${SCREEN_SIZES.DESKTOP}px)`,
}

export const mediaQuerySize = size

const mediaQueryFor = {
  mobile: `@media ${size.mobile}`,
  tablet: `@media ${size.tablet}`,
  tabletOrLess: `@media ${size.tabletOrLess}`,
  desktop: `@media ${size.desktop}`,
}

export type MediaT = "mobile" | "tablet" | "desktop"

export function queryMedia(): MediaT {
  if (typeof window === "undefined") return "desktop"

  const requests = {
    mobile: window.matchMedia(size.mobile).matches,
    tablet: window.matchMedia(size.tablet).matches,
    desktop: window.matchMedia(size.desktop).matches,
  }

  const fallback = ["desktop", true]
  const [media] = Object.entries(requests).find(([_, v]) => v) ?? fallback

  return media as MediaT
}

export function subscribeMedia(fn: (media: MediaT) => void): void {
  const medias: MediaT[] = ["desktop", "tablet", "mobile"]

  const sub = (key: MediaT) => (ev: MediaQueryListEvent) => {
    if (ev.matches) fn(key)
  }

  medias.forEach(media => {
    window.matchMedia(size[media]).addEventListener("change", sub(media))
  })
}

export function extractMediaFromUserAgent(ua: string): MediaT {
  const uaParser = new UAParser(ua)

  const isMobile =
    uaParser.getDevice().type === "mobile" ||
    [
      "iOS",
      "Android",
      "Android-x86",
      "Windows Phone",
      "Windows Mobile",
    ].includes(uaParser.getOS().name ?? "")

  return isMobile ? "mobile" : "desktop"
}

export default mediaQueryFor
