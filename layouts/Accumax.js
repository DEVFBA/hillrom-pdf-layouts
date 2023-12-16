const dbAccumax = require('../controllers/accumax')

async function getAccumax()
{
    const res = await dbAccumax.getAccumax()
    const careassistData = res[0]
    const versacareData = res[1]
    const totalcareData = res[2]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'SIZE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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

    if(careassistData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<careassistData.length; i++)
        {
            options[pSItems] = [
                {text: careassistData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: careassistData[i].Item_Long_Desc, style: 'textotabla'},
                {text: careassistData[i].Size, style: 'textotabla', alignment: 'center'},
                {text: careassistData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(careassistData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    options[pSItems] = [
        {text: 'IS (VERSACARE)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    if(versacareData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<versacareData.length; i++)
        {
            options[pSItems] = [
                {text: versacareData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: versacareData[i].Item_Long_Desc, style: 'textotabla'},
                {text: versacareData[i].Size, style: 'textotabla', alignment: 'center'},
                {text: versacareData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(versacareData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    options[pSItems] = [
        {text: 'TC (TOTALCARE)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    if(totalcareData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<totalcareData.length; i++)
        {
            options[pSItems] = [
                {text: totalcareData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: totalcareData[i].Item_Long_Desc, style: 'textotabla'},
                {text: totalcareData[i].Size, style: 'textotabla', alignment: 'center'},
                {text: totalcareData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(totalcareData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var table1 = []
    if(careassistData.length > 0 || versacareData.length > 0 || totalcareData.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [70, "*", 90, 60, 40],
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
            }
        ]
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var accumax = [
        "\n",
        "\n",
        "\n",
        { text: 'ACCUMAX', style: 'header'},
        { text: 'AccuMax Quantum™ VPC', style: { fontSize: 0}, tocItem: 'accumax'},
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
        table1,
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