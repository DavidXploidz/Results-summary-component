// Variables globales
const summaryContent = document.querySelector('.summary__content');
const summaryDiv = document.querySelector('.summary__div');


document.addEventListener('DOMContentLoaded', () => {
    consultarJSON();
});

const consultarJSON = async() => {
    const url = "/data.json";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    mostrarDatos(resultado);
}

const mostrarDatos = (datos) => {
    datos.forEach(item => {

        // Scripting de datos
        const newDiv = document.createElement('div');
        newDiv.classList.add('summary__div', `summary__div--${item.category}`);

        const newImg = document.createElement('IMG');
        newImg.src = item.icon;

        const newP = document.createElement('P');
        newP.classList.add('summary__p', `summary__p--${item.category}`);
        newP.textContent = item.category;

        const newP2 = document.createElement('P');
        newP2.classList.add('summary__p','summary__p--dark');
        newP2.textContent = item.score;

        const newSpan = document.createElement('SPAN');
        newSpan.classList.add('summary__p','summary__p--gray');
        newSpan.textContent = " / 100";


        // Insertar contenido en div contenedor o padres
        newDiv.appendChild(newImg);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newP2.appendChild(newSpan);
        summaryContent.appendChild(newDiv);
    });
}