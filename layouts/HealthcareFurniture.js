const axios = require('axios');

async function getHealthcareFurniture()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'Options', style: 'textotablabold', border: [false, false, false, false]},
        {text: 'SLP-732', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'SLP-735', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'SLP-755', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    var healthcareFurniture = [
        '\n',
        { text: 'Healthcare Furniture', style: 'header' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: 'Classic Seating Products\n', style: 'subheader' },
        { text: 'Sleeper Chair\n', style: 'textotablaboldlarge' },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [140, 80, 80, 80],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center', colSpan: 3},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'SLEEPERSEATING', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 3},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P375', style: 'textotabla', alignment: 'center'},
                                {text: 'P375', style: 'textotabla', alignment: 'center'},
                                {text: 'P375', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'SLP-732', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'SLP-735', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'SLP-755', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {text: '32" (width) Sleeper Chair', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: '35" (width) Sleeper Chair', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: '55" (width) Sleeper Loveseat', style: 'textotablacolornormal'},
                                {text: '-', style: 'textotablacolor', alignment: 'center'},
                                {text: '-', style: 'textotablacolor', alignment: 'center'}, 
                                {text: '●', style: 'textotablacolor', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,617', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,617', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,742', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,658', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,867', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,816', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,992', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,975', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,117', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,133', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,242', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,291', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,992', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,241', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},  
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function () {
                            return  0.7;
                        },
                        vLineWidth: function () {
                            return 0.7;
                        },
                        hLineColor: function () {
                            return 'gray';
                        },
                        vLineColor: function () {
                            return 'gray';
                        },
                    }		
                },
                {
                    width: "*",
                    text: ''
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [140, 80, 80, 80],
                body: options
            },
            layout: {
                hLineWidth: function () {
					return  0.7;
                },
                vLineWidth: function () {
					return 0.7;
				},
                hLineColor: function () {
					return 'gray';
				},
				vLineColor: function () {
					return 'gray';
				},
            }
        },
        { text: '\n', style: 'parrafo' },
        { text: 'Finish Options:', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: '31M - Natural Maple', style: 'textotabla'},
                    {text: 'T9M - Wild Cherry', style: 'textotabla'},
                    {text: 'CCM - Colonial Cherry', style: 'textotabla'},
                ],
                [
                    {text: 'MWM - Montana Walnut', style: 'textotabla'},
                    {text: 'HMM - Honey Maple', style: 'textotabla'},
                    {text: '82O - Medium Oak', style: 'textotabla'},
                ],
            ]
        },
        '\n',
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        { image: "images/ClassicSeating.png", width: 400, height: 140, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return healthcareFurniture;
}

module.exports = {
    getHealthcareFurniture : getHealthcareFurniture,
}