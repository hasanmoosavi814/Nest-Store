import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { AddSizeDto, UpdateSizeDto } from '../dto/size.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums/swagger-consumes';
import { ProductService } from '../services/product.service';

@Controller('product-Size')
@ApiTags("Product-Size")
export class ProductSizeController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  create(@Body() sizeDto: AddSizeDto) { }

  @Get()
  findAll(@Body() sizeDto: AddSizeDto) { }

  @Put(':id')
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() sizeDto: UpdateSizeDto
  ) { }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) { }
}
