// App data from JSON
const appData = {
  "labels": {
    "Films": ["Marvel Films", "Horror", "Romantiek", "Sci-Fi", "Documentaires", "Indie Films", "Action", "Komedie", "Drama", "Thrillers", "Fantasy", "Animatie", "Arthouse", "Bollywood", "K-Drama Films"],
    "Muziek": ["Pop", "Hip-Hop", "Rock", "Electronic", "R&B", "Country", "Jazz", "Classical", "Reggaeton", "K-Pop", "Indie", "Metal", "Folk", "Reggae", "Afrobeats"],
    "Series": ["Netflix Originals", "Anime Series", "Crime Shows", "Reality TV", "Comedy Series", "Drama Series", "Sci-Fi Series", "Fantasy Series", "Historical Drama", "Teen Drama", "Documentaire Series", "Korean Drama", "Medical Drama", "Mystery", "Sitcoms"],
    "Anime": ["Shonen", "Seinen", "Shoujo", "Josei", "Mecha", "Slice of Life", "Romance", "Action", "Adventure", "Horror", "Comedy", "Drama", "Fantasy", "Sci-Fi", "Sports Anime"],
    "Games": ["FPS Games", "RPG", "Battle Royale", "MOBA", "Racing", "Sports Games", "Puzzle Games", "Indie Games", "Horror Games", "Simulation", "Strategy", "Fighting Games", "Platformers", "MMO", "Mobile Games"],
    "Creatieve bezigheden": ["Tekenen", "Schrijven", "Fotografie", "Video Editing", "Muziek Maken", "Dans", "Theater", "Crafting", "Design", "Programmeren", "Bloggen", "Podcasting", "Streaming", "3D Modeling", "Fashion"],
    "Talen/Landen": ["Japan", "Korea", "VS", "UK", "Frankrijk", "Duitsland", "Spanje", "Italië", "Brazilië", "Mexico", "Canada", "Australië", "Zweden", "Noorwegen", "Nederland"]
  },
  "personalityQuestions": [
    {"id": 1, "category": "Familie", "type": "open", "question": "Beschrijf in een paar zinnen hoe jouw familie jou heeft gevormd tot wie je nu bent."},
    {"id": 2, "category": "Familie", "type": "closed", "question": "Hoe zou je de band met je familie beschrijven?", "options": ["Heel hecht", "Hecht", "Normaal", "Afstandelijk", "Ingewikkeld"]},
    {"id": 3, "category": "Rolmodellen", "type": "open", "question": "Wie is jouw grootste rolmodel en waarom?"},
    {"id": 4, "category": "Rolmodellen", "type": "closed", "question": "Waar zoek je het meest inspiratie?", "options": ["Social media", "Boeken", "Familie/vrienden", "Beroemdheden", "Mezelf", "Geschiedenis"]},
    {"id": 5, "category": "Levensdoelen", "type": "open", "question": "Wat wil je over 10 jaar hebben bereikt?"},
    {"id": 6, "category": "Levensdoelen", "type": "closed", "question": "Wat vind je het belangrijkst in het leven?", "options": ["Geluk", "Succes", "Liefde", "Avontuur", "Veiligheid", "Creativiteit"]},
    {"id": 7, "category": "Levensdoelen", "type": "closed", "question": "Hoe zie je jouw ideale toekomst?", "options": ["Stabiel en voorspelbaar", "Vol avontuur", "Creatief en vrij", "Succesvol en ambitieus", "Betekenisvol voor anderen"]},
    {"id": 8, "category": "Levensdoelen", "type": "open", "question": "Wat maakt jou het meest gelukkig?"},
    {"id": 9, "category": "Interesses", "type": "multiple", "question": "Selecteer je 3 meest interessante onderwerpen:", "options": ["Technologie", "Kunst", "Sport", "Wetenschap", "Politiek", "Mode", "Reizen", "Koken", "Natuur", "Geschiedenis", "Psychologie", "Business", "Spiritualiteit", "Gaming", "Muziek", "Film", "Literatuur", "Dans", "Fotografie", "Filosofie"]},
    {"id": 10, "category": "Interesses", "type": "multiple", "question": "Selecteer je 3 minst interessante onderwerpen:", "options": ["Technologie", "Kunst", "Sport", "Wetenschap", "Politiek", "Mode", "Reizen", "Koken", "Natuur", "Geschiedenis", "Psychologie", "Business", "Spiritualiteit", "Gaming", "Muziek", "Film", "Literatuur", "Dans", "Fotografie", "Filosofie"]},
    {"id": 11, "category": "Interesses", "type": "closed", "question": "Hoe besteed je het liefst je vrije tijd?", "options": ["Alleen thuis", "Met vrienden", "Buitenactiviteiten", "Creatieve projecten", "Leren/studeren", "Sport/beweging"]},
    {"id": 12, "category": "Interesses", "type": "open", "question": "Beschrijf een hobby of interesse waar je helemaal in opgaat."}
  ],
  "predefinedGoals": [
    {"id": 1, "title": "Meer zelfvertrouwen ontwikkelen", "category": "Persoonlijk"},
    {"id": 2, "title": "Betere sociale vaardigheden", "category": "Sociaal"},
    {"id": 3, "title": "Een nieuwe vaardigheid leren", "category": "Professioneel"},
    {"id": 4, "title": "Creatiever worden", "category": "Creatief"},
    {"id": 5, "title": "Gezonder leven", "category": "Persoonlijk"},
    {"id": 6, "title": "Betere tijdindeling", "category": "Professioneel"},
    {"id": 7, "title": "Nieuwe vriendschappen sluiten", "category": "Sociaal"},
    {"id": 8, "title": "Een passie ontdekken", "category": "Creatief"},
    {"id": 9, "title": "Meer dankbaar zijn", "category": "Persoonlijk"},
    {"id": 10, "title": "Leiderschap ontwikkelen", "category": "Professioneel"}
  ],
  "tasks": {
    "default": [
      {"id": "d1", "title": "Dagelijkse reflectie", "description": "Schrijf 3 minuten over je dag", "type": "reflectie"},
      {"id": "d2", "title": "Doe iets buiten je comfort zone", "description": "Probeer vandaag één kleine nieuwe ervaring", "type": "actie"},
      {"id": "d3", "title": "Observeer jezelf", "description": "Let een uur op je gedachten en gevoelens", "type": "observatie"},
      {"id": "d4", "title": "Spreek met iemand", "description": "Voer een diepgaand gesprek", "type": "sociaal"},
      {"id": "d5", "title": "Experimenteer", "description": "Probeer een nieuwe aanpak voor een dagelijkse activiteit", "type": "experiment"}
    ],
    "specific": {
      "zelfvertrouwen": [
        {"id": "z1", "title": "Complimenteer jezelf", "description": "Schrijf 5 dingen op waar je trots op bent", "type": "reflectie"},
        {"id": "z2", "title": "Neem initiatief", "description": "Start een gesprek met iemand nieuws", "type": "actie"},
        {"id": "z3", "title": "Sta voor jezelf op", "description": "Geef je mening in een discussie", "type": "actie"}
      ],
      "creativiteit": [
        {"id": "c1", "title": "Creatieve expressie", "description": "Maak iets met je handen", "type": "creatief"},
        {"id": "c2", "title": "Inspiratie zoeken", "description": "Bekijk werk van je favoriete kunstenaar", "type": "observatie"},
        {"id": "c3", "title": "Vrij experimenteren", "description": "Werk 30 minuten zonder plan aan iets creatiefs", "type": "experiment"}
      ]
    }
  },
  "badges": [
    {"id": "eerste_stap", "title": "Eerste Stap", "description": "Avatar voltooid", "icon": "🎯", "requirement": "avatar_complete"},
    {"id": "reflector", "title": "Reflector", "description": "10 reflectie-opdrachten voltooid", "icon": "💭", "requirement": "reflection_10"},
    {"id": "doelsteller", "title": "Doelsteller", "description": "Eerste doel gesteld", "icon": "🎯", "requirement": "first_goal"},
    {"id": "volhouder", "title": "Volhouder", "description": "7 dagen achter elkaar actief", "icon": "🔥", "requirement": "streak_7"},
    {"id": "explorer", "title": "Explorer", "description": "5 nieuwe dingen geprobeerd", "icon": "🧭", "requirement": "explore_5"},
    {"id": "groeier", "title": "Groeier", "description": "25 opdrachten voltooid", "icon": "🌱", "requirement": "tasks_25"}
  ],
  "customizationThemes": [
    {"id": "donker", "name": "Donker Thema", "cost": 50, "preview": "#1a1a1a"},
    {"id": "licht", "name": "Licht Thema", "cost": 30, "preview": "#f8f9fa"},
    {"id": "natuur", "name": "Natuur Thema", "cost": 75, "preview": "#2d5a27"},
    {"id": "tech", "name": "Tech Thema", "cost": 100, "preview": "#0066cc"},
    {"id": "retro", "name": "Retro Thema", "cost": 80, "preview": "#ff6b6b"}
  ],
  "weeklyInspiration": [
    {"week": 1, "suggestion": "Probeer een nieuwe kunstvorm", "category": "creativiteit"},
    {"week": 2, "suggestion": "Leer een nieuwe taal-basis", "category": "talen"},
    {"week": 3, "suggestion": "Ontdek een nieuwe muziekgenre", "category": "muziek"},
    {"week": 4, "suggestion": "Probeer een nieuwe sport", "category": "sport"},
    {"week": 5, "suggestion": "Experimenteer met koken", "category": "culinair"},
    {"week": 6, "suggestion": "Verken een nieuwe filosofie", "category": "denken"}
  ]
};

