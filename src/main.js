import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smooth: true
})

const images = document.querySelectorAll('.page img')
const mapContents = document.querySelectorAll('.map .content')
const assets = document.querySelectorAll('.map .asset .img')

function updateParallax() {
  images.forEach(img => {
    const page = img.closest('.page')
    if (!page) return
    const rect = page.getBoundingClientRect()
    const scrollProgress = (rect.top / window.innerHeight)
    const translateY = -scrollProgress * 150
    img.style.transform = `translateY(${translateY}px)`
  })
}

function updateMap() {
  const scrollY = lenis.scroll
  const totalHeight = document.body.scrollHeight - window.innerHeight
  const scrollProgress = totalHeight > 0 ? scrollY / totalHeight : 0

  mapContents.forEach(content => {
    const translateY = -scrollProgress * (mapContents.length - 1) * 100
    content.style.transform = `translateY(${translateY}%)`
  })

  assets.forEach((asset) => {
    const translateY = -scrollProgress * (assets.length - 1) * 100
    asset.style.transform = `translateY(${translateY}%)`
  })
}

function titleFadeObserver() {
  const map = document.querySelector('.map')
  if (!map) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const opacity = entry.intersectionRatio
      const blur = (1 - opacity) * 10

      entry.target.style.opacity = opacity
      entry.target.style.filter = `blur(${blur}px)`
    })
  }, {
    root: map,
    rootMargin: "-30px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  })

  mapContents.forEach(content => {
    content.querySelectorAll('.title1, .title2').forEach(title => {
      observer.observe(title)
    })
  })
}

function raf(time) {
  lenis.raf(time)
  updateParallax()
  updateMap()
  requestAnimationFrame(raf)
}

titleFadeObserver()
raf()
