function openbox(Nav){
    let nav = document.getElementById("Nav");
    let display = nav.style.display;
    if(display === 'none' || display === ''){
        nav.style.display='block';
    }else{
        nav.style.display='none';
    }
}