/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';

export class BaseController {
  constructor(public dataService: any) {}

  @Get()
  async findAll(): Promise<any[]> { 
    return await this.dataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.dataService.findOne(id);
  }

  // @UseGuards(AuthGuard)
  @Post()
  insert(@Body() createDto: any): void {
    return this.dataService.insert(createDto);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any): Promise<any> {
    return this.dataService.update(id, updateDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    console.log(12);
    
    return this.dataService.remove(id);
  }
}
