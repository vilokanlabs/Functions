"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sanskrit_1 = require("./Sanskrit");
const firebase_functions_1 = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloWorld = firebase_functions_1.https.onRequest((req, res) => {
    if (req.query.q === undefined) {
        // This is an error case
        res.status(400).send('No message defined!');
    }
    else {
        // Everything is ok
        console.log(req.query.q);
        res.status(400).send(req.query.q);
        res.status(200).end();
    }
});
exports.sanskrit = firebase_functions_1.https.onRequest((req, res) => {
    new Sanskrit_1.default(req, res);
});
//# sourceMappingURL=index.js.map