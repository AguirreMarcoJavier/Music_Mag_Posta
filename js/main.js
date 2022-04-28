addEventListener ('DOMContentLoaded', () => {
    const btn_menu = document.querySelector ('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener ('click', () => {
            const menu_items = document.querySelector ('.menu_items')
            menu_items.classList.toggle ('show')
        })
    }
})
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});