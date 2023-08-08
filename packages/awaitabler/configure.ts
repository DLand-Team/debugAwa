export let configure: {
  defaultSchema: string
}

(() => {
  configure = {
    // @ts-ignore
    defaultSchema: import.meta.env.DEFAULT_SCHEMA || 'http'
  }
})()

export function setConfigure(config: Partial<typeof configure>) {
  configure = { ...configure, ...config }
}
