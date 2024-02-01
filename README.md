<h1>Calculadora</h1>

<h3>📋Enunciado</h3>
Programa una calculadora online, que sea capaz de realizar la siguientes operaciones: 
<br>

  <li>Suma</li> 
  <li>Resta</li> 
  <li>Multiplicacion</li> 
  <li>Division</li> 
  <li>Potencia</li> 
  <li>Raiz Cuadrara</li> 
  <li>Valor absoluto </li> 
<br>
 
Tambien nuestra calculadora tendra un boton para crear numeros aleatorios, tomando como valor minimo el primero numero y como valor maximo el segundo numero y por ultimo una vez mostrado el resultado de cualquiera de las operaciones 
el usuario contara con tres botones para redondear ese resultado 👉🏼 round, floor y ceil.

<h3>🗒Pasos para solucionar el proyecto:</h3> 
<li>Para comenzar, declaramos tres input de tipo text para los dos campos de los números, más el campo de resultado.</li>
<li>Hice 11 botones, uno por cada operación, a cada botón, en el evento onclick, lo direccione a una función diferente que va a hacer la operación en cuestión.</li>
<li>En cada función y para cada operación, el código sera muy parecido. En primer lugar, obtenemos los valores de los campos 1 y 2. Luego, realizamos la operación en cuestión y pasamos ese resultado a la otra función que va a mostrar el resultado en el campo para tal fin</li>
<li>La función que muestra el resultado, recibe un parámetro con el valor y se lo asigna al input resultado</li>
<br>
<p> <b>Por ultimo, agregue estilos CSS, inspirada en la calculadora de un telefono iPhone </b>📱</p>

