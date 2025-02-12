export function changeAfterInvitation() {
    const afterInvitation = document.getElementById('after-invitation');
    if (afterInvitation) {
        afterInvitation.style.display = 'block';
    }

    const invitationSection = document.getElementById('accept-invite-section');
    if (invitationSection) {
        invitationSection.style.display = 'none';
    }
}
