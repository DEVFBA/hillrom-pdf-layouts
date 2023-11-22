async function getABPMSystems(data)
{
    var abpmSystems = []

    const abpmSystemsData = data.filter(objeto => objeto.Category === "ABPM Systems");

    const isABPM = abpmSystemsData.some(objeto => objeto.Group === "ABPM");
    if(isABPM)
    {
        abpmSystems.push({ text: 'ABPM', style: 'headerRed', alignment: "right", tocItem:"abpm" });

        const abpm7100Data= abpmSystemsData.filter(objeto => objeto.Family === "ABPM 7100 RECORDERS");
        if(abpm7100Data.length > 0)
        {
            var abpm7100 = []
            abpm7100.push({ text: 'ABPM 7100 RECORDERS', style: 'header4', alignment: "left" });
            abpm7100.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpm7100Data.length; i++)
            {
                if(abpm7100Data[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpm7100Data[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpm7100Data[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm7100Data[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpm7100Data[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpm7100Data[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpm7100Data[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm7100Data[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpm7100Data[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpm7100.push({
                table: {
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
        
            abpmSystems.push(abpm7100);
        }
        
        const abpm6100Data= abpmSystemsData.filter(objeto => objeto.Family === "ABPM 6100 RECORDERS");
        if(abpm6100Data.length > 0)
        {
            var abpm6100 = []
            abpm6100.push("\n");
            abpm6100.push({ text: 'ABPM 6100 RECORDERS', style: 'header4', alignment: "left" });
            abpm6100.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpm6100Data.length; i++)
            {
                if(abpm6100Data[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpm6100Data[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpm6100Data[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100Data[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpm6100Data[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpm6100Data[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpm6100Data[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100Data[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpm6100Data[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpm6100.push({
                table: {
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
        
            abpmSystems.push(abpm6100);
        }

        const abpmSoftwareData= abpmSystemsData.filter(objeto => objeto.Family === "ABPM SOFTWARE AND UPGRADES");
        if(abpmSoftwareData.length > 0)
        {
            var abpmSoftware = []
            abpmSoftware.push("\n");
            abpmSoftware.push({ text: 'ABPM SOFTWARE AND UPGRADES', style: 'header4', alignment: "left" });
            abpmSoftware.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpmSoftwareData.length; i++)
            {
                if(abpmSoftwareData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpmSoftwareData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpmSoftwareData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpmSoftwareData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpmSoftwareData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpmSoftwareData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpmSoftwareData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpmSoftwareData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpmSoftwareData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpmSoftware.push({
                table: {
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
        
            abpmSystems.push(abpmSoftware);
        }

    }

    const isABPMAccesories = abpmSystemsData.some(objeto => objeto.Group === "ABPM Accessories");
    if(isABPMAccesories)
    {
        abpmSystems.push({text: '', pageBreak: 'after'  });
        abpmSystems.push("\n");
        abpmSystems.push({ text: "ABPM Systems", style: 'header3', alignment: "left" });
        abpmSystems.push("\n");
        abpmSystems.push({ text: 'ABPM Accessories', style: 'headerRed', alignment: "right", tocItem: "abpma" });

        const abpm7100AData = abpmSystemsData.filter(objeto => objeto.Family === "ABPM 7100 ACCESSORIES");
        if(abpm7100AData.length > 0)
        {
            var abpm7100A = []
            abpm7100A.push({ text: 'ABPM 7100 ACCESSORIES', style: 'header4', alignment: "left" });
            abpm7100A.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpm7100AData.length; i++)
            {
                if(abpm7100AData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpm7100AData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpm7100AData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm7100AData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpm7100AData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpm7100AData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpm7100AData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm7100AData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpm7100AData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpm7100A.push({
                table: {
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
        
            abpmSystems.push(abpm7100A);
        }

        const abpm6100RData = abpmSystemsData.filter(objeto => objeto.Family === "ABPM 6100 REUSABLE SLEEVE CUFFS");
        if(abpm6100RData.length > 0)
        {
            var abpm6100R = []
            abpm6100R.push("\n");
            abpm6100R.push({ text: 'ABPM 6100 REUSABLE SLEEVE CUFFS', style: 'header4', alignment: "left" });
            abpm6100R.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpm6100RData.length; i++)
            {
                if(abpm6100RData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpm6100RData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpm6100RData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100RData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpm6100RData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpm6100RData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpm6100RData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100RData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpm6100RData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpm6100R.push({
                table: {
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
        
            abpmSystems.push(abpm6100R);
        }

        const abpm6100AData = abpmSystemsData.filter(objeto => objeto.Family === "ABPM 6100 ACCESSORIES");
        if(abpm6100AData.length > 0)
        {
            var abpm6100A = []
            abpm6100A.push("\n");
            abpm6100A.push({ text: 'ABPM 6100 ACCESSORIES', style: 'header4', alignment: "left" });
            abpm6100A.push("\n");

            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<abpm6100AData.length; i++)
            {
                if(abpm6100AData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: abpm6100AData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: abpm6100AData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100AData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: abpm6100AData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: abpm6100AData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: abpm6100AData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(abpm6100AData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: abpm6100AData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            abpm6100A.push({
                table: {
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
        
            abpmSystems.push(abpm6100A);
        }
    }

    var abpm = [
        "\n",
        { text: "ABPM Systems", style: 'header3', alignment: "left" },
        { image: "v2/images/ABPMSystems.png", width: 560, height: 600, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "ABPM Systems", style: 'header3', alignment: "left" },
        { image: "v2/images/ABPMSystems2.png", width: 580, height: 600, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "ABPM Systems", style: 'header3', alignment: "left" },
        abpmSystems,
        {text: '', pageBreak: 'after'  },
    ]

    return abpm;
}

module.exports = {
    getABPMSystems: getABPMSystems,
}