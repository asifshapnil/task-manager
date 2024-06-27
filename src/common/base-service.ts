/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  constructor(private _repository, private relations) {}

  findAll(): Promise<any[]> {
    return this._repository.find({ relations: this.relations, order: {createdAt: 'DESC'} });
  }

  findOne(id: string): Promise<any> {
    return this._repository.findOne(id, { relations: this.relations });
  }

  async remove(id: string): Promise<void> {
    await this._repository.delete(id);
  }

  async insert(entity): Promise<any> {
    return await this._repository.save(entity).then(entity => entity);
  }

  async update(id: string, entity): Promise<any> {
    return await this._repository.update(id, entity);
  }
}
