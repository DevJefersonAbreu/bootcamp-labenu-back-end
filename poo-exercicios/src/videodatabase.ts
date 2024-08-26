import { Knex } from 'knex';
import { Video } from '../models/Video';
import { BaseDatabase } from './BaseDatabase';

export class VideoDatabase extends BaseDatabase {
  private static TABLE_NAME = 'videos';

  public async getAllVideos(): Promise<Video[]> {
    try {
      const result = await this.connection<Video[]>(VideoDatabase.TABLE_NAME).select('*');
      return result;
    } catch (error) {
      throw new Error('Error fetching videos from the database');
    }
  }

  // Adicione outros métodos públicos aqui se necessário, como para buscar um vídeo por ID, criar um vídeo, etc.
}

import { Video } from '../models/Video';

// Dentro da classe VideoDatabase
public async createVideo(video: Video): Promise<void> {
  try {
    await this.connection(VideoDatabase.TABLE_NAME).insert(video);
  } catch (error) {
    throw new Error('Error creating video in the database');
  }
}
