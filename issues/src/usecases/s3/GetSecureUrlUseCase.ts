import aws from "aws-sdk"
import { randomBytes } from "crypto"

const region = "sa-east-1"
const bucketName = "natgeo-issues-1"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

export class GetSecureUrlUseCase {
  s3: aws.S3

  constructor() {
    this.s3 = new aws.S3({
      region,
      accessKeyId,
      secretAccessKey,
      signatureVersion: 'v4',
    })
  }
  
  async execute(){
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')
    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    })
    const uploadUrl = await this.s3.getSignedUrlPromise('putObject', params)
    return uploadUrl
  }
}