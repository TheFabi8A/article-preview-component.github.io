const toggleBtnProfile = document.getElementById('share-icon__profile');
const toggleBtnShare = document.getElementById('share-icon__share');

toggleBtnProfile.addEventListener('click', function () {
    const share = document.querySelector('.share-container');
    const profile = document.querySelector('.profile-container');
    if (screen.width < 880) {
        share.classList.add('active')
        profile.classList.add('inactive')
    } else if (screen.width >= 880) {
        share.classList.toggle('active')
        toggleBtnShare.classList.add('inactive')
    }
})

toggleBtnShare.addEventListener('click', function () {
    const share = document.querySelector('.share-container');
    const profile = document.querySelector('.profile-container');
    if (screen.width < 880) {
        share.classList.remove('active')
        profile.classList.remove('inactive')
    }
})