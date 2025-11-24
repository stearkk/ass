function changeToRegular(){
    let regular_btn = document.getElementById('type_btn_regular')
    let once_btn = document.getElementById('type_btn_once')
    let regular_settings = document.getElementById('regular_settings')
    let once_settings = document.getElementById('once_settings')
    
    regular_btn.className = 'choosed_type_btn'
    once_btn.className = 'type_btn'
    
    if (regular_settings.style.display === 'flex') {
        regular_settings.style.display = 'none'
        document.getElementById('day_interval_field').style.display = 'none'
    } else {
        regular_settings.style.display = 'flex'
        document.getElementById('day_interval_field').style.display = 'flex'
    }
    once_settings.style.display = 'none'
}

function changeToOnce(){
    let regular_btn = document.getElementById('type_btn_regular')
    let once_btn = document.getElementById('type_btn_once')
    let regular_settings = document.getElementById('regular_settings')
    let once_settings = document.getElementById('once_settings')
    
    regular_btn.className = 'type_btn'
    once_btn.className = 'choosed_type_btn'
    
    if (once_settings.style.display === 'flex') {
        once_settings.style.display = 'none'
        document.getElementById('day_interval_field').style.display = 'none'
    } else {
        once_settings.style.display = 'flex'
        document.getElementById('day_interval_field').style.display = 'flex'
    }
    regular_settings.style.display = 'none'
}
let taskPriority = 'medium'
function changeToLow() {
    taskPriority = 'low'

    let low = document.getElementById('priority_btn_low')
    let medium = document.getElementById('priority_btn_medium')
    let hight = document.getElementById('priority_btn_high')
    
    low.className = 'choosed_priority_btn'
    medium.className = 'priority_btn'
    hight.className = 'priority_btn'
}
function changeToMedium() {
    taskPriority = 'medium'
    let low = document.getElementById('priority_btn_low')
    let medium = document.getElementById('priority_btn_medium')
    let hight = document.getElementById('priority_btn_high')
    
    medium.className = 'choosed_priority_btn'
    low.className = 'priority_btn'
    hight.className = 'priority_btn'
    
}
function changeToHigh() {
    taskPriority = 'high'
    let low = document.getElementById('priority_btn_low')
    let medium = document.getElementById('priority_btn_medium')
    let high = document.getElementById('priority_btn_high')
    
    high.className = 'choosed_priority_btn'
    low.className = 'priority_btn'
    medium.className = 'priority_btn'
}

function changeToSpecial(){
    let specials = document.getElementById('special_days_field')
    let week = document.getElementById('per_week_field')
    let month = document.getElementById('per_month_field')
    let year = document.getElementById('per_year_field')
    let btn = document.getElementById('choose_special')

    btn.style.backgroundColor = 'rgb(230, 80, 25)'
    document.getElementById('choose_week').style.backgroundColor = 'white'
    document.getElementById('choose_year').style.backgroundColor = 'white'
    document.getElementById('choose_month').style.backgroundColor = 'white'
    
    specials.style.display = 'flex'
    week.style.display = 'none'
    month.style.display = 'none'
    year.style.display = 'none'
}
function changeToPerWeek(){
    let specials = document.getElementById('special_days_field')
    let week = document.getElementById('per_week_field')
    let month = document.getElementById('per_month_field')
    let year = document.getElementById('per_year_field')
    let btn = document.getElementById('choose_week')
    
    btn.style.backgroundColor = 'rgb(230, 80, 25)'
    document.getElementById('choose_special').style.backgroundColor = 'white'
    document.getElementById('choose_year').style.backgroundColor = 'white'
    document.getElementById('choose_month').style.backgroundColor = 'white'
    
    week.style.display = 'flex'
    specials.style.display = 'none'
    month.style.display = 'none'
    year.style.display = 'none'
}
function changeToPerMonth(){
    let specials = document.getElementById('special_days_field')
    let week = document.getElementById('per_week_field')
    let month = document.getElementById('per_month_field')
    let year = document.getElementById('per_year_field')
    let btn = document.getElementById('choose_month')
    
    btn.style.backgroundColor = 'rgb(230, 80, 25)'
    document.getElementById('choose_week').style.backgroundColor = 'white'
    document.getElementById('choose_year').style.backgroundColor = 'white'
    document.getElementById('choose_special').style.backgroundColor = 'white'

    month.style.display = 'flex'
    week.style.display = 'none'
    specials.style.display = 'none'
    year.style.display = 'none'
}
function changeToPerYear(){
    let year = document.getElementById('special_days_field')
    let week = document.getElementById('per_week_field')
    let month = document.getElementById('per_month_field')
    let specials = document.getElementById('per_year_field')
    let btn = document.getElementById('choose_year')
    
    btn.style.backgroundColor = 'rgb(230, 80, 25)'
    document.getElementById('choose_week').style.backgroundColor = 'white'
    document.getElementById('choose_special').style.backgroundColor = 'white'
    document.getElementById('choose_month').style.backgroundColor = 'white'

    specials.style.display = 'flex'
    week.style.display = 'none'
    month.style.display = 'none'
    year.style.display = 'none'
}

