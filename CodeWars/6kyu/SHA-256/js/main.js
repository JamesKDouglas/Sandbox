
// https://remarkablemark.medium.com/how-to-generate-a-sha-256-hash-with-javascript-d3b2696382fd

//Input of a string. There can be special characters etc. length is unknown.

//Turn the string into a SHA256 hash
//ex, Hello World! => 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069

//output should be the SHA-256 hash, as a string. 

//timeouts? nope. Can I import a library and check the docs? sure.
// const { createHash } = require('crypto');

// function sha256(string) {
//   return createHash('sha256').update(string).digest('hex');
// }

// console.log(sha256('Hello World!'),'7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069');

// //Note that this needs to run in a Node environment. 


//The console log is quite mangled, but this works in a browser:

function sha256(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    });
  }

console.log(sha256('Hello World!'),'7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069');
