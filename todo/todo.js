window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const titleInput = document.querySelector("#new-task-title");
	const descInput = document.querySelector("#new-task-desc");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const title = titleInput.value;
		const description = descInput.value;

		if (!title || !description) {
			alert("Please fill out both the title and description fields");
			return;
		}

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_title_el = document.createElement('input');
		task_title_el.classList.add('text');
		task_title_el.type = 'text';
		task_title_el.value = title;
		task_title_el.setAttribute('readonly', 'readonly');

		const task_desc_el = document.createElement('input');
		task_desc_el.classList.add('text');
		task_desc_el.type = 'text';
		task_desc_el.value = description;
		task_desc_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_title_el);
		task_content_el.appendChild(task_desc_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		titleInput.value = '';
		descInput.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_title_el.removeAttribute("readonly");
				task_desc_el.removeAttribute("readonly");
				task_title_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_title_el.setAttribute("readonly", "readonly");
				task_desc_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
