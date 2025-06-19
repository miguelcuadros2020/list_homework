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
            li.textContent = taskInput;

            const button = document.createElement('button');
            button.className = 'delete';
            button.textContent = 'Delete';

            li.appendChild(button);
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

    elements.scriptList.addEventListener('click', deleteScript);
})