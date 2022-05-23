// Copyright (c) 2022, Rocky Le. All rights reserved. BSD 3-Clause License

import { Application, Router } from './deps.ts';

const app = new Application();
const router = new Router();

router
    .get('/', (context) => {
        context.response.body = 'Hello Awesome World!!';
    }
    )
    .get('/test', (ctx) => {
        ctx.response.body = 'Ahihi do ngoc';
    });

// app.use((ctx) => {
//     ctx.response.body = 'Hello Awesome World!';
// });

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8080;

await app.listen({ port: PORT });