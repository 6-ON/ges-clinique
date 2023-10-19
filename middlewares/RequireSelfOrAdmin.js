/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

export const RequireSelfOrAdmin = async (req, res, next) => {
	// chek if user is self
	const { id } = req.params;
	if (req.user.id !== id && ["admin", "sadmin"].includes(req.user.role?.toLowerCase() || "")) return res.status(403).json("Forbidden");
	next();
};
