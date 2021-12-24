const declOfNum = (n, titles) => {
    return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
        0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');


    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');

    timerText.textContent = 'До конца распродажи осталось: ';
    

    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadLine = new Date(2022, 0, 1, 0, 0, 0),
            now = new Date(),
            timeRemaining = (deadLine - now) / 1000;

        let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / (60 * 60)) % 24),
            days = Math.floor((timeRemaining / (60 * 60 * 24)) % 30);
        
        seconds = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        minutes = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        hours = declOfNum(hours, ['час', 'часа', 'часов']);
        days = declOfNum(days, ['день', 'дня', 'дней']);
        
        timerCount.textContent = `${days} ${hours} ${minutes} ${seconds}`;
        
        if(timeRemaining > 0) {
            setTimeout(startTimer, 1000);
        } else {
            timer.remove();
        }
    }

    startTimer();
};

timer();