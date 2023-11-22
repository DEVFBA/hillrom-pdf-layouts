async function getThermometry(data)
{
    var sureTemp = []
    
    const thermometryData = data.filter(objeto => objeto.Category === "Thermometry");

    const isHarvey = thermometryData.some(objeto => objeto.Group === "Sure Temp Plus");
    if(isHarvey)
    {
        sureTemp.push({ text: 'Sure Temp Plus', style: 'headerRed', alignment: "right", tocItem: "suretemp" });

        const data1= thermometryData.filter(objeto => objeto.Family === "SURE TEMP PLUS 690 - THERMOMETERS");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'SURE TEMP PLUS 690 - THERMOMETERS', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data3 = thermometryData.filter(objeto => objeto.Family === "SURE TEMP PLUS 692 - THERMOMETERS");
        if(data3.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'SURE TEMP PLUS 692 - THERMOMETERS', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data4 = thermometryData.filter(objeto => objeto.Family === "SURE TEMP - PROBE COVERS");
        if(data4.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'SURE TEMP - PROBE COVERS', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data5 = thermometryData.filter(objeto => objeto.Family === "SURE TEMP - PROBE & PROBE WELL");
        if(data5.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'SURE TEMP - PROBE & PROBE WELL', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data6 = thermometryData.filter(objeto => objeto.Family === "MOUNTING ACCESSORIES - SURE TEMP 690/692");
        if(data6.length > 0)
        {

            sureTemp.push({text: '', pageBreak: 'after'  });
            sureTemp.push("\n");
            sureTemp.push({ text: "Thermometry", style: 'header3', alignment: "left" });
            sureTemp.push({ text: 'Sure Temp Plus', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MOUNTING ACCESSORIES - SURE TEMP 690/692', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data7 = thermometryData.filter(objeto => objeto.Family === "CALIBRATION ACCESSORIES");
        if(data7.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'CALIBRATION ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data7.length; i++)
            {
                if(data7[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data7[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data7[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data7[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data7[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data7[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data7[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data7[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data7[i].Comment, style: 'textotabla'}
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
        
            sureTemp.push(arrayDocument);
        }
    }

    const isBraun = thermometryData.some(objeto => objeto.Group === "Braun");
    if(isBraun)
    {
        sureTemp.push({text: '', pageBreak: 'after'  });
        sureTemp.push("\n");
        sureTemp.push({ text: "Thermometry", style: 'header3', alignment: "left" });
        sureTemp.push({ text: 'Braun', style: 'headerRed', alignment: "right", tocItem: "braun" });

        const data1= thermometryData.filter(objeto => objeto.Family === "BRAUN - THERMOMETERS");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BRAUN - THERMOMETERS', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data3 = thermometryData.filter(objeto => objeto.Family === "BRAUN - CHARGING STATION");
        if(data3.length > 0)
        {

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BRAUN - CHARGING STATION', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data4 = thermometryData.filter(objeto => objeto.Family === "BRAUN - PROBE COVERS");
        if(data4.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BRAUN - PROBE COVERS', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }

        const data5 = thermometryData.filter(objeto => objeto.Family === "BRAUN OTHER ACCESSORIES");
        if(data5.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BRAUN OTHER ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            sureTemp.push(arrayDocument);
        }
    }

    var thermometry = [
        "\n",
        { text: "Thermometry", style: 'header3', alignment: "left" },
        { image: "v2/images/Thermometry.png", width: 595, height: 650, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Thermometry", style: 'header3', alignment: "left" },
        { image: "v2/images/Thermometry2.png", width: 595, height: 580, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: "Thermometry", style: 'header3', alignment: "left" },
        sureTemp,
        {text: '', pageBreak: 'after'  }
    ]

    return thermometry;
}

module.exports = {
    getThermometry : getThermometry,
}