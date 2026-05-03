import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from './domain-module/domain.module';
import { PresenterModule } from './presenter-module/presenter.module';

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
    PresenterModule,
  ],
})
export class AppModule {}
