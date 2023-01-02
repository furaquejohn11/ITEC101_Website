window.onload = () => {
    document.getElementById('shop1').style.display = "none";
    document.getElementById('shop2').style.display = "none";
    document.getElementById('shop3').style.display = "none";
    
    document.getElementById('transpo1').style.display = "none";
    document.getElementById('transpo2').style.display = "none";
    document.getElementById('transpo3').style.display = "none";  

    document.getElementById('photo1').style.display = "none";
    document.getElementById('photo2').style.display = "none";
    document.getElementById('photo3').style.display = "none";  


    document.getElementById('back1').style.display = "none";
    document.getElementById('back2').style.display = "none";
    document.getElementById('back3').style.display = "none";
}

btnSideBar =() => {
    let menu = document.getElementById("main-con-sidebar");
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none"
    }
    

}

btnNext = () => {

    let dp = document.getElementById('qwe');
    
    if (dp.style.display == "none") {
        document.getElementById('asd').style.display = "none";
        document.getElementById('a').style.display = "none";
        document.getElementById('qwe').style.display = "inline";
        document.getElementById('q').style.display = "inline";
    }
    else {
        document.getElementById('asd').style.display = "inline";
        document.getElementById('a').style.display = "inline";
        document.getElementById('qwe').style.display = "none";
        document.getElementById('q').style.display = "none";
    }
    
    
}
btnShop = () => {
    document.getElementById('shop1').style.display = "inline";
    document.getElementById('shop2').style.display = "inline";
    document.getElementById('shop3').style.display = "inline";  
    document.getElementById('back1').style.display = "inline";
    hideOptions();
    
}
btnTranspo = () => {
    document.getElementById('transpo1').style.display = "inline";
    document.getElementById('transpo2').style.display = "inline";
    document.getElementById('transpo3').style.display = "inline"; 
    document.getElementById('back2').style.display = "inline";
    hideOptions();
}

btnPhoto = () => {
    document.getElementById('photo1').style.display = "inline";
    document.getElementById('photo2').style.display = "inline";
    document.getElementById('photo3').style.display = "inline"; 
    document.getElementById('back3').style.display = "inline";
    hideOptions();
}

hideOptions = () => {
    document.getElementById('shop').style.display = "none";
    document.getElementById('transpo').style.display = "none";
    document.getElementById('photo').style.display = "none";
}
showOptions = () => {
    document.getElementById('shop').style.display = "inline";
    document.getElementById('transpo').style.display = "inline";
    document.getElementById('photo').style.display = "inline";
}
btnBack1 = () => {
    document.getElementById('shop1').style.display = "none";
    document.getElementById('shop2').style.display = "none";
    document.getElementById('shop3').style.display = "none";  
    document.getElementById('back1').style.display = "none";
    showOptions(); 
}
btnBack2 = () => {
    document.getElementById('transpo1').style.display = "none";
    document.getElementById('transpo2').style.display = "none";
    document.getElementById('transpo3').style.display = "none";  
    document.getElementById('back2').style.display = "none";
    showOptions(); 
}
btnBack3 = () => {
    document.getElementById('photo1').style.display = "none";
    document.getElementById('photo2').style.display = "none";
    document.getElementById('photo3').style.display = "none";  
    document.getElementById('back3').style.display = "none";
    showOptions(); 
}