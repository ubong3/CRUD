import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { cruddto } from './dto/crud.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}
//con
    @Post('post')
    async post(@Body() payload:cruddto){
        return await this.userService.createUser(payload);
    }

    @Get('/alluser')
    async getUser(@Param()users) {
        //to get by id use @param
        return await this.userService.getAllUsers(users)
        
        
    }

    @Get('/:lastname')
    async getUserLastName(@Param('lastnames')lastname){
        return await this.userService.getUserByLastName(lastname)

    }

    @Get('/id/:id')
    async getUerById(@Param('id')id) {
        return await this.userService.getUserById(id)
    }
    // @Get('/id/:firstname')
    // async getname(@Param('id')id) {
    //     return await this.userService.getUserByName(id)

    // }
    @Put('/update/:id')
    async upDateUser(@Param('id')id, @Body()update) {
     return await this.userService.upDateUser(id, update)   
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id')id) {
        return await this.userService.deleteUser(id)
    }





}
