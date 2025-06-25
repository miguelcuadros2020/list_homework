document.addEventListener('DOMContentLoaded', function() {

    const elements = {
        form: document.querySelector('form'),
        taskInput: document.querySelector('input[type="text"]'),
        scriptList: document.querySelector('.scriptList')
    }

    function addScriptToList(event) {
        event.preventDefault();
        const taskInput = elements.taskInput.value.trim();

        if (taskInput) {
            const li = document.createElement('li');
            li.className = 'task';
            
            // Crear span para el texto de la tarea
            const span = document.createElement('span');
            span.textContent = taskInput;
            li.appendChild(span);

            // Añadimos el contenedor para los botones
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'buttonContainer';

            // Botón Done
            const doneButton = document.createElement('button');
            doneButton.className = 'done';
            doneButton.textContent = 'Done';
            buttonContainer.appendChild(doneButton);

            // Botón Delete
            const button = document.createElement('button');
            button.className = 'delete';
            button.textContent = 'Delete';
            buttonContainer.appendChild(button);

            // Añadir el contenedor de botones al li
            li.appendChild(buttonContainer);

            elements.scriptList.appendChild(li);
            elements.taskInput.value = '';
        }
    };

    elements.form.addEventListener('submit', addScriptToList);

    function deleteScript(event) {
        if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement;
            elements.scriptList.removeChild(li);
        }
    };

    // Animación y lógica para Done/Undone
    function toggleDone(event) {
        if (event.target.classList.contains('done')) {
            const li = event.target.parentElement;
            const span = li.querySelector('span');

            // Si ya está done, deshacer
            if (li.classList.contains('completed')) {
                li.classList.remove('completed');
                event.target.textContent = 'Done';
                // Quitar círculo si existe
                const circle = span.querySelector('.circle-check');
                if (circle) span.removeChild(circle);
            } else {
                li.classList.add('completed');
                event.target.textContent = 'Undone';
                // Añadir círculo con chulo si no existe
                if (!span.querySelector('.circle-check')) {
                    const circle = document.createElement('span');
                    circle.className = 'circle-check';
                    circle.innerHTML = '<svg viewBox="0 0 16 16" width="16" height="16"><polyline points="4,9 7,12 12,5" style="fill:none;stroke:white;stroke-width:2"/></svg>';
                    span.prepend(circle);
                }
            }
        }
    }

    elements.scriptList.addEventListener('click', deleteScript);
    elements.scriptList.addEventListener('click', toggleDone);
})