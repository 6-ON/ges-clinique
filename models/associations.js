import {
	Chef,
	Client,
	Employee,
	EntrepriseDetail,
	ExigenceService,
	Facture,
	Reclamation,
	Reservation,
	Service,
	ServiceSuccursale,
	Succursale,
	Technicien,
	User,
} from ".";
//-------------------- Chef-Succursale --------------------
Succursale.hasOne(Chef);
Chef.belongsTo(Succursale);
//------------------ Chef-User -------------------
// Chef.hasOne(User);
User.belongsTo(Chef, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Chef" },
});
//------------------- Chef-Reclamation ------------------

//------------------- Client-User ------------------
// Client.hasOne(User);
User.belongsTo(Client, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Client" },
});

//------------------- Client-User ------------------

//------------------- Client-Entreprise ------------------

//------------------- Client-Reservation ------------------

//------------------- Client-Reclamation ------------------

//------------------- Entreprise-EntrepriseDetail ------------------

//------------------- Entreprise-Employee ------------------

//------------------- Service-ExigenceService ------------------

//------------------- Service-Succursale ------------------

//------------------- Service-Reservation ------------------

//------------------- Technicien-Reclamation ------------------

//------------------- Technicien-User ------------------
