import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';

ConfigModule.forRoot({
  load: [databaseConfig],
});

export default databaseConfig();
