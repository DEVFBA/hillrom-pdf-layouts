async function getProBP2000(data)
{
    var proBP2000 = []

    const proBPData = data.filter(objeto => objeto.Category === "ProBP 2000");

    const isProBP = proBPData.some(objeto => objeto.Group === "ProBP 2000 Devices");
    if(isProBP)
    {
        proBP2000.push({ text: 'ProBP 2000 Devices', style: 'headerRed', alignment: "right", tocItem: "probp200d" });

        const data1= proBPData.filter(objeto => objeto.Family === "PROBP 2000 NON BT");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PROBP 2000 NON BT', style: 'header4', alignment: "left" });
            arrayDocument.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<data1.length; i++)
            {
                if(data1[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data1[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data1[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data1[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data1[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            arrayDocument.push({
                table: {
                    headerRows: 1,
                    widths: [80, "*", 80, 80],
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
            })
        
            proBP2000.push(arrayDocument);
        }
    }

    const isProBPA = proBPData.some(objeto => objeto.Group === "ProBP 2000 Accessories");
    if(isProBPA)
    {
        proBP2000.push({text: '', pageBreak: 'after'  });
        proBP2000.push("\n");
        proBP2000.push({ text: "ProBP 2000", style: 'header3', alignment: "left" });
        proBP2000.push({ text: 'ProBP 2000 Accessories', style: 'headerRed', alignment: "right", tocItem:"probp200a" });

        const data1= proBPData.filter(objeto => objeto.Family === "ALL ACCESSORIES");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'ALL ACCESSORIES', style: 'header4', alignment: "left" });
            arrayDocument.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<data1.length; i++)
            {
                if(data1[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data1[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data1[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data1[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data1[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            arrayDocument.push({
                table: {
                    headerRows: 1,
                    widths: [80, "*", 80, 80],
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
            })
        
            proBP2000.push(arrayDocument);
        }
    }

    var proBP2000Layout = [
        "\n",
        { text: "ProBP 2000", style: 'header3', alignment: "left" },
        { image: "v2/images/ProBP2000.png", width: 595, height: 530, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "ProBP 2000", style: 'header3', alignment: "left" },
        { image: "v2/images/ProBP20002.png", width: 560, height: 500, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "ProBP 2000", style: 'header3', alignment: "left" },
        proBP2000,
        {text: '', pageBreak: 'after'  }
    ]

    return proBP2000Layout;
}

module.exports = {
    getProBP2000: getProBP2000,
}