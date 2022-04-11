window.onload = function () {
  let timeoutID, postsNum
  window.addEventListener('scroll', function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      const posts = document.querySelectorAll('div[class="du4w35lb k4urcfbm l9j0dhe7 sjgh65i0"]')
      if (posts.length === 0) {
        return
      }
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
