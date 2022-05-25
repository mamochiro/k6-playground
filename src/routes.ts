import { Router } from 'express';

const routes = Router();

let totalReq : number = 0
routes.get('/', (req, res) => {
    // const now = Date.now();
    totalReq++
    console.log(`Request NO: ${totalReq}`);
    if (totalReq === 100) throw new Error(`Error Request at : ${totalReq}`)
  return res.json({ message: 'Hello World' });
});

export default routes;