// App state
let appState = {
  currentSection: 'welcome',
  selectedLabels: [],
  personalityAnswers: {},
  currentQuestionIndex: 0,
  selectedGoals: [],
  completedTasks: [],
  coins: 0,
  earnedBadges: [],
  purchasedThemes: [],
  reflections: {},
  streakDays: 0,
  lastActiveDate: null,
  customGoals: []
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadAppState();
    
    // Show the current section based on state
    showSection(appState.currentSection);
    
    initializeAvatarBuilder();
    initializePersonalityQuestions();
    initializeGoals();
    updateDashboard();
    initializeWeeklyInspiration();
    updateNavigation();
});

// Section Navigation - Fixed
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        appState.currentSection = sectionId;
        updateNavigation();
        saveAppState();
        
        // Initialize section-specific content when shown
        if (sectionId === 'tasks' && !targetSection.dataset.initialized) {
            initializeTasks();
            targetSection.dataset.initialized = 'true';
        }
    }
}

function nextSection(sectionId) {
    showSection(sectionId);
}

function goToSection(sectionId) {
    showSection(sectionId);
}

function updateNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        
        // Extract section name from onclick attribute
        const onclickAttr = item.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/goToSection\('(\w+)'\)/);
            if (match && match[1] === appState.currentSection) {
                item.classList.add('active');
            }
        }
    });
}

