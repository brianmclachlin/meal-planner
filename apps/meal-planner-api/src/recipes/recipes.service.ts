import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<void> {
    await this.recipesRepository.insert(createRecipeDto);
  }

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }

  findOne(id: number): Promise<Recipe> {
    return this.recipesRepository.findOne(id);
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<void> {
    await this.recipesRepository.update(id, updateRecipeDto);
  }

  async remove(id: number): Promise<void> {
    await this.recipesRepository.delete(id);
  }
}
