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
Client.Reservation = Client.hasMany(Reservation, { as: "reservations", foreignKey: "clientId" });
Reservation.Client = Reservation.belongsTo(Client, { as: "client" });

//------------------- Client-EntrepriseDetail ------------------
Client.EntrepriseDetail = Client.hasOne(EntrepriseDetail, { as: "entrepriseDetail" });
EntrepriseDetail.Client = EntrepriseDetail.belongsTo(Client);

//------------------- Client-Employee ------------------
Employee.Client = Employee.belongsTo(Client, { as: "client", foreignKey: "clientId" });
Client.Employee = Client.hasMany(Employee, { as: "employees", foreignKey: "clientId" });
//------------------- Service-ExigenceService ------------------
Service.ExigenceService = Service.hasMany(ExigenceService, { as: "exigenceService", foreignKey: "serviceId" });
ExigenceService.Service = ExigenceService.belongsTo(Service, { foreignKey: "serviceId" });
//------------------- Service-Succursale ------------------
Succursale.Service = Succursale.belongsToMany(Service, { as: "services", through: ServiceSuccursale });
Service.Succursale = Service.belongsToMany(Succursale, { as: "succursales", through: ServiceSuccursale });
//------------------- Service-Reservation ------------------
Service.Reservation = Service.hasMany(Reservation, { as: "reservations", foreignKey: "serviceId" });
Reservation.Service = Reservation.belongsTo(Service, { as: "service" });
//------------------- Reservation-Facture ------------------
Reservation.Facture = Reservation.hasOne(Facture, { as: "facture" });
Facture.Reservation = Facture.belongsTo(Reservation, { as: "reservation" });
//------------------- Reclamation-User ------------------
Reclamation.User=Reclamation.belongsTo(User,{as:"user",foreignKey:"userId"})
User.Reclamation=User.hasMany(Reclamation,{as:"reclamations",foreignKey:"userId"})
//------------------- Reclamation-Technicien ------------------
Technicien.Reclamation = Technicien.hasMany(Reclamation, { as: "reclamations", foreignKey: "technicienId" });
Reclamation.Technicien = Reclamation.belongsTo(Technicien, { as: "technicien" });
//------------------- Technicien-Reservation ------------------
Technicien.Reservation = Technicien.hasMany(Reservation, { as: "reservations", foreignKey: "technicienId" });
Reservation.Technicien = Reservation.belongsTo(Technicien, { as: "technicien", foreignKey: "technicienId" });
//------------------- Technicien-Succursale ------------------
Technicien.Succursale = Technicien.belongsTo(Succursale, { as: "succursale", foreignKey: "succursaleId" });
Succursale.Technicien = Succursale.hasMany(Technicien, { as: "techniciens", foreignKey: "succursaleId" });
//------------------- Technicien-User ------------------
Technicien.User = Technicien.hasOne(User, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Technicien" },
	as: "user",
});
User.Technicien = User.belongsTo(Technicien, {
	foreignKey: "userableId",
	constraints: false,
	as: "technicien",
});
