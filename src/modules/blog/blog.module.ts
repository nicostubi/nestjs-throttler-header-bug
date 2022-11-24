import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
//import { Blog, BlogSchema } from './blog.schema';
import { Blog, BlogSchema } from './entities/blog.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { GqlThrottlerGuard } from 'src/gql-throttle-guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    ThrottlerModule.forRoot({
      ttl: 5,
      limit: 2,
    }),
  ],

  providers: [
    BlogResolver,
    BlogService,
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard,
    },
  ],
})
export class BlogModule {}
