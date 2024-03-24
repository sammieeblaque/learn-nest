import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { DatabaseModule } from './modules/database/database.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [UsersModule, PaymentsModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
