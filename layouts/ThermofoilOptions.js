const fecha = new Date();
fecha.toLocaleDateString()

async function getThermofoilOptions()
{
    var thermofoilOptions = [
        "\n",
        "\n",
        "\n",
        { text: 'Thermofoil Options', style: 'header'},
        "\n",
        { text: 'OVERBED TABLE P009497 & P009498', style: 'subheader' },
        "\n",
        { image: "images/ThermofoilOptions.png", width: 500, height: 230, alignment: 'center'},
        '\n',
        { text: 'OVERBED TABLE OBT-634, OBT-635 & OBT-636', style: 'subheader'},
        { image: "images/ThermofoilOptions2.png", width: 500, height: 250, alignment: 'center'},,
        {text: '', pageBreak: 'after'  },
    ]

    return thermofoilOptions;
}

module.exports = {
    getThermofoilOptions : getThermofoilOptions,
}