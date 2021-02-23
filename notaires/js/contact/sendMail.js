(function () {
    $(document).ready(function(){
        let sendMail = new SendMail();
    });
}) ();

class SendMail {
    constructor() {
        $("#sendMail").click(function () {
            let gender = $("#form-gender").val();
            let name = $("#form-name").val();
            let firstName = $("#form-firstName").val();
            let mail = $("#form-mail").val();
            let tel = $("#form-tel").val();
            let category = $('#contact_subject').val();
            let moreInfos = $('#input-text-mail').val();
            let pref = $("#form-pref").val();
            //vérifie si les champs sont vides
            if (name === "" || firstName === "" || mail === "" || tel === "") {
                alert("Veuillez remplir tous les champs commencant par *.")
            }
            else {
                //vérifie si l'adresse est conforme aux normes
                let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
                if(! expressionReguliere.test(mail)) {
                    alert("Vous devez rentrer une adresse valide.");
                }
                else {
                    //on envoie un mail à l'étude
                    //vérifier avec un captcha
                    $.ajax({
                        url: "php/requests/sendMail.php",
                        method: "get",
                        data: {
                            gender: gender,
                            name: name,
                            firstName: firstName,
                            mail: mail,
                            tel: tel,
                            category: category,
                            moreInfos: moreInfos,
                            pref: pref
                        }
                    }).done(function (data) {
                        let formContact = $('#formContact');
                        if (data === '1') {
                            formContact.empty();
                            window.top.window.scrollTo(0,0);
                            formContact.append('<p id="returnMail"> Votre message a été envoyé avec succès, redirection vers la page d\'accueil en cours ... </p>');
                            setTimeout(() => {
                                document.location.reload(true);window.location.href = "index.php";
                            }, 6000);
                        }
                        else {
                            alert("Un problème est survenu lors de l'envoi.");
                        }
                    });
                }
            }
        });
    }
}