/// <reference path="../../node_modules/assemblyscript/std/assembly/index.d.ts"/>

import { Writer, Reader } from "as-proto";

export class StarRepoMessage {
  static encode(message: StarRepoMessage, writer: Writer): void {
    const author = message.author;
    if (author !== null) {
      writer.uint32(10);
      writer.string(author);
    }

    const repo = message.repo;
    if (repo !== null) {
      writer.uint32(18);
      writer.string(repo);
    }
  }

  static decode(reader: Reader, length: i32): StarRepoMessage {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StarRepoMessage();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
          break;

        case 2:
          message.repo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  author: string | null;
  repo: string | null;

  constructor(author: string | null = null, repo: string | null = null) {
    this.author = author;
    this.repo = repo;
  }
}
