export default function removeNonNumeric(input) {
	return `${input}`?.replace(/[^0-9]/g, "");
}
