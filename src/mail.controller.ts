import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() body: { name: string; [key: string]: any }) {
    if (!body.name) {
      throw new BadRequestException('Name is required');
    }

    const { name, ...otherDetails } = body;
    await this.mailService.sendEmail(name, otherDetails);

    return { success: true, message: 'Email sent successfully' };
  }
}
