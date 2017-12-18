let awaitStatus = true
const timer = (time) => new Promise((resolve) => setTimeout(resolve, time))

const notRepeating = (time = 1000) =>
  new Promise((resolve, reject) => {
    if (awaitStatus) {
      awaitStatus = false
      resolve()
      timer(time)
        .then(() => { awaitStatus = true })
    } else {
      reject('Do not repeat!')
    }
  })

// async function notRepeating({
//     callback = () => { },
//   time = 1000
//   }) {
//   if (awaitStatus) {
//     awaitStatus = false
//     callback()
//     await timer(time)
//     awaitStatus = true
//   }
// }

export default notRepeating
