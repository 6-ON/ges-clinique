# Documentation de l'Application - GES-Clinique

## 1. Introduction
GES-Clinique est une application backend développée avec Node.js, Express.js, et Sequelize, offrant une gestion avancée des rendez-vous pour les cliniques. Cette documentation fournit un aperçu complet des fonctionnalités de l'application et un guide d'installation détaillé pour les utilisateurs.

## 2. Fonctionnalités Principales
- **Gestion des Succursales :** Création, lecture, mise à jour et suppression de succursales, chacune offrant des services spécifiques.
- **Gestion des Employés :** Affectation des techniciens et des chefs de succursale à chaque succursale.
- **Gestion des Réservations :** Création, mise à jour, et annulation de réservations par les clients et les techniciens.
- **Gestion des Clients :** Consultation de la liste des clients, des réservations passées et des réclamations.
- **Gestion des Réclamations :** Enregistrement et traitement des réclamations clients.
- **Gestion des Services :** Création, mise à jour et suppression de services, avec des exigences spécifiques pour chaque service.
- **Gestion des Abonnements Entreprise :** Création et gestion d'abonnements pour les entreprises, permettant aux employés de réserver des services.

## 3. Utilisateurs et Rôles
- **Client :** Peut consulter les succursales, les services, effectuer des réservations, consulter les réservations passées, payer les réservations et recevoir des confirmations.
- **Technicien :** Gère les réservations, répond aux clients, prend en charge les réservations, et maintient la disponibilité des rendez-vous.
- **Chef de Succursale :** Affecte les techniciens aux réservations, gère les réclamations, et surveille la disponibilité des techniciens.
- **Administrateur :** Gère les utilisateurs, les succursales, les services, et accède aux statistiques et aux réclamations.
- **Superadmin :** A les mêmes droits que l'administrateur et peut gérer d'autres administrateurs.

## 4. Guide d'Installation

### 4.1 Prérequis
- **Node et NPM :** Assurez-vous d'avoir Node.js (avec npm inclus) installé sur votre système. Vous pouvez télécharger la dernière version à partir du [site officiel de Node.js](https://nodejs.org/).
- **MySQL :** L'application utilise MySQL comme système de gestion de base de données. Assurez-vous d'avoir une instance MySQL installée et en cours d'exécution. Vous devrez également connaître les détails de connexion à votre base de données.
- **Docker (Optionnel) :** Si vous préférez utiliser Docker pour exécuter votre application dans un environnement de conteneur, assurez-vous d'avoir Docker installé sur votre système. Vous pouvez télécharger Docker à partir du [site officiel de Docker](https://www.docker.com/).

### 4.2 Installation

#### 4.2.1 Téléchargement du Code Source
Clonez le référentiel depuis GitHub :

    git clone https://github.com/6-ON/ges-clinique.git


#### 4.2.2 Configuration de l'Environnement
Créez un fichier '.env' à la racine du projet avec les configurations suivantes :
DB_HOST=localhost
DB_USER=votre_utilisateur_db
DB_PASSWORD=votre_mot_de_passe_db
DB_DATABASE=ges_clinique_db
NODE_ENV=production


#### 4.2.3 Installation des Dépendances
Installez les dépendances Node.js et lancez l'application :

    npm install


#### 4.2.4 Configuration de la Base de Données
Pour synchroniser la base de données, exécutez :

    npm run db:sync


## 5. Utilisation de l'Application

### 5.1 Interface Client
- **Consulter les Succursales :** Les clients peuvent explorer les succursales disponibles et voir les services proposés par chacune d'entre elles.
- **Effectuer des Réservations :** Les clients peuvent réserver des rendez-vous pour les services disponibles dans une succursale spécifique.
- **Consulter les Réservations Passées :** Les clients ont accès à un historique de leurs réservations précédentes.
- **Payer les Réservations :** Les clients peuvent effectuer le paiement en ligne pour confirmer leurs réservations.
- **Réception de Confirmations :** Une fois le paiement effectué, les clients reçoivent une confirmation de leur réservation par e-mail.

### 5.2 Interface Technicien
- **Gérer les Réservations :** Les techniciens peuvent voir la liste de leurs réservations et les mettre à jour en fonction de l'état de traitement.
- **Répondre aux Clients :** Les techniciens peuvent répondre aux questions des clients concernant leurs réservations.
- **Maintenir la Disponibilité :** Les techniciens peuvent gérer leur disponibilité en acceptant ou en refusant de nouvelles réservations en fonction de leur emploi du temps.

### 5.3 Interface Chef de Succursale
- **Affectation des Techniciens :** Les chefs de succursale peuvent assigner des techniciens aux réservations en fonction de leurs compétences et de leur disponibilité.
- **Gérer les Réclamations :** Les chefs de succursale traitent les réclamations des clients en prenant des mesures appropriées.
- **Surveillance de la Disponibilité :** Les chefs de succursale surveillent la disponibilité des techniciens et effectuent des ajustements si nécessaire.

### 5.4 Interface Administrateur
- **Gestion des Utilisateurs :** Les administrateurs peuvent ajouter, mettre à jour ou supprimer des comptes d'utilisateurs, y compris les chefs de succursale et les techniciens.
- **Gestion des Succursales et des Services :** Les administrateurs peuvent ajouter de nouvelles succursales, gérer les services disponibles et leurs exigences spécifiques.
- **Accès aux Statistiques :** Les administrateurs ont accès aux statistiques sur les réservations, les clients et les performances des techniciens.
- **Traitement des Réclamations :** Les administrateurs peuvent examiner les réclamations clients et prendre des mesures pour résoudre les problèmes.

## 6. Dépannage

### 6.1 Problèmes Courants et Solutions
- **Problème : Échec de la connexion à la base de données.**
  - **Solution :** Vérifiez les détails de connexion dans le fichier `.env`. Assurez-vous que la base de données est accessible et que le serveur MySQL est en cours d'exécution.

- **Problème : Les réservations ne sont pas mises à jour correctement.**
  - **Solution :** Vérifiez le code associé à la mise à jour des réservations. Assurez-vous que les requêtes SQL sont correctes et que les erreurs sont correctement gérées.

- **Problème : Les e-mails de confirmation ne sont pas envoyés aux clients.**
  - **Solution :** Vérifiez la configuration de votre service d'envoi d'e-mails dans le code. Assurez-vous que les informations d'identification et les paramètres du serveur SMTP sont corrects.
