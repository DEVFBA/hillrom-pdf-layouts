async function getEent(data)
{
   
    var otoscopes = []

    const eentData = data.filter(objeto => objeto.Category === "EENT");

    const isOtoscopes = eentData.some(objeto => objeto.Group === "Otoscopes");
    if(isOtoscopes)
    {
        otoscopes.push({ text: 'Otoscopes', style: 'headerRed', alignment: "right", tocItem: 'otoscopes' });

        const digitalMacroviewData= eentData.filter(objeto => objeto.Family === "DIGITAL MACROVIEW OTOSCOPE");
        if(digitalMacroviewData.length > 0)
        {

            var digitalMacroviewOtoscope = []
            digitalMacroviewOtoscope.push({ text: 'DIGITAL MACROVIEW OTOSCOPE', style: 'header4', alignment: "left" });
            digitalMacroviewOtoscope.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<digitalMacroviewData.length; i++)
            {
                if(digitalMacroviewData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: digitalMacroviewData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: digitalMacroviewData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(digitalMacroviewData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: digitalMacroviewData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: digitalMacroviewData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: digitalMacroviewData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(digitalMacroviewData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: digitalMacroviewData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            digitalMacroviewOtoscope.push({
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
        
            otoscopes.push(digitalMacroviewOtoscope);
        }

        const macroviewPlusData= eentData.filter(objeto => objeto.Family === "MACROVIEW PLUS AND MACROVIEW OTOSCOPE");
        if(macroviewPlusData.length > 0)
        {

            var macroviewPlus = []
            macroviewPlus.push("\n");
            macroviewPlus.push({ text: 'MACROVIEW PLUS AND MACROVIEW OTOSCOPE', style: 'header4', alignment: "left" });
            macroviewPlus.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<macroviewPlusData.length; i++)
            {
                if(macroviewPlusData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: macroviewPlusData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: macroviewPlusData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(macroviewPlusData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: macroviewPlusData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: macroviewPlusData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: macroviewPlusData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(macroviewPlusData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: macroviewPlusData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            macroviewPlus.push({
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
        
            otoscopes.push(macroviewPlus);
        }

        const diagnosticData= eentData.filter(objeto => objeto.Family === "DIAGNOSTIC OTOSCOPES");
        if(diagnosticData.length > 0)
        {

            var diagnosticOtoscopes = []
            diagnosticOtoscopes.push("\n");
            diagnosticOtoscopes.push({ text: 'DIAGNOSTIC OTOSCOPES', style: 'header4', alignment: "left" });
            diagnosticOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<diagnosticData.length; i++)
            {
                if(diagnosticData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: diagnosticData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: diagnosticData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(diagnosticData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: diagnosticData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: diagnosticData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: diagnosticData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(diagnosticData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: diagnosticData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            diagnosticOtoscopes.push({
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
        
            otoscopes.push(diagnosticOtoscopes);
        }

        const specializedData= eentData.filter(objeto => objeto.Family === "SPECIALIZED OTOSCOPES");
        if(specializedData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Otoscopes', style: 'headerRed', alignment: "right" });

            var specializedOtoscopes = []
            specializedOtoscopes.push("\n");
            specializedOtoscopes.push({ text: 'SPECIALIZED OTOSCOPES', style: 'header4', alignment: "left" });
            specializedOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<specializedData.length; i++)
            {
                if(specializedData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: specializedData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: specializedData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(specializedData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: specializedData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: specializedData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: specializedData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(specializedData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: specializedData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            specializedOtoscopes.push({
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
        
            otoscopes.push(specializedOtoscopes);
        }

        const pocketScopeData= eentData.filter(objeto => objeto.Family === "POCKETSCOPE OTOSCOPES");
        if(pocketScopeData.length > 0)
        {

            var pocketOtoscopes = []
            pocketOtoscopes.push("\n");
            pocketOtoscopes.push({ text: 'POCKETSCOPE OTOSCOPES', style: 'header4', alignment: "left" });
            pocketOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketScopeData.length; i++)
            {
                if(pocketScopeData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketScopeData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketScopeData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketOtoscopes.push({
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
        
            otoscopes.push(pocketOtoscopes);
        }

        const pocketLedPData= eentData.filter(objeto => objeto.Family === "POCKET LED PLUS OTOSCOPES");
        if(pocketLedPData.length > 0)
        {

            var pocketLOtoscopes = []
            pocketLOtoscopes.push("\n");
            pocketLOtoscopes.push({ text: 'POCKET LED PLUS OTOSCOPES', style: 'header4', alignment: "left" });
            pocketLOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketLedPData.length; i++)
            {
                if(pocketLedPData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: pocketLedPData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedPData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedPData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedPData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedPData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedPData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedPData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedPData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketLOtoscopes.push({
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
        
            otoscopes.push(pocketLOtoscopes);
        }

        const pocketLedData= eentData.filter(objeto => objeto.Family === "POCKET LED OTOSCOPES");
        if(pocketLedData.length > 0)
        {

            var pocketLPOtoscopes = []
            pocketLPOtoscopes.push("\n");
            pocketLPOtoscopes.push({ text: 'POCKET LED OTOSCOPES', style: 'header4', alignment: "left" });
            pocketLPOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketLedData.length; i++)
            {
                if(pocketLedData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketLPOtoscopes.push({
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
        
            otoscopes.push(pocketLPOtoscopes);
        }

        const pocketJData= eentData.filter(objeto => objeto.Family === "POCKET JUNIOR OTOSCOPES");
        if(pocketJData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Otoscopes', style: 'headerRed', alignment: "right" });

            var pocketJOtoscopes = []
            pocketJOtoscopes.push("\n");
            pocketJOtoscopes.push({ text: 'POCKET JUNIOR OTOSCOPES', style: 'header4', alignment: "left" });
            pocketJOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketJData.length; i++)
            {
                if(pocketJData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: pocketJData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketJData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketJData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketJData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketJData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketJData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketJOtoscopes.push({
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
        
            otoscopes.push(pocketJOtoscopes);
        }

        const otoscopeSetData= eentData.filter(objeto => objeto.Family === "OTOSCOPE SETS");
        if(otoscopeSetData.length > 0)
        {

            var setOtoscopes = []
            setOtoscopes.push("\n");
            setOtoscopes.push({ text: 'OTOSCOPE SETS', style: 'header4', alignment: "left" });
            setOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<otoscopeSetData.length; i++)
            {
                if(otoscopeSetData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: otoscopeSetData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: otoscopeSetData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(otoscopeSetData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: otoscopeSetData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: otoscopeSetData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: otoscopeSetData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(otoscopeSetData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: otoscopeSetData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            setOtoscopes.push({
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
        
            otoscopes.push(setOtoscopes);
        }

        const speculasData= eentData.filter(objeto => objeto.Family === "OTOSCOPE SPECULAS");
        if(speculasData.length > 0)
        {

            var speculasOtoscopes = []
            speculasOtoscopes.push("\n");
            speculasOtoscopes.push({ text: 'OTOSCOPE SPECULAS', style: 'header4', alignment: "left" });
            speculasOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<speculasData.length; i++)
            {
                if(speculasData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: speculasData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: speculasData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(speculasData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: speculasData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: speculasData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: speculasData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(speculasData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: speculasData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            speculasOtoscopes.push({
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
        
            otoscopes.push(speculasOtoscopes);
        }

        const otoscopeAData= eentData.filter(objeto => objeto.Family === "OTOSCOPE ACCESSORIES");
        if(otoscopeAData.length > 0)
        {

            var accesoriesOtoscopes = []
            accesoriesOtoscopes.push("\n");
            accesoriesOtoscopes.push({ text: 'OTOSCOPE ACCESSORIES', style: 'header4', alignment: "left" });
            accesoriesOtoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<otoscopeAData.length; i++)
            {
                if(otoscopeAData[i].Obsolescence === true)
                {
        
                    options[pSItems] = [
                        {text: otoscopeAData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: otoscopeAData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(otoscopeAData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: otoscopeAData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: otoscopeAData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: otoscopeAData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(otoscopeAData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: otoscopeAData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            accesoriesOtoscopes.push({
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
        
            otoscopes.push(accesoriesOtoscopes);
        }
    }

    const isOphthalmoscopes = eentData.some(objeto => objeto.Group === "Ophthalmoscopes");
    if(isOphthalmoscopes)
    {
        otoscopes.push({text: '', pageBreak: 'after'  });
        otoscopes.push("\n");
        otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
        otoscopes.push({ text: 'Ophthalmoscopes', style: 'headerRed', alignment: "right", tocItem: 'ophthalmoscopes' });

        const panopticData= eentData.filter(objeto => objeto.Family === "PANOPTIC™ PLUS AND PANOPTIC™ OPHTHALMOSCOPE");
        if(panopticData.length > 0)
        {
            otoscopes.push("\n");

            var panopticOphthalmoscopes = []
            panopticOphthalmoscopes.push("\n");
            panopticOphthalmoscopes.push({ text: 'PANOPTIC™ PLUS AND PANOPTIC™ OPHTHALMOSCOPE', style: 'header4', alignment: "left" });
            panopticOphthalmoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<panopticData.length; i++)
            {
                if(panopticData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: panopticData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: panopticData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(panopticData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: panopticData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: panopticData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: panopticData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(panopticData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: panopticData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            panopticOphthalmoscopes.push({
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
        
            otoscopes.push(panopticOphthalmoscopes);
        }

        const pocketScopeData= eentData.filter(objeto => objeto.Family === "PANOPTIC PLUS AND PANOPTIC ACCESSORIES");
        if(pocketScopeData.length > 0)
        {
            otoscopes.push("\n");

            var pocketSOphthalmoscopes = []
            pocketSOphthalmoscopes.push("\n");
            pocketSOphthalmoscopes.push({ text: 'PANOPTIC PLUS AND PANOPTIC ACCESSORIES', style: 'header4', alignment: "left" });
            pocketSOphthalmoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketScopeData.length; i++)
            {
                if(pocketScopeData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketScopeData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketScopeData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketSOphthalmoscopes.push({
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
        
            otoscopes.push(pocketSOphthalmoscopes);
        }

        const standardData= eentData.filter(objeto => objeto.Family === "STANDARD OPHTHALMOSCOPES");
        if(standardData.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'STANDARD OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<standardData.length; i++)
            {
                if(standardData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: standardData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: standardData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(standardData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: standardData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: standardData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: standardData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(standardData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: standardData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            arrayDocument.push({
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
        
            otoscopes.push(arrayDocument);
        }

        const data1 = eentData.filter(objeto => objeto.Family === "COAXIAL OPHTHALMOSCOPES");
        if(data1.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'COAXIAL OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data2 = eentData.filter(objeto => objeto.Family === "POCKETSCOPE™ OPHTHALMOSCOPES");
        if(data2.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Ophthalmoscopes', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKETSCOPE™ OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const pocketLedData= eentData.filter(objeto => objeto.Family === "POCKET LED PLUS OPHTHALMOSCOPES");
        if(pocketLedData.length > 0)
        {
            otoscopes.push("\n");

            var pocketLOphthalmoscopes = []
            pocketLOphthalmoscopes.push("\n");
            pocketLOphthalmoscopes.push({ text: 'POCKET LED PLUS OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
            pocketLOphthalmoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketLedData.length; i++)
            {
                if(pocketLedData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketLOphthalmoscopes.push({
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
        
            otoscopes.push(pocketLOphthalmoscopes);
        }

        const pocketLed2Data= eentData.filter(objeto => objeto.Family === "POCKET LED OPHTHALMOSCOPES");
        if(pocketLed2Data.length > 0)
        {
            otoscopes.push("\n");

            var pocketL2Ophthalmoscopes = []
            pocketL2Ophthalmoscopes.push("\n");
            pocketL2Ophthalmoscopes.push({ text: 'POCKET LED OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
            pocketL2Ophthalmoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketLed2Data.length; i++)
            {
                if(pocketLed2Data[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketLed2Data[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLed2Data[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLed2Data[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLed2Data[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLed2Data[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLed2Data[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLed2Data[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLed2Data[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketL2Ophthalmoscopes.push({
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
        
            otoscopes.push(pocketL2Ophthalmoscopes);
        }

        const pocketJData= eentData.filter(objeto => objeto.Family === "POCKET JUNIOR OPHTHALMOSCOPES");
        if(pocketJData.length > 0)
        {
            var pocketJOphthalmoscopes = []
            pocketJOphthalmoscopes.push("\n");
            pocketJOphthalmoscopes.push({ text: 'POCKET JUNIOR OPHTHALMOSCOPES', style: 'header4', alignment: "left" });
            pocketJOphthalmoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketJData.length; i++)
            {
                if(pocketJData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketJData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketJData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketJData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketJData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketJData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketJData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketJOphthalmoscopes.push({
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
        
            otoscopes.push(pocketJOphthalmoscopes);
        }
    }

    const isRetinoscopes = eentData.some(objeto => objeto.Group === "Retinoscopes");
    if(isRetinoscopes)
    {
        const eliteData= eentData.filter(objeto => objeto.Family === "ELITE™ RETINOSCOPES");
        if(eliteData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Retinoscopes', style: 'headerRed', alignment: "right", tocItem: "retinoscopes" });

            var eliteRetinoscopes = []
            eliteRetinoscopes.push("\n");
            eliteRetinoscopes.push({ text: 'ELITE™ RETINOSCOPES', style: 'header4', alignment: "left" });
            eliteRetinoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<eliteData.length; i++)
            {
                if(eliteData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: eliteData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: eliteData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(eliteData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: eliteData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: eliteData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: eliteData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(eliteData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: eliteData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            eliteRetinoscopes.push({
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
        
            otoscopes.push(eliteRetinoscopes);
        }

        const retinoscopesData= eentData.filter(objeto => objeto.Family === "RETINOSCOPES SETS");
        if(retinoscopesData.length > 0)
        {
            otoscopes.push("\n");

            var setsRetinoscopes = []
            setsRetinoscopes.push("\n");
            setsRetinoscopes.push({ text: 'RETINOSCOPES SETS', style: 'header4', alignment: "left" });
            setsRetinoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<retinoscopesData.length; i++)
            {
                if(retinoscopesData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: retinoscopesData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: retinoscopesData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(retinoscopesData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: retinoscopesData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: retinoscopesData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: retinoscopesData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(retinoscopesData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: retinoscopesData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            setsRetinoscopes.push({
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
        
            otoscopes.push(setsRetinoscopes);
        }

        const retinoscopesAData= eentData.filter(objeto => objeto.Family === "RETINOSCOPES ACCESSORIES");
        if(retinoscopesAData.length > 0)
        {
            otoscopes.push("\n");

            var accesoriesRetinoscopes = []
            accesoriesRetinoscopes.push("\n");
            accesoriesRetinoscopes.push({ text: 'RETINOSCOPES ACCESSORIES', style: 'header4', alignment: "left" });
            accesoriesRetinoscopes.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<retinoscopesAData.length; i++)
            {
                if(retinoscopesAData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: retinoscopesAData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: retinoscopesAData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(retinoscopesAData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: retinoscopesAData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: retinoscopesAData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: retinoscopesAData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(retinoscopesAData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: retinoscopesAData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            accesoriesRetinoscopes.push({
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
        
            otoscopes.push(accesoriesRetinoscopes);
        }
    }

    const is777Integrated = eentData.some(objeto => objeto.Group === "777 Integrated Wall Systems");
    if(is777Integrated)
    {
        const wallSystemsData= eentData.filter(objeto => objeto.Family === "777 WALL SYSTEMS");
        if(wallSystemsData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: '777 Integrated Wall Systems', style: 'headerRed', alignment: "right", tocItem: "777integrated" });

            var wall777 = []
            wall777.push("\n");
            wall777.push({ text: '777 WALL SYSTEMS', style: 'header4', alignment: "left" });
            wall777.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<wallSystemsData.length; i++)
            {
                if(wallSystemsData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: wallSystemsData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: wallSystemsData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(wallSystemsData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: wallSystemsData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: wallSystemsData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: wallSystemsData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(wallSystemsData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: wallSystemsData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            wall777.push({
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
        
            otoscopes.push(wall777);
        }
    }

    const isPowerHandles = eentData.some(objeto => objeto.Group === "Power Handles and Sources");
    if(isPowerHandles)
    {
        const lithiumData= eentData.filter(objeto => objeto.Family === "LITHIUM-ION HANDLES");
        if(lithiumData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Power Handles and Sources', style: 'headerRed', alignment: "right", tocItem: "powerhandles" });

            var lithiumPower = []
            lithiumPower.push("\n");
            lithiumPower.push({ text: 'LITHIUM-ION HANDLES', style: 'header4', alignment: "left" });
            lithiumPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<lithiumData.length; i++)
            {
                if(lithiumData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: lithiumData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: lithiumData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(lithiumData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: lithiumData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: lithiumData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: lithiumData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(lithiumData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: lithiumData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            lithiumPower.push({
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
        
            otoscopes.push(lithiumPower);
        }

        const nicadData= eentData.filter(objeto => objeto.Family === "NI-CAD HANDLES");
        if(nicadData.length > 0)
        {

            otoscopes.push("\n");

            var nicadPower = []
            nicadPower.push("\n");
            nicadPower.push({ text: 'NI-CAD HANDLES', style: 'header4', alignment: "left" });
            nicadPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<nicadData.length; i++)
            {
                options[pSItems] = [
                        {text: nicadData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: nicadData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(nicadData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: nicadData[i].Comment, style: 'textotabla'}
                ]
                
                pSItems++
            }

            nicadPower.push({
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
        
            otoscopes.push(nicadPower);
        }

        const pocketscopeData= eentData.filter(objeto => objeto.Family === "POCKETSCOPE POWER HANDLES");
        if(pocketscopeData.length > 0)
        {

            otoscopes.push("\n");

            var pocketPower = []
            pocketPower.push("\n");
            pocketPower.push({ text: 'POCKETSCOPE POWER HANDLES', style: 'header4', alignment: "left" });
            pocketPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<pocketscopeData.length; i++)
            {
                if(pocketscopeData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketscopeData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketscopeData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketscopeData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketscopeData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketscopeData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketscopeData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketscopeData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketscopeData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            pocketPower.push({
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
        
            otoscopes.push(pocketPower);
        }

        const powerData= eentData.filter(objeto => objeto.Family === "POWER HANDLE ACCESSORIES");
        if(powerData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Power Handles and Sources', style: 'headerRed', alignment: "right" });

            var powerPower = []
            powerPower.push("\n");
            powerPower.push({ text: 'POWER HANDLE ACCESSORIES', style: 'header4', alignment: "left" });
            powerPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<powerData.length; i++)
            {
                if(powerData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: powerData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: powerData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(powerData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: powerData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: powerData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: powerData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(powerData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: powerData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            powerPower.push({
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
        
            otoscopes.push(powerPower);
        }

        const deskData= eentData.filter(objeto => objeto.Family === "DESK CHARGERS");
        if(deskData.length > 0)
        {

            otoscopes.push("\n");

            var deskPower = []
            deskPower.push("\n");
            deskPower.push({ text: 'DESK CHARGERS', style: 'header4', alignment: "left" });
            deskPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<deskData.length; i++)
            {
                if(deskData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: deskData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: deskData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(deskData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: deskData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: deskData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: deskData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(deskData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: deskData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            deskPower.push({
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
        
            otoscopes.push(deskPower);
        }

        const deskAData= eentData.filter(objeto => objeto.Family === "DESK CHARGER ACCESSORIES");
        if(deskAData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Power Handles and Sources', style: 'headerRed', alignment: "right" });

            var deskAPower = []
            deskAPower.push("\n");
            deskAPower.push({ text: 'DESK CHARGER ACCESSORIES', style: 'header4', alignment: "left" });
            deskAPower.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<deskAData.length; i++)
            {
                if(deskAData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: deskAData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: deskAData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(deskAData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: deskAData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: deskAData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: deskAData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(deskAData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: deskAData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            deskAPower.push({
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
        
            otoscopes.push(deskAPower);
        }
    }

    const isDiagnosticSets = eentData.some(objeto => objeto.Group === "Diagnostic Sets");
    if(isDiagnosticSets)
    {
        const diagnosticSetsData= eentData.filter(objeto => objeto.Family === "DIAGNOSTIC SETS");
        if(diagnosticSetsData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Diagnostic Sets', style: 'headerRed', alignment: "right", tocItem: 'diagnosticsets' });

            var diagnosticSets = []
            diagnosticSets.push("\n");
            diagnosticSets.push({ text: 'DIAGNOSTIC SETS', style: 'header4', alignment: "left" });
            diagnosticSets.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<diagnosticSetsData.length; i++)
            {
                if(diagnosticSetsData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: diagnosticSetsData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: diagnosticSetsData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(diagnosticSetsData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: diagnosticSetsData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: diagnosticSetsData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: diagnosticSetsData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(diagnosticSetsData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: diagnosticSetsData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            diagnosticSets.push({
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
        
            otoscopes.push(diagnosticSets);
        }

        const opthometrySetsData= eentData.filter(objeto => objeto.Family === "OPTHOMETRY SETS");
        if(opthometrySetsData.length > 0)
        {
            otoscopes.push("\n");

            var opthometrySets = []
            opthometrySets.push("\n");
            opthometrySets.push({ text: 'OPTHOMETRY SETS', style: 'header4', alignment: "left" });
            opthometrySets.push("\n");
        
            var options =[]
            var pSItems = 0;
            options[pSItems] = [
                {text: 'Material', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Description', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                {text: 'Suggested Retail Price', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                {text: 'Comment', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
            ]
            pSItems++

            for(var i=0; i<opthometrySetsData.length; i++)
            {
                if(opthometrySetsData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: opthometrySetsData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: opthometrySetsData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(opthometrySetsData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: opthometrySetsData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: opthometrySetsData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: opthometrySetsData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(opthometrySetsData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: opthometrySetsData[i].Comment, style: 'textotabla'}
                    ]
                }
                
                pSItems++
            }

            opthometrySets.push({
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
        
            otoscopes.push(opthometrySets);
        }

        const universalDeskData= eentData.filter(objeto => objeto.Family === "UNIVERSAL DESK CHARGER SETS");
        if(universalDeskData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Diagnostic Sets', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'UNIVERSAL DESK CHARGER SETS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<universalDeskData.length; i++)
            {
                if(universalDeskData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: universalDeskData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: universalDeskData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(universalDeskData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: universalDeskData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: universalDeskData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: universalDeskData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(universalDeskData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: universalDeskData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isPocketDiagnostic = eentData.some(objeto => objeto.Group === "Pocket Diagnostic Sets");
    if(isPocketDiagnostic)
    {
        const pocketLedData= eentData.filter(objeto => objeto.Family === "POCKET LED PLUS SETS");
        if(pocketLedData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Pocket Diagnostic Sets', style: 'headerRed', alignment: "right", tocItem: "pocketdiagnostic" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKET LED PLUS SETS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<pocketLedData.length; i++)
            {
                if(pocketLedData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const pocketLedSData= eentData.filter(objeto => objeto.Family === "POCKET LED SETS");
        if(pocketLedSData.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKET LED SETS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<pocketLedSData.length; i++)
            {
                if(pocketLedSData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketLedSData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedSData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedSData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedSData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedSData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedSData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedSData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedSData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const pocketLedPData= eentData.filter(objeto => objeto.Family === "POCKET LED PLUS ACCESSORIES");
        if(pocketLedPData.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKET LED PLUS ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<pocketLedPData.length; i++)
            {
                if(pocketLedPData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketLedPData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketLedPData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedPData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketLedPData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketLedPData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketLedPData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketLedPData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketLedPData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const pocketJuniorData= eentData.filter(objeto => objeto.Family === "POCKET JUNIOR SETS");
        if(pocketJuniorData.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKET JUNIOR SETS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<pocketJuniorData.length; i++)
            {
                if(pocketJuniorData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketJuniorData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketJuniorData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJuniorData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketJuniorData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketJuniorData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketJuniorData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketJuniorData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketJuniorData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const pocketScopeData= eentData.filter(objeto => objeto.Family === "POCKETSCOPE SETS");
        if(pocketScopeData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Pocket Diagnostic Sets', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'POCKETSCOPE SETS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<pocketScopeData.length; i++)
            {
                if(pocketScopeData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: pocketScopeData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: pocketScopeData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: pocketScopeData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pocketScopeData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: pocketScopeData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const compactData= eentData.filter(objeto => objeto.Family === "COMPACSET™");
        if(compactData.length > 0)
        {
            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'COMPACSET™', style: 'header4', alignment: "left" });
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

            for(var i=0; i<compactData.length; i++)
            {
                if(compactData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: compactData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: compactData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(compactData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: compactData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: compactData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: compactData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(compactData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: compactData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isBio = eentData.some(objeto => objeto.Group === "BIO");
    if(isBio)
    {
        const binocularData= eentData.filter(objeto => objeto.Family === "BINOCULAR INDIRECT OPHTHALMOSCOPE");
        if(binocularData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'BIO', style: 'headerRed', alignment: "right", tocItem: "bio" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BINOCULAR INDIRECT OPHTHALMOSCOPE', style: 'header4', alignment: "left" });
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

            for(var i=0; i<binocularData.length; i++)
            {
                if(binocularData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: binocularData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: binocularData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(binocularData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: binocularData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: binocularData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: binocularData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(binocularData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: binocularData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const bioPowerData= eentData.filter(objeto => objeto.Family === "BIO POWER OPTIONS");
        if(bioPowerData.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BIO POWER OPTIONS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<bioPowerData.length; i++)
            {
                if(bioPowerData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: bioPowerData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: bioPowerData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(bioPowerData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: bioPowerData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: bioPowerData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: bioPowerData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(bioPowerData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: bioPowerData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const bioAData= eentData.filter(objeto => objeto.Family === "BIO ACCESSORIES");
        if(bioAData.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BIO ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<bioAData.length; i++)
            {
                if(bioAData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: bioAData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: bioAData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(bioAData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: bioAData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: bioAData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: bioAData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(bioAData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: bioAData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isEarWash = eentData.some(objeto => objeto.Group === "Ear Wash");
    if(isEarWash)
    {
        const earWashData= eentData.filter(objeto => objeto.Family === "EAR WASH SYSTEMS");
        if(earWashData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Ear Wash', style: 'headerRed', alignment: "right", tocItem: 'earwash'});

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'EAR WASH SYSTEMS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<earWashData.length; i++)
            {
                if(earWashData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: earWashData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: earWashData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(earWashData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: earWashData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: earWashData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: earWashData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(earWashData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: earWashData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const earWashAData= eentData.filter(objeto => objeto.Family === "EAR WASH ACCESSORIES");
        if(earWashAData.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'EAR WASH ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<earWashAData.length; i++)
            {
                if(earWashAData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: earWashAData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: earWashAData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(earWashAData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: earWashAData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: earWashAData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: earWashAData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(earWashAData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: earWashAData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isMicroTymp = eentData.some(objeto => objeto.Group === "Ear Wash");
    if(isMicroTymp)
    {
        const microtympData= eentData.filter(objeto => objeto.Family === "MICROTYMP 3 TIPS");
        if(microtympData.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'MicroTymp', style: 'headerRed', alignment: "right", tocItem: 'microtymp' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MICROTYMP 3 TIPS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<microtympData.length; i++)
            {
                if(microtympData[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: microtympData[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: microtympData[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtympData[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: microtympData[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: microtympData[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: microtympData[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtympData[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: microtympData[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const microtymp2Data= eentData.filter(objeto => objeto.Family === "MICROTYMP 2 TIPS");
        if(microtymp2Data.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MICROTYMP 2 TIPS', style: 'header4', alignment: "left" });
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

            for(var i=0; i<microtymp2Data.length; i++)
            {
                if(microtymp2Data[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: microtymp2Data[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: microtymp2Data[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtymp2Data[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: microtymp2Data[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: microtymp2Data[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: microtymp2Data[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtymp2Data[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: microtymp2Data[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }

        const microtymp3Data= eentData.filter(objeto => objeto.Family === "MICROTYMP 3 ACCESSORIES");
        if(microtymp3Data.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MICROTYMP 3 ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<microtymp3Data.length; i++)
            {
                if(microtymp3Data[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: microtymp3Data[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: microtymp3Data[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtymp3Data[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: microtymp3Data[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: microtymp3Data[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: microtymp3Data[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(microtymp3Data[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: microtymp3Data[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isAudioScope = eentData.some(objeto => objeto.Group === "AudioScope® 3");
    if(isAudioScope)
    {
        const data1= eentData.filter(objeto => objeto.Family === "AUDIOSCOPE");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'AudioScope® 3', style: 'headerRed', alignment: "right", tocItem: 'audioscope' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'AUDIOSCOPE', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data2 = eentData.filter(objeto => objeto.Family === "AUDIOSCOPE SPECULAS");
        if(data2.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'AUDIOSCOPE SPECULAS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data3 = eentData.filter(objeto => objeto.Family === "AUDIOSCOPE ACCESSORIES");
        if(data3.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'AUDIOSCOPE ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isAudiometry = eentData.some(objeto => objeto.Group === "Audiometry Old");
    if(isAudiometry)
    {
        const data1= eentData.filter(objeto => objeto.Family === "AUDIOMETRY OLD ACCESSORIES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Audiometry Old', style: 'headerRed', alignment: "right", tocItem: 'audiometry' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'AUDIOMETRY OLD ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isIlluminators = eentData.some(objeto => objeto.Group === "Illuminators");
    if(isIlluminators)
    {
        const data1= eentData.filter(objeto => objeto.Family === "LUMIVIEW™");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Illuminators', style: 'headerRed', alignment: "right", tocItem: 'illuminators' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LUMIVIEW™', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data2 = eentData.filter(objeto => objeto.Family === "LUMIVIEW™ ACCESSORIES");
        if(data2.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LUMIVIEW™ ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data3 = eentData.filter(objeto => objeto.Family === "FIBER OPTIC TRANSILLUMINATORS");
        if(data3.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'FIBER OPTIC TRANSILLUMINATORS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data4 = eentData.filter(objeto => objeto.Family === "FIBER OPTIC TRANSILLUMINATOR ACCESSORIES");
        if(data4.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'FIBER OPTIC TRANSILLUMINATOR ACCESSORIES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data5= eentData.filter(objeto => objeto.Family === "NASAL ILLUMINATORS");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Illuminators', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'NASAL ILLUMINATORS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data6 = eentData.filter(objeto => objeto.Family === "BIVALVE NASAL SPECULUMS");
        if(data6.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BIVALVE NASAL SPECULUMS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data7 = eentData.filter(objeto => objeto.Family === "LARYNX/NASOPHARYNX ILLUMINATORS");
        if(data7.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LARYNX/NASOPHARYNX ILLUMINATORS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data8 = eentData.filter(objeto => objeto.Family === "LARYNX/NASOPHARYNX ILLUMINATOR ACCESSORIES");
        if(data8.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LARYNX/NASOPHARYNX ILLUMINATOR ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data8.length; i++)
            {
                if(data8[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data8[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data8[i].Comment, style: 'textotabla'}
                    ]
                }
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isFiberOptic = eentData.some(objeto => objeto.Group === "Fiber Optic Laryngoscopes");
    if(isFiberOptic)
    {
        const data1= eentData.filter(objeto => objeto.Family === "MACINTOSH FIBER OPTIC BLADES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Fiber Optic Laryngoscopes', style: 'headerRed', alignment: "right", tocItem: 'fiberoptics' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MACINTOSH FIBER OPTIC BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data2 = eentData.filter(objeto => objeto.Family === "ENGLISH MACINTOSH FIBER OPTIC BLADES");
        if(data2.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'ENGLISH MACINTOSH FIBER OPTIC BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data3 = eentData.filter(objeto => objeto.Family === "MILLER FIBER OPTIC BLADES");
        if(data3.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MILLER FIBER OPTIC BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data4 = eentData.filter(objeto => objeto.Family === "LIGTHWEIGHT FIBER OPTIC HANDLES");
        if(data4.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LIGTHWEIGHT FIBER OPTIC HANDLES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data5= eentData.filter(objeto => objeto.Family === "LIGTHWEIGHT FIBER OPTIC HANDLES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Fiber Optic Laryngoscopes', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LIGTHWEIGHT FIBER OPTIC HANDLES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data6 = eentData.filter(objeto => objeto.Family === "RECHARGEABLE FIBER OPTIC HANDLES");
        if(data6.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'RECHARGEABLE FIBER OPTIC HANDLES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data7 = eentData.filter(objeto => objeto.Family === "FIBER OPTIC SETS WITH CASE");
        if(data7.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'FIBER OPTIC SETS WITH CASE', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data8 = eentData.filter(objeto => objeto.Family === "FIBER OPTIC LARYNGOSCOPE ACCESSORIES");
        if(data8.length > 0)
        {

            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Fiber Optic Laryngoscopes', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'FIBER OPTIC LARYNGOSCOPE ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data8.length; i++)
            {
                if(data8[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data8[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data8[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isStandard = eentData.some(objeto => objeto.Group === "Standard (Lamp) Laryngoscopes");
    if(isStandard)
    {
        const data1= eentData.filter(objeto => objeto.Family === "MACINTOSH STANDARD BLADES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Standard (Lamp) Laryngoscopes', style: 'headerRed', alignment: "right", tocItem: 'standardlaryncoscopes' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MACINTOSH STANDARD BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data2 = eentData.filter(objeto => objeto.Family === "ENGLISH MACINTOSH STANDARD BLADES");
        if(data2.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'ENGLISH MACINTOSH STANDARD BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data3 = eentData.filter(objeto => objeto.Family === "MILLER STANDARD BLADES");
        if(data3.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'MILLER STANDARD BLADES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data4 = eentData.filter(objeto => objeto.Family === "STANDARD HANDLES");
        if(data4.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'STANDARD HANDLES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data6 = eentData.filter(objeto => objeto.Family === "RECHARGEABLE HANDLES");
        if(data6.length > 0)
        {

            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Standard (Lamp) Laryngoscopes', style: 'headerRed', alignment: "right" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'RECHARGEABLE HANDLES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data7 = eentData.filter(objeto => objeto.Family === "STANDARD SETS WITH CASE");
        if(data7.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'STANDARD SETS WITH CASE', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }

        const data8 = eentData.filter(objeto => objeto.Family === "STANDARD LARYNGOSCOPE ACCESSORIES");
        if(data8.length > 0)
        {

            otoscopes.push("\n");

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'STANDARD LARYNGOSCOPE ACCESSORIES', style: 'header4', alignment: "left" });
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

            for(var i=0; i<data8.length; i++)
            {
                if(data8[i].Obsolescence === true)
                {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotablaD', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotablaD'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotablaD'},
                        {
                            text: [
                              { text: "DISCONTINUED\n", style: 'textotablaR' }, // Primer fragmento con estilo
                              { text: data8[i].Comment, style: 'textotablaD' }  // Segundo fragmento con estilo
                            ]
                        }
                    ]
                }
                else {
                    options[pSItems] = [
                        {text: data8[i].Material, style: 'textotabla', alignment: 'center'},
                        {text: data8[i].Description, style: 'textotabla'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Suggested_Retail_Price), style: 'textotabla'},
                        {text: data8[i].Comment, style: 'textotabla'}
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isCases = eentData.some(objeto => objeto.Group === "Cases");
    if(isCases)
    {
        const data1= eentData.filter(objeto => objeto.Family === "CASES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Cases', style: 'headerRed', alignment: "right", tocItem: "cases" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'CASES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isBatteries = eentData.some(objeto => objeto.Group === "Batteries");
    if(isBatteries)
    {
        const data1= eentData.filter(objeto => objeto.Family === "BATTERIES");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Batteries', style: 'headerRed', alignment: "right", tocItem: 'batteries' });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'BATTERIES', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }
    }

    const isLamps = eentData.some(objeto => objeto.Group === "Lamps");
    if(isLamps)
    {
        const data1= eentData.filter(objeto => objeto.Family === "LAMPS");
        if(data1.length > 0)
        {
            otoscopes.push({text: '', pageBreak: 'after'  });
            otoscopes.push("\n");
            otoscopes.push({ text: 'EENT', style: 'header3', alignment: "left" },);
            otoscopes.push({ text: 'Lamps', style: 'headerRed', alignment: "right", tocItem: "lamps" });

            var arrayDocument = []
            arrayDocument.push("\n");
            arrayDocument.push({ text: 'LAMPS', style: 'header4', alignment: "left" });
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
        
            otoscopes.push(arrayDocument);
        }
    }

    var eent = [
        { image: "v2/images/Portada_EENT.png", width: 620, height: 840, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        { image: "v2/images/Portada_EENT2.png", width: 620, height: 840, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        { image: "v2/images/Portada_EENT3.png", width: 620, height: 840, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: 'EENT', style: 'header3', alignment: "left" },
        { image: "v2/images/EENT.png", width: 595, height: 730, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        { text: 'EENT', style: 'header3', alignment: "left" },
        otoscopes,
        {text: '', pageBreak: 'after'  }
    ]

    return eent;
}

module.exports = {
    getEent : getEent,
}