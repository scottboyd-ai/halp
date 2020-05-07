import axios, {AxiosRequestConfig} from "axios";

export function handleMessageAction(payload) {

    let viewJson = require('./modal_view.json');
    viewJson['callback_id'] = payload.callback_id;
    const viewData = {
        view: viewJson,
        trigger_id: payload.trigger_id
    };
    const token = require('./access_token.json').token;

    const postConfig: AxiosRequestConfig  = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json; charset=utf-8',
        }
    };
    axios.post('https://slack.com/api/views.open', viewData, postConfig);
}

export function handleViewSubmission(payload) {
    //Check idempotency on payload.view.hash

    // console.log(payload.view.state.values);
    console.log(payload);
}