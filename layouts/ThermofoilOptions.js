const fecha = new Date();
fecha.toLocaleDateString()

async function getThermofoilOptions()
{
    var table1 = [];

    table1 = [
        {
            table: {
                widths: [130, 130, 130, 130],
                body: [
                    [
                        {border: [false, false, false, false], text: 'FW - Frosty White', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'HM - Hard Rock Maple', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'DV - Dolce Vita', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'CL - Candlelight', style: 'textotabla'},
                    ],
                    [
                        {border: [false, false, false, false], text: 'HC - Hayward Cherry', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'CC - Choco Cherry', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'CP - Chocolate Pear', style: 'textotabla'},
                        {border: [false, false, false, false], text: 'DB - Dunbar', style: 'textotabla'},
                    ]
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
        }
    ]

    var thermofoilOptions = [
        "\n",
        "\n",
        "\n",
        { text: 'Thermofoil Options', style: 'header'},
        "\n",
        { text: 'OVERBED TABLE P009497 & P009498', style: 'subheader' },
        "\n",
        table1,
        { image: "images/ThermofoilOptions.png", width: 500, height: 230, alignment: 'center'},
        '\n',
        {text: '', pageBreak: 'after'  },
    ]

    return thermofoilOptions;
}

module.exports = {
    getThermofoilOptions : getThermofoilOptions,
}