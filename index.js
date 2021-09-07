const toggleBtn = document.querySelector('.sidebar-toggle');
const closedBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar')
    // } else {
    //     sidebar.classList.add('show-sidebar')
    // }
    sidebar.classList.toggle('show-sidebar')
})

closedBtn.addEventListener('click' , ()=>{
    sidebar.classList.remove('show-sidebar')
});





















