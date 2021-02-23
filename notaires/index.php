<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title> Office notarial Philippe CLERC à MOUGINS</title>
        <link rel="icon" type="image/png" href="images/favicon.png">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/index/myMaps.js"></script>
    </head>
    <body>
        <?php include("php/includes/navBar.php"); ?>
        <?php include("php/includes/anchor.php"); ?>
        <div id="welcomeDiv">
            <div id="welcomeDivText">
                <p id="welcomeDivText1">L'office</p>
                <p id="welcomeDivText2">Notre office vous souhaite la bienvenue</p>
                <a href="presentationOffice.php"><button id="buttonWelcomeDiv">Découvrir l'office</button></a>
            </div>
        </div>
        <div id="mapsDiv">
            <p> Nous contacter </p>
            <div class="box-iframe">
                <iframe id="googleMap" src="https://www.google.com/maps/d/u/0/embed?mid=1TD_KnlvoMLX5usJRCeMA4lcU_8UVT-oe"></iframe>
            </div>
        </div>
        <?php include("php/includes/footer.php"); ?>
    </body>
</html>