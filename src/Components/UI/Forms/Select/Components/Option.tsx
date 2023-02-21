// @ts-strict-ignore
import React, { useEffect } from 'react'
import { components, OptionProps } from 'react-select-five'

import { Item } from './styles'

import { SizeProps } from '../styles'
import { CustomSelectProps } from '../types'

function Option({
  selectProps: { large, medium, small, value, scrollToOption },
  ...props
}: OptionProps & { selectProps: SizeProps & CustomSelectProps }) {
  useEffect(() => {
    if (scrollToOption && scrollToOption === props.data && !value) {
      document.getElementById(props.innerProps.id)?.scrollIntoView?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <Item
      {...props}
      as={components.Option}
      large={large}
      medium={medium}
      small={small}
    />
  )
}

export default Option
