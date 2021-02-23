<link rel="stylesheet" href="css/navBar.css">
<header>
    <div id="div-logo">
        <div>
            <a href="index.php"><img id="logo-notaires" src="images/logo.jpg"></a>
        </div>
        <div id="div-logo-text">
            <p id="notaireNom">Philippe CLERC</p>
            <p id="notaireVille">Notaire à MOUGINS</p>
        </div>
    </div>
    <div>
        <nav class="menu">
            <input id ="menu__toggle" type="checkbox" class='menu__toggle'/>
            <label for="menu__toggle" class="menu__toggle-label">
                <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                    <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
                </svg>
                <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </label>
            <ol class='menu__content'>
                <li class="menu-item">
                    <a href="index.php">L'office</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="presentationOffice.php">Présentation de l'office</a></li>
                        <li class="menu-item"><a onclick='document.location.reload(true);window.location.href = "presentationOffice.php#div-labels";'>Labels, certifications et réseaux</a></li>
                        <li class="menu-item"><a onclick='document.location.reload(true);window.location.href = "presentationOffice.php#div-team";'>L'équipe</a></li>
                        <li class="menu-item"><a onclick='document.location.reload(true);window.location.href = "presentationOffice.php#div-tarifs";'>Honoraires de l'étude</a></li>
                    </ol>
                </li>
                <li class="menu-item">
                    <a href="services.php">Services</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="services.php">Nos services numériques</a></li>
                    </ol>
                </li>
                <li class="menu-item">
                    <a href="infosEtConseils.php">Informations et conseils</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="infosEtConseils.php">Missions du notaire</a></li>
                        <li class="menu-item"><a onclick='document.location.reload(true);window.location.href = "infosEtConseils.php#liensUtiles";'>Liens utiles</a></li>
                    </ol>
                </li>
                <li class="menu-item">
                    <a href="contact.php">Nous contacter </a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="coordonnees.php">Nos coordonnées</a></li>
                        <li class="menu-item"><a href="rdv.php">Prendre rendez-vous</a></li>
                    </ol>
                </li>
            </ol>
        </nav>
    </div>
</header>