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
Client.Reservation = Client.hasMany(Reservation,{as:"reservations",foreignKey:"clientId"})
Reservation.Client = Reservation.belongsTo(Client,{as:"client"})

//------------------- Client-EntrepriseDetail ------------------
Client.EntrepriseDetail = Client.hasOne(EntrepriseDetail,{as:"entrepriseDetail"})
EntrepriseDetail.Client = EntrepriseDetail.belongsTo(Client)

//------------------- Client-Employee ------------------

//------------------- Service-ExigenceService ------------------
Service.ExigenceService = Service.hasMany(ExigenceService,{as:"exigenceService",foreignKey:"serviceId"})
ExigenceService.Service = ExigenceService.belongsTo(Service,{foreignKey:"serviceId"})
//------------------- Service-Succursale ------------------
Succursale.Service = Succursale.belongsToMany(Service,{as:"services",through:ServiceSuccursale})
Service.Succursale = Service.belongsToMany(Succursale,{as:"succursales",through:ServiceSuccursale})
//------------------- Service-Reservation ------------------

//------------------- Reservation-Facture ------------------
Reservation.Facture=Reservation.hasOne(Facture,{as:"facture"})
Facture.Reservation=Facture.belongsTo(Reservation,{as:"reservation"})
//------------------- Reclamation-User ------------------

//------------------- Reclamation-Technicien ------------------
Technicien.Reclamation = Technicien.hasMany(Reclamation,{as:"reclamations",foreignKey:"technicienId"})
Reclamation.Technicien = Reclamation.belongsTo(Technicien,{as:"technicien"})
//------------------- Technicien-Reservation ------------------

//------------------- Technicien-Succursale ------------------

//------------------- Technicien-User ------------------