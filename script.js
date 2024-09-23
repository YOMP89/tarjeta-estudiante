let currentIndex = 0;
let students = [];

fetch('students.json')
    .then(response => response.json())
    .then(data => {
        students = data;
        updateCard();
    })
    .catch(error => console.error('Error:', error));

function updateCard() {
    const student = students[currentIndex];
    const card = document.querySelector('.card');
    
    // Añadir animación de transición
    card.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('studentPhoto').src = student.photo;
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentGrade').textContent = `Curso: ${student.grade}`;
        document.getElementById('studentEmail').textContent = student.email;
        
        // Restaurar la opacidad
        card.style.opacity = 1;
    }, 300);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + students.length) % students.length;
    updateCard();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % students.length;
    updateCard();
});