function changeToAnytime(){
    let anytime = document.getElementById('day_interval_anytime')
    let morning = document.getElementById('day_interval_morning')
    let afternoon = document.getElementById('day_interval_afternoon')
    let evening = document.getElementById('day_interval_evening')

    anytime.style.backgroundColor = 'rgb(230, 80, 25)'
    morning.style.backgroundColor = 'white'
    afternoon.style.backgroundColor = 'white'
    evening.style.backgroundColor = 'white'
}
function changeToMorning(){

    let anytime = document.getElementById('day_interval_anytime')
    let morning = document.getElementById('day_interval_morning')
    let afternoon = document.getElementById('day_interval_afternoon')
    let evening = document.getElementById('day_interval_evening')

    morning.style.backgroundColor = 'rgb(230, 80, 25)'
    anytime.style.backgroundColor = 'white'
}
function changeToAfternoon(){
    let anytime = document.getElementById('day_interval_anytime')
    let morning = document.getElementById('day_interval_morning')
    let afternoon = document.getElementById('day_interval_afternoon')
    let evening = document.getElementById('day_interval_evening')

    afternoon.style.backgroundColor = 'rgb(230, 80, 25)'
    anytime.style.backgroundColor = 'white'
}
function changeToEvening(){
    let anytime = document.getElementById('day_interval_anytime')
    let morning = document.getElementById('day_interval_morning')
    let afternoon = document.getElementById('day_interval_afternoon')
    let evening = document.getElementById('day_interval_evening')

    evening.style.backgroundColor = 'rgb(230, 80, 25)'
    anytime.style.backgroundColor = 'white'
}





document.addEventListener('DOMContentLoaded', function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentWeekStart = new Date();

    document.getElementById('current_date').textContent = `${currentWeekStart.getDate()}:${currentWeekStart.getMonth()}:${currentWeekStart.getFullYear()}`;
    document.getElementById('current_time').textContent = `${currentWeekStart.getHours()}:${currentWeekStart.getMinutes()}`;

    function getMonday(date) {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }

    function generateWeekDates() {
        const monday = getMonday(new Date(currentWeekStart));
        const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
        const today = new Date();
        
        const dateButtons = document.querySelectorAll('.date-btn');
        const dayLabels = document.querySelectorAll('#day_switch_field p');
        
        days.forEach((day, index) => {
            const date = new Date(monday);
            date.setDate(monday.getDate() + index);
            
            dateButtons[index].textContent = date.getDate();
            dateButtons[index].setAttribute('data-date', date.toISOString().split('T')[0]);
            
            dayLabels[index].textContent = day;
            
            dateButtons[index].classList.remove('choosed', 'today');
            
            if (date.toDateString() === today.toDateString()) {
                dateButtons[index].classList.add('today');
            }
            
            if (date.toDateString() === today.toDateString()) {
                dateButtons[index].classList.add('choosed');
            }
        });
        
        const hasToday = Array.from(dateButtons).some(btn => 
            btn.classList.contains('today')
        );
        if (!hasToday && dateButtons[0]) {
            dateButtons[0].classList.add('choosed');
        }
        
        updateWeekRange();
    }

    function updateWeekRange() {
        const monday = getMonday(new Date(currentWeekStart));
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        
        const today = new Date();
        const currentWeekMonday = getMonday(new Date(today));
        
        let weekInfo = '';
        if (monday.toDateString() === currentWeekMonday.toDateString()) {
            weekInfo = ' (Текущая неделя)';
        }
        
        console.log(`Неделя: ${monday.getDate()}.${monday.getMonth()+1} - ${sunday.getDate()}.${sunday.getMonth()+1}${weekInfo}`);
    }

    function prevWeek() {
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        generateWeekDates();
    }

    function nextWeek() {
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        generateWeekDates();
    }

    function selectDate(dateElement) {
        document.querySelectorAll('.date-btn').forEach(btn => {
            btn.classList.remove('choosed');
        });
        
        dateElement.classList.add('choosed');
        
        const selectedDate = dateElement.getAttribute('data-date');
        console.log('Выбрана дата:', selectedDate);
        displayTasks(selectedDate);
    }

    function goToCurrentWeek() {
        currentWeekStart = new Date();
        generateWeekDates();
    }


    function addTask() {
        const taskName = document.getElementById('taskName').value;
        const taskDuration = document.getElementById('taskDuration').value;
        const TaskType = document.getElementById('task_type').value
                
        if (!taskName) {
            alert('Введите название задачи');
            return;
        }
                
        const isRegular = document.getElementById('type_btn_regular').classList.contains('choosed_type_btn');
        const type = isRegular ? 'regular' : 'once';
        const taskType = document.getElementById('task_type').value
        const task = {
            id: Date.now(),
            title: taskName,
            duration: taskDuration | '-',
            type: type,
            createdAt: new Date().toISOString(),
            taskType: taskType,
            taskPriority: taskPriority
        };
                
        tasks.push(task);
                
        localStorage.setItem('tasks', JSON.stringify(tasks));
                
        displayTasks();
                
        document.getElementById('taskName').value = '';
        document.getElementById('taskDuration').value = '';
    }

    function displayTasks(selectedDate = null) {
        const tasksField = document.getElementById('tasks_field');
                
        let filteredTasks = tasks;
        
        if (selectedDate) {
            console.log('Фильтруем задачи по дате:', selectedDate);
        }
                
        if (filteredTasks.length === 0) {
            tasksField.innerHTML = '<p>there aren\'t any tasks yet</p>';
            return;
        }
                
        tasksField.innerHTML = filteredTasks.map(task => {
        let color;
        switch(task.taskType) {
            case 'General':
                color = '#D38562'; 
                if (task.taskPriority === 'high') color = '#CE6539';
                break;
            case 'Work':
                color = '#CF9691'; // бордовый
                if (task.taskPriority === 'high') color = '#976c68ff';
                break;
            case 'Study':
                color = '#B3B9DD'; // желтый
                if (task.taskPriority === 'high') color = '#9CA6D8';
                break;
            case 'Sport':
                color = '#B1B262'; // оранжевый
                if (task.taskPriority === 'high') color = '#86843B';
                break;
            default:
                color = '#e65019'; 
        }
        
        return `
            <div class="task-item" style="height: ${task.duration * 1.5}px; min-height: 60px; border: 2px solid ${color}; border-radius: 8px; padding: 10px; margin: 4px 0; background: ${color};">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="direction: column;"><h3 style="margin: 0;">${task.title}</h3>
                    <p>${task.duration} mins</p></div>
                    <button onclick="deleteTask(${task.id})" style="background: ${color}; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer;">×</button>
                </div>

            </div>
        `;
    }).join('');
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }

    function toggleTask(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }


    generateWeekDates();
    
    document.getElementById('prevWeek').addEventListener('click', prevWeek);
    document.getElementById('nextWeek').addEventListener('click', nextWeek);
    
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectDate(this);
        });
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevWeek();
        } else if (event.key === 'ArrowRight') {
            nextWeek();
        }
    });

    displayTasks();

    window.addTask = addTask;
    window.deleteTask = deleteTask;
    window.toggleTask = toggleTask;
    window.goToCurrentWeek = goToCurrentWeek;
});


