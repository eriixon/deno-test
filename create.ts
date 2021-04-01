const encoder = new TextEncoder();
const txt = encoder.encode("Hello World\nGood day!");
await Deno.writeFile("greet.txt", txt);