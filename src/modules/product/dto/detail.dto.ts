import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class AddDetailDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  key?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class UpdateDetailDto extends PartialType(AddDetailDto) { }
