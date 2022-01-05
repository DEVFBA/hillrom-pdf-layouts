const axios = require('axios');

async function getTransportChairs()
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
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SM647B', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Castors", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "R4", style: 'textotabla', alignment: 'center'},
        {text: '4 x 125 mm double-band with central brake', style: 'textotabla'},
        {text: "$298", style: 'textotabla', alignment: 'center'},  
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories =[]
    var pSItems = 0;
    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] = [
        {text: "FURNACC", style: 'textotabla', alignment: 'center'},
        {text: 'AC901A', style: 'textotabla', alignment: 'center'},
        {text: "Head support", style: 'textotabla'},  
        {text: "$266", style: 'textotabla', alignment: 'center'},  
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "FURNACC", style: 'textotabla', alignment: 'center'},
        {text: 'AC901A', style: 'textotabla', alignment: 'center'},
        {text: "Head support", style: 'textotabla'},  
        {text: "$266", style: 'textotabla', alignment: 'center'},  
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "FURNACC", style: 'textotabla', alignment: 'center'},
        {text: 'AC901A', style: 'textotabla', alignment: 'center'},
        {text: "Head support", style: 'textotabla'},  
        {text: "$266", style: 'textotabla', alignment: 'center'},  
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "FURNACC", style: 'textotabla', alignment: 'center'},
        {text: 'AC901A', style: 'textotabla', alignment: 'center'},
        {text: "Head support", style: 'textotabla'},  
        {text: "$266", style: 'textotabla', alignment: 'center'},  
    ]

    pSItems++
    /*TERMINA CICLO*/

    var transportChairs = [
        '\n',
        { text: 'Transport Chairs', style: 'header', tocItem: 'compella'},
        '\n',
        { text: 'Transport Chair Anatome SM647B', style: 'subheader'},
        { text: 'Country of origin: France', style: 'parrafo' },
        { text: '\n', style: 'textotabla' },
        {
            style:'textolista',
            ul: [
                    { text: 'Variable seat height'},
                    { text: 'For more technical specifications see separate tech specs'},
                    { text: 'For fabrics see separate fabrics sheet'},
                ]		
        },
        {
            table: {
                widths: ["*", 80, 80,50],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'METALARMCHAIR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'SM647B', style: 'textotablaboldblack', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        { image: "images/TransportChairs.png", width: 50, height: 80, alignment: 'center'},
                    ],
                    [
                        {text: '4 x 125 mm single-band with central brake (R2B)', style: 'textotabla', },
                        {text: "●", style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$2,686", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
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
        { text: '\n', style: 'textotabla' },
        {
            table: {
                widths: [50, 231, 80, 50],
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
        '\n',
        '\n',
        { text: 'Accesories', style: 'subheader'},
        { text: '\n', style: 'textotabla' },
        {
            table: {
                widths: [50, 80, 142, 80, 50],
                body: accesories
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
        { text: '\n', style: 'textotabla' },
        { text: '● = standard', style: 'textotabla' },
        { text: '\n', style: 'textotabla' },
        { image: "images/TransportChairs2.png", width: 240, height: 60, alignment: 'center'},
        { text: 'Head support Overchair table Comfort seating pad Telescopic IV pole (4 hooks)', style: 'parrafo', alignment: 'center' },
        {text: '', pageBreak: 'after'  },
    ]

    return transportChairs;
}

module.exports = {
    getTransportChairs : getTransportChairs,
}