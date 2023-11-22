async function getHomeHealth(data)
{

    var homeBlood = []

    const homeData = data.filter(objeto => objeto.Category === "Home Health");

    const isProBP = homeData.some(objeto => objeto.Group === "Home Blood Pressure Monitor");
    if(isProBP)
    {
        homeBlood.push({ text: 'Home Blood Pressure Monitor', style: 'headerRed', alignment: "right", tocItem: "homeblood"});

        const data1= homeData.filter(objeto => objeto.Family === "BP100 HOME BP MONITOR");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BP100 HOME BP MONITOR', style: 'header4', alignment: "left" });
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
        
            homeBlood.push(arrayDocument);
        }

        const data2= homeData.filter(objeto => objeto.Family === "BP100 ACCESSORIES");
        if(data2.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BP100 ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data2.length; i++)
            {
                if(data2[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data2[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data2[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data2[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data2[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data2[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data2[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data2[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data2[i].Comment, style: 'textotabla'}
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
        
            homeBlood.push(arrayDocument);
        }
    }

    var homeHealth = [
        "\n",
        { text: "Home Health", style: 'header3', alignment: "left" },
        { image: "v2/images/HomeHealth.png", width: 595, height: 650, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Home Health", style: 'header3', alignment: "left" },
        { image: "v2/images/HomeHealth2.png", width: 560, height: 570, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Home Health", style: 'header3', alignment: "left" },
        homeBlood,
        {text: '', pageBreak: 'after'  }
    ]

    return homeHealth;
}

module.exports = {
    getHomeHealth: getHomeHealth,
}