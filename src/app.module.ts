import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain-module/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url:
          configService.get<string>('DATABASE_URL') ||
          'postgres://postgres:postgres@localhost:5432/coffee_shop_db',
        synchronize: false,
        logging: false,
        autoLoadEntities: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      }),
    }),
    DomainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
