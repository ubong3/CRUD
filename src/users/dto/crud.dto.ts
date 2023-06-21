import { IsNotEmpty, IsNumberString, IsString} from "class-validator";

//validation, 5may
export class cruddto{
    @IsNotEmpty({message: 'please insert firstname'})
    @IsString({message: 'please insert firstname'})
    firstname: string;

    @IsNotEmpty({message: 'please insert lastname'})
    @IsString({message: 'please insert lastname'})
    lastname: string;

    @IsNotEmpty({message: 'please insert email'})
    @IsString({message: 'please insert email'})
    email: string;

    @IsNotEmpty({message: 'please insert number'})
    @IsNumberString()
    phone: number;

    @IsNotEmpty({message: 'please insert password'})
    @IsString({message: 'please insert password'})
    password: string
}

