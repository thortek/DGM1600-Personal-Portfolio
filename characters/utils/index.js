export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let star = end - 2  
    if (url.charAt(star) === '/') {
      star++
    }
    return url.slice(star, end)
  }