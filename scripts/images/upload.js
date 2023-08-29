/* eslint-disable no-console */
/* eslint-disable import/extensions */
import 'dotenv/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { generateImages } from '../utils.js';

(async () => {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'us-east-1',
  });
  try {
    console.log(client);
    const images = await generateImages();
    console.group('Uploading images to AWS S3. This may take a while');
    for (let i = 0; i < images.length; i += 1) {
      const image = images[i];
      const command = new PutObjectCommand({
        Bucket: 'dsktch-la-silla-vacia',
        Key: `elecciones-2023/tarjetas/${image.id}.png`,
        Body: image.body,
      });
      // eslint-disable-next-line no-await-in-loop
      const response = await client.send(command);
      if (response.$metadata.httpStatusCode === 200) {
        console.log(`Uploaded ${i + 1} of ${images.length}`);
      }
    }
    console.groupEnd();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
