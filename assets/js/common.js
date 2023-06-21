// function letTalk(){
   
// }
function submit() {
    var Name = document.getElementById("Name");
    var emailAddress = document.getElementById("Email");
    var Subject = document.getElementById("Subject");
    var Message = document.getElementById("Message");
    let isError = false;
    var providerInfo = [Name, emailAddress, Subject, Message];
    for (let i = 0; i < providerInfo.length; i++) {
        if (providerInfo[i].value == "") {
            providerInfo[i].style.border = "5px solid red";
            isError = true;
        }
    }
    var emailBodyContent = '<b>Name :</b> ' + Name.value + '<br> ';
    emailBodyContent += '<b>Email :</b> ' + emailAddress.value + '<br> ';
    emailBodyContent += '<b>Message : </b> ' + Message.value + '<br>';
    var jsondata = {
        "token": "uqx51lvs89",
        "emailSubjectLine": Subject.value,
        "emailBodyContent": emailBodyContent
    }

    $.ajax({
        type: "POST",
        url: "https://es.technoboost.in/api/v1/mail-send",
        data: JSON.stringify(jsondata),
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (Subject.value != "" && Name.value != "" && emailAddress.value != "" && Message.value != "") {
                $("#contactUs").modal('toggle');
                $(".emptyInput").val('')
            }
        },
        error: function (err) {
            console.log("err")
        }
    });
}

function removeErrorBorder(id) {
    document.getElementById(id).style.border = 'none'
}


