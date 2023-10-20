import Joi from "joi";
import { creatUserSchema } from "./User";


export const creatClientSchema = Joi.object({
	user: creatUserSchema.required()
});

