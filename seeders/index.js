import { readdirSync } from "fs";
import { join } from "path";
const args = process.argv.slice(2);

const scriptFiles = readdirSync(__dirname).filter((file) => file !== "index.js");
if (scriptFiles.length === 0) {
	console.error("No scripts found in directory");
	process.exit(1);
}

let scriptsToRun = args.length > 0 ? scriptFiles.filter((file) => args.includes(file)) : scriptFiles;

scriptsToRun.forEach((file) => {
	const scriptPath = join(__dirname, file);
	require(scriptPath);
});
