const hambugger = document.querySelector('.icon-open')
const navigation = document.querySelector('.navigation > nav')

hambugger.onclick =()=>{
    if(navigation.style.display == 'block'){
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
        hambugger.src='./images/icon-close.svg'
    }
}