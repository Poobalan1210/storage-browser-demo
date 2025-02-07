import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'test-transfer-webapps-s3-bucket',
  access: allow => ({
    'Images/*': [
      allow.guest.to(['get']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ]
  })
});