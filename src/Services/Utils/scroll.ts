import { scroller } from 'react-scroll'

import { SCROLL_ANIMATION } from 'Constants/animations'

function pageScroll(id: string) {
  scroller.scrollTo(id, SCROLL_ANIMATION)
}

export default { pageScroll }
