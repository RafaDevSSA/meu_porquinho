import { Injectable } from "@nestjs/common";
import sendgrid from '@sendgrid/mail';
import { stringify } from "querystring";
sendgrid.setApiKey(process.env.SENDGRID_API);


export class Mail {
    name: string;
    to: string;
    from: string;
    subject: string;
    html?:string;
    constructor(mail: Mail){
        Object.assign(mail);
    }
}

@Injectable()
export class EmailProvider {

    async sendWelcomeMail(email: Mail) {

        sendgrid.send(email);
    }

    private templates(){
        return '';
    }

}