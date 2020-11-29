/**
 * Color are grouping all color from the project
 *
 * *Names are generated with that tool:
 * https://chir.ag/projects/name-that-color/
 */
export const COLOR = {
  ALABASTER: '#fafafa',
  GALLERY: '#eaeaea',
  MINE_SHAFT: '#222222',
}

/** Used for build app if host on specific base url */
export const ASSETS_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || ''
/** Use for redirection to the app */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'

export const BREAKPOINT = {
  XL: '1128px',
  L: '950px',
  M: '744px',
  S: '375px',
}

export const MEDIA_QUERY = {
  WIDE_AND_UP: `only screen and (min-width: ${BREAKPOINT.XL})`,
  WIDE_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.XL})`,
  MEDIUM_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.M})`,
  SMALL_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.S})`,
}
