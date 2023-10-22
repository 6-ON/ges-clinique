import { verifyToken } from "../utils/jwt";
export const authenticate = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) return res.status(401).json("Unauthorized");
	const token = authHeader.split(" ")[1];
	if (!token) return res.status(401).json("Unauthorized");
	const decoded = await verifyToken(token);
	if (!decoded) return res.status(401).json("Unauthorized");
	req.user = decoded;
	next();
};
