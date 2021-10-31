#! /usr/bin/env node

const fs = require("fs");

fs.readdir(__dirname, () => {
  console.log("file 1");
  Promise.resolve().then(() => console.log("pro file 1"));
});

fs.readdir(__dirname, () => {
  console.log("file 2");
  Promise.resolve().then(() => console.log("pro file 2"));
});

setTimeout(() => {
  console.log("time 1");
  Promise.resolve().then(() => console.log("pro time 1"));
});

setTimeout(() => {
  console.log("time 2");
  Promise.resolve().then(() => console.log("pro time 2"));
});

setImmediate(() => {
  console.log("imm 1");
  Promise.resolve().then(() => console.log("pro imm 1"));
});

setImmediate(() => {
  console.log("imm 2");
  Promise.resolve().then(() => console.log("pro imm 2"));
});
