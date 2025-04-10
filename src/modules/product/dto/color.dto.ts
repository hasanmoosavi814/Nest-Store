import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from "class-validator";
import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class AddColorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color_code: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  count?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  discount?: number;

  @ApiPropertyOptional({ type: "boolean" })
  @IsOptional()
  @IsBoolean()
  active_discount?: boolean;
}

export class UpdateColorDto extends PartialType(AddColorDto) { }
