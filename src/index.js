import './styles.css';

// const refs = {
//     timer: document.querySelector('#timer-1'),
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]')
// }

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            timer: document.querySelector('#timer-1'),
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]')
        }
    }

    interval = setInterval(() => {
        const dayNow = Date.now()
        const time = this.targetDate - dayNow
        this.toCount(time)
        this.closeCount(time)
    }, 1000)

    toCount(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        this.refs.days.textContent = `${days}`
        this.refs.hours.textContent = `${hours}`
        this.refs.mins.textContent = `${mins}`
        this.refs.secs.textContent = `${secs}`
    }

    pad(value) { return String(value).padStart(2, "0"); }

    closeCount(time) { if (time < 0) { clearInterval(this.interval) } }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
});












