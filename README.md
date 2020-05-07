# Programming Challenge for Halp

Slack integrated app to allow people to register fallen fledgling birds. A 
user must only select the Fledgr option in their slack channel and a modal window will
appear allowing the user to send the server the fledgling's location and status.

Note: This application is not currently running. Additional services must be configured
on Slack. This service must also run on a publicly available server. For local testing,
ngrok was used.

#### To run:

- You will need a Slack channel and an access token. The access token should be placed
at the root of the folder with the name `access_token.json` and the format 
`{"token": "YOUR_ACCESS_TOKEN"}`
- `npm install`
- `tsc` or compile Typescript in some other way
- `node index.js`