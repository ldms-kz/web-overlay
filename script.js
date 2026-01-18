let team1Name = localStorage.getItem('team1Name') || 'Команда 1';
let team2Name = localStorage.getItem('team2Name') || 'Команда 2';
let team1Score = parseInt(localStorage.getItem('team1Score')) || 0;
let team2Score = parseInt(localStorage.getItem('team2Score')) || 0;
let goals = JSON.parse(localStorage.getItem('goals')) || [];
let matchTime = 0;

document.getElementById('team1Name').innerText = team1Name;
document.getElementById('team2Name').innerText = team2Name;

function updateScore() {
    document.getElementById('score').innerText = ${team1Score} : ${team2Score};
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addGoal() {
    const scorerName = document.getElementById('scorerName').value;
    
    if (scorerName) {
        const team = confirm(Забила ${team1Name}?) ? 'team1' : 'team2';
        
        if (team === 'team1') {
            team1Score++;
        } else {
            team2Score++;
        }
        
        goals.push({ name: scorerName, team, time: Date.now() });
        localStorage.setItem('goals', JSON.stringify(goals));
        localStorage.setItem('team1Score', team1Score);
        localStorage.setItem('team2Score', team2Score);
        
        updateScore();
        showScorer(scorerName);
        
        document.getElementById('scorerName').value = '';
        closeModal();
    }
}

function showScorer(name) {
    const scorerDiv = document.createElement('div');
    scorerDiv.innerText = name;
    document.body.appendChild(scorerDiv);
    
    setTimeout(() => {
        document.body.removeChild(scorerDiv);
