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
//-------------------- Succursale-Chef --------------------
Succursale.hasOne(Chef);	
Chef.belongsTo(Succursale);
//------------------ Chef-User -------------------
// Chef.hasOne(User);
User.belongsTo(Chef, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Chef" },
});
//------------------- Client-User ------------------
// Client.hasOne(User);
User.belongsTo(Client, {
	foreignKey: "userableId",
	constraints: false,
	scope: { userableType: "Client" },
});
