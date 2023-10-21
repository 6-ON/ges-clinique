/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { verifyToken } from "../utils/jwt";
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
		// get authorization header
		const authHeader = req.headers.authorization;
		// check if authorization header is present
		if (!authHeader) return res.status(401).json("Unauthorized");
		// check if authorization header is valid
		const token = authHeader.split(" ")[1];
		if (!token) return res.status(401).json("Unauthorized");
		// verify token
		const decoded = await verifyToken(token);
		if (!decoded) return res.status(401).json("Unauthorized");
		if (roles.includes(decoded.role.toLowerCase())) return res.status(403).json("Forbidden");
		//include User.Chef or User.Technicien or User.Client basel on role
		req.user = decoded;
		next();
	};
};
