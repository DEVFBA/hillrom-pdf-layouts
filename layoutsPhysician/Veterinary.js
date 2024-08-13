async function getVeterinary(data)
{
    var layout = []

    const veterinaryData = data.filter(objeto => objeto.Category === "Veterinary");

    const gruposUnicosOrdenados = [...new Set(veterinaryData.map(item => item.Group))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = veterinaryData.find(item => item.Group === a)?.Order_Group || 0;
        const orderB = veterinaryData.find(item => item.Group === b)?.Order_Group || 0;
        return orderA - orderB;
    });

    const familiasUnicasOrdenadas = [...new Set(veterinaryData.map(item => item.Family))]
    .filter(Boolean) // Eliminar valores nulos o undefined
    .sort((a, b) => {
        // Ordenar por el atributo Order_Group
        const orderA = veterinaryData.find(item => item.Family === a)?.Order_Family || 0;
        const orderB = veterinaryData.find(item => item.Family === b)?.Order_Family || 0;
        return orderA - orderB;
    });

    for(var g=0; g<gruposUnicosOrdenados.length; g++)
    {
        layout.push({text: '', pageBreak: 'after'  }); 
        
        //console.log(gruposUnicosOrdenados[g])
        const dataGroup = veterinaryData.filter(objeto => objeto.Group === gruposUnicosOrdenados[g]);

        //Se sacan solo las familias de ese grupo
        const familiasUnicasOrdenadasGroup = [...new Set(dataGroup.map(item => item.Family))]
        .filter(Boolean) // Eliminar valores nulos o undefined
        .sort((a, b) => {
            // Ordenar por el atributo Order_Group
            const orderA = dataGroup.find(item => item.Family === a)?.Order_Family || 0;
            const orderB = dataGroup.find(item => item.Family === b)?.Order_Family || 0;
            return orderA - orderB;
        });

        //console.log(familiasUnicasOrdenadasGroup)

        layout.push("\n");
        layout.push({ text: "Veterinary", style: 'header3', alignment: "left" });
        layout.push("\n");
        layout.push({ text: gruposUnicosOrdenados[g], style: 'headerRed', alignment: "right", tocItem: gruposUnicosOrdenados[g].replace(/\s/g, '')});

        for(var f=0; f<familiasUnicasOrdenadas.length; f++)
        {
            if (familiasUnicasOrdenadasGroup.includes(familiasUnicasOrdenadas[f])) 
            {
                const dataFamily = veterinaryData.filter(objeto => objeto.Family === familiasUnicasOrdenadas[f]);

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

    var veterinary = [
        layout,
    ]

    return veterinary;
}

module.exports = {
    getVeterinary: getVeterinary,
}