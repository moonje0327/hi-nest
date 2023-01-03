import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 지정되지 않은 프로퍼티 체크해서 400 리턴
      transform: true, //유저한테 들어온 값을 필요한 타입에 맞게 형 변환 (id의 경우 url로 들어와서 string 으로 들어오는데 이걸 int형으로 바꿔줌)
    }),
  );
  await app.listen(3000);
}
bootstrap();
