let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.addEventListener('DOMContentLoaded', function() {
    checkServer();
    displayTasks();
    setupEventListeners();
});


function setupEventListeners() {

    document.querySelectorAll('input[name="type"]').forEach(radio => {
        radio.addEventListener('change', updateTaskTypeVisibility);
    });
    

    document.getElementById('period').addEventListener('change', updateHabitFieldsVisibility);
    document.getElementById('timesPer').addEventListener('input', updateExactTimesLimit);
    

    updateTaskTypeVisibility();
    updateHabitFieldsVisibility();
}


async function checkServer() {
    try {
        const res = await fetch("http://127.0.0.1:8000/");
        if (res.ok) {
            console.log("Server is connected");
        } else {
            console.warn("Server responded with error");
        }
    } catch (error) {
        console.error("No connection to the server");
    }
}


async function sendTasksToServer() {
    try {
        const response = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tasks }),
        });

        const data = await response.json();
        console.log(" AI Schedule:", data.schedule);
        return data;
    } catch (error) {
        console.error("Error sending tasks to AI:", error);
        return null;
    }
}

function updateTaskTypeVisibility() {
    const type = document.querySelector('input[name="type"]:checked').value;
    const habitBlock = document.getElementById('field-habit');
    const onceBlock = document.getElementById('field-once');
    
    habitBlock.hidden = type !== 'habit';
    onceBlock.hidden = type !== 'once';
}

function updateHabitFieldsVisibility() {
    const period = document.getElementById('period').value;
    const countDaysField = document.getElementById('habitPeriodCountDays');
    const entries = document.querySelectorAll('.exact-time-entry');
    
    countDaysField.hidden = period !== 'days';
    
    entries.forEach(entry => {
        const weekDayField = entry.querySelector('.habitExactWeekDay');
        const dateField = entry.querySelector('.habitExactDate');
        
        if (period === 'day' || period === 'days') {
            weekDayField.hidden = true;
            dateField.hidden = true;
        } else if (period === 'week') {
            weekDayField.hidden = false;
            dateField.hidden = true;
        } else { 
            dateField.hidden = false;
            weekDayField.hidden = true;
        }
    });
}

function addExactTime() {
    const timesPer = parseInt(document.getElementById('timesPer').value) || 0;
    const container = document.getElementById('exactTimesContainer');
    const currentEntries = container.querySelectorAll('.exact-time-entry').length;
    
    if (currentEntries >= timesPer && timesPer > 0) {
        alert(`👿 максимум можно добавить ${timesPer} времен👹`);
        return;
    }
    
    const newEntry = document.createElement('div');
    newEntry.className = 'exact-time-entry';
    newEntry.innerHTML = `
        <input type="time" class="habitExactTime">
        <select class="habitExactWeekDay">
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">fridy</option>
            <option value="sat">Saturaday</option>
            <option value="sun">Sunday</option>
        </select>
        <input type="date" class="habitExactDate" hidden>
        <button type="button" onclick="removeExactTime(this)">×</button>
    `;
    container.appendChild(newEntry);
    updateHabitFieldsVisibility();
}

function removeExactTime(button) {
    const entries = document.querySelectorAll('.exact-time-entry');
    if (entries.length > 1) {
        button.parentElement.remove();
    }
}

function updateExactTimesLimit() {
    const timesPer = parseInt(document.getElementById('timesPer').value) || 0;
    const container = document.getElementById('exactTimesContainer');
    const entries = container.querySelectorAll('.exact-time-entry');
    
    if (entries.length > timesPer) {
        for (let i = entries.length - 1; i >= timesPer; i--) {
            if (i > 0) {
                entries[i].remove();
            }
        }
    }
}

function collectFormData() {
    const type = document.querySelector('input[name="type"]:checked').value;
    const baseData = {
        name: document.getElementById('taskName').value.trim(),
        priority: parseInt(document.getElementById('taskPriority').value),
        duration: parseInt(document.getElementById('taskDuration').value),
        type: type
    };
    
    if (type === 'habit') {
        return {
            ...baseData,
            timesPer: parseInt(document.getElementById('timesPer').value),
            period: document.getElementById('period').value,
            endDate: document.getElementById('habitEndDate').value,
            customDays: document.getElementById('habitPeriodCountDays').value || null,
            exactTimes: collectExactTimes(),
            selectedDays: collectSelectedDays()
        };
    } else {
        return {
            ...baseData,
            exactTime: document.querySelector('#field-once input[type="time"]').value,
            exactDate: document.querySelector('#field-once input[type="date"]').value,
            deadline: document.querySelector('#field-once input[placeholder="deadline"]').value
        };
    }
}

