
const tl = gsap.timeline({ defaults: {duration: 0.3, opacity: 0}})


tl.from('.nav-item', {
    x:-20,
    stagger: {
        amount: 0.6
    }
})
.from('.description', {
    y: 30,
})
.from('.year', {
    y: -20,
})
.from('.cta', {
    y: 30,
}).from('.line-one', {
    y:'-100vh',
    opacity: 1
})
.from('.line-two', {
    y:'-100vh',
    opacity: 1
})
.from('img', {
    y: '-100vh',
    ease: 'power3.out',
    duration: 1
})
.from ('.social button', {
    y:20,
    stagger: {
        each: 0.2
    }
}, '<')