import axios, { AxiosResponse } from 'axios';
import confetti from 'canvas-confetti';
import { changeAfterInvitation, changeAfterSendEatPreferences } from './page-logic';

const ROUTES = {
    forms: {
        POST: {
            acceptInvite: '/forms/accept-invite',
            eatPreferences: '/forms/eat-preferences',
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

    async sendEatPreferences(
        user: { sex: string, username: string },
        food: string[],
        foodCustom: string | null,
        drinks: string[],
        drinksCustom: string | null,
    ): Promise<AxiosResponse> {
        const body: any = {
            user,
        };

        if (food.length > 0) {
            body.food = food;
        }

        if (foodCustom) {
            body.foodCustom = foodCustom;
        }

        if (drinks.length > 0) {
            body.drinks = drinks;
        }

        if (drinksCustom) {
            body.drinksCustom = drinksCustom;
        }

        return await axios.post(ROUTES.forms.POST.eatPreferences, body);
    }
});

const acceptInviteForm = document.getElementById('accept-invite-form');

acceptInviteForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const { sex, username } = getUserData();

    client.acceptInvite(sex, username)
        .then(response => {
            if (200 <= response.status && response.status < 300) {
                confetti({
                    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
                    particleCount: 1000,
                    spread: 360,
                    ticks: 100,
                    gravity: 0,
                    decay: 0.96,
                    startVelocity: 20,
                    origin: { y: 0.5 }
                });
                changeAfterInvitation();
            }
        });
});

const eatPreferencesForm = document.getElementById('eat-preferences-form');

eatPreferencesForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = getUserData();

    const foodPreferencesElements = document.getElementById('food-preferences');
    const drinkPreferencesElements = document.getElementById('drinks-preferences');

    if (!foodPreferencesElements || !drinkPreferencesElements) {
        throw new Error('Elements not found');
    }

    const [checkedFoodPreferences, customFoodPreferences] = parsePreferences(foodPreferencesElements);
    const [checkedDrinkPreferences, customDrinkPreferences] = parsePreferences(drinkPreferencesElements);

    client.sendEatPreferences(
        user,
        checkedFoodPreferences,
        customFoodPreferences,
        checkedDrinkPreferences,
        customDrinkPreferences
    )
        .then(response => {
            if (200 <= response.status && response.status < 300) {
                changeAfterSendEatPreferences();
            }
        });
});

function parsePreferences(fieldGroup: Element): [string[], string | null] {
    const checked: string[] = [];
    let custom: string | null;

    for (const control of fieldGroup.getElementsByClassName('control')) {
        if (
            !control.textContent ||
            control.children.length < 1 ||
            !(control.children[0] as HTMLInputElement).checked
        ) {
            continue;
        }

        checked.push(control.textContent.trim());
    }

    const customInput = fieldGroup.querySelector('.form-body__input--text[name=custom_special_food_preferences]') as HTMLInputElement;

    if (!customInput) {
        throw new Error('Element not found');
    }

    custom = customInput.value.trim();

    return [checked, custom];
}

function getUserData() {
    const pathParts = decodeURI(window.location.href).split('/');

    return {
        sex: pathParts[4] as string,
        username: pathParts[5] as string,
    };
}
