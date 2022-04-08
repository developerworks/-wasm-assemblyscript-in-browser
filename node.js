import {Sha256, Sha512} from "as-hmac-sha2/assembly/index.ts";

let start;
let end;
start = Date.now();
for (let i = 0; i++; i < 10000) {
    sha256("adkfjkaj;kfjdkjfka;kdfja");
}
end = Date.now();

console.log(start);
console.log(end);

start = Date.now();
for (let i = 0; i++; i < 10000) {
    sha512("adkfjkaj;kfjdkjfka;kdfja");
}
end = Date.now();


function sha256(s) {
    const hasher = new Sha256();
    hasher.update(decode(s));
    const array = hasher.final();
    return encode(array);
}

function sha512(s) {
    const hasher = new Sha512();
    hasher.update(decode(s));
    const array = hasher.final();
    return encode(array);
}