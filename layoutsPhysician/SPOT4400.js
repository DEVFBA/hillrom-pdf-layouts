async function getSPOT4400(data)
{
    var layout = []

    const spot4400Data = data.filter(objeto => objeto.Category === "SPOT 4400");

    const gruposUnicosOrdenados = [...new Set(spot4400Data.map(item => item.Group))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = spot4400Data.find(item => item.Group === a)?.Order_Group || 0;
        const orderB = spot4400Data.find(item => item.Group === b)?.Order_Group || 0;
        return orderA - orderB;
    });

    const familiasUnicasOrdenadas = [...new Set(spot4400Data.map(item => item.Family))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = spot4400Data.find(item => item.Family === a)?.Order_Family || 0;
        const orderB = spot4400Data.find(item => item.Family === b)?.Order_Family || 0;
        return orderA - orderB;
    });

    for(var g=0; g<gruposUnicosOrdenados.length; g++)
    {
        const dataGroup = spot4400Data.filter(objeto => objeto.Group === gruposUnicosOrdenados[g]);

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
        layout.push({ text: "SPOT 4400", style: 'header3', alignment: "left" });
        layout.push("\n");
        layout.push({ text: gruposUnicosOrdenados[g], style: 'headerRed', alignment: "right", tocItem: gruposUnicosOrdenados[g].replace(/\s/g, '')});

        for(var f=0; f<familiasUnicasOrdenadas.length; f++)
        {
            if (familiasUnicasOrdenadasGroup.includes(familiasUnicasOrdenadas[f])) 
            {
                const dataFamily = spot4400Data.filter(objeto => objeto.Family === familiasUnicasOrdenadas[f]);

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

    var spot = [
        //{ image: "v2/images/ABPM.png", width: 620, height: 840, alignment: 'center'},
        //{text: '', pageBreak: 'after'  },
        layout
    ]

    return spot;
}

module.exports = {
    getSPOT4400: getSPOT4400,
}