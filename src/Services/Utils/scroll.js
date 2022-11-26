import { scroller } from 'react-scroll'

import { SCROLL_ANIMATION } from 'Constants/animations'

export function pageScroll(id) {
  scroller.scrollTo(id, SCROLL_ANIMATION)
}

export function pageScroll2(id) {
  scroller.scrollTo(id, SCROLL_ANIMATION)
}
