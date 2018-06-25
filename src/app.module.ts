import { FrameworkTypeormModule } from './framework/typeorm/typeorm.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    FrameworkTypeormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
