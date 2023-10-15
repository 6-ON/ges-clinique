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
Client.Reservation = Client.hasMany(Reservation,{as:"reservations"})
Reservation.Client = Reservation.belongsTo(Client,{as:"client"})

//------------------- Entreprise-EntrepriseDetail ------------------

//------------------- Entreprise-Employee ------------------

//------------------- Service-ExigenceService ------------------
Service.ExigenceService = Service.hasMany(ExigenceService,{as:"exigenceService"})
ExigenceService.Service = ExigenceService.belongsTo(Service)
//------------------- Service-Succursale ------------------

//------------------- Service-Reservation ------------------

//------------------- Reservation-Facture ------------------

//------------------- Reclamation-User ------------------

//------------------- Reclamation-Technicien ------------------
Technicien.Reclamation = Technicien.hasMany(Reclamation,{as:"reclamations"})
Reclamation.Technicien = Reclamation.belongsTo(Technicien,{as:"technicien"})
//------------------- Technicien-Reservation ------------------

//------------------- Technicien-User ------------------