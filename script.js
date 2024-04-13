// Objeto para representar un producto
function Producto(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}

// Función para generar la tabla de productos
function generarTablaProductos() {
    var menuContainer = document.getElementById("menu-container");
    var productos = [
        new Producto("Café Americano", "$25.00", "cafeamericano.jpg"),
        new Producto("Café Espresso", "$30.00", "cafeespresso.jpg"),
        new Producto("Café Latte", "$30.00", "cafelatte.jpg"),
        new Producto("Café Mocha", "$30.00", "cafemocha.jpg"),
        new Producto("Café Capuchino", "$30.00", "cafecapuchino.jpg"),
        new Producto("Té Verde", "$20.00", "teverde.jpg"),
        new Producto("Té Negro", "$20.00", "tenegro.jpg"),
        new Producto("Té de Frutas", "$20.00", "tedefrutas.jpg"),
        new Producto("Jugo de Naranja", "$20.00", "jugodenaranja.jpg"),
        new Producto("Pastel", "$45.00", "pastel.jpg")
    ];

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headRow = document.createElement("tr");
    var headers = ["Producto", "Precio", "Imagen"];
    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    productos.forEach(function(producto) {
        var row = document.createElement("tr");

        var cellNombre = document.createElement("td");
        cellNombre.appendChild(document.createTextNode(producto.nombre));
        row.appendChild(cellNombre);

        var cellPrecio = document.createElement("td");
        cellPrecio.appendChild(document.createTextNode(producto.precio));
        row.appendChild(cellPrecio);

        var cellImagen = document.createElement("td");
        var img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.classList.add("producto-imagen");
        cellImagen.appendChild(img);
        row.appendChild(cellImagen);

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    menuContainer.appendChild(table);
}

// Llamamos a la función para generar la tabla de productos al cargar la página
window.onload = generarTablaProductos;

const formularioComentario = document.getElementById('formulario-comentario');
const listaComentarios = document.getElementById('lista-comentarios');
const historialComentarios = document.getElementById('historial-comentarios');

formularioComentario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;
    
    const comentarioNuevo = document.createElement('li');
    comentarioNuevo.textContent = `${nombre} (${email}): ${comentario}`;
    
    listaComentarios.prepend(comentarioNuevo);
    
    // Limpiar los campos de texto después de enviar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comentario').value = '';
    
    // Agregar clase de estilo al último comentario agregado
    setTimeout(function() {
        comentarioNuevo.classList.add('comentario-enviado');
    }, 100);
});