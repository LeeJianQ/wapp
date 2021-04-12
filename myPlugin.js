export default function myPlugin() {
  const virtualFileId = 'vue'

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualFileId) {
        console.log(id)
        // return virtualFileId
      }
    },
    load(id) {
      if (id === virtualFileId) {
        console.log(id)
        return `export const msg = "from virtual file"`
      }
    },
    transform (code) {
      console.log(code)
    }
  }
}