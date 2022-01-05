const axios = require('axios');

async function getAccumax()
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
        {text: 'SIZE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "AD (CAREASSIST, HR900, HR1000, AVG1600, CENTURIS)", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "ACCUMAX", style: 'textotabla', alignment: 'center'},
        {text: "AccuMax Quantum VPC - Dartex Top Cover - Handles", style: 'textotabla'},
        {text: '(89 cm x 203 cm x 18 cm) (35" x 80" x 7")', style: 'textotabla', alignment: 'center'}, 
        {text: "PAH005010180-1", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,670", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "ACCUMAX", style: 'textotabla', alignment: 'center'},
        {text: "AccuMax Quantum VPC - Dartex Top Cover - Handles", style: 'textotabla'},
        {text: '(89 cm x 213 cm x 18 cm) (35" x 84" x 7")', style: 'textotabla', alignment: 'center'}, 
        {text: "PAH005010184-1", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,670", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: 'IS (VERSACARE)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "ACCUMAX", style: 'textotabla', alignment: 'center'},
        {text: 'AccuMax Quantum VPC - Dartex Top Cover - Handles', style: 'textotabla'},
        {text: '(89 cm x 218 cm x 19 cm) (35" x 86" x 7.5")', style: 'textotabla', alignment: 'center'}, 
        {text: "PAF0052101XX-1", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,670", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'TC (TOTALCARE)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "ACCUMAX", style: 'textotabla', alignment: 'center'},
        {text: "AccuMax Quantum VPC - Dartex Top Cover - Handles -", style: 'textotabla'},
        {text: '(89 cm x 213 cm x 19 cm) (35" x 84" x 7.5")', style: 'textotabla', alignment: 'center'}, 
        {text: "PAU001010784-1", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,681", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accumax = [
        { text: 'ACCUMAX', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Maximum Patient Weight 227 kg'},
                    { text: 'For additional technical specifications see separate tech specs'},
                ]
        },
        "\n",
        {
            table: {
                widths: [50, "*", 80, 60, 40],
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
        "\n",
        "\n",
        { image: "images/Accumax.png", width: 230, height: 100, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return accumax;
}

module.exports = {
    getAccumax : getAccumax,
}