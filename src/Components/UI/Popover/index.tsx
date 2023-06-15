import React, { useState } from 'react'

import Tippy, { TippyProps } from '@tippyjs/react/headless'

import {
  Arrow,
  ContentWrapper,
  PopoverBlock,
} from 'Components/UI/Popover/styles'

type Props = TippyProps & {
  withArrow?: boolean
  withBackground?: boolean
}

function Popover({
  interactive,
  content,
  delay = [270, 0],
  offset = [0, 8],
  placement = 'top',
  plugins = [],
  trigger = 'mouseenter focus',
  withArrow,
  withBackground = true,
  ...rest
}: Props) {
  const [mounted, setMounted] = useState(false)
  const [arrow, setArrow] = useState(null)

  const lazyPlugin = {
    fn: () => ({
      onShow: () => setMounted(true),
      onHidden: () => setMounted(false),
    }),
  }

  const computedProps = { plugins, ...rest }

  computedProps.plugins = [...plugins, lazyPlugin]

  computedProps.render = attrs =>
    mounted ? (
      <PopoverBlock {...attrs} withoutBackground={!withBackground}>
        {withArrow && <Arrow ref={setArrow} />}
        <ContentWrapper>{content}</ContentWrapper>
      </PopoverBlock>
    ) : null

  return (
    <Tippy
      {...computedProps}
      arrow={withArrow}
      content={content}
      delay={delay}
      interactive={interactive}
      offset={offset}
      placement={placement}
      popperOptions={{
        modifiers: [
          {
            name: 'arrow',
            options: {
              element: arrow,
            },
          },
          {
            name: 'flip',
            options: {
              padding: { top: 64 },
            },
          },
        ],
      }}
      trigger={trigger}
    />
  )
}

export default Popover
