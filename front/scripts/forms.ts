import axios, { AxiosResponse } from 'axios';
import { changeAfterInvitation } from './page-logic';

const ROUTES = {
    forms: {
        POST: {
            acceptInvite: '/forms/accept-invite',
        },
    },
};

const client = new (class {
    constructor() { }

    async acceptInvite(sex: string, username: string): Promise<AxiosResponse> {
        return await axios.post(ROUTES.forms.POST.acceptInvite, {
            sex,
            username
        });
    }
});

const acceptInviteForm = document.getElementById('accept-invite-form');

acceptInviteForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = new URLSearchParams(window.location.search);

    const sex = query.get('s') as string;
    const username = query.get('n') as string;
    
    client.acceptInvite(sex, username)
        .then(response => {
            if (200 <= response.status && response.status < 300) {
                changeAfterInvitation();
            }
        })
});
