import { PublishCommand, PublishCommandOutput, SNSClient } from "@aws-sdk/client-sns";

export class SmsService{

  constructor(private readonly sns: SNSClient) {}

  public async sendSms(): Promise<PublishCommandOutput> {

    const params = new PublishCommand({
      Message: "test",
      PhoneNumber: "1234567",
    });

    const result = await this.sns.send(params);

    return result;
  }

}
