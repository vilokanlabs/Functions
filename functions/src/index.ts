import { Request, Response , https} from 'firebase-functions';

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
exports.helloWorld = https.onRequest((req: Request, res: Response) => {
    if (req.body.message === undefined) {
        // This is an error case, as "message" is required
        res.status(400).send('No message defined!');
    } else {
        // Everything is ok
        console.log(req.body.message);
        res.status(200).end();
    }
});

exports.cool = () => {
    console.log("cool");
};