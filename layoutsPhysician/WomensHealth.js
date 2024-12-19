async function getWomensHealth(data)
{
    var layout = []
    
    const womensData = data.filter(objeto => objeto.Category === "Womens Health");

    const gruposUnicosOrdenados = [...new Set(womensData.map(item => item.Group))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = womensData.find(item => item.Group === a)?.Order_Group || 0;
        const orderB = womensData.find(item => item.Group === b)?.Order_Group || 0;
        return orderA - orderB;
    });

    const familiasUnicasOrdenadas = [...new Set(womensData.map(item => item.Family))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = womensData.find(item => item.Family === a)?.Order_Family || 0;
        const orderB = womensData.find(item => item.Family === b)?.Order_Family || 0;
        return orderA - orderB;
    });

    for(var g=0; g<gruposUnicosOrdenados.length; g++)
    {
        layout.push({text: '', pageBreak: 'after'  }); 
        
        const dataGroup = womensData.filter(objeto => objeto.Group === gruposUnicosOrdenados[g]);

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
        layout.push({ text: "Women's Health", style: 'header3', alignment: "left" });
        layout.push("\n");
        layout.push({ text: gruposUnicosOrdenados[g], style: 'headerRed', alignment: "right", tocItem: gruposUnicosOrdenados[g].replace(/\s/g, '')});

        for(var f=0; f<familiasUnicasOrdenadas.length; f++)
        {
            if (familiasUnicasOrdenadasGroup.includes(familiasUnicasOrdenadas[f])) 
            {
                const dataFamily = womensData.filter(objeto => objeto.Family === familiasUnicasOrdenadas[f]);

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
                    let commentFormatted = "";
                    if(dataFamily[i].Comment !== null) {
                        commentFormatted = dataFamily[i].Comment.replace(/\|\|/g, '\n');
                    }
                    if(dataFamily[i].Obsolescence === true)
                    {
                        options[pSItems] = [
                            {text: dataFamily[i].Material, style: 'textotablaD', alignment: 'left'},
                            {text: dataFamily[i].Description, style: 'textotablaD'},
                            {text: "$" + (parseFloat(dataFamily[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotablaD'},
                            {
                                text: [
                                { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                                { text: commentFormatted, style: 'textotablaD' }  // Segundo fragmento con estilo
                                ]
                            }
                        ]
                    }
                    else {
                        options[pSItems] = [
                            {text: dataFamily[i].Material, style: 'textotabla', alignment: 'left'},
                            {text: dataFamily[i].Description, style: 'textotabla'},
                            {text: "$" + (parseFloat(dataFamily[i].Suggested_Retail_Price) + 0.0001).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), style: 'textotabla'},
                            {text: commentFormatted, style: 'textotabla'}
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
    }

    var womensHealth = [
        { image: "v2/images/Womens.png", width: 620, height: 840, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Women's Health", style: 'header3', alignment: "left" },
        { image: "v2/images/WomensHealth.png", width: 595, height: 600, alignment: 'center'},
        layout,
    ]

    return womensHealth;
}

module.exports = {
    getWomensHealth : getWomensHealth,
}