export function changeAfterInvitation() {
    const afterInvitation = document.getElementById('after-invitation');
    if (afterInvitation) {
        afterInvitation.style.display = 'block';
    }

    const invitationSection = document.getElementById('accept-invite-form');
    if (invitationSection) {
        invitationSection.style.display = 'none';
    }
}

export function changeAfterSendEatPreferences() {
    const choosePreferencesWrapper = document.getElementById('choose-preferences-wrapper');

    if (choosePreferencesWrapper) {
        choosePreferencesWrapper.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', e => {
    setInterval(goToMainPage, 500);
});
document.getElementById('envelope-check')?.addEventListener('change', goToMainPage);

function goToMainPage(e) {
    const envelopeCheck = document.getElementById('envelope-check') as HTMLInputElement | null;
    const welcomePage = document.getElementById('welcome-page');
    const mainPage = document.getElementById('main-page');

    if (!envelopeCheck || !welcomePage || !mainPage) {
        return;
    }

    const exitWelcomePage = () => {
        welcomePage.style.display = 'none';
    };

    const fadeOutWelcomePage = () => {
        welcomePage?.classList.add('fade-out');

        setInterval(exitWelcomePage, 500);
    };

    if (envelopeCheck.checked) {
        mainPage.style.display = 'flex';
        setInterval(fadeOutWelcomePage, 500);
    }
}
