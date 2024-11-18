
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: '27eabd934c89858d65d0', 
    cluster: 'ap2', 
    forceTLS: true,
});

export default echo;
