async function getDistributorDiscounts(data)
{
    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'Product Category', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'Discount', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'}
    ]
    pSItems++

    for(var i=0; i<data.length; i++)
    {
        if(i%2===0)
        {
            options[pSItems] = [
                {text: data[i].Product_Category, style: 'textotablalarge', alignment: 'left'},
                {text: data[i].Discount, style: 'textotablalarge', alignment: 'center'}
            ]
        }
        else {
            options[pSItems] = [
                {text: data[i].Product_Category, style: 'textotablalarge', alignment: 'left', fillColor: '#e0e5ec'},
                {text: data[i].Discount, style: 'textotablalarge', alignment: 'center', fillColor: '#e0e5ec'}
            ]
        }       
             
        pSItems++
    }

    var distributorDiscounts = [
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [165, "*"],
                body: [
                    [
                        {border: [false, false, false, false], text: 'DISTRIBUTOR DISCOUNTS', fillColor: '#001A72', style: 'headerColor', alignment: "left"},
                        {border: [false, false, false, false], text: ""},
                    ],
                ]
            }
        },
        "\n",
        { text: 'Hillrom will grant different discounts per Product Category as indicated in Table below:', style: 'header2', alignment: "left" },
        "\n",
        "\n",
        {
            columns: [
                {
                    width: 80,
                    text: ''
                },
                {
                    width: 400,
                    table: {
                        widths: [140, 80],
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
                {
                    width: "*",
                    text: ''
                },
            ]

        },
        {text: '', pageBreak: 'after'  },
    ]

    return distributorDiscounts;
}

module.exports = {
    getDistributorDiscounts : getDistributorDiscounts,
}