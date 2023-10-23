/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

/**
 * @param {Array<string>} roles 
 */
export const RequireRoles = (roles) => {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 * @param {import("express").NextFunction} next
	 */
	return async (req, res, next) => {

		if (roles.includes(req.user.role.toLowerCase())) return res.status(403).json("Forbidden");
		next();
	};
};
RequireRoles(["admin", "chef", "technicien", "client"])
