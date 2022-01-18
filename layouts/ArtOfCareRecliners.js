const axios = require('axios');

async function getArtOfCareRecliners()
{
    /*const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]*/

    var artOfCareRecliners = [
        '\n',
        { text: 'Art of Care® Recliners (cont.)', style: 'header' },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                { text: 'Finish Options For Arm Caps:', style: 'textotablaboldlarge' },
                { text: 'Powder Coat Options (Metropolitan Style Only) :', style: 'textotablaboldlarge' },
            ]
        },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                        { text: '31B- Natural Maple'},
                        { text: 'T9B - Wild Cherry'},
                        { text: 'MWB - Montana Walnut'},
                        { text: 'HMB- Honey Maple'},
                        { text: '82A - Medium Oak'},
                        { text: 'Note: No Base Finish on Art of Care® Recliners'},
                    ]		
                },
                {
                    style:'textolista',
                    ul: [
                        { text: 'QSL - Metallic Quicksilver'},
                        { text: 'GRA - Stonetone Graphite'},
                        { text: 'IMP - Metallic Impala'},
                        { text: 'ESP - Metallic Expresso'},
                        { text: 'SAF - Metallic Saffron'},
                    ]		
                }
            ]
            
        },
        "\n",
        { text: 'Options: ', style: 'subheader' },
        { image: "images/ArtOfCareRecliners.png", width: 400, height: 300, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return artOfCareRecliners;
}

module.exports = {
    getArtOfCareRecliners : getArtOfCareRecliners,
}