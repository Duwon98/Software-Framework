$ (document).ready(function(){
    console.log("It is ready!");
    $('#loginForm').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
});

function ajaxPost(){
    var formData = {
        email : $('#email').val(),
        upwd : $('#upwd').val()
    }
    $.ajax({
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : 'Json',
        success : function(customer){
            if (customer.valid == true){
                $("#loginForm").removeClass("fail");
                $("#loginForm").addClass("success");
            }else{
                $("#loginForm").removeClass("success");
                $("#loginForm").addClass("fail");
            }
            $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email + "<br>" +
            "Password: " + customer.upwd+ "<br>" + "Valid User: " + customer.valid + "</p>");
        },
        error : function(e){
            alert("Error")
            console.log("Error: ",e);
        }
    });
    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
        console.log("This is from jquery");
    }
    resetData();
};



