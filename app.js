window.onload = function() {

    let pressed = []
    let secretCode = 'lemmon'

    window.addEventListener('keyup', function(e) {
      pressed.push(e.key)
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
      console.log(pressed.join(''));

      if (pressed.join('') === secretCode) {
      
      }
    })
}
