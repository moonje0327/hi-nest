import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.MoviesService.create(movieData);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.MoviesService.update(movieId, updateData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }
}
