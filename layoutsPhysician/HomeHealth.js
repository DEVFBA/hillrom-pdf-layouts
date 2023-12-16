async function getHomeHealth(data)
{

    var layout = []

    const homeData = data.filter(objeto => objeto.Category === "Home Health");

    const gruposUnicosOrdenados = [...new Set(homeData.map(item => item.Group))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = homeData.find(item => item.Group === a)?.Order_Group || 0;
        const orderB = homeData.find(item => item.Group === b)?.Order_Group || 0;
        return orderA - orderB;
    });

    const familiasUnicasOrdenadas = [...new Set(homeData.map(item => item.Family))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = homeData.find(item => item.Family === a)?.Order_Family || 0;
        const orderB = homeData.find(item => item.Family === b)?.Order_Family || 0;
        return orderA - orderB;
    });

    for(var g=0; g<gruposUnicosOrdenados.length; g++)
    {
        const dataGroup = homeData.filter(objeto => objeto.Group === gruposUnicosOrdenados[g]);

        //Se sacan solo las familias de ese grupo
        const familiasUnicasOrdenadasGroup = [...new Set(dataGroup.map(item => item.Family))]
        .filter(Boolean) // Eliminar valores nulos o undefined
        .sort((a, b) => {
            // Ordenar por el atributo Order_Group
            const orderA = dataGroup.find(item => item.Family === a)?.Order_Family || 0;
            const orderB = dataGroup.find(item => item.Family === b)?.Order_Family || 0;
            return orderA - orderB;
        });

        layout.push("\n");
        layout.push({ text: "Home Health", style: 'header3', alignment: "left" });
        layout.push("\n");
        layout.push({ text: gruposUnicosOrdenados[g], style: 'headerRed', alignment: "right", tocItem: gruposUnicosOrdenados[g].replace(/\s/g, '')});

        for(var f=0; f<familiasUnicasOrdenadas.length; f++)
        {
            if (familiasUnicasOrdenadasGroup.includes(familiasUnicasOrdenadas[f])) 
            {
                const dataFamily = homeData.filter(objeto => objeto.Family === familiasUnicasOrdenadas[f]);

                var data1 = [];

                f !== 0 && data1.push("\n");

                data1.push({ text: familiasUnicasOrdenadas[f], style: 'header4', alignment: "left" });
                data1.push("\n");

                var options =[]
                var pSItems = 0;
                options[pSItems] = [
                    {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                    {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                    {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                    {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                ]
                pSItems++

                for(var i=0; i<dataFamily.length; i++)
                {
                    if(dataFamily[i].Obsolescence === true)
                    {
                        options[pSItems] = [
                            {text: dataFamily[i].Material, style: 'textotablaD', alignment: 'left'},
                            {text: dataFamily[i].Description, style: 'textotablaD'},
                            {text: "$" + (parseFloat(dataFamily[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotablaD'},
                            {
                                text: [
                                { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                                { text: dataFamily[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                                ]
                            }
                        ]
                    }
                    else {
                        options[pSItems] = [
                            {text: dataFamily[i].Material, style: 'textotabla', alignment: 'left'},
                            {text: dataFamily[i].Description, style: 'textotabla'},
                            {text: "$" + (parseFloat(dataFamily[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotabla'},
                            {text: dataFamily[i].Comment, style: 'textotabla'}
                        ]
                    }
                    
                    pSItems++
                }

                data1.push({
                    table: {
                        widths: [80, "*", 80, 80],
                        headerRows: 1,
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
            
                layout.push(data1);
            }

        }

        layout.push({text: '', pageBreak: 'after'  }); 
    }

    /*for(var g=0; g<gruposUnicosOrdenados.length; g++)
    {
        if(gruposUnicosOrdenados[g] === "Home Blood Pressure Monitor")
        {
            homeBlood.push({ text: 'Home Blood Pressure Monitor', style: 'headerRed', alignment: "right", tocItem: "homeblood"});

            for(var f=0; f<familiasUnicasOrdenadas.length; f++)
            {
                if(familiasUnicasOrdenadas[f] === "BP100 HOME BP MONITOR")
                {
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
                                    {text: "$" + (parseFloat(data1[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotablaD'},
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
                                    {text: "$" + (parseFloat(data1[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotabla'},
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
                }

                if(familiasUnicasOrdenadas[f] === "BP100 ACCESSORIES")
                {
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
                                    {text: "$" + (parseFloat(data2[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotablaD'},
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
                                    {text: "$" + (parseFloat(data2[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotabla'},
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
            }
        }
    }*/

    var homeHealth = [
        { image: "v2/images/HomeHealth.png", width: 620, height: 840, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Home Health", style: 'header3', alignment: "left" },
        { image: "v2/images/HomeHealth2.png", width: 560, height: 570, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        //"\n",
        //{ text: "Home Health", style: 'header3', alignment: "left" },
        layout,
        //{text: '', pageBreak: 'after'  }
    ]

    return homeHealth;
}

module.exports = {
    getHomeHealth: getHomeHealth,
}