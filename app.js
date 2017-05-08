window.onload = function() {

    let pressed = []
    let secretCode = 'lemmon'

    window.addEventListener('keyup', function(e) {
      pressed.push(e.key)
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

      if (pressed.join('').includes(secretCode)) {
        console.log('you got it!');
        cornify_add()
      }
    })
}
