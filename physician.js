var fonts = {
    Roboto: {
      normal: './fonts/Geogrotesque-Regular.ttf',
      bold: './fonts/Geogrotesque-SemiBold.ttf',
      italics: './fonts/Geogrotesque-Italic.ttf',
      bolditalics: './fonts/Geogrotesque-BoldItalic.ttf',
      
    },
    DIN: {
        normal: './fonts/DIN.ttf',
        medium: './fonts/DIN-Medium.ttf',
        bold: './fonts/DIN-Bold.ttf',
    }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var thermsOfDistribution = require("./layoutsPhysician/ThermsOfDistribution.js");
var distributorDiscounts = require("./layoutsPhysician/DistributorDiscounts.js");
var eent = require("./layoutsPhysician/Eent.js");
var visionCare = require("./layoutsPhysician/VisionCare.js");
var endoscopy = require("./layoutsPhysician/Endoscopy.js");
var lighting = require("./layoutsPhysician/Lighting.js");
var womensHealth = require("./layoutsPhysician/WomensHealth.js");
var coreBloodPressure = require("./layoutsPhysician/CoreBloodPressure.js");
var stethoscopes = require("./layoutsPhysician/Stethoscopes.js");
var thermometry = require("./layoutsPhysician/Thermometry.js");
var flexiport = require("./layoutsPhysician/Flexiport.js");
var connexProBP3400 = require("./layoutsPhysician/ConnexProBP3400.js");
var proBP2000 = require("./layoutsPhysician/ProBP2000.js");
var homeHealth = require("./layoutsPhysician/HomeHealth.js");
var connexSpotMonitor = require("./layoutsPhysician/ConnexSpotMonitor.js");
var cvsm = require("./layoutsPhysician/CVSM.js");
var ciws = require("./layoutsPhysician/CIWS.js");
var cp50ECG = require("./layoutsPhysician/CP50ECG.js");
var cp150ECG = require("./layoutsPhysician/CP150ECG.js");
var pcBasedECG = require("./layoutsPhysician/PC-BasedECG.js");
var spirometry = require("./layoutsPhysician/Spirometry.js");
var abpmSystems = require("./layoutsPhysician/ABPMSystems.js");
var holterECGSystems = require("./layoutsPhysician/HolterECGSystems.js");

async function createDocument(discounts, data, rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate)
{
    try {
        const fecha = new Date();
        const anio = fecha.getFullYear()
        fecha.toLocaleDateString()

        var from = ""
        if(para !== "")
        {
            from = "Para: " + para;
        }

        const coverPage = [
            {
              stack: [
                { image: "v2/images/Portada.png", width: 620, height: 450, alignment: 'center'},
                '\n\n',
                {
                    table: {
                        widths: [150, "*"],
                        body: [
                            [
                                {border: [false, false, false, false], text: ""},
                                {border: [false, false, false, false], text: anio +' PRICE LIST', fillColor: '#001A72', style: 'coverHeader', alignment: "right"},
                            ],
                        ]
                    }
                },
                { text: 'Physician / Hospital', style: 'coverSubHeader', alignment: "right" },
                '\n\n',
                { text: region, style: 'coverTitle', alignment: "right" },
                '\n\n',
                { text: from, style: 'coverSubTitle', alignment: "right" },
                '\n\n',
                { text: 'Effective ' + effectiveDate, style: 'coverSubTitle', alignment: "right" },
                { text: 'Baxter is not bound by errors (including omissions)', style: 'coverSubTitle2', alignment: "right" },
                { text: 'The prices set forth herein are suggested only', style: 'coverSubTitle2', alignment: "right" },
                { text: 'Prices subject to change without notice', style: 'coverSubTitle2', alignment: "right" },
                { text: 'All Prices in US Dollars', style: 'coverSubTitle3', alignment: "right" },
              ],
            },
            { text: '', pageBreak: 'after' }, // Página siguiente
          ];

        var index2 = []
        index2.push('\n');
        index2.push({
            table: {
                widths: [178, "*"],
                body: [
                    [
                        {border: [false, false, false, false], text: 'TABLE OF CONTENTS', fillColor: '#154898', style: 'headerIndex', alignment: "left"},
                        {border: [false, false, false, false], text: ""},
                    ],
                ]
            }
        }),
        index2.push( {
            columns: [
                [
                    { text: ''}
                ],
                [
                    { text: 'Page', style: 'indexPage', alignment: 'right'}
                ]
            ]
        })

        if(data.some(objeto => objeto.Category === "EENT"))
        {
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'EENT', fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)
            index2.push(
                {
                    toc: {
                        id: 'otoscopes'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'ophthalmoscopes'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'retinoscopes'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: '777integrated'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'powerhandles'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'diagnosticsets'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'pocketdiagnostic'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'bio'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'earwash'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'microtymp'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'audioscope'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'audiometry'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'illuminators'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'fiberoptics'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'standardlaryncoscopes'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'cases'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'batteries'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'lamps'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "Vision Care"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Vision Care', fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'spotvision'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "Endoscopy"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Endoscopy', fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'scopes'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'endoscopy'
                    }
                }
            )
        }
        
        if(data.some(objeto => objeto.Category === "Lighting"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Lighting', fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'examlights'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'minorprocedure'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'headlights'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'episcope'
                    }
                }
            )            
        }

        if(data.some(objeto => objeto.Category === "Womens Health"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Women's Health", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'vaginal'
                    }
                }
            )  
        }
        
        if(data.some(objeto => objeto.Category === "Core Blood Pressure"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Core Blood Pressure", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: '767series'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'durashock'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'inflation'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'bpcuff'
                    }
                }
            )  
        }

        if(data.some(objeto => objeto.Category === "Stethoscopes"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Stethoscopes", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'harvey'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'professional'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'lightweight'
                    }
                }
            )  
        }

        if(data.some(objeto => objeto.Category === "Thermometry"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Thermometry", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'suretemp'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'braun'
                    }
                }
            )  
        }
        
        if(data.some(objeto => objeto.Category === "Flexiport"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Flexiport", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'reusablecuffs'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'disposablecuffs'
                    }
                }
            ) 
            index2.push(
                {
                    toc: {
                        id: 'neonatalcuffs'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'flexiport'
                    }
                }
            )   
        }

        if(data.some(objeto => objeto.Category === "Connex ProBP 3400"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Connex ProBP 3400", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'probp200d'
                    }
                }
            )  
            index2.push(
                {
                    toc: {
                        id: 'probp200a'
                    }
                }
            )  
        }

        if(data.some(objeto => objeto.Category === "Home Health"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Home Health", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'homeblood'
                    }
                }
            ) 
        }

        if(data.some(objeto => objeto.Category === "Connex Spot Monitor"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Connex Spot Monitor", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'csmmain'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'csmaccessories'
                    }
                }
            ) 
        }

        if(data.some(objeto => objeto.Category === "CVSM"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "CVSM", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'connexmain'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'connexaccessories'
                    }
                }
            ) 
        }

        if(data.some(objeto => objeto.Category === "CIWS"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "CIWS", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'ciwsmain'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'ciwsaccessories'
                    }
                }
            ) 
        }

        if(data.some(objeto => objeto.Category === "CP50 ECG"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "CP50 ECG", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'cp50'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "CP150 ECG"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "CP150 ECG", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'cp150'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "PC-Based ECG"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "PC-Based ECG", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'cardioperfect'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'pcbased'
                    }
                }
            )

            index2.push(
                {
                    toc: {
                        id: 'stresstest'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "Spirometry"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Spirometry", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'spiroperfect'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'spirometry'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "ABPM Systems"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "ABPM Systems", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'abpm'
                    }
                }
            )
            index2.push(
                {
                    toc: {
                        id: 'abpma'
                    }
                }
            )
        }

        if(data.some(objeto => objeto.Category === "Holter ECG Systems"))
        {
            index2.push('\n');
            index2.push({
                table: {
                    widths: [530],
                    body: [
                        [
                            {border: [false, false, false, false], text: "Holter ECG Systems", fillColor: '#001A72', style: 'headerTitles'},
                        ],
                    ]
                }
            },)

            index2.push(
                {
                    toc: {
                        id: 'holter'
                    }
                }
            )
        }
    
        index2.push({text: '', pageBreak: 'after'  })        

        //Para armar el contenido de forma dinámica
        var contenido = []

        contenido.push(coverPage)

        var distributorDiscountsLayout = await distributorDiscounts.getDistributorDiscounts(discounts);
        contenido.push(distributorDiscountsLayout)

        contenido.push(index2)

        var thermsOfDistributionLayout = await thermsOfDistribution.getThermsOfDistribution();
        contenido.push(thermsOfDistributionLayout)

        if(data.some(objeto => objeto.Category === "EENT"))
        {
            var eentLayout = await eent.getEent(data);
            contenido.push(eentLayout)
        }

        if(data.some(objeto => objeto.Category === "Vision Care"))
        {
            var visionCareLayout = await visionCare.getVisionCare(data);
            contenido.push(visionCareLayout)
        }

        if(data.some(objeto => objeto.Category === "Endoscopy"))
        {
            var endoscopyLayout = await endoscopy.getEndoscopy(data);
            contenido.push(endoscopyLayout)
        }
        
        if(data.some(objeto => objeto.Category === "Lighting"))
        {
            var lightingLayout = await lighting.getLighting(data);
            contenido.push(lightingLayout)
        }

        if(data.some(objeto => objeto.Category === "Womens Health"))
        {
            var womensHealthLayout = await womensHealth.getWomensHealth(data);
            contenido.push(womensHealthLayout)
        }
        
        if(data.some(objeto => objeto.Category === "Core Blood Pressure"))
        {
            var coreBloodPressureLayout = await coreBloodPressure.getCoreBloodPressure(data);
            contenido.push(coreBloodPressureLayout)
        }

        if(data.some(objeto => objeto.Category === "Stethoscopes"))
        {
            var stethoscopesLayout = await stethoscopes.getStethoscopes(data);
            contenido.push(stethoscopesLayout)
        }

        if(data.some(objeto => objeto.Category === "Thermometry"))
        {
            var thermometryLayout = await thermometry.getThermometry(data);
            contenido.push(thermometryLayout)
        }
        
        if(data.some(objeto => objeto.Category === "Flexiport"))
        {
            var flexiportLayout = await flexiport.getFlexiport(data);
            contenido.push(flexiportLayout)
        }

        if(data.some(objeto => objeto.Category === "Connex ProBP 3400"))
        {
            var connexProBP3400Layout = await connexProBP3400.getConnexProBd3400(data);
            contenido.push(connexProBP3400Layout)
            
            var proBP2000Layout = await proBP2000.getProBP2000(data);
            contenido.push(proBP2000Layout)
        }

        if(data.some(objeto => objeto.Category === "Home Health"))
        {
            var homeHealthLayout = await homeHealth.getHomeHealth(data);
            contenido.push(homeHealthLayout)
        }

        if(data.some(objeto => objeto.Category === "Connex Spot Monitor"))
        {
            var connexSpotMonitorLayout = await connexSpotMonitor.getConnexSpotMonitor(data);
            contenido.push(connexSpotMonitorLayout)
        }

        if(data.some(objeto => objeto.Category === "CVSM"))
        {
            var cvsmLayout = await cvsm.getCvsm(data);
            contenido.push(cvsmLayout)
        }

        if(data.some(objeto => objeto.Category === "CIWS"))
        {
            var ciwsLayout = await ciws.getCiws(data);
            contenido.push(ciwsLayout)
        }

        if(data.some(objeto => objeto.Category === "CP50 ECG"))
        {
            var cp50ECGLayout = await cp50ECG.getCP50ECG(data);
            contenido.push(cp50ECGLayout)
        }

        if(data.some(objeto => objeto.Category === "CP150 ECG"))
        {
            var cp150ECGLayout = await cp150ECG.getCP150ECG(data);
            contenido.push(cp150ECGLayout)
        }

        if(data.some(objeto => objeto.Category === "PC-Based ECG"))
        {
            var pcBasedECGLayout = await pcBasedECG.getPCBasedECG(data);
            contenido.push(pcBasedECGLayout)
        }

        if(data.some(objeto => objeto.Category === "Spirometry"))
        {
            var spirometryLayout = await spirometry.getSpirometry(data);
            contenido.push(spirometryLayout)
        }

        if(data.some(objeto => objeto.Category === "ABPM Systems"))
        {
            var abpmSystemsLayout = await abpmSystems.getABPMSystems(data);
            contenido.push(abpmSystemsLayout)
        }

        if(data.some(objeto => objeto.Category === "Holter ECG Systems"))
        {
            var holterECGSystemsLayout = await holterECGSystems.getHolterECGSystems(data);
            contenido.push(holterECGSystemsLayout)
        }

        var docDefinition = { 
            pageMargins: [ 30, 6, 30, 30 ],
            footer: function(currentPage, pageCount) {

                if(currentPage > 2)
                {
                    return {
                        margin: [ 30, 0, 30, 30 ],
                        table: {
                            widths: [450,80],
                            body: [
                                [
                                    {border: [false, false, false, false], text: "Latin America and Caribbean Price List - Effective October 1, 2022 (Rev.I)", fillColor: '#001A72', style: 'footer'},
                                    {border: [false, false, false, false], text: 'Page ' + currentPage.toString() + ' of ' + pageCount, fillColor: '#001A72', style: 'footer', alignment: "right"},
                                ],
                            ]
                        }
                    }
                } 
            },
            content: contenido,
            pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
                return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
            },
            styles: {
                coverHeader: {
                    fontSize: 50,
                    bold: true,
                    color: '#fffffff',
                    background: '#001A72',
                },
                coverSubHeader: {
                    fontSize: 30,
                    bold: true,
                    color: '#001A72',
                },
                coverTitle: {
                    fontSize: 35,
                    bold: true,
                    color: '#43B02A',
                },
                coverSubTitle: {
                    fontSize: 15,
                    bold: true,
                    color: '#001A72',
                },
                coverSubTitle2: {
                    fontSize: 10,
                    bold: false,
                    color: '#001A72',
                },
                coverSubTitle3: {
                    fontSize: 10,
                    bold: true,
                    color: '#154898',
                },
                headerIndex: {
                    fontSize: 20,
                    bold: true,
                    color: '#ffffff'
                },
                headerTitles: {
                    fontSize: 17,
                    bold: true,
                    color: '#ffffff'
                },
                headerColor: {
                    fontSize: 15,
                    bold: true,
                    color: '#ffffff'
                },
                indexPage: {
                    fontSize: 17,
                    bold: true,
                    color: '#154898'
                },
                indexOptions: {
                    fontSize: 12,
                    color: '#001A72',
                    font: "DIN",
                },
                header: {
                    fontSize: 15,
                    bold: true,
                    color: '#001A72',
                },
                header2: {
                    fontSize: 12,
                    bold: true,
                    color: '#001A72',
                },
                header3: {
                    fontSize: 16,
                    bold: true,
                    color: '#001A72',
                },
                headerRed: {
                    fontSize: 15,
                    bold: true,
                    color: '#FF0000',
                },
                header4: {
                    fontSize: 15,
                    bold: false,
                    color: '#154898',
                },
                index: {
                    font: "DIN",
                    fontSize: 10,
                    color: '#001A72',
                },
                indexbackground: {
                    fontSize: 8,
                    color: '#ffffff',
                    bold: true,
                    background: '#546ce4'
                },
                textoTherms: {
                    font: "DIN",
                    fontSize: 7.7,
                    color: '#001A72',
                },
                subheader: {
                    fontSize: 13,
                    bold: true,
                    color: '#001A72',
                },
                subheader2: {
                    fontSize: 13,
                    bold: true,
                    color: '#FF0000',
                    italics: true
                },
                textotabla: {
                    font: "DIN",
                    fontSize: 8,
                    color: '#001A72',
                },
                textotablaD: {
                    font: "DIN",
                    fontSize: 8,
                    color: '#737373'
                },
                textotablaR: {
                    font: "DIN",
                    fontSize: 8,
                    color: '#FF0000',
                    bold: true
                },
                textotablabold: {
                    fontSize: 7,
                    bold: true,
                    color: '#154898',
                },
                textotablatitle: {
                    fontSize: 9,
                    bold: true,
                    color: '#154898',
                },
                textotablacolor: {
                    fontSize: 10,
                    color: '#ffffff',
                    bold: true,
                },
                textotablacolorlarge: {
                    fontSize: 12,
                    color: '#ffffff',
                    bold: true,
                },
                textotablalarge: {
                    fontSize: 12,
                    color: '#001A72',
                    font: "DIN"
                },
                footer: {
                    fontSize: 10,
                    color: '#ffffff',
                    bold: true,
                }
            }   
        };

        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(rutaPdf + nombreArchivo + '.pdf'));
        pdfDoc.end();
        return response = {
            data: {
                status: 1,
                message: "PDF generado de manera exitosa",
                pdfPath: rutaPdfIp + nombreArchivo + ".pdf"
            }
        } 
    
    }catch(error){
        console.log(error)
        return response = {
            data: {
                status: 0,
                message: "Se generó un error al intentar generar el PDF, intente de nuevo",
                pdfPath: ""
            }
        } 
    }
}

//createDocument("", "", "nombreArchivo", "zona", 2, "layouts")

module.exports = {
    createDocument: createDocument,
}