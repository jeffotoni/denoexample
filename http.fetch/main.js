
// const url = Deno.args[0];
const url = "https://raw.githubusercontent.com/jeffotoni/goexample/master/api-simple/api-cors/api1.go";
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
