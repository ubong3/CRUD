import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { crudEntity } from 'src/entity/entity';
import { Repository, } from 'typeorm';
import { cruddto } from './dto/crud.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(crudEntity) private readonly userRepository:Repository<crudEntity>){}
//create uyusers in the data base
    async createUser(payload:cruddto){
      const {firstname, lastname, phone, email, password} = payload;
    const findEmail = await this.userRepository.findOneBy({email})
     if(findEmail){
        throw new HttpException('user-email already been used', 400)
 }
   const harshPassword = await bcrypt.hash(password, 12)
   
     const create = await this.userRepository.save({firstname, phone, lastname, email, password:harshPassword})
           delete create.password;
        return create;
    }


   async getAllUsers(user) {
    //wen u r using a fine method it necceasy to used [] and promise
    return await this.userRepository.find(user) 
   }

   async getUserByLastName(lastname: string) {
    try{
        return await this.userRepository.findOneByOrFail({lastname})
    }catch(err){
        throw new HttpException('sorry no lastname found',400)
    }
   }

//    async getUserByName(firstname) {

//     return this.userRepository.findBy(firstname);
//    }

async getUserById(id: string) {
    // error handling
        const userId = await this.userRepository.findOneBy({id})
    
        if(!userId){
            throw new BadRequestException('not found')

        }
        return userId
}

//

async upDateUser(id: number, lastname: cruddto) {
// before you can update ,u need to fine it by id folow de new update
    
        const update =await this.userRepository.update(id, lastname)
        if(update){
            return { message: 'sucessfully updated', statuscode: 201}
                
        
        }
    
       throw new HttpException('fail to update', 400) 
    }

    async deleteUser(id:string) {
                   const deleteUser = await this.userRepository.findOneBy({id})
           if(!deleteUser){
                return {
                    message: 'deleted not successful',
                    statusCode: 400
                }
           }
            const deleted = await this.userRepository.delete(id)
           if(deleted){
                return {
                    message: 'successfully deleted',
                    statusCode: 200 
                }
           }
        //    const deleteds = await this.userRepository.find()
        //    if(!deleteds){
        //     return {
        //         message: 'id not found',
        //         statuscode: '404'
        //     }
           }
        } 

    


