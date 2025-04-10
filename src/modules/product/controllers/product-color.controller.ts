import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { AddColorDto, UpdateColorDto } from '../dto/color.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums/swagger-consumes';
import { ProductService } from '../services/product.service';

@Controller('product-Color')
@ApiTags("Product-Color")
export class ProductColorController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  create(@Body() colorDto: AddColorDto) { }

  @Get()
  findAll(@Body() colorDto: AddColorDto) { }

  @Put(':id')
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() colorDto: UpdateColorDto
  ) { }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) { }
}
