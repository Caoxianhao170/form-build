export function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('../public/serviceWork.js')
        .then(res => {
          console.log('Service Worker 注册成功', res)
        })
        .catch(err => {
          console.log('Service Worker 注册失败', err)
        })
    })
  }
}