function collectExactTimes() {
    const exactTimes = [];
    document.querySelectorAll('.exact-time-entry').forEach(entry => {
        const time = entry.querySelector('.habitExactTime').value;
        const weekDay = entry.querySelector('.habitExactWeekDay').value;
        const date = entry.querySelector('.habitExactDate').value;
        
        if (time) {
            exactTimes.push({ time, weekDay, date });
        }
    });
    return exactTimes;
}

function collectSelectedDays() {
    const selectedDays = [];
    document.querySelectorAll('#field-habit input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            selectedDays.push(checkbox.value);
        }
    });
    return selectedDays;
}

function validateFormData(data) {
    if (!data.name) {
        alert('enter task name 🤬');
        return false;
    }
    
    if (!data.priority || data.priority < 1) {
        alert('Enter period (1 to 10) 😱🤠');
        return false;
    }
    
    if (!data.duration || data.duration < 1) {
        alert('enter duration 🤡🥵');
        return false;
    }
    
    if (data.type === 'habit') {
        if (!data.timesPer || data.timesPer < 1) {
            alert('Укажите количество повторений привычки ☠');
            return false;
        }
        
        if (data.period === 'days' && !data.customDays) {
            alert('enter days count 👨🏾‍🤝‍👨🏻🍻');
            return false;
        }
    }
    
    return true;
}

function clearForm() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskPriority').value = '';
    document.getElementById('taskDuration').value = '';
    
    document.getElementById('timesPer').value = '';
    document.getElementById('habitEndDate').value = '';
    document.getElementById('habitPeriodCountDays').value = '';
    
    const container = document.getElementById('exactTimesContainer');
    const entries = container.querySelectorAll('.exact-time-entry');
    entries.forEach((entry, index) => {
        if (index > 0) {
            entry.remove();
        } else {
            entry.querySelector('.habitExactTime').value = '';
            entry.querySelector('.habitExactWeekDay').selectedIndex = 0;
            entry.querySelector('.habitExactDate').value = '';
        }
    });
    
    document.querySelectorAll('#field-habit input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelector('#field-once input[type="time"]').value = '';
    document.querySelector('#field-once input[type="date"]').value = '';
    document.querySelector('#field-once input[placeholder="deadline"]').value = '';
}

async function addTask() {
    const formData = collectFormData();
    
    if (!validateFormData(formData)) {
        return;
    }
    
    tasks.push(formData);
    saveTasks();
    displayTasks();
    clearForm();
    
    const aiResult = await sendTasksToServer();
    if (aiResult) {
        console.log('AI succesfully make a schedule');
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        let taskInfo = '';
        if (task.type === 'habit') {
            taskInfo = `🤮 ${task.name} | ${task.timesPer}times per ${task.period} | ${task.duration} mins | priority ${task.priority}`;
            if (task.exactTimes.length > 0) {
                taskInfo += ` | ${task.exactTimes.length} fixed time`;
            }
        } else {
            const timeInfo = task.exactTime ? `${task.exactDate} в ${task.exactTime}` : 'without exact time';
            taskInfo = `💩 ${task.name} | ${timeInfo} | ${task.duration} mins | priority ${task.priority}`;
        }
        
        li.textContent = taskInfo;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        
        list.appendChild(li);
    });
}

function deleteTask(index) {
    if (confirm('delete this taks?')) {
        tasks.splice(index, 1);
        saveTasks();
        displayTasks();
        sendTasksToServer();
    }
}


window.addExactTime = addExactTime;
window.removeExactTime = removeExactTime;
window.addTask = addTask;
<<<<<<< HEAD
window.deleteTask = deleteTask;
=======
window.deleteTask = deleteTask;
>>>>>>> 60280d4b2b9562183a4d46424d7dae5c97790c7e
