// CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES
const input = document.getElementById('todo');
const addBtn = document.getElementById('registrar');
const toDoList = document.getElementById('cont-to-do-list');
const completeList = document.getElementById('cont-completed-list');

// CREAMOS LA FUNCION QUE NOS PERMITE CREAR UNA NUEVA TAREA A PARTIR DEL FORMULARIO
// TODA ETIQUETA QUE VAMOS A CREAR ES A PARITR DE LA MAQUETA HTML PRE-EXISTENTE

// ESTA FUNCION SOLO CREA LA ESTRUCTURA DEL HTML Y AUN NO LA INSERTA EN LA PAGINA, LA DEJA EN UN LIMBO
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
    deleteBtn.textContent = 'eliminar';

    // ENSAMBLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // UTILIZAMOS EL RETURN PARA RETORNAR O DAR RESPUESTA DEL ELEMENTO CREADO YA QUE LO USAREMOS EN OTRA FUNCION MAS ADELANTE
    return item;
};

// DETECTAMOS EL EVENTO CLICK SOBRE EL BOTON REGISTRA CON UN EVENTO DE ESCUCHA O LISTENER
// PARA QUE A PARTIR DE ESTE EVENTO SE AGREGUE LA TAREA DENTRO DEL CONTENEDOR CONT-TO-DO-LIST
addBtn.addEventListener('click', ()=>{
    const textoItem = input.value.trim();
    if(textoItem==''){
        alert('No se puede crear una tarea vacia');
    }else{
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value='';
        eventsToItem(newItem);
    }

});

// LA SIGUINETE FUNCION NOS PERMITIRA AGREGAR EL FUNCIONAMIENTO PRINCIPAL SOBRE LAS TAREAS ES DECIR MARCA LA TAREA COMO REALIZADA O COMPLETADAO O EN DADO CASO ELIMINARLA
function eventsToItem(item){
    // UTILIZAMOS QUERYSELECTOR PARA CAPTURAR EL INNPUT Y EL BUTTON QUE ESTAN DENTRO DEL ITEM
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');

    // COMPLETAR LA TAREA O MARCARLA COMO COMPLETADA
    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            completeList.appendChild(item);
        }else{
            toDoList.appendChild(item);
        }
    });

    //ELIMINAR UNA TAREA
    deleteBtn.addEventListener('click',()=>{
        item.remove();
    });
};