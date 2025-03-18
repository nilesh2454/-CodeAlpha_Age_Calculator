function calculateAge() {
    const birthDate = new Date(document.getElementById('date').value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        alert('Please enter a valid date');
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        days += Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate total milliseconds difference
    const totalMilliseconds = today - birthDate;
    
    // Calculate additional time units
    const totalWeeks = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
    const totalMinutes = Math.floor(totalMilliseconds / (1000 * 60));

    // Update the display
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('weeks').textContent = totalWeeks;
    document.getElementById('hours').textContent = totalHours;
    document.getElementById('minutes').textContent = totalMinutes;
    document.getElementById('result').classList.add('show');
} 