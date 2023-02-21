import forEach from 'lodash/forEach'
import map from 'lodash/map'

export function checkboxConstraint(message) {
  return {
    inclusion: {
      within: [true],
      message,
    },
    presence: {
      presence: true,
      message,
    },
  }
}

export function hasError(meta, checkDirty = false) {
  const { dirty, touched, error, submitError, dirtySinceLastSubmit } = meta
  const isError =
    (touched || (checkDirty && dirty)) &&
    (error || (submitError && !dirtySinceLastSubmit))

  return { hasError: isError, error: isError ? error || submitError : null }
}

export function errors(form, fields, { checkDirty } = {}) {
  const result = {}

  forEach(fields, field => {
    const fieldState = form.getFieldState(field)
    if (!fieldState) return

    const { hasError: fieldHasError, error } = hasError(fieldState, checkDirty)
    if (fieldHasError) {
      result[field] = error
    }
  })

  return result
}

export function entityToOptions(data) {
  return map(data, entity => ({
    label: entity,
    value: entity,
  }))
}

export default {
  entityToOptions,
  errors,
  hasError,
  checkboxConstraint,
}
