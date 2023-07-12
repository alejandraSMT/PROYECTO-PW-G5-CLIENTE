25/05/23
Problema entre los css de todos los componentes, se sobrescriben entre ellos al intentar importar todos los componentes en un solo js.
Probablemente sea un problema de los class y ids, pero por ahora la solución es comentar y descomentar el bloque de código respectivo a cada pantalla.

La guía ya estructura por integrantes del grupo y pantallas, se encuentra en el app.js.Para que se muestre correctamente la pantalla se debe comentar todos los imports y exports de las demás pantallas.

Ejemplo:

//Joaquin  ---SIN COMENTAR/VISUALIZABLE---
import Login from './pages/login/login.js';
export default Login;



//Frank    ---COMENTADO/NO VISUALIZABLE---
//import ReservarCitas_DetalleDocente from './pages/ReservarCitas_DetalleDocente/main-views/ReservarCitas_DetalleDocente_View.js'
//export default ReservarCitas_DetalleDocente;