// Avatar Builder
function initializeAvatarBuilder() {
    Object.keys(appData.labels).forEach(category => {
        const containerKey = category.toLowerCase().replace(/[^a-z]/g, '-');
        const container = document.getElementById(`${containerKey}-labels`);
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        appData.labels[category].forEach(label => {
            const labelElement = createLabelElement(label, category);
            container.appendChild(labelElement);
        });
    });
    
    updateAvatarPreview();
    updateLabelCounter();
}

function createLabelElement(label, category) {
    const div = document.createElement('div');
    div.className = 'label-item';
    div.innerHTML = `
        <span>${label}</span>
        <span class="label-count">${Math.floor(Math.random() * 450) + 50}</span>
    `;
    
    div.addEventListener('click', () => {
        if (div.classList.contains('selected')) {
            // Deselect
            div.classList.remove('selected');
            appState.selectedLabels = appState.selectedLabels.filter(l => l.label !== label);
        } else if (appState.selectedLabels.length < 25) {
            // Select
            div.classList.add('selected');
            appState.selectedLabels.push({ label, category });
        }
        
        updateAvatarPreview();
        updateLabelCounter();
        saveAppState();
    });
    
    // Check if already selected
    if (appState.selectedLabels.some(l => l.label === label)) {
        div.classList.add('selected');
    }
    
    return div;
}

