// this component prints a reminder onto display based on the dates and event title passed
const Reminder = Vue.component('reminder', {
    props: ['event', 'date'],
    template: '<div class = "reminderlist"><p class="dates">{{ date }}</p><p class="events">{{ event }}</p></div>'
});