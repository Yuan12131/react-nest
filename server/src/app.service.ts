// service
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getHello(): Promise<string> {
    try {
      // TypeOrmModule을 사용하여 MariaDB 연결 확인
      await this.connection.query('SELECT 1');
      return '완료';
    } catch (error) {
      console.error('MariaDB 연결 실패:', error.message);
      return 'MariaDB 연결 실패';
    }
  }
}
