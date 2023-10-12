const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const link1 = document.getElementById('name');
const link2 = document.getElementById('archive');
const link3 = document.getElementById('about');
const link4 = document.getElementById('linkedin');
const link5 = document.getElementById('github');
const link6 = document.getElementById('instagram');




toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'rgb(17,16,16)';
        link1.style.color = 'rgb(17,16,16)';
        link2.style.color = 'rgb(17,16,16)';
        link3.style.color = 'rgb(17,16,16)';
        link4.style.color = 'rgb(17,16,16)';
        link5.style.color = 'rgb(17,16,16)';
        link6.style.color = 'rgb(17,16,16)';
        body.style.transition = '0.8s';
        link1.style.transition = '0.8s';
        link2.style.transition = '0.8s';
        link3.style.transition = '0.8s';
        link4.style.transition = '0.8s';
        link5.style.transition = '0.8s';
        link6.style.transition = '0.8s';
    }else{
        body.style.background = 'rgb(17,16,16)';
        body.style.color = 'white';
        link1.style.color = 'white';
        link2.style.color = 'white';
        link3.style.color = 'white';
        link4.style.color = 'white';
        link5.style.color = 'white';
        link6.style.color = 'white';
        body.style.transition = '0.8s';
        link1.style.transition = '0.8s';
        link2.style.transition = '0.8s';
        link3.style.transition = '0.8s';
        link4.style.transition = '0.8s';
        link5.style.transition = '0.8s';
        link6.style.transition = '0.8s';
    }
});