function updateAvatarPreview() {
    const avatarLabels = document.getElementById('avatarLabels');
    if (!avatarLabels) return;
    
    avatarLabels.innerHTML = '';
    
    appState.selectedLabels.slice(0, 10).forEach(item => {
        const labelDiv = document.createElement('div');
        labelDiv.className = 'avatar-label';
        labelDiv.textContent = item.label;
        avatarLabels.appendChild(labelDiv);
    });
}

function updateLabelCounter() {
    const counter = document.getElementById('selectedCount');
    const nextBtn = document.getElementById('avatarNext');
    
    if (counter) {
        counter.textContent = appState.selectedLabels.length;
    }
    
    if (nextBtn) {
        nextBtn.disabled = appState.selectedLabels.length === 0;
    }
    
    // Check for badge
    if (appState.selectedLabels.length >= 5 && !appState.earnedBadges.includes('eerste_stap')) {
        earnBadge('eerste_stap');
    }
}

// Personality Questions
function initializePersonalityQuestions() {
    showQuestion(appState.currentQuestionIndex);
}

function showQuestion(index) {
    if (index >= appData.personalityQuestions.length || index < 0) return;
    
    const question = appData.personalityQuestions[index];
    const questionContent = document.getElementById('questionContent');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    const progress = document.getElementById('personalityProgress');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (!questionContent) return;
    
    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = index + 1;
    }
    
    if (progress) {
        progress.style.width = `${((index + 1) / appData.personalityQuestions.length) * 100}%`;
    }
    
    if (prevBtn) {
        prevBtn.disabled = index === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = !appState.personalityAnswers[question.id];
        
        if (index === appData.personalityQuestions.length - 1) {
            nextBtn.textContent = 'Ga naar Doelen →';
            nextBtn.onclick = () => nextSection('goals');
        } else {
            nextBtn.textContent = 'Volgende →';
            nextBtn.onclick = nextQuestion;
        }
    }
    
    questionContent.innerHTML = renderQuestion(question);
}

function renderQuestion(question) {
    let html = `<h3>${question.question}</h3>`;
    
    if (question.type === 'open') {
        const currentAnswer = appState.personalityAnswers[question.id] || '';
        html += `<textarea class="form-control" rows="4" placeholder="Typ je antwoord..." 
                 onchange="saveAnswer(${question.id}, this.value)">${currentAnswer}</textarea>`;
    } else if (question.type === 'closed') {
        html += '<div class="question-options">';
        question.options.forEach(option => {
            const selected = appState.personalityAnswers[question.id] === option ? 'selected' : '';
            html += `<div class="question-option ${selected}" onclick="selectOption(${question.id}, '${option}')">${option}</div>`;
        });
        html += '</div>';
    } else if (question.type === 'multiple') {
        html += '<div class="question-options">';
        const selectedOptions = appState.personalityAnswers[question.id] || [];
        question.options.forEach(option => {
            const selected = selectedOptions.includes(option) ? 'selected' : '';
            html += `<div class="question-option ${selected}" onclick="toggleMultipleOption(${question.id}, '${option}')">${option}</div>`;
        });
        html += '</div>';
    }
    
    return html;
}

function saveAnswer(questionId, answer) {
    appState.personalityAnswers[questionId] = answer;
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = !answer;
    }
    saveAppState();
}

function selectOption(questionId, option) {
    appState.personalityAnswers[questionId] = option;
    
    // Update UI
    const options = document.querySelectorAll('.question-option');
    options.forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
    saveAppState();
}

