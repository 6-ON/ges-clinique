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
Chef.User = Chef.hasOne(User, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Chef" },
	as: "user",
});
User.Chef = User.belongsTo(Chef, {
	foreignKey: "userableId",
	constraints: false,
	as: "chef",
});
//------------------- Chef-Reclamation ------------------

//------------------- Client-User ------------------
Client.User = Client.hasOne(User,{
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Client" },
	as: "user",
});
User.Client = User.belongsTo(Client, {
	foreignKey: "userableId",
	constraints: false,
	as: "client",
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
