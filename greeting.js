function displayGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
    
    switch (true) {
        case (currentHour < 12):
            greeting = "Good Morning, welcome to Kebab Society";
            break;
        case (currentHour < 18):
            greeting = "Good Afternoon, welcome to Kebab Society";
            break;
        default:
            greeting = "Good Evening, welcome to Kebab Society";
    }
    document.getElementById('greeting').textContent = greeting;
}

displayGreeting();