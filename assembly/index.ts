// The entry file of your WebAssembly module.
/// <reference path="../node_modules/assemblyscript/std/assembly/index.d.ts"/>
/// <reference path="../node_modules/@assemblyscript/node/assembly/node.d.ts"/>

// import sha256 from 'crypto-js/sha256';

import {Sha256, Sha512} from "as-hmac-sha2/assembly";
import {decode, encode} from "as-base64/assembly/index";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

export function sha256(s: string): string {
    const hasher = new Sha256();
    hasher.update(decode(s));
    const array = hasher.final();
    return encode(array);
}

export function sha512(s: string): string {
    const hasher = new Sha512();
    hasher.update(decode(s));
    const array = hasher.final();
    return encode(array);
}