function hideWhenClicked(myDiv){
    var el = document.getElementById(myDiv);
    el.style.display = 'none';
}
$('#hide_this').click(hideWhenClicked);