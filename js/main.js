// CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES
const input = document.getElementById('todo');
const addBtn = document.getElementById('registrar');
const toDoList = document.getElementById('cont-to-do-list');
const completeList = document.getElementById('cont-completed-list');

// CREAMOS LA FUNCION QUE NOS PERMITE CREAR UNA NUEVA TAREA A PARTIR DEL FORMULARIO
// TODA ETIQUETA QUE VAMOS A CREAR ES A PARITR DE LA MAQUETA HTML PRE-EXISTENTE
function createToDoItem(textoItem){
    // CREAMOS EL NODO O ELEMENTO PADRE O CONTENEDOR
    const item = document.createElement('div');
    item.classList.add('item-to-do');

    // CREAMOS EL NODO HIJO DEL INPUT Y LE AGREGAMOS EL TYPE CHECKBOX
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // CREAMOS EL SIGUIENTE NODO HIJO PARRAFO
    // A ESTE PARRAFO LE ASIGNO EL VALOR DEL ARGUMENTO DE LA FUNCION ES DECIR LO QUE ESCRIBE EL USUARIO EN EL CAMPO
    const p = document.createElement('p');
    p.textContent = textoItem;

    // CREAMOS EL ULTIMO NODO HIJO, EL BOTON DE ELIMINAR
    const deleteBtn = document.createElement('button');
    deleteBtn.textoItem = 'eliminar';

    // ENSAMBLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // UTILIZAMOS EL RETURN PARA RETORNAR O DAR RESPUESTA DEL ELEMENTO CREADO YA QUE LO USAREMOS EN OTRA FUNCION MAS ADELANTE
    return item;


}