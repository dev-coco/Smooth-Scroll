window.onload = () => {
  let timeoutID, postsNum
  window.addEventListener('scroll', () => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      const posts = document.querySelectorAll('[class="x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z"]')
      if (posts.length === 0) return
      if (posts.length - 13 >= 3) {
        postsNum = posts.length - 13
        for (let i = 0; i < postsNum; i++) {
          posts[i].style.height = posts[i].offsetHeight + 'px'
          posts[i].className = 'blank'
          posts[i].innerText = ''
        }
      }
    }, 100)
  })
}
