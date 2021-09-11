document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')
  const {width: canvasWidth, height: canvasHeight} = canvas
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  console.log(canvasWidth, canvasHeight)
})
