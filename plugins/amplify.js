import Vue from 'vue'
import '@aws-amplify/ui-vue'
import Amplify, { Auth } from 'aws-amplify'
Amplify.configure({
  Auth: {
    region: 'SA-EAST-1',
    userPoolId: process.env.userPoolId | 'sa-east-1_EPyfFyVbx',
    userPoolWebClientId: process.env.userPoolWebClientId | '5bo973n5t6qi7d3drbo21213po',
    mandatorySignIn: false,
    oauth: {
      scope: ['email'],
      redirectSignIn: `https://${process.env.rootDomain}/`,
      redirectSignOut: `https://${process.env.rootDomain}/`,
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: 'UserAPI',
        endpoint: `https://${process.env.userApiDomain}`,
        custom_header: async () => {
          return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
})
Vue.prototype.$Amplify = Amplify