# Investigación y comparativa de REST vs OData vs GraphQL


## REST 

Las `API REST` aprovechan los métodos `HTTP`, desde un simple `POST` o `GET` hasta métodos personalizados, sin embargo, nosotros veremos únicamente `POST`, `GET`, `PUT` y `DELETE` en su forma más sencilla y las Headers que son para autenticación, decirle qué tipo de dato va, etc. Pero esto no lo veremos aquí.
Asimismo, utilizaremos a Express para ser nuestro servidor `HTTP`, una recomendación es que, las `API REST` siempre estén detrás de Nginx ya que en caso de falla, Nginx puede seguir respondiendo, además que, permite una mejor manipulación de datos, protección de enlaces y demás cosas pero tampoco veremos esto en este tutorial, solo quise mencionarlo.
___

## OData 
El Protocolo de Datos Abierto `OData` o `Open Data Protocoles` un protocolo abierto que permite la creación y consumo de `APIs RESTful` que pueden ser consultadas e interoperables en una manera simple y estandarizada. `Microsoft` inicio dicho protocolo en el 2007. Las versiones 1.0,2.0 y 3 están lanzadas bajo el `Microsoft Open Specification Promise`. La versión 4.0 fue estandarizada en `OASIS` con un lanzamiento en marzo de 2014. En abril de 2015 `OASIS` envió la versión 4 de `OData` y la versión 4 del formato `OData JSON` a `ISO/IEC JTC 1` para su aprobación como un estándar internacional.

El protocolo permite la creación y consumición de `APIs REST` que permiten la creación de clientes Web para publicar y editar recursos, identificados utilizandos `URLs` y definido en un modelo de datos, usando mensajes `HTTP` simples. `OData` comparte algunas similitudes con `JDBC` y con `ODBC`; como `ODBC`, `OData` no esta limitada a una Base de datos relacional.

___
## GraphQL
`GraphQL` es un lenguaje de consulta y un tiempo de ejecución del servidor para las interfaces de programación de aplicaciones `API`; su función es brindar a los clientes exactamente los datos que solicitan y nada más.

Gracias a `GraphQL`, las `API` son rápidas, flexibles y sencillas para los desarrolladores. Incluso se puede implementar en un entorno de desarrollo integrado `IDE` conocido como `GraphiQL`. Como alternativa a `REST`, `GraphQL` permite que los desarrolladores creen consultas para extraer datos de varias fuentes en una sola llamada a la `API`.

Además, `GraphQL` otorga a los encargados del mantenimiento de las `API` la flexibilidad para agregar campos o modificarlos, sin que esto afecte las consultas actuales. Los desarrolladores pueden diseñar estas interfaces con los métodos que prefieran, y la especificación de `GraphQL` garantizará que funcionen de forma predecible para los clientes.

### ¿Entonces cual es su diferencia?
___
~~~
La diferencia principal y más importante es que [GraphQL] no está tratando con recursos dedicados. Es más, todos los recursos se consideran más bien en su totalidad un conjunto de grafos conectados entre sí. Esto da lugar a que puedes adaptar tu consulta a las necesidades del cliente utilizando el lenguaje de consulta de [GraphQL] (basado en Schemas) describiendo lo que le gustaría tener como respuesta, así como combinar diferentes entidades (o tipos) en una consulta y qué atributos deben incluirse en la respuesta de cada nivel.
~~~
- Un `API REST` abraza el concepto de tener múltiples endpoints (puntos de entrada), por tanto, se van a exponer múltiples rutas de tu `servicio web`. En cambio un `API GraphQL` sólo va a exponer un `único endpoint` o ruta el cual suele recibir el nombre `/graphql`, aunque puedes asignarle el nombre que tu quieras.

- `GraphQL` soluciona el problema que tiene `REST` relacionado con el `Over Fetching` y `Under Fetching`, es decir, puede darse el caso que con un servicio `RESTful` sobren o nos falten datos. Cada `endpoint` tiene una estructura fija de datos que se van a devolver cada vez que se realice una petición. En el caso de `Over Fetching` hay situaciones en las que no necesitamos toda la información y acabamos ignorando muchos de los datos, lo cual es indicativo de que realmente no estamos siendo del todo eficientes. Este problema hace que tengamos una carga de datos más lenta y consumamos más ancho de banda, o en el caso de los móviles consumamos más datos. El `Under Fetching` se da cuando nos faltan datos y requiere de otra petición adicional que nos devuelva los datos que nos falta.

- Un `API REST` reacciona de diferentes formas dependiendo de los métodos `HTTP` existentes `(GET, POST, PUT, DELETE)`. Un `API GraphQL` va a utilizar únicamente el método `POST`.
~~~
[GraphQL] utiliza resolvers para recopilar los datos que solicita un cliente. Se puede medir el rendimiento para evitar cuellos de botella en el sistema.

[GraphQL] integra la posibilidad de utilizar [WebSockets].
~~~
- Un `API REST` tiene implementado el `almacenamiento en caché` para que el cliente evite volver a buscar estos recursos. `GraphQL` deja esa responsabilidad a los clientes o bien integrar manualmente un `sistema de almacenamiento de caché`. La única tecnología que he visto hasta ahora que brinda cierta compatibilidad es `Relay`
~~~
Para el manejo de errores de un [API REST] nos basta con conocer el estado de la respuesta a través de los códigos de estado [HTTP] (HTTP status codes). En [GraphQL] obtendremos siempre una respuesta de código 200 (si el servidor responde correctamente), es decir, es una petición exitosa. El error lo obtendremos en la respuesta de la petición como un fallo en el procesado de la consulta. [GraphQL] recurre a esto ya que podemos lanzar más de una consulta a la vez, por tanto, algunas se resolverán correctamente y otras pueden fallar, pero no es motivo para cambiar el estado de la petición.
~~~
 - `GraphQL` nos permite obtener información exacta de los datos que comúnmente se solicitan en el `backend`. A medida que el cliente especifica esta información, resulta más fácil entender el uso de los datos y su disponibilidad.

El versionado de un `API REST` no es `trivial`, es decir, si necesitamos dar soporte a `múltiples versiones` normalmente significa crear nuevos `endpoints`. Esto causará más problemas y dolores de cabeza cuando es usado y además su mantenimiento será más costoso y puede dar lugar al llamado `código spaghetti`. Con `GraphQL` nos podemos ir olvidando, ya que se pueden añadir o eliminar campos sin romper la `consulta`. También existe la forma de excluirlos de la respuesta.