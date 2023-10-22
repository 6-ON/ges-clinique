<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentation de l'Application - GES-Clinique</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        }
		       h1 {
            color: #4CAF50;
            text-align: center;
        }
 h2 {
            color: #4CAF50;
            font-size: 1.5em;
        }
nav {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            text-align: center;
        }
 nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
 nav a:hover {
            text-decoration: underline;
        }
 .section {
            margin-bottom: 30px;
        }
 p {
            line-height: 1.6;
            font-size: 1.1em;
        }
    </style>
</head>

<body>
    <nav>
        <a href="#introduction">Introduction</a>
        <a href="#features">Fonctionnalités Principales</a>
        <a href="#users">Utilisateurs et Rôles</a>
        <a href="#installation">Guide d'Installation</a>
        <a href="#usage">Utilisation de l'Application</a>
        <a href="#troubleshooting">Dépannage</a>
    </nav>
 <div class="container">
        <h1>Documentation de l'Application - GES-Clinique</h1>
        <div class="section" id="introduction">
            <h2>1. Introduction</h2>
            <p>GES-Clinique est une application backend développée avec Node.js, Express.js, et Sequelize, offrant une gestion avancée des rendez-vous pour les cliniques. Cette documentation fournit un aperçu complet des fonctionnalités de l'application et un guide d'installation détaillé pour les utilisateurs.</p>
        </div>

<div class="section" id="features">
    <h2>2. Fonctionnalités Principales</h2>
    <ul>
        <li><strong>Gestion des Succursales :</strong> Création, lecture, mise à jour et suppression de succursales, chacune offrant des services spécifiques.</li>
        <li><strong>Gestion des Employés :</strong> Affectation des techniciens et des chefs de succursale à chaque succursale.</li>
        <li><strong>Gestion des Réservations :</strong> Création, mise à jour et annulation de réservations par les clients et les techniciens.</li>
        <li><strong>Gestion des Clients :</strong> Consultation de la liste des clients, des réservations passées et des réclamations.</li>
        <li><strong>Gestion des Réclamations :</strong> Enregistrement et traitement des réclamations clients.</li>
        <li><strong>Gestion des Services :</strong> Création, mise à jour et suppression de services, avec des exigences spécifiques pour chaque service.</li>
        <li><strong>Gestion des Abonnements Entreprise :</strong> Création et gestion d'abonnements pour les entreprises, permettant aux employés de réserver des services.</li>
    </ul>
</div>

<div class="section" id="users">
    <h2>3. Utilisateurs et Rôles</h2>
    <ul>
        <li><strong>Client :</strong> Peut consulter les succursales, les services, effectuer des réservations, consulter les réservations passées, payer les réservations et recevoir des confirmations.</li>
        <li><strong>Technicien :</strong> Gère les réservations, répond aux clients, prend en charge les réservations et maintient la disponibilité des rendez-vous.</li>
        <li><strong>Chef de Succursale :</strong> Affecte les techniciens aux réservations, gère les réclamations et surveille la disponibilité des techniciens.</li>
        <li><strong>Administrateur :</strong> Gère les utilisateurs, les succursales, les services, et accède aux statistiques et aux réclamations.</li>
        <li><strong>Superadmin :</strong> A les mêmes droits que l'administrateur et peut gérer d'autres administrateurs.</li>
    </ul>
</div>

<div class="section" id="installation">
    <h2>4. Guide d'Installation</h2>

<h3>4.1 Prérequis</h3>
  <ul>
        <li><strong>Node et NPM :</strong> Assurez-vous d'avoir Node.js (avec npm inclus) installé sur votre système. Vous pouvez télécharger la dernière version à partir du <a href="https://nodejs.org/" target="_blank">site officiel de Node.js</a>.</li>
        <li><strong>MySQL :</strong> L'application utilise MySQL comme système de gestion de base de données. Assurez-vous d'avoir une instance MySQL installée et en cours d'exécution. Vous devrez également connaître les détails de connexion à votre base de données.</li>
        <li><strong>Docker (Optionnel) :</strong> Si vous préférez utiliser Docker pour exécuter votre application dans un environnement de conteneur, assurez-vous d'avoir Docker installé sur votre système. Vous pouvez télécharger Docker à partir du <a href="https://www.docker.com/" target="_blank">site officiel de Docker</a>.</li>
</ul>

<h3>4.2 Installation</h3>

<h4>4.2.1 Téléchargement du Code Source</h4>
    <p>Clonez le référentiel depuis GitHub :</p>
    <code>git clone https://github.com/6-ON/ges-clinique.git</code>

 <h4>4.2.2 Configuration de l'Environnement</h4>
    <p>Créez un fichier '.env' à la racine du projet avec les configurations suivantes :</p>
    <pre><code>DB_HOST=localhost
