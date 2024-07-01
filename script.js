function updateTimeAndDay() {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcDate = now.toUTCString().split(' ').slice(0, 4).join(' ');
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    currentTimeUTCElement.textContent = `${utcTime}`;
    currentDayElement.textContent = `${dayOfWeek}`;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial call to display time and day immediately upon loading
updateTimeAndDay();
