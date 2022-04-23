let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Gasta plata')
  .pauseFor(200)
  .deleteChars(14)
  .typeString('Digo...')
  .pauseFor(200)
  .deleteChars(10)
  .typeString('El bello Palermo')
  .pauseFor(75)
  .typeString(' :)')
  .pauseFor(200)

  .start();