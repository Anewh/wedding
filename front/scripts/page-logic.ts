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