DB_USER=votre_utilisateur_db
DB_PASSWORD=votre_mot_de_passe_db
DB_DATABASE=ges_clinique_db
NODE_ENV=production</code></pre>

<h4>4.2.3 Installation des Dépendances</h4>
    <p>Installez les dépendances Node.js et lancez l'application :</p>
    <code>npm install</code>

 <h4>4.2.4 Configuration de la Base de Données</h4>
    <p>Pour synchroniser la base de données, exécutez :</p>
    <code>npm run db:sync</code>
</div>


<div class="section" id="usage">
    <h2>5. Utilisation de l'Application</h2>

<h3>5.1 Interface Client</h3>
 <ul>
        <li><strong>Consulter les Succursales :</strong> Les clients peuvent explorer les succursales disponibles et voir les services proposés par chacune d'entre elles.</li>
        <li><strong>Effectuer des Réservations :</strong> Les clients peuvent réserver des rendez-vous pour les services disponibles dans une succursale spécifique.</li>
        <li><strong>Consulter les Réservations Passées :</strong> Les clients ont accès à un historique de leurs réservations précédentes.</li>
        <li><strong>Payer les Réservations :</strong> Les clients peuvent effectuer le paiement en ligne pour confirmer leurs réservations.</li>
        <li><strong>Réception de Confirmations :</strong> Une fois le paiement effectué, les clients reçoivent une confirmation de leur réservation par e-mail.</li>
    </ul>

 <h3>5.2 Interface Technicien</h3>
    <ul>
        <li><strong>Gérer les Réservations :</strong> Les techniciens peuvent voir la liste de leurs réservations et les mettre à jour en fonction de l'état de traitement.</li>
        <li><strong>Répondre aux Clients :</strong> Les techniciens peuvent répondre aux questions des clients concernant leurs réservations.</li>
        <li><strong>Maintenir la Disponibilité :</strong> Les techniciens peuvent gérer leur disponibilité en acceptant ou en refusant de nouvelles réservations en fonction de leur emploi du temps.</li>
    </ul>

   <h3>5.3 Interface Chef de Succursale</h3>
<ul>
        <li><strong>Affectation des Techniciens :</strong> Les chefs de succursale peuvent assigner des techniciens aux réservations en fonction de leurs compétences et de leur disponibilité.</li>
        <li><strong>Gérer les Réclamations :</strong> Les chefs de succursale traitent les réclamations des clients en prenant des mesures appropriées.</li>
        <li><strong>Surveillance de la Disponibilité :</strong> Les chefs de succursale surveillent la disponibilité des techniciens et effectuent des ajustements si nécessaire.</li>
    </ul>

 <h3>5.4 Interface Administrateur</h3>
 <ul>
        <li><strong>Gestion des Utilisateurs :</strong> Les administrateurs peuvent ajouter, mettre à jour ou supprimer des comptes d'utilisateurs, y compris les chefs de succursale et les techniciens.</li>
        <li><strong>Gestion des Succursales et des Services :</strong> Les administrateurs peuvent ajouter de nouvelles succursales, gérer les services disponibles et leurs exigences spécifiques.</li>
        <li><strong>Accès aux Statistiques :</strong> Les administrateurs ont accès aux statistiques sur les réservations, les clients et les performances des techniciens.</li>
        <li><strong>Traitement des Réclamations :</strong> Les administrateurs peuvent examiner les réclamations clients et prendre des mesures pour résoudre les problèmes.</li>
    </ul>
</div>


<div class="section" id="troubleshooting">
    <h2>6. Dépannage</h2>

 <h3>6.1 Problèmes Courants et Solutions</h3>
    <ul>
        <li>
            <strong>Problème : Échec de la connexion à la base de données.</strong><br>
            <strong>Solution :</strong> Vérifiez les détails de connexion dans le fichier .env. Assurez-vous que la base de données est accessible et que le serveur MySQL est en cours d'exécution.
        </li>
        <li>
            <strong>Problème : Les réservations ne sont pas mises à jour correctement.</strong><br>
            <strong>Solution :</strong> Vérifiez le code associé à la mise à jour des réservations. Assurez-vous que les requêtes SQL sont correctes et que les erreurs sont correctement gérées.
        </li>
        <li>
            <strong>Problème : Les e-mails de confirmation ne sont pas envoyés aux clients.</strong><br>
            <strong>Solution :</strong> Vérifiez la configuration de votre service d'envoi d'e-mails dans le code. Assurez-vous que les informations d'identification et les paramètres du serveur SMTP sont corrects.
        </li>
    </ul>
</div>

</div>
</body>

</html>

