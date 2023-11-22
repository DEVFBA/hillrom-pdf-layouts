async function getLighting(data)
{
    var examLights = []
    
    const lightingData = data.filter(objeto => objeto.Category === "Lighting");

    const isExamlights = lightingData.some(objeto => objeto.Group === "Exam Lights");
    if(isExamlights)
    {
        examLights.push({ text: 'Exam Lights', style: 'headerRed', alignment: "right", tocItem: "examlights" });

        const data1= lightingData.filter(objeto => objeto.Family === "GS EXAM LIGHT IV");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'GS EXAM LIGHT IV', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data2 = lightingData.filter(objeto => objeto.Family === "GS 300");
        if(data2.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'GS 300', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data3 = lightingData.filter(objeto => objeto.Family === "EXAM LIGHT ACCESSORIES");
        if(data3.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'EXAM LIGHT ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }
    }

    const isMinor = lightingData.some(objeto => objeto.Group === "Minor Procedure Lights");
    if(isMinor)
    {
        examLights.push({text: '', pageBreak: 'after'  });
        examLights.push("\n");
        examLights.push({ text: 'Lighting', style: 'header3', alignment: "left" });
        examLights.push({ text: 'Minor Procedure Lights', style: 'headerRed', alignment: "right", tocItem: "minorprocedure" });

        const data1= lightingData.filter(objeto => objeto.Family === "GS 600");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'GS 600', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data2 = lightingData.filter(objeto => objeto.Family === "GS 900");
        if(data2.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'GS 900', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data3 = lightingData.filter(objeto => objeto.Family === "MINOR PROCEDURE LIGHT ACCESSORIES");
        if(data3.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MINOR PROCEDURE LIGHT ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }
    }

    const isHeadlights = lightingData.some(objeto => objeto.Group === "Headlights");
    if(isHeadlights)
    {
        examLights.push({text: '', pageBreak: 'after'  });
        examLights.push("\n");
        examLights.push({ text: 'Lighting', style: 'header3', alignment: "left" });
        examLights.push({ text: 'Headlights', style: 'headerRed', alignment: "right", tocItem: "headlights" });

        const data1= lightingData.filter(objeto => objeto.Family === "PORTABLE HEADLIGHTS");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PORTABLE HEADLIGHTS', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data2 = lightingData.filter(objeto => objeto.Family === "PORTABLE HEADLIGHT ACCESSORIES");
        if(data2.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PORTABLE HEADLIGHT ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data3 = lightingData.filter(objeto => objeto.Family === "PROCEDURE HEADLIGHTS");
        if(data3.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PROCEDURE HEADLIGHTS', style: 'header4', alignment: "left" });
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
                              { text: data2[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
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
        
            examLights.push(arrayDocument);
        }

        const data4 = lightingData.filter(objeto => objeto.Family === "PROCEDURE HEADLIGHT ACCESSORIES");
        if(data4.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PROCEDURE HEADLIGHT ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }
    }

    const isEpiscope = lightingData.some(objeto => objeto.Group === "Episcope and Penlite");
    if(isEpiscope)
    {
        examLights.push({text: '', pageBreak: 'after'  });
        examLights.push("\n");
        examLights.push({ text: 'Lighting', style: 'header3', alignment: "left" });
        examLights.push({ text: 'Episcope and Penlite', style: 'headerRed', alignment: "right", tocItem: "episcope" });

        const data1= lightingData.filter(objeto => objeto.Family === "EPISCOPE");
        if(data1.length > 0)
        {
            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'EPISCOPE', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data2 = lightingData.filter(objeto => objeto.Family === "EPISCOPE ACCESSORIES");
        if(data2.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'EPISCOPE ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data3 = lightingData.filter(objeto => objeto.Family === "PENLITE");
        if(data3.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PENLITE', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }

        const data4 = lightingData.filter(objeto => objeto.Family === "PENLITE ACCESSORIES");
        if(data4.length > 0)
        {

            examLights.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'PENLITE ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            examLights.push(arrayDocument);
        }
    }

    var lighting = [
        "\n",
        { text: 'Lighting', style: 'header3', alignment: "left" },
        { image: "v2/images/Lighting.png", width: 595, height: 680, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: 'Lighting', style: 'header3', alignment: "left" },
        { image: "v2/images/Lighting2.png", width: 595, height: 680, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: 'Lighting', style: 'header3', alignment: "left" },
        examLights,
        {text: '', pageBreak: 'after'  }
    ]

    return lighting;
}

module.exports = {
    getLighting : getLighting,
}