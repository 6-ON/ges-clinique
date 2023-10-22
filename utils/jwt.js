import { verify, sign } from "jsonwebtoken";
import "dotenv/config";
import { promisify } from "util";
export async function signToken({ id, email, role ,userableId }) {
	const signAsync = promisify(sign);
	return await signAsync({ id, email, role, userableId }, process.env.SECRET_TOKEN, { expiresIn: "1h" });
}

export async function verifyToken(token) {
	const verifyAsync = promisify(verify);
	return await verifyAsync(token, process.env.SECRET_TOKEN);
}

