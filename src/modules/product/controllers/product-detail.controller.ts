import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { AddDetailDto, UpdateDetailDto } from '../dto/detail.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums/swagger-consumes';
import { ProductService } from '../services/product.service';

@Controller('product-Detail')
@ApiTags("Product-Detail")
export class ProductDetailController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  create(@Body() detailDto: AddDetailDto) { }

  @Get()
  findAll(@Body() detailDto: AddDetailDto) { }

  @Put(':id')
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() detailDto: UpdateDetailDto
  ) { }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) { }
}
