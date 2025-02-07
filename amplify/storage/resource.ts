import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myS3Bucket',
  access: (allow) => ({
    'images/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'docs/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});