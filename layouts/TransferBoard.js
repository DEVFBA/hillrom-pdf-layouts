const dbTransferBoard = require('../controllers/transferboard')

async function getTransferBoard()
{
    const res = await dbTransferBoard.getTransferBoard()
    const optionsData = res[0]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<optionsData.length; i++)
    {
        options[pSItems] = [
            {text: optionsData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: optionsData[i].Item_Long_Desc, style: 'textotabla'},
            {text: optionsData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var accumax = [
        "\n",
        "\n",
        "\n",
        { text: 'Transfer Board', style: 'header', tocItem: 'transferBoard'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        "\n",
        {
            table: {
                widths: [80, "*", 80, 60],
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
        { image: "images/TransferBoard1.png", width: 230, height: 180, alignment: 'center'},
    ]

    return accumax;
}

module.exports = {
    getTransferBoard : getTransferBoard,
}