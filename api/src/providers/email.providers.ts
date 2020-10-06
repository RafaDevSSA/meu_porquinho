
import { Injectable } from "@nestjs/common";
import * as sendgrid from '@sendgrid/mail';
import * as dotenv from 'dotenv';
dotenv.config();
sendgrid.setApiKey(process.env.SENDGRID_API);


export class Mail {
    name: string;
    to: string;
    from: string;
    subject: string;
    html: string;
}

@Injectable()
export class EmailProvider {

    async sendWelcomeMail(email: Mail) {
        return sendgrid.send(email);
    }

    private templates() {
        return '';
    }

}