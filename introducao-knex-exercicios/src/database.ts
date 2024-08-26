import knex, { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export abstract class BaseDatabase {
  protected static connection: Knex = knex({
    client: 'sqlite3',
    connection: {
      filename: process.env.DB_FILE_PATH || './src/database/labecommerce.db'
    },
    useNullAsDefault: true
  });

  // Método para fechar a conexão (caso seja necessário)
  public static async destroyConnection(): Promise<void> {
    await BaseDatabase.connection.destroy();
  }
}
