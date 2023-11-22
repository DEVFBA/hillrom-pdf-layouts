async function getFlexiport(data)
{

    //validar si hay info en otoscopes
    var reusableCuffs = []

    const flexiportData = data.filter(objeto => objeto.Category === "Flexiport");

    const isReusable = flexiportData.some(objeto => objeto.Group === "Reusable Cuffs");
    if(isReusable)
    {
        reusableCuffs.push({ text: 'Reusable Cuffs', style: 'headerRed', alignment: "right", tocItem: "reusablecuffs" });

        const data1= flexiportData.filter(objeto => objeto.Family === "REUSABLE RAW CUFFS");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'REUSABLE RAW CUFFS', style: 'header4', alignment: "left" });
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data2 = flexiportData.filter(objeto => objeto.Family === "REUSABLE FULLY CONFIGURED CUFFS & INFLATION SYSTEM");
        if(data2.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'REUSABLE FULLY CONFIGURED CUFFS & INFLATION SYSTEM', style: 'header4', alignment: "left" });
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
        
            reusableCuffs.push(arrayDocument);
        }
    }

    const isDisposable = flexiportData.some(objeto => objeto.Group === "Disposable Cuffs");
    if(isDisposable)
    {
        reusableCuffs.push({text: '', pageBreak: 'after'  });
        reusableCuffs.push("\n");
        reusableCuffs.push({ text: "Flexiport", style: 'header3', alignment: "left" });
        reusableCuffs.push({ text: 'Disposable Cuffs', style: 'headerRed', alignment: "right", tocItem: "disposablecuffs" });

        const data1= flexiportData.filter(objeto => objeto.Family === "DISPOSABLE RAW SOFT CUFFS");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DISPOSABLE RAW SOFT CUFFS', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data1[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data1[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data2 = flexiportData.filter(objeto => objeto.Family === "DISPOSABLE FULLY CONFIGURED SOFT CUFFS");
        if(data2.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DISPOSABLE FULLY CONFIGURED SOFT CUFFS', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data2[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data2[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data2[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data2[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data3 = flexiportData.filter(objeto => objeto.Family === "DISPOSABLE INFLATION SYSTEM");
        if(data3.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DISPOSABLE INFLATION SYSTEM', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data3.length; i++)
            {
                if(data3[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data3[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data3[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data3[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data3[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data3[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data3[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data3[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data3[i].Comment, style: 'textotabla'}
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
        
            reusableCuffs.push(arrayDocument);
        }
    }

    const isNeonatal = flexiportData.some(objeto => objeto.Group === "Neonatal Cuffs");
    if(isNeonatal)
    {
        reusableCuffs.push({text: '', pageBreak: 'after'  });
        reusableCuffs.push("\n");
        reusableCuffs.push({ text: "Flexiport", style: 'header3', alignment: "left" });
        reusableCuffs.push({ text: 'Neonatal Cuffs', style: 'headerRed', alignment: "right", tocItem: "neonatalcuffs" });

        const data1= flexiportData.filter(objeto => objeto.Family === "DISPOSABLE SOFT NEONATAL CUFFS - 1 TUBE");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DISPOSABLE SOFT NEONATAL CUFFS - 1 TUBE', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data1[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data1[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data2 = flexiportData.filter(objeto => objeto.Family === "DISPOSABLE SOFT NEONATAL CUFFS - 2 TUBE");
        if(data2.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DISPOSABLE SOFT NEONATAL CUFFS - 2 TUBE', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data2[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data2[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data2[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data2[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }
    }

    const isFlexiport = flexiportData.some(objeto => objeto.Group === "Flexiport Accessories");
    if(isFlexiport)
    {
        reusableCuffs.push({text: '', pageBreak: 'after'  });
        reusableCuffs.push("\n");
        reusableCuffs.push({ text: "Flexiport", style: 'header3', alignment: "left" });
        reusableCuffs.push({ text: 'Flexiport Accessories', style: 'headerRed', alignment: "right", tocItem: "flexiport"});

        const data1= flexiportData.filter(objeto => objeto.Family === "BP PORT FITTINGS - FLEXIPORT");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BP PORT FITTINGS - FLEXIPORT', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data1[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data1[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data1[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data1[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data2 = flexiportData.filter(objeto => objeto.Family === "BP PORT FITTINGS - 1 TUBE (ALL ITEMS SUPPLIED IN PACK OF 10)");
        if(data2.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BP PORT FITTINGS - 1 TUBE (ALL ITEMS SUPPLIED IN PACK OF 10)', style: 'header4', alignment: "left" });
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
                options[pSItems] = [
                        {text: data2[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data2[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data2[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data2[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data3 = flexiportData.filter(objeto => objeto.Family === "BP PORT FITTINGS - 2 TUBE (ALL ITEMS SUPPLIED IN PACK OF 10)");
        if(data3.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BP PORT FITTINGS - 2 TUBE (ALL ITEMS SUPPLIED IN PACK OF 10)', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data3.length; i++)
            {
                options[pSItems] = [
                        {text: data3[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data3[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data3[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data3[i].Comment, style: 'textotabla'}
                ]
                
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data4= flexiportData.filter(objeto => objeto.Family === "FLEXIPORT TUBING (ALL ITEMS SUPPLIED IN PACK OF 10)");
        if(data4.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'FLEXIPORT TUBING (ALL ITEMS SUPPLIED IN PACK OF 10)', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data4.length; i++)
            {
                if(data4[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data4[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data4[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data4[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data4[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data4[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data4[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data4[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data4[i].Comment, style: 'textotabla'}
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data5 = flexiportData.filter(objeto => objeto.Family === "DS ADAPTERS");
        if(data5.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'DS ADAPTERS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data5.length; i++)
            {
                if(data5[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data5[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data5[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data5[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data5[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data5[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data5[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data5[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data5[i].Comment, style: 'textotabla'}
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
        
            reusableCuffs.push(arrayDocument);
        }

        const data6 = flexiportData.filter(objeto => objeto.Family === "CUFF CONNECTOR");
        if(data6.length > 0)
        {
            reusableCuffs.push({text: '', pageBreak: 'after'  });
            reusableCuffs.push("\n");
            reusableCuffs.push({ text: "Flexiport", style: 'header3', alignment: "left" });
            reusableCuffs.push({ text: 'Flexiport Accessories', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'CUFF CONNECTOR', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data6.length; i++)
            {
                if(data6[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data6[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data6[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data6[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data6[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data6[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data6[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data6[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data6[i].Comment, style: 'textotabla'}
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
        
            reusableCuffs.push(arrayDocument);
        }
    }

    var flexiport = [
        "\n",
        { text: "Flexiport", style: 'header3', alignment: "left" },
        { image: "v2/images/Flexiport.png", width: 550, height: 650, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Flexiport", style: 'header3', alignment: "left" },
        { image: "v2/images/Flexiport2.png", width: 550, height: 530, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Flexiport", style: 'header3', alignment: "left" },
        reusableCuffs,
        {text: '', pageBreak: 'after'  }
    ]

    return flexiport;
}

module.exports = {
    getFlexiport : getFlexiport,
}