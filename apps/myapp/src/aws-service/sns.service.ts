import { PublishCommand, PublishCommandOutput, SNSClient } from "@aws-sdk/client-sns";

export class SnsService{

  constructor(private readonly sns: SNSClient) {
		//
	}

  public async publish(): Promise<PublishCommandOutput>{

    const params = new PublishCommand({
      TargetArn: "endpointArn",
      MessageStructure: "json",
      Message: "pushtext",
    });

    const result = await this.sns.send(params);

    return result;
  }
}
