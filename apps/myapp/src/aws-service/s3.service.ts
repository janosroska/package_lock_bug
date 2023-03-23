import type {
	S3 as S3Client,
	ListObjectsCommandOutput
} from "@aws-sdk/client-s3";

export class S3Service{

  constructor(private readonly s3Client: S3Client) {
	}

  async listObjects(): Promise<ListObjectsCommandOutput> {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const result = await this.s3Client.listObjects({ Bucket: "bucketname" });

		return result;
	}



}
