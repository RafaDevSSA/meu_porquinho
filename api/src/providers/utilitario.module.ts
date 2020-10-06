import { Module } from '@nestjs/common';
import { EmailProvider } from './email.providers';

@Module({
    providers: [EmailProvider],
    exports: [EmailProvider],
})
export class UtilitarioModule { }