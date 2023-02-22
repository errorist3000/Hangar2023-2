// @ts-strict-ignore
import React, { useEffect } from 'react'
import { components, OptionProps } from 'react-select-five'

import { Item } from './styles'

import { SizeProps } from '../styles'
import { CustomSelectProps } from '../types'

function Option({
  selectProps: { value, scrollToOption },
  ...props
}: OptionProps & { selectProps: SizeProps & CustomSelectProps }) {
  useEffect(() => {
    if (scrollToOption && scrollToOption === props.data && !value) {
      document.getElementById(props.innerProps.id)?.scrollIntoView?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // @ts-ignore
  return <Item {...props} as={components.Option} />
}

export default Option
