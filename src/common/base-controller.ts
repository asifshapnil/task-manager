/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Get, Post, Body, Put, Param, Delete, UseGuards, Req, ValidationPipe } from '@nestjs/common';
import { AccessTokenGuard } from 'src/core/guards/auth.guard';

export class BaseController {
  private createDto: any;
  private updateDto: any;

  constructor(public dataService: any, protected dtoClasses: { createDto: any, updateDto: any }) {
    this.createDto = dtoClasses.createDto;
    this.updateDto = dtoClasses.updateDto;
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(): Promise<any[]> {
    return await this.dataService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.dataService.findOne(id);
  }

  @UseGuards(AccessTokenGuard)
  @Post()
  async insert(@Body() createDtoData: any): Promise<any> {
    try {
      // Use the DTO class directly for validation
      const validatedCreateDto = await new ValidationPipe({ transform: true }).transform(createDtoData, {
        metatype: this.createDto,
        type: 'body',
      });

      return this.dataService.insert(validatedCreateDto);
    } catch (error) {
      // Handle validation error or other exceptions
      return error;
    }
  }

  @UseGuards(AccessTokenGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDtoData: any): Promise<any> {
    try {
      // Use the DTO class directly for validation
      const validatedUpdateDto = await new ValidationPipe({ transform: true }).transform(updateDtoData, {
        metatype: this.updateDto,
        type: 'body',
      });
      
      return this.dataService.update(id, validatedUpdateDto);
    } catch (error) {
      // Handle validation error or other exceptions
      return error;
    }
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.dataService.remove(id);
  }
}
