interface Window {
  LinkMink: any
}

type DatoQueryData<Key extends keyof DatoSchema.Query> = {
  [k in Key]: DatoSchema.Query[Key]
}
