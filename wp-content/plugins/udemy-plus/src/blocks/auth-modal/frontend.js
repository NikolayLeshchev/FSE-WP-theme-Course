document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelectorAll('.open-modal')
    const modalCloseEl = document.querySelectorAll('.modal-btn-close, .modal-overlay')
    const modalEl = document.querySelector('.wp-block-udemy-plus-auth-modal')

    openModalBtn.forEach(el=>{
        el.addEventListener('click', event => {
            event.preventDefault()

            modalEl.classList.add('modal-show')
        })
    })

    modalCloseEl.forEach(el=>{
        el.addEventListener('click', event => {
            modalEl.classList.remove('modal-show')
        })
    })


    const tabs = document.querySelectorAll('.tabs a')
    const signinForm = document.querySelector('#signin-tab')
    const signupForm = document.querySelector('#signup-tab')

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault()

            tabs.forEach(currentTab => {
                currentTab.classList.remove('active-tab')
            })

            event.currentTarget.classList.add('active-tab')

            const activeTab = event.currentTarget.getAttribute('href')

            if (activeTab === '#signin-tab') {
                signinForm.style.display='block'
                signupForm.style.display='none'
            } else {
                signinForm.style.display='none'
                signupForm.style.display='block'
            }
        })
    })


    signupForm.addEventListener('submit', event => {
        event.preventDefault()

        const singupFieldset = signupForm.querySelector('fieldset')
        singupFieldset.setAttribute('disabled', true)

        const singupStatus = signupForm.querySelector('#signup-status')
        singupStatus.innerHTML = `
            <div class="modal-status modal-status-info">
                Prease wait. We are creating your account.
            </div>
        `
    })
})