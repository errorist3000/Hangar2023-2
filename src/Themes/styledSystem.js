import every from 'lodash/every'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import isBoolean from 'lodash/isBoolean'
import keys from 'lodash/keys'
import map from 'lodash/map'
import some from 'lodash/some'
import startsWith from 'lodash/startsWith'

/**
 * @example
 *  '!enabled'
 *  => [true, 'enabled']
 *
 *  ['!enabled', '!valid']
 *  => [[true, 'enabled'], [true, 'valid']]
 *
 *  'enabled'
 *  => [false, 'enabled']
 *
 *  ['enabled', 'valid']
 *  => [[false, 'enabled'], [false, 'valid']]
 *
 * @param {string | string[]} prop - Prop of tokens (can be list of props)
 */
function processNegativeToken(prop) {
  if (isArray(prop)) {
    return map(prop, processNegativeToken)
  }
  const negative = startsWith(prop, '!')
  return [negative, negative ? prop.substring(1) : prop]
}

/**
 * Apply right part only if predicate is truthy or right part if not
 *
 * @example
 *
 * // normal notation
 * either('enabled', css`...`, css`...`)
 *
 * // predicate property notation
 * either('variant', 'primary', css`...`, css`...`)
 *
 * // array of keys with is notation
 * either(['color', 'variant'], ['red', 'primary'], css`...`, css`...`)
 *
 * // or mode                                         👇 indicates or mode
 * either(['disabled', 'error'], css`...`, css`...`, true)
 *
 * @param  {...any} args - Can accept both (key, css, css) or (key, predicate, css, cs)
 */
export function either(...args) {
  const [key] = args
  let [, left, right, or] = args
  let is = null

  if (keys(args).length >= 4) {
    const [, , , arg, last] = args
    if (!isBoolean(arg)) {
      is = left
      left = right
      right = arg
      or = last
    }
  }

  return props => {
    if (isArray(key)) {
      const entries = processNegativeToken(key)
      const comparator = or ? some : every
      const result = comparator(entries, ([negative, prop], index) => {
        let predicate = get(props, prop)
        if (get(is, index) != null) {
          predicate = predicate === get(is, index)
        }
        return negative ? !predicate : !!predicate
      })
      return result ? left : right
    }
    const [negative, prop] = processNegativeToken(key)
    let predicate = get(props, prop)
    if (is != null) {
      predicate = predicate === is
    }
    if (negative) {
      return predicate ? right : left
    }
    return predicate ? left : right
  }
}

/**
 * Apply right part only if predicate is truthy
 *
 * @example
 *
 * // normal notation
 * when('enabled', css`...`)
 *
 * // negative notation
 * when('!valid', css`
 *  opacity: 0.5;
 * `)
 *
 * // list of negative keys notation
 * when(['enabled', '!valid'], css`...`)
 *
 * @param {string | string[]} key - Key or list of keys
 * @param {*} then - What to apply if predicate is truthy
 */
export function when(key, then) {
  return props => {
    if (isArray(key)) {
      const entries = processNegativeToken(key)
      const result = every(entries, ([negative, prop]) => {
        const predicate = get(props, prop)
        return negative ? !predicate : !!predicate
      })
      return result && then
    }
    const [negative, prop] = processNegativeToken(key)
    const predicate = get(props, prop)
    return negative ? !predicate && then : predicate && then
  }
}

/**
 * Apply radius from theme
 *
 * @example
 *
 * radius: ${radius('normal')};
 *
 * radius: ${radius('round')};
 *
 * @see {@link theme/\_\_v2\_\_/light}
 * @param {'normal' | 'round'} key - Radius
 */
export function radius(key) {
  return props => `${get(props, `theme.radii.${key}`, 0)}px`
}

/**
 * Get prop from props
 *
 * @example
 *
 * radius: ${propGet('radius')}px;
 *
 * @param {string} key - Prop key
 */
export function propGet(key) {
  return props => get(props, key)
}
