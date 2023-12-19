// main
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // MariaDB 연결이 성공하면 '완료' 출력
  console.log('완료');
}
bootstrap();
