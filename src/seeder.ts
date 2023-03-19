import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaEntity } from './api/media/entities/media.entity';
import { MediaSeeder } from './api/media/seeders/media.seeder';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ormConfig } from './database/config/orm.config';
import { DatabaseModule } from './database/database.module';

seeder({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: () => ({
    //     ...ormConfig,
    //   }),
    // }),
    DatabaseModule,
    TypeOrmModule.forFeature([MediaEntity]),
  ],
}).run([MediaSeeder]);
