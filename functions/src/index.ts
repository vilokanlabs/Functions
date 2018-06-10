import Sanskrit from './Sanskrit'
import { Request, Response , https} from 'firebase-functions';
import { onRequest } from 'firebase-functions/lib/providers/https';

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
    if (req.query.q === undefined) {
        // This is an error case
        res.status(400).send('Query not defined!');
    } else {
        // Everything is ok
        console.log(req.query.q);
        res.status(200).send(req.query.q);
        res.status(200).end();
    }
});

exports.sanskrit = https.onRequest((req: Request, res: Response)=>{
    new Sanskrit(req,res);
})