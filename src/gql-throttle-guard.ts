import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';
import type { ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);

    // test
    const { req, res } = gqlCtx.getContext();
    return { req, res };
    //test

    // const ctx = gqlCtx.getContext()

    // if (ctx.req.headers === null) {
    // 	console.log('1')
    // }
    // if (ctx.req.headers === 'undefined') {
    // 	console.log('2')
    // }
    // if (ctx.req.headers) {
    // 	ctx.req.headers['header'] = null
    // 	console.log(ctx.req.headers)
    // 	console.log('3')
    // }

    // if (ctx.req) return { req: ctx.req, res: ctx.res }
  }
}
