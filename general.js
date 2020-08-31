$( document ).ready(function() {
    console.log( "ready!" );
    hide();
});

function hide(){
    $('#home').click(function(){
        $('.home').hide();
    });
}