function toggleMultipleOption(questionId, option) {
    if (!appState.personalityAnswers[questionId]) {
        appState.personalityAnswers[questionId] = [];
    }
    
    const selectedOptions = appState.personalityAnswers[questionId];
    const index = selectedOptions.indexOf(option);
    
    if (index > -1) {
        selectedOptions.splice(index, 1);
        event.target.classList.remove('selected');
    } else if (selectedOptions.length < 3) {
        selectedOptions.push(option);
        event.target.classList.add('selected');
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = selectedOptions.length === 0;
    }
    saveAppState();
}

function nextQuestion() {
    if (appState.currentQuestionIndex < appData.personalityQuestions.length - 1) {
        appState.currentQuestionIndex++;
        showQuestion(appState.currentQuestionIndex);
        saveAppState();
    }
}

function previousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        showQuestion(appState.currentQuestionIndex);
        saveAppState();
    }
}

// Goals
function initializeGoals() {
    const predefinedContainer = document.getElementById('predefinedGoals');
    if (!predefinedContainer) return;
    
    predefinedContainer.innerHTML = '';
    
    appData.predefinedGoals.forEach(goal => {
        const goalElement = createGoalElement(goal);
        predefinedContainer.appendChild(goalElement);
    });
    
    updateSelectedGoals();
}

function createGoalElement(goal) {
    const div = document.createElement('div');
    div.className = 'goal-item';
    div.innerHTML = `
        <h4>${goal.title}</h4>
        <span class="goal-category">${goal.category}</span>
    `;
    
    div.addEventListener('click', () => {
        if (div.classList.contains('selected')) {
            div.classList.remove('selected');
            appState.selectedGoals = appState.selectedGoals.filter(g => g.id !== goal.id);
        } else if (appState.selectedGoals.length < 5) {
            div.classList.add('selected');
            appState.selectedGoals.push(goal);
        }
        
        updateSelectedGoals();
        saveAppState();
    });
    
    if (appState.selectedGoals.some(g => g.id === goal.id)) {
        div.classList.add('selected');
    }
    
    return div;
}

function addCustomGoal() {
    const input = document.getElementById('customGoalInput');
    if (!input) return;
    
    const title = input.value.trim();
    
    if (title && appState.selectedGoals.length < 5) {
        const customGoal = {
            id: `custom_${Date.now()}`,
            title: title,
            category: 'Aangepast',
            custom: true
        };
        
        appState.selectedGoals.push(customGoal);
        appState.customGoals.push(customGoal);
        input.value = '';
        
        updateSelectedGoals();
        saveAppState();
        
        // Check for first goal badge
        if (appState.selectedGoals.length === 1 && !appState.earnedBadges.includes('doelsteller')) {
            earnBadge('doelsteller');
        }
    }
}

function updateSelectedGoals() {
    const container = document.getElementById('selectedGoals');
    const nextBtn = document.getElementById('goalsNext');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    appState.selectedGoals.forEach((goal, index) => {
        const div = document.createElement('div');
        div.className = 'selected-goal';
        div.draggable = true;
        div.innerHTML = `
            <div>
                <strong>${goal.title}</strong>
                <small class="goal-category">${goal.category}</small>
            </div>
            <div class="goal-rank">${index + 1}</div>
        `;
        
        // Add drag and drop functionality
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
        });
        
        div.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        div.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const targetIndex = index;
            
            if (draggedIndex !== targetIndex) {
                const draggedGoal = appState.selectedGoals.splice(draggedIndex, 1)[0];
                appState.selectedGoals.splice(targetIndex, 0, draggedGoal);
                updateSelectedGoals();
                saveAppState();
            }
        });
        
        container.appendChild(div);
    });
    
    if (nextBtn) {
        nextBtn.disabled = appState.selectedGoals.length === 0;
    }
}

// Tasks
function initializeTasks() {
    const container = document.getElementById('tasksByGoal');
    if (!container) return;
    
    container.innerHTML = '';
    
    appState.selectedGoals.forEach(goal => {
        const goalTasks = generateTasksForGoal(goal);
        const goalDiv = createGoalTasksElement(goal, goalTasks);
        container.appendChild(goalDiv);
    });
}

