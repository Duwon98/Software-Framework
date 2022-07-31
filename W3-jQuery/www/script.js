$ (document).ready(function(){
    console.log("It is ready!");
    $('#loginForm').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
});

function ajaxPost(){
    
}

