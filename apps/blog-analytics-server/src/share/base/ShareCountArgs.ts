/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShareWhereInput } from "./ShareWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ShareCountArgs {
  @ApiProperty({
    required: false,
    type: () => ShareWhereInput,
  })
  @Field(() => ShareWhereInput, { nullable: true })
  @Type(() => ShareWhereInput)
  where?: ShareWhereInput;
}

export { ShareCountArgs as ShareCountArgs };