function generateTasksForGoal(goal) {
    const tasks = [...appData.tasks.default];
    
    // Add specific tasks based on goal keywords
    const goalTitle = goal.title.toLowerCase();
    if (goalTitle.includes('zelfvertrouwen') && appData.tasks.specific.zelfvertrouwen) {
        tasks.push(...appData.tasks.specific.zelfvertrouwen);
    }
    if (goalTitle.includes('creatief') && appData.tasks.specific.creativiteit) {
        tasks.push(...appData.tasks.specific.creativiteit);
    }
    
    // Return random selection of 3-5 tasks
    const shuffled = tasks.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 3) + 3);
}

function createGoalTasksElement(goal, tasks) {
    const div = document.createElement('div');
    div.className = 'goal-tasks';
    
    let html = `<h3>📋 ${goal.title}</h3><div class="tasks-grid">`;
    
    tasks.forEach(task => {
        const isCompleted = appState.completedTasks.includes(task.id);
        const completedClass = isCompleted ? 'completed' : '';
        
        html += `
            <div class="task-item ${completedClass}">
                <div class="task-header">
                    <span class="task-type">${task.type}</span>
                    <input type="checkbox" class="task-checkbox" 
                           ${isCompleted ? 'checked' : ''} 
                           onchange="toggleTask('${task.id}', this.checked)">
                </div>
                <h4 class="task-title">${task.title}</h4>
                <p class="task-description">${task.description}</p>
            </div>
        `;
    });
    
    html += '</div>';
    div.innerHTML = html;
    return div;
}

function toggleTask(taskId, completed) {
    if (completed) {
        if (!appState.completedTasks.includes(taskId)) {
            appState.completedTasks.push(taskId);
            showReflectionModal(taskId);
            earnCoins(10);
            
            // Check for badges
            checkTaskBadges();
        }
    } else {
        appState.completedTasks = appState.completedTasks.filter(id => id !== taskId);
    }
    
    saveAppState();
    updateDashboard();
}

function showReflectionModal(taskId) {
    const modal = document.getElementById('reflectionModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.dataset.taskId = taskId;
    }
}

