/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  constructor(private _repository, private relations) {}

  findAll(): Promise<any[]> {
    return this._repository.find({ relations: this.relations, order: {createdAt: 'DESC'} });
  }

  findOne(query: any): Promise<any> {
    return this._repository.findOne({where: query}, { relations: this.relations });
  }

  findById(id: number): Promise<any> {
    return this._repository.findOne(id, { relations: this.relations });
  }

  find(query: any): Promise<any> {
    return this._repository.find({
      where: query
    }, { relations: this.relations });
  }

  async remove(id: number): Promise<void> {
    await this._repository.delete(id);
  }

  async insert(entity): Promise<any> {
    try {
      return await this._repository.save(entity).then(entity => entity);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, entity): Promise<any> {
    return await this._repository.update(id, entity);
  }
}
