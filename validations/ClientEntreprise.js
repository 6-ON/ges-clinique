import Joi from "joi";
import {updateUserSchema} from "./User";
import { createEmployeeSchema } from "./Employee";


export const updateEntrepriseSchema = Joi.object({
	user: updateUserSchema,
	employees: Joi.array().items(createEmployeeSchema)

})

