"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sanskrit_1 = __importDefault(require("./Sanskrit"));
var firebase_functions_1 = require("firebase-functions");
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
exports.helloWorld = firebase_functions_1.https.onRequest(function (req, res) {
    if (req.body.message === undefined) {
        // This is an error case, as "message" is required
        res.status(400).send('No message defined!');
    }
    else {
        // Everything is ok
        console.log(req.body.message);
        res.status(200).end();
    }
});
exports.sanskrit = firebase_functions_1.https.onRequest(function (req, res) {
    new Sanskrit_1.default(req, res);
});
//# sourceMappingURL=index.js.map