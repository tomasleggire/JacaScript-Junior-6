//DOM
//NODO: es cualquier etiqueta del cuerpo, como un parrafo, el propio body, etc, y hay varios tipos de nodos:

//*Document: el nodo document es el nodo raiz, de aca nacen el resto de nodos
//*Element: nodos definidos por etiquetas html
//*Text: el texto dentro de un nodo element, se considera un nuevo nodo hijo de tipo text.
//*Attribute: No los vemos como nodos en JS, sino como informacion asociada a un nodo tipo element
//*Comentarios y otros: Tambien son nodos

///////////////////METODOS DE SELECCION DE ELEMENTOS/////////////////////////////////////
                                                                         /*
parrafo = document.getElementById("parrafo"); //Seleccionar por ID

parrafo = document.getElementsByTagName("p"); //Seleccionar un listado de elemtos, en este caso del elemento p.

parrafo = document.querySelector(".parrafo"); //Selecciona el primer elemento que coincida con el grupo especificado de selectores

parrafo = document.querySelectorAll(".parrafo"); //Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

//No devuelven un array, devuelven un listado de elementos
                                                                            

//METODOS PARA DEFINIR, OBTENER y ELIMINAR atributos:

const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type","color"); //Modifcar o definir un atributo

                                                                         
//Como obtener el valor del atributo:

const rangoEtario = document.querySelector(".rangoEtario");

valorDelAtributo = rangoEtario.getAttribute("type");

document.write(valorDelAtributo);
                                                                        
//Eliminar atributos: 

const rangoEtario = document.querySelector(".rangoEtario");

valorDelAtributo = rangoEtario.removeAttribute("type");

document.write(valorDelAtributo);
                                                                           

///////////////////////////////////ATRIBUTOS GLOBALES/////////////////////////////////////////

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable","true"); //Atributo que convierte en editable el contenido

titulo.setAttribute("dir","ltr"); //Indica la direccion del texto

titulo.setAttribute("hidden","false"); // ¿? Nose cuando lo usariamos

titulo.setAttribute("tabindex","2"); // Para modificar el tabindex del elemento

titulo.setAttribute("title","pene"); // Alt que se agrega al elemento 
                                                                                

////////////////////////////////ATRIBUTO DE INPUTS//////////////////////////////////////////
//Acceder a atributos de inputs y tmb modificar los atirbutos, directamente del objeto, no hace falta usar setAttribute y nada de eso
                                                                                  
const input = document.querySelector(".input-normal");
                                                                       
//document.write(input.className); //muestra el valor del atributo name

//document.write(input.value); //muestra el valor del atributo value (se usa mucho).

//input.type = "color"; //para modifciar el type del input

//accept se usa generalmente para type file, para definir que tipo de archivo se pueden seleccionar

//input.type = "file";
//input.accept ="image/png";

//input.form = "formulario" //Establece a que form pertenece ese input por mas que este fuera del mismo(el valor es el id del form en cuestion)

//input.minLength = 4; //establece cual es la cantidad minima de caracteres para que sea valido 

//input.placeholder = "vergamota"; //Cambia el valor del placeholder

//input.required = " "; //Para establecer que es necesario completar ese campo para enviarlo, minimo un espacio como valor, ya que si esta completamente vacio no funciona

/////////////////////ATRIBUTO STYLE////////////////////////////////////////////////////
//modifica un elemento con .style / igual que en css pero no se usan - sino camel case

const titulo = document.querySelector(".titulo");

titulo.style.color = "red";
titulo.style.maxWidth ="170px";
titulo.style.backgroundColor ="blue";
                                                                                 

///////////////////CLASES, CLASSLIST y METODOS DE CLASSLIST/////////////////////////////////////////

const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");  //Agrega una clase al elemento

titulo.classList.remove("grande"); //Elimnia una clase al elemento

let valor = titulo.classList.item(1); //Nos devuele el valor de la clase que elegimos, no modfica nada, solo devuelve el valor
//document.write(valor);

let valor2 = titulo.classList.contains("grande"); //Verifica si el elemento posee o no una clase y devuelve true o false dependiendo el resultado
//document.write(valor2);

let valor3 = titulo.classList.toggle("pequeño"); //Si posee la clase que dijimos, la quita y devuelve false, y si no la tiene la agrega y devuelve true
document.write(valor3);                          //Se puede agregar un segundo parametro para forzar que siempre sea false o true ("pequeño",false);

titulo.classList.replace("grande","chico"); //Reemplaza una clase por otra, si la que queremos reemplazar no existe, no agrega nada

                                                                                           

///////////////OBTENCION Y MODIFICACION DE ELEMENTOS///////////////////////////////////////////

const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent; //Nos devuelve el texto sin modificacion html (sin etiquetas b, strong, etc)

let resultado2 = titulo.innerHTML; //Muestra todo el contenido HTML.

let resultado3 = titulo.outerHTML; //Muestra todo el elemento HTML completo, la linea de codigo entera

alert(resultado);
alert(resultado2);
alert(resultado3);
                                                                                           
    
////////////CREACION DE ELEMENTOS/////////////////////////////////////////////////////////////////

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); // .createElement entiende a los elementos con MAYUSCULAS si o si

item.textContent = "Este es un elemento de la lista";

contenedor.appendChild(item);

console.log(item);
                                                                                       
//Como agregar muchos elementos con .createDocumentFragment()

const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.textContent = "Este es un elemento de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);

console.log(contenedor);  
                                                                                         

///////////////OBTENCION Y MODIFICACION DE CHILDS////////////////////////////////////////////////

const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstElementChild; //Selecciona el primer elemento del contenedor

console.log(primerHijo);

const ultimoHijo = contenedor.lastElementChild; //Selecciona el ulitmo elemento del contenedor

console.log(ultimoHijo);

const hijos = contenedor.childNodes; //Selecciona todos los nodos hijos dentro del container, los elementos y los textos(los espacios vacios entre un elemento y otro)

console.log(hijos);

const hijos2 = contenedor.children; //Devuelve todos los elementos html, sin los espacios vacios

console.log(hijos2);
                                                                                          */
////////////////////METODOS DE CHILDS/////////////////////////////////////////////////////////

// .replaceChild() : reemplaza un hijo por otro, primero se pone el nuevo y segundo el que se remueve

// .removeChild() : elimina un hijo del contenedor

// .hasChildNodes() : verifica si el elemento tiene un hijo y devuelve true si tiene y false si no tiene

///////////////////////PROPIEDADES DE LOS PADRES///////////////////////////////////////////

// .parentElement : nos dice cual es el elemento padre de quien estamos verificando

//////////////////////////PROPIEDADES DE LOS SIBLINGS (hermanos)//////////////////////////////

//son hermanos los elementos que estan en el mismo rango, por ej, los metadatos son hermanos porq estan junstos, los elmentos adentro de un form son hermanos, los divs adentro del body son hermanos, etc.

// .nextElementSibling : nos dice cual es el hermano que le sigue a ese elemento

// .previousElementSibling : nos dice cual es el hermano anterior a ese elemento

////////////////////////////////NODO EXTRA//////////////////////////////////////////////

// (div.closest(".div")); //busca el contenedor padre mas cercano de ese elemento. (simple)


