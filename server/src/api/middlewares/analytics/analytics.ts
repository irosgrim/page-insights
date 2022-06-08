import { Request, Response } from 'express';
import { HttpResponse, Services } from '../../../types/api';
import { isAllowed } from '../../whitelist';

const analyticsEndpoint = (services?: Services) => {
    return (req: Request, res: Response) => {
        const { type, payload } = req.body;
        const {"client-id": clientId} : any = req.headers;
        if (!isAllowed(clientId)) {
            return res.status(401).send(HttpResponse.UNAUTHORIZED);
        }
        console.log({ type, payload });
        res.status(200).send();
    }
}

export default analyticsEndpoint;