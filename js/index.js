const toggleBtn = document.querySelector('.nav_bar_toggle_button');
const menu=document.querySelector('.nav_menu');
const sns=document.querySelector('.nav_sns');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');

});