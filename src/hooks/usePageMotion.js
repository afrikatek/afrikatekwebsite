import { useEffect } from 'react'

/*
 * usePageMotion — React port of the prototype's motion.js.
 *
 * Motion model (unchanged from the prototype): content is VISIBLE BY DEFAULT.
 * These effects are purely additive — they add `.in` / `.in-view` classes and
 * run count-up / dashboard tweens. Nothing is ever hidden by JS, so if this
 * hook never ran the page would still be fully readable.
 *
 * Runs on mount and whenever `key` (the route pathname) changes, so each page
 * gets its reveals, magnetic buttons, parallax and hero line-draw re-wired.
 */
export default function usePageMotion(key) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    /* ---- count up ---- */
    function setFinal(el) {
      el.querySelectorAll('[data-to]').forEach((n) => {
        n.textContent = n.getAttribute('data-to')
      })
    }
    function runCount(scope) {
      if (reduce) { setFinal(scope); return }
      scope.querySelectorAll('[data-to]').forEach((n) => {
        const to = parseFloat(n.getAttribute('data-to'))
        const dec = (n.getAttribute('data-to').split('.')[1] || '').length
        const dur = 1500
        let t0 = null
        function tick(t) {
          if (!t0) t0 = t
          const p = Math.min((t - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          const val = to * eased
          n.textContent = dec ? val.toFixed(dec) : Math.round(val).toLocaleString()
          if (p < 1) requestAnimationFrame(tick)
          else n.textContent = dec ? to.toFixed(dec) : to.toLocaleString()
        }
        requestAnimationFrame(tick)
      })
    }

    /* ---- animated dashboard (ring + bars + numbers) ---- */
    function tween(dur, cb, done) {
      let t0 = null
      function step(t) {
        if (!t0) t0 = t
        const p = Math.min((t - t0) / dur, 1)
        cb(1 - Math.pow(1 - p, 3))
        if (p < 1) requestAnimationFrame(step)
        else if (done) done()
      }
      requestAnimationFrame(step)
    }
    function runDash(scope) {
      if (reduce) return
      const ring = scope.querySelector('.ring .prog')
      if (ring) {
        const C = 327
        let target = parseFloat(ring.getAttribute('data-offset'))
        if (isNaN(target)) target = 33
        ring.style.strokeDashoffset = C
        tween(1500, (e) => { ring.style.strokeDashoffset = (C + (target - C) * e).toFixed(1) })
      }
      scope.querySelectorAll('.track2 i').forEach((bar) => {
        const w = bar.style.getPropertyValue('--w') || getComputedStyle(bar).getPropertyValue('--w')
        bar.style.transition = 'none'
        bar.style.width = '0%'
        tween(1400, (e) => { bar.style.width = (parseFloat(w) * e).toFixed(1) + '%' }, () => { bar.style.width = '' })
      })
      runCount(scope)
    }

    /* ---- reveal on scroll ---- */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in', 'in-view')
          if (e.target.hasAttribute('data-count')) runCount(e.target)
          if (e.target.hasAttribute('data-dash')) runDash(e.target)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })

    document.querySelectorAll('[data-reveal],[data-reveal-stagger],[data-count],[data-dash],.in-view-trigger').forEach((el) => {
      if (reduce) { el.classList.add('in', 'in-view'); if (el.hasAttribute('data-count')) setFinal(el); return }
      io.observe(el)
    })
    cleanups.push(() => io.disconnect())

    /* ---- magnetic buttons ---- */
    if (!reduce && window.matchMedia('(pointer:fine)').matches) {
      document.querySelectorAll('.mag').forEach((m) => {
        const strength = 0.3
        const move = (e) => {
          const r = m.getBoundingClientRect()
          const x = e.clientX - r.left - r.width / 2
          const y = e.clientY - r.top - r.height / 2
          m.style.transform = 'translate(' + (x * strength) + 'px,' + (y * strength) + 'px)'
        }
        const leave = () => { m.style.transform = 'translate(0,0)' }
        m.addEventListener('mousemove', move)
        m.addEventListener('mouseleave', leave)
        cleanups.push(() => { m.removeEventListener('mousemove', move); m.removeEventListener('mouseleave', leave) })
      })
    }

    /* ---- parallax (data-parallax = speed) ---- */
    const px = [].slice.call(document.querySelectorAll('[data-parallax]'))
    if (px.length && !reduce) {
      let ticking = false
      const para = () => {
        const vh = window.innerHeight
        px.forEach((el) => {
          const r = el.getBoundingClientRect()
          const center = r.top + r.height / 2 - vh / 2
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1
          el.style.transform = 'translateY(' + (center * -speed) + 'px)'
        })
        ticking = false
      }
      const onScroll = () => { if (!ticking) { requestAnimationFrame(para); ticking = true } }
      window.addEventListener('scroll', onScroll, { passive: true })
      para()
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    /* ---- hero network: draw lines ---- */
    const net = document.getElementById('netlines')
    if (net && !reduce) {
      net.querySelectorAll('line').forEach((l, i) => {
        const len = Math.hypot(l.x2.baseVal.value - l.x1.baseVal.value, l.y2.baseVal.value - l.y1.baseVal.value) || 300
        l.style.strokeDasharray = len
        l.style.strokeDashoffset = len
        l.style.transition = 'stroke-dashoffset 1.2s ' + (0.4 + i * 0.12) + 's cubic-bezier(.16,1,.3,1)'
      })
      requestAnimationFrame(() => {
        net.querySelectorAll('line').forEach((l) => { l.style.strokeDashoffset = 0 })
      })
    }

    return () => { cleanups.forEach((fn) => fn()) }
  }, [key])
}
