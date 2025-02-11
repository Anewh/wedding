import axios from 'axios';

const ROUTES = {
    forms: {
        POST: {
            acceptInvite: '/forms/accept-invite',
        },
    },
};

const client = new (class {
    constructor() { }

    acceptInvite(sex, username) {
        return axios.post(ROUTES.forms.POST.acceptInvite, {
            sex,
            username
        });
    }
});

const acceptInviteForm = document.getElementById('accept-invite');

acceptInviteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = new URLSearchParams(window.location.search);

    const sex = query.get('s');
    const username = query.get('n');

    console.log(sex);
    console.log(username);
    
    client.acceptInvite(sex, username)
});
