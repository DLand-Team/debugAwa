import { regAll, use, questerMiddleware } from "awaitabler";
regAll();
use(questerMiddleware);

async function main() {
    let a = "https://jsonplaceholder.typicode.com/todos/1";
    a.then
	// \`await Promise.all([...])\`
	const resps = <Response[]>(
		(<unknown>(
			await [
				"https://jsonplaceholder.typicode.com/todos/1",
				"https://jsonplaceholder.typicode.com/todos/1",
			]
		))
	);
	console.log("resps", resps);
	// \`await Promise.allSettled([...])\`
	const results = <PromiseSettledResult<Response>[]>(
		(<unknown>(
			await (Promise.reject(1),
			"https://jsonplaceholder.typicode.com/todos/1")
		))
	);
	console.log("results", results);
	// \`await Promise.any([...])\`
	const result = <Response>(
		(<unknown>(
			await (Promise.reject(1) ||
				"https://jsonplaceholder.typicode.com/todos/1")
		))
	);
	console.log("result", result);
	// no race
}
main();