function closeReflectionModal() {
    const modal = document.getElementById('reflectionModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function submitReflection() {
    const modal = document.getElementById('reflectionModal');
    const taskId = modal?.dataset.taskId;
    const reflectionTextArea = document.getElementById('reflectionText');
    const reflection = reflectionTextArea?.value;
    
    if (reflection && taskId) {
        appState.reflections[taskId] = reflection;
        saveAppState();
    }
    
    if (reflectionTextArea) {
        reflectionTextArea.value = '';
    }
    closeReflectionModal();
}

// Badge System
function earnBadge(badgeId) {
    if (!appState.earnedBadges.includes(badgeId)) {
        appState.earnedBadges.push(badgeId);
        saveAppState();
        
        // Show badge notification
        const badge = appData.badges.find(b => b.id === badgeId);
        if (badge) {
            setTimeout(() => {
                alert(`🎉 Badge verdiend: ${badge.title}!\n${badge.description}`);
            }, 500);
        }
    }
}

function checkTaskBadges() {
    const completedCount = appState.completedTasks.length;
    const reflectionTasks = appState.completedTasks.filter(taskId => {
        return taskId.includes('d1') || taskId.includes('z1') || taskId.includes('reflectie');
    }).length;
    
    if (reflectionTasks >= 10 && !appState.earnedBadges.includes('reflector')) {
        earnBadge('reflector');
    }
    
    if (completedCount >= 25 && !appState.earnedBadges.includes('groeier')) {
        earnBadge('groeier');
    }
}

function earnCoins(amount) {
    appState.coins += amount;
    saveAppState();
}

// Dashboard
function updateDashboard() {
    const coinBalance = document.getElementById('coinBalance');
    const completedTasksCount = document.getElementById('completedTasks');
    const earnedBadgesCount = document.getElementById('earnedBadges');
    
    if (coinBalance) coinBalance.textContent = appState.coins;
    if (completedTasksCount) completedTasksCount.textContent = appState.completedTasks.length;
    if (earnedBadgesCount) earnedBadgesCount.textContent = appState.earnedBadges.length;
    
    updateBadgesList();
    updateShop();
    updateRecentTasks();
}

function updateBadgesList() {
    const container = document.getElementById('badgesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    appData.badges.forEach(badge => {
        const earned = appState.earnedBadges.includes(badge.id);
        const div = document.createElement('div');
        div.className = `badge-item ${earned ? 'earned' : ''}`;
        div.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-title">${badge.title}</div>
            <div class="badge-description">${badge.description}</div>
        `;
        container.appendChild(div);
    });
}

function updateShop() {
    const container = document.getElementById('customizationShop');
    if (!container) return;
    
    container.innerHTML = '';
    
    appData.customizationThemes.forEach(theme => {
        const purchased = appState.purchasedThemes.includes(theme.id);
        const canAfford = appState.coins >= theme.cost;
        
        const div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `
            <div class="theme-info">
                <div class="theme-preview" style="background: ${theme.preview}"></div>
                <span>${theme.name}</span>
            </div>
            <div class="theme-cost">
                ${purchased ? '✅ Gekocht' : `${theme.cost} 💰`}
            </div>
        `;
        
        if (!purchased && canAfford) {
            div.addEventListener('click', () => buyTheme(theme.id, theme.cost));
            div.style.cursor = 'pointer';
        } else if (!purchased) {
            div.style.opacity = '0.5';
        }
        
        container.appendChild(div);
    });
}

function buyTheme(themeId, cost) {
    if (appState.coins >= cost && !appState.purchasedThemes.includes(themeId)) {
        appState.coins -= cost;
        appState.purchasedThemes.push(themeId);
        saveAppState();
        updateDashboard();
        
        alert('Thema gekocht! 🎨');
    }
}

function updateRecentTasks() {
    const container = document.getElementById('recentTasks');
    if (!container) return;
    
    container.innerHTML = '';
    
    const recentTasks = appState.completedTasks.slice(-5);
    
    if (recentTasks.length === 0) {
        container.innerHTML = '<p>Nog geen voltooide opdrachten</p>';
        return;
    }
    
    recentTasks.reverse().forEach(taskId => {
        const div = document.createElement('div');
        div.className = 'recent-task';
        div.innerHTML = `
            <span>Opdracht ${taskId}</span>
            <span>✅</span>
        `;
        container.appendChild(div);
    });
}

// Weekly Inspiration
function initializeWeeklyInspiration() {
    const container = document.getElementById('weeklyInspiration');
    if (!container) return;
    
    const currentWeek = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % appData.weeklyInspiration.length;
    const inspiration = appData.weeklyInspiration[currentWeek];
    
    container.innerHTML = `
        <div class="inspiration-suggestion">${inspiration.suggestion}</div>
        <div class="inspiration-category">${inspiration.category}</div>
    `;
}

// Data Management
function saveAppState() {
    try {
        localStorage.setItem('personalGrowthApp', JSON.stringify(appState));
    } catch (e) {
        console.error('Could not save app state:', e);
    }
}

function loadAppState() {
    try {
        const saved = localStorage.getItem('personalGrowthApp');
        if (saved) {
            const loadedState = JSON.parse(saved);
            appState = { ...appState, ...loadedState };
        }
    } catch (e) {
        console.error('Could not load app state:', e);
    }
}

function exportData() {
    const dataStr = JSON.stringify(appState, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'personal-growth-data.json';
    link.click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            appState = { ...appState, ...importedData };
            saveAppState();
            
            // Reload the current section
            location.reload();
        } catch (error) {
            alert('Fout bij het importeren van data. Controleer het bestand.');
        }
    };
    reader.readAsText(file);
}