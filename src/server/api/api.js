import 'isomorphic-fetch';

     /* *********************************************
     ******         GET REQUESTS             ********
     ********************************************* */

export const getSomething = () => fetch('/api...').then(res => res.json());


    /* *********************************************
    ******         POST REQUESTS             ********
    ********************************************* */

export const postSomething = (postedPacket) => fetch('/api...', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postedPacket)
}).then((res) => {
    if (res.status === 500) {
        throw new Error('Shit it broke');
    } else if (res.status === 400) {
        throw new Error('Informative message');
    } else {
        return res.json();
    }
});

    /* *********************************************
    ******      DELETE REQUESTS             ********
    ********************************************* */


    /* *********************************************
    ******         EDIT REQUESTS             ********
    ********************************************* */
