import axios from "axios";
import {apiOptions} from "@/helpers/types";

const PORT = '5000';
const PREFIX = 'http://'
const DOMEN = '127.0.0.1';

export default async function sendReq(path: string, method = 'get', sendData: any = ''){
    const url = PREFIX + DOMEN + ':' + PORT + '/api/' + path;

    const options: any = {
        url: url,
        method: method,
        headers: {
            "Content-type":"application/json",
        }
    }


    if(sendData) {
        options.data = JSON.stringify(sendData);
    }

    const res = await axios(options);

    if(res.status !== 200){
        throw new Error('request is error');
    } else {
        return res.data;
    }
}
