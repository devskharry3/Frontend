//Wait for the window to fully load before running the script 
window.addEventListener('load', () => {
    //Select important elements from the DOM 
        const form = document.querySelector("#new-task-form");
        const input = document.querySelector("#new-task-input");
        const list_el = document.querySelector("#tasks");
    
        // Load tasks from localStorage or create an empty array if no task exist
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    //Loop through each task in the task array
        tasks.forEach(task => {
            //create a new task element for each task
            const task_el = createTaskElement(task);
            list_el.appendChild(task_el);
        }); 
    
        //Add a submit event listener to the form 
        form.addEventListener('submit', (e) => {
            //Prevent the default form submission behavior 
            e.preventDefault();
    
            //Grt the task value from the input field
            const task = input.value;
    
            //Check if the task is empty
            if (!task) {
                alert("Please fill out the task");
                return;
            }
    
            //Add new task to the tasks array
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
    
            //Create a new task element
            const task_el = createTaskElement(task);

            //Add the new task element to the task list
            list_el.appendChild(task_el); 
    
            input.value = ""; 
        });

        //function to create a new task element
    
        function createTaskElement(task) {
            // Create the main task container
            const task_el = document.createElement("div");
            task_el.classList.add("task");
    
            //Create the content container for the task 
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

    
            //Create the input element for the task text 
            const task_input_el = document.createElement("input"); 
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");
    
            //Add the input element to the content container 
            task_content_el.appendChild(task_input_el);
    

            //Add the content container to the main task container
            task_el.appendChild(task_content_el);

    
            //Create the actions container for edit and delete buttons 
            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
    
            //Create the edit button
            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerHTML = "Edit";
    

            //create the delete button 
            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";
    
            //add edit and delete buttons to the actions container
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
    
            //Add the actions conatiner to the main task container
            task_el.appendChild(task_actions_el);
    
            //Add click event listener to the edit buttons
            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerText.toLowerCase() === "edit") {
                    //If in EDIT mode, make the input editable amd change button text to SAVE
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    //If in SAVE mode, make the input readonly and change button text back to EDIT 
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
    
                    // Update task in the tasks array and localStorage
                    const index = tasks.indexOf(task);
                    tasks[index] = task_input_el.value;
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                }
            });
    
            //Add click event listener to the delete button 
            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);
    
                // Remove task from the tasks array and update  localStorage
                const index = tasks.indexOf(task);
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            });
    
            //return the completed task element 
            return task_el;
        }
    });
    
    