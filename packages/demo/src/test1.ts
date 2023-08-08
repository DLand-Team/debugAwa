// try it, press \`(Ctrl|Cmd) + E\` to run
import {regAll,questerMiddleware,use} from "awaitabler";

regAll();
use(questerMiddleware);


async function main() {
    let a = new Promise(()=>{
        debugger
    })
    // await a;
	const resp = <Response>(
		(<unknown>await "https://jsonplaceholder.typicode.com/todos/1")
	);
	"https://jsonplaceholder.typicode.com/todos/1".then(()=>{
		console.log(1234)
	})
	// console.log(resp);
	// console.log(resp.status);
	// console.log(await resp.json());
}

main();



