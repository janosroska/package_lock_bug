import { SendEmailCommandOutput } from "@aws-sdk/client-sesv2";
import { SendEmailCommand, SendEmailCommandInput } from "@aws-sdk/client-sesv2/dist/types/commands/SendEmailCommand";
import { SESv2Client } from "@aws-sdk/client-sesv2/dist/types/SESv2Client";

export class EmailService {
  constructor (
    private readonly ses: SESv2Client
  ) {
    //

  }
  public async sendMail (): Promise<SendEmailCommandOutput>{
    //
    const params: SendEmailCommandInput = {
      Content: {
        Simple: {
          Subject: {
            Data : 'Hello email',
            Charset : "UTF-8"
          },
          Body: {
            Text: {
              Data : 'Hello email',
              Charset : "UTF-8"
            }
          }
        }
      },
      Destination: {
        ToAddresses : ["test@test.com"],
        CcAddresses : [],
        BccAddresses: []
      },
      FromEmailAddress: "from@from.com",
      FeedbackForwardingEmailAddress: "fff@fff.com",
      ReplyToAddresses: ["rta@rta.com"]
    };
    const result = await this.ses.send(new SendEmailCommand(params));

    return result;
  }
}
