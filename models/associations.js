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


//------------------- Client-Entreprise ------------------

//------------------- Client-Reservation ------------------

//------------------- Entreprise-EntrepriseDetail ------------------

//------------------- Entreprise-Employee ------------------

//------------------- Service-ExigenceService ------------------

//------------------- Service-Succursale ------------------
Succursale.Service = Succursale.hasMany(Service);
Service.Succursale = Service.belongsTo(Succursale);
//------------------- Service-Reservation ------------------

//------------------- Reservation-Facture ------------------
Reservation.Facture=Reservation.hasOne(Facture);
Facture.Reservation=Facture.belongsTo(Reservation);
//------------------- Reclamation-User ------------------

//------------------- Reclamation-Technicien ------------------

//------------------- Technicien-Reservation ------------------

//------------------- Technicien-User ------------------