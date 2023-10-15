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
Succursale.Chef = Succursale.hasOne(Chef, { as: "chef" });
Chef.Succursale = Chef.belongsTo(Succursale, { as: "succursale" });
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

//------------------- Client-User ------------------
Client.User = Client.hasOne(User, {
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

//------------------- Client-Reservation ------------------

//------------------- Client-EntrepriseDetail ------------------

//------------------- Client-Employee ------------------

//------------------- Service-ExigenceService ------------------

//------------------- Service-Succursale ------------------

//------------------- Service-Reservation ------------------

//------------------- Reservation-Facture ------------------

//------------------- Reclamation-User ------------------

//------------------- Reclamation-Technicien ------------------

//------------------- Technicien-Reservation ------------------

//------------------- Technicien-User ------------------
