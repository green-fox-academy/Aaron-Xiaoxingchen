const fetch = require('node-fetch');
(async () => {
    const GET_URL = 'https://api.giphy.com/v1/gifs/search?api_key=QK6ckVffZ2vdIIx1jARV1vGwfEdNNXJZ&q=gif&limit=25&offset=0&rating=G&lang=en';
    const dataset = await fetch(GET_URL).then(res => res.json());
    console.log(dataset.data);

    
})()