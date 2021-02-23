<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title> Office notarial Philippe CLERC à MOUGINS</title>
    <link rel="icon" type="image/png" href="images/favicon.png">
    <link rel="stylesheet" href="css/contact.css">
    <script src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/contact/sendMail.js"></script>
</head>
<body>
<?php include("php/includes/navBar.php"); ?>
<?php include("php/includes/anchor.php"); ?>
    <div id="divFormContact">
        <form id="formContact">
            <select id="form-gender">
                <option value="Monsieur"> Monsieur </option>
                <option value="Madame"> Madame </option>
            </select>
            <input id="form-name" type="text" placeholder="* Nom">
            <input id="form-firstName" type="text" placeholder="* Prénom">
            <input id="form-mail" type="email" placeholder="* Courriel">
            <input id="form-tel" type="tel" placeholder="* Téléphone">
            <label>*  Quel est le sujet de votre message ? </label>
            <select id="contact_subject" name="contact[subject]" class="select2">
                <option value="Droit de la famille">Droit de la famille</option>
                <option value="Succession">Succession</option>
                <option value="Mariage, PACS, divorce, etc">Mariage, PACS, divorce, etc</option>
                <option value="Immobilier">Immobilier</option>
                <option value="Patrimoine">Patrimoine</option>
                <option value="Transmission">Transmission</option>
                <option value="Activité professionnelle">Activité professionnelle</option>
                <option value="Autre...">Autre...</option>
            </select>
            <label> Vous souhaitez donner plus d'informations ?</label>
            <textarea id="input-text-mail" type="text" placeholder="..."></textarea>
            <label>Vous souhaitez être rappelé ? Indiquez-nous votre préférence. </label>
            <select id="form-pref">
                <option value="Ne souhaite pas être rappelé"> Ne souhaite pas être rappelé </option>
                <option value="Sans préférence"> Sans préférence </option>
                <option value="Le matin"> Le matin </option>
                <option value="L'après-midi"> L'après-midi </option>
            </select>
            <div class="g-recaptcha" data-sitekey="6Lcf7aIZAAAAAL03C5z7UZ1x0hYUv1nmkzb9xIZo"></div>
            <input id="sendMail" type="button" value="Envoyer">
        </form>
    </div>
<?php include("php/includes/footer.php"); ?>
</body>
</html>