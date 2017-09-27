import { name, version } from "../package.json";
import Router from "koa-router";
import elasticService from "./elasticService";

const router = new Router();

/**
 * GET /
 */
router.get("/", async ctx => {
    ctx.body = {
        app: name,
        version: version
    };
});

/**
 * Get suggestions
 */

router.get("/suggest/:term", async ctx => {
    ctx.body = await elasticService.getSuggestions(ctx.params.term);
});

/**
 * Create person
 */

router.post("/", async ctx => {
    ctx.body = await elasticService.addPerson(ctx.request.body.name);
});

export default router;
