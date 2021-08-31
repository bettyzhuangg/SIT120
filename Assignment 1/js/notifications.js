// this component displays 'green notif' which is notif that the score is above a certain threshold
// and red notif if it is under the threshold
const Notifications = Vue.component('notifications', {
    props: ['score'],
    template: '<div class = "notifs"><p class = "greennotif" v-if="score > 70">Good job, your learning progress is on track</p><p class = "rednotif" v-else>Add more events as your learning progress is off track</p></div>'
});