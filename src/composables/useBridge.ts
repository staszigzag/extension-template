export function useBridge<T>(key: string, initValue: T) {
  const v = ref(initValue)

  onMounted(() => {
    chrome.storage.sync.get(key, (result) => {
      console.log('result', result)
      v.value = result?.value ?? initValue
    })
    chrome.runtime.onMessage.addListener((request) => {
      console.log('request', request)
      if (request.type === key) {
        v.value = request?.value ?? initValue
      }
    })
  })
  watch(v, (newV) => {
    console.log('newV', newV)
    chrome.storage.sync.set({ [key]: { value: newV.value } })

    chrome.runtime.sendMessage({ type: key, value: newV.value })
  })

  return v
}
