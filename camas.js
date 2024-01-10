/*var fonts = {
    Roboto: {
      normal: './fonts/CenturyGothic.ttf',
      bold: './fonts/CenturyGothicBold.ttf',
      italics: './fonts/CenturyGothicBoldItalic.ttf',
      bolditalics: './fonts/CenturyGothicBoldItalic.ttf'
    }
};*/

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

var progressa = require("./layouts/Progressa.js")
var progressaPlus = require("./layouts/ProgressaPlus.js")
var compella = require("./layouts/Compella.js")
var centrella = require("./layouts/Centrella.js")
var hillrom900 = require("./layouts/Hillrom900.js")
var hillrom900Accella = require("./layouts/Hillrom900Accella.js")
var centurisProBed = require("./layouts/CenturisProBed.js")
var theCenturisBed = require("./layouts/TheCenturisBed.js")
var t305ManualBed = require("./layouts/305ManualBed.js")
var medSurgAccesories = require("./layouts/MedSurgAccesories.js")
var reconditionatedVersaCare = require("./layouts/ReconditionatedVersaCare.js")
var hillrom100LowBed = require("./layouts/Hillrom100LowBed.js")
var hillromResidentLongTerm = require("./layouts/HillromResidentLongTerm.js")
var affinity4BirthingBed = require("./layouts/Affinity4BirthingBed.js")
var therapySurfaces = require("./layouts/TherapySurfaces.js")
var synthetoSurfaces = require("./layouts/SynthetoSurfaces.js")
var accumax = require("./layouts/Accumax.js")
var poweredSurfaces = require("./layouts/PoweredSurfaces.js")
var stretchers = require("./layouts/Stretchers.js")
var catoniClassic = require("./layouts/CatoniClassic.js")
var catoniStyle = require("./layouts/CatoniStyle.js")
var catoniBedSide = require("./layouts/CatoniBedside.js")
var coloursCatoni = require("./layouts/ColoursCatoni.js")
var overbedTables = require("./layouts/OverbedTables.js")
var transportChairs = require("./layouts/TransportChairs.js")
var hillromColoursCollection = require("./layouts/HillromColoursCollection.js")
var coatedFabricColours = require("./layouts/CoatedFabricColours.js")
var seatingFurniture = require("./layouts/SeatingFurniture.js")
var sleeperSofa = require("./layouts/SleeperSofa.js")
var sleeperChair = require("./layouts/SleeperChair.js")
var overbedTables2 = require("./layouts/OverbedTables2.js")
var overbedTables3 = require("./layouts/OverbedTables3.js")
var bedsideCabinets = require("./layouts/BedsideCabinets.js")
var transferBoard = require("./layouts/TransferBoard.js")
var thermofoilOptions = require("./layouts/ThermofoilOptions.js");
var t1048BariatricBed = require("./layouts/1048BariatricBed.js");
const { version } = require('os');

async function createDocument(rutaPdf, rutaPdfIp, nombreArchivo, zona, pdfVersion, layouts)
{
    try {
        /*var progressaLayout = await progressa.getProgressa()
        var compellaLayout = await compella.getCompella()
        var centrellaLayout = await centrella.getCentrella()
        var hillroom900Layout = await hillrom900.getHillrom900()
        var hillroom900AccellaLayout = await hillrom900Accella.getHillrom900Accella()
        var centurisProBedLayout = await centurisProBed.getCenturisProBed()
        var theCenturisBedLayout = await theCenturisBed.getTheCenturisBed()
        var t305ManualBedLayout = await t305ManualBed.get305ManualBed()
        var medSurgAccesoriesLayout = await medSurgAccesories.getMedSurgAccesories()
        var reconditionatedVersaCareLayout = await reconditionatedVersaCare.getReconditionatedVersaCare()
        var hillrom100LowBedLayout = await hillrom100LowBed.getHilrom100LowBed()
        var hillromResidentLongTermLayout = await hillromResidentLongTerm.getHillromResidentLongTerm()
        var affinity4BirthingBedLayout = await affinity4BirthingBed.getAffinity4BirthingBed()
        var therapySurfacesLayout = await therapySurfaces.getTherapySurfaces()
        var accumaxLayout = await accumax.getAccumax()
        var poweredSurfacesLayout = await poweredSurfaces.getPoweredSurfaces()
        var stretchersLayout = await stretchers.getStretchers()
        var catoniClassicLayout = await catoniClassic.getCatoni()
        var catoniStyleLayout = await catoniStyle.getCatoniStyle()
        var catoniBedSideLayout = await catoniBedSide.getCatoniBedSide()
        var coloursCatoniLayout = await coloursCatoni.getColoursCatoni()
        var overbedTablesLayout = await overbedTables.getOverbedTables()
        var transportChairsLayout = await transportChairs.getTransportChairs()
        var hillromColoursCollectionLayout = await hillromColoursCollection.getHillromColoursCollection()
        var coatedFabricColoursLayout = await coatedFabricColours.getCoatedFabricColours()
        var seatingFurnitureLayout = await seatingFurniture.getSeatingFurniture()
        var sleeperSofaLayout = await sleeperSofa.getSleeperSofa()
        var sleeperChairLayout = await sleeperChair.getSleeperChair()
        var overbedTables2Layout = await overbedTables2.getOverbedTables()
        var overbedTables3Layout = await overbedTables3.getOverbedTables()
        var bedsideCabinetsLayout = await bedsideCabinets.getBedsideCabinets()
        var transferBoardLayout = await transferBoard.getTransferBoard()
        var thermofoilOptionsLayout = await thermofoilOptions.getThermofoilOptions()*/

        const fecha = new Date();
        const anio = fecha.getFullYear()
        fecha.toLocaleDateString()

        var coverPage = [
            //'\n\n',
            { image: "images/Portada-Camas.png", width: 620, height: 700, alignment: 'center'},
            //'\n\n\n\n\n\n\n\n\n\n\n',
            //{ image: "images/Hillroom.png", width: 120, height: 47, alignment: 'center'},
            '\n\n\n',
            { text: 'LATAM PRICEBOOK ' + /*anio*/ "2024", style: 'headerCover', alignment: "center" },
            { text: 'USD - ' + zona, style: 'header2', alignment: "center" },
            //{ image: "images/Cover.png", width: 400, height: 250, alignment: 'center'},
            //{ text: 'www.hillrom.com', style: 'header', alignment: "center" },
            {text: '', pageBreak: 'after'  },
        ]

        var index2 = []
        index2.push({text: 'TABLE OF CONTENTS', style: 'headerindex', alignment: 'center' })
        index2.push( {
            columns: [
                [
                    { text: 'HOSPITAL BEDS', style: 'headerindex', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'headerindex', alignment: 'right'}
                ]
            ]
        })

        var medSurgFlag = true
        var longTermFlag = true
        var supportSurfacesFlag = true
        var foamFlag = true
        var frFurnitureFlag = true
        var coloursFlag = true
        var usFurnitureFlag = true
        var seatingFurnitureFlag = true
        var healthcareFurnitureFlag = true

        for(var i=0; i< layouts.length; i++)
        {
            if(layouts[i].Id_Layout === "HOB-CCI-PRP7500")
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Critical Care/ICU', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                },)

                index2.push(
                    {
                        toc: {
                            id: 'progressa',
                            style: { fontSize: 14 }
                        }
                    }
                )

            }
            if(layouts[i].Id_Layout === "HOB-CCI-PRP7501")
            {

                index2.push(
                    {
                        toc: {
                            id: 'progressaplus',
                        }
                    }
                )

            }
            else if(layouts[i].Id_Layout === "HOB-BAR-CP7800A")
            {
                index2.push(
                    {
                        table: {
                            widths: [530],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Bariatric', fillColor: '#154898', style: 'indexbackground'},
                                ],
                            ]
                        }
                    }
                )

                index2.push(
                    {
                        toc: {
                            id: 'compella'
                        }
                    }
                )

                index2.push(
                    {
                        toc: {
                            id: '1048BariatricBed',
                        }
                    }
                )

                /*else if(layouts[i].Id_Layout === "HOB-1048")
                {
                    index2.push(
                        {
                            toc: {
                                id: '1048BariatricBed',
                            }
                        }
                    )
                }*/
            }
            else if((layouts[i].Id_Layout === "HOB-MES-CENTMB" || layouts[i].Id_Layout === "HOB-MES-HIRO900" || layouts[i].Id_Layout === "HOB-MES-ACCELLA"
            || layouts[i].Id_Layout === "HOB-MES-CENTURI" || layouts[i].Id_Layout === "HOB-MES-CENP750" || layouts[i].Id_Layout === "HOB-MES-305MABE"
            || layouts[i].Id_Layout === "ACCE-MES" || layouts[i].Id_Layout === "HOB-MES-RVP3200") && medSurgFlag === true)
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Med-Surg', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })

                index2.push({
                    toc: {
                        id: 'centrella',
                    }
                })
                index2.push({
                    toc: {
                        id: 'hillrom900',
                    }
                })
                index2.push({
                    toc: {
                        id: 'hillroom900Accella',
                    }
                })
                index2.push({
                    toc: {
                        id: 'centurisProBed',
                    }
                })
                index2.push({
                    toc: {
                        id: 'theCenturisBed',
                    }
                })
                index2.push({
                    toc: {
                        id: '305ManualBed',
                    }
                })
                index2.push({
                    toc: {
                        id: 'medSurgAccesories',
                    }
                })
                index2.push({
                    toc: {
                        id: 'reconditionatedVersaCare',
                    }
                })

                medSurgFlag = false
            }
            else if((layouts[i].Id_Layout === "HOB-LTC-HR100LB" || layouts[i].Id_Layout === "HOB-LTC-HRRP870") && longTermFlag === true)
            {
                index2.push(
                    {
                        table: {
                            widths: [530],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Long-Term Care', fillColor: '#154898', style: 'indexbackground'},
                                ],
                            ]
                        }
                    }
                )

                index2.push( {
                    toc: {
                        id: 'hillrom100LowBed',
                    }
                })
        
                index2.push({
                    toc: {
                        id: 'hillromResident',
                    }
                })

                longTermFlag = false
            }
            else if(layouts[i].Id_Layout === "HOB-MAT-AFF4P37")
            {
                index2.push(
                    {
                        table: {
                            widths: [530],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Maternity', fillColor: '#154898', style: 'indexbackground'},
                                ],
                            ]
                        }
                    }
                )

                index2.push(
                    {
                        toc: {
                            id: 'affinity4BirthingBed',
                        }
                    }
                )
            }
            else if((layouts[i].Id_Layout === "SURFACES-THESUR" || layouts[i].Id_Layout === "SURFACES-ACCUMAX" ||  layouts[i].Id_Layout === "SURFACES-POWERED") && supportSurfacesFlag === true)
            {
                index2.push(
                    {
                        columns: [
                            [
                                { text: 'SUPPORT SURFACES', style: 'headerindex', alignment: 'left'}
                            ],
                            [
                                { text: 'Page', style: 'headerindex', alignment: 'right'}
                            ]
                        ]
                    }
                )

                supportSurfacesFlag = false
            }
            else if((layouts[i].Id_Layout === "SURFACES-THESUR" || layouts[i].Id_Layout === "SURFACES-ACCUMAX") &&  foamFlag === true)
            {

                index2.push(
                    {
                        table: {
                            widths: [530],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Foam', fillColor: '#154898', style: 'indexbackground'},
                                ],
                            ]
                        }
                    }
                )

                index2.push({
                    toc: {
                        id: 'therapySurfaces',
                    }
                })
        
                index2.push({
                    toc: {
                        id: 'therapySurfaces2',
                    }
                })

                index2.push({
                    toc: {
                        id: 'synthetosurfaces',
                    }
                })
        
                index2.push(
                    {
                        toc: {
                            id: 'accumax',
                        }
                    }
                )

                foamFlag = false
            }
            else if(layouts[i].Id_Layout === "SURFACES-POWERED")
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Powered', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })

                index2.push(
                    {
                        toc: {
                            id: 'poweredSurfaces',
                        }
                    }
                )
            }
            else if(layouts[i].Id_Layout === "STR-STR-STP80XX")
            {
                index2.push({
                    columns: [
                        [
                            { text: 'STRETCHERS', style: 'headerindex', alignment: 'left'}
                        ],
                        [
                            { text: 'Page', style: 'headerindex', alignment: 'right'}
                        ]
                    ]
                })
                index2.push({
                    toc: {
                        id: 'stretchers',
                    }
                })
            }
            else if((layouts[i].Id_Layout === "FRH-MES-CH700B4" || layouts[i].Id_Layout === "FRH-MES-CH700B3" || layouts[i].Id_Layout === "FRH-MES-SCH770A" || layouts[i].Id_Layout === "FRH-MES-OTTA270" || layouts[i].Id_Layout === "FRH-TRC-TRCHANA" || layouts[i].Id_Layout === "FRH-MES-HILLRCOL" || layouts[i].Id_Layout === "COAFABRCOLO") && frFurnitureFlag === true)
            {
                index2.push({
                    columns: [
                        [
                            { text: 'FR FURNITURE', style: 'headerindex', alignment: 'left'}
                        ],
                        [
                            { text: 'Page', style: 'headerindex', alignment: 'right'}
                        ]
                    ]
                })

                index2.push({
                    toc: {
                        id: 'catoni',
                    }
                })

                frFurnitureFlag = false
            }
            else if(layouts[i].Id_Layout === "FRH-MES-OTTA270")
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Tables', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })

                index2.push({
                    toc: {
                        id: 'overbedTables',
                    }
                })
            }
            else if(layouts[i].Id_Layout === "FRH-TRC-TRCHANA")
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Transport Chairs', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })
           
                index2.push(
                    {
                        toc: {
                            id: 'transportChairs',
                        }
                    }
                )
            }
            else if((layouts[i].Id_Layout === "FRH-MES-HILLRCOL" || layouts[i].Id_Layout === "COAFABRCOLO") && coloursFlag=== true)
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Colours & Fabrics', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })
    
                index2.push(
                    {
                        toc: {
                            id: 'hillromColoursCollection',
                        }
                    }
                )
        
                index2.push({
                    toc: {
                        id: 'coatedFabricColours',
                        title: { text: "", style: "indexText"}
                    }
                })

                coloursFlag = false
            }
            else if((layouts[i].Id_Layout === "UHF-REC-SEAFURN" || layouts[i].Id_Layout === "UHF-SEF-SLEESOFA" || layouts[i].Id_Layout === "UHF-SEF-SLEECHAI" ||
             layouts[i].Id_Layout === "UHF-OVT-OBTAOC" || layouts[i].Id_Layout === "UHF-BSC-BEDSPRE" || layouts[i].Id_Layout === "UHF-OVT-P0094XX" || layouts[i].Id_Layout === "FRH-MES-THERMOFOIL") && usFurnitureFlag === true)
            {
                index2.push(
                    {
                        columns: [
                            [
                                { text: 'US FURNITURE', style: 'headerindex', alignment: 'left'}
                            ],
                            [
                                { text: 'Page', style: 'headerindex', alignment: 'right'}
                            ]
                        ]
                    }
                )
                usFurnitureFlag = false
            }
            else if((layouts[i].Id_Layout === "UHF-REC-SEAFURN" || layouts[i].Id_Layout === "UHF-SEF-SLEESOFA" || layouts[i].Id_Layout === "UHF-SEF-SLEECHAI") && seatingFurnitureFlag === true)
            {
                seatingFurnitureFlag = false
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Seating Furniture', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })
    
                index2.push(
                    {
                        toc: {
                            id: 'seatingFurniture',
                            title: { text: "", style: "indexText"}
                        }
                    }
                )

                seatingFurnitureFlag = false
            }
            else if((layouts[i].Id_Layout === "UHF-OVT-OBTAOC" || layouts[i].Id_Layout === "UHF-BSC-BEDSPRE" || layouts[i].Id_Layout === "UHF-OVT-P0094XX") && healthcareFurnitureFlag === true)
            {
                index2.push({
                    table: {
                        widths: [530],
                        body: [
                            [
                                {border: [false, false, false, false], text: 'Healthcare Furniture', fillColor: '#154898', style: 'indexbackground'},
                            ],
                        ]
                    }
                })
            
                index2.push(
                    {
                        toc: {
                            id: 'overbedTablesArtOfCare',
                            title: { text: "", style: "indexText"}
                        }
                    }
                )

                index2.push(
                    {
                        toc: {
                            id: 'bedsideCabinets',
                            title: { text: "", style: "indexText"}
                        }
                    }
                )

                index2.push(
                    {
                        toc: {
                            id: 'overbedTables2',
                            title: { text: "", style: "indexText"}
                        }
                    }
                )
                healthcareFurnitureFlag = false
            }
            else if(layouts[i].Id_Layout === "OTR-TRANBO-TRANBO")
            {
                index2.push({
                    columns: [
                        [
                            { text: 'OTHERS', style: 'headerindex', alignment: 'left'}
                        ],
                        [
                            { text: 'Page', style: 'headerindex', alignment: 'right'}
                        ]
                    ]
                })
                index2.push(
                    {
                        toc: {
                            id: 'transferBoard',
                        }
                    }
                )
            }
            
        }

        index2.push({text: '', pageBreak: 'after'  })
       
        var coloursCatoniLayout = await coloursCatoni.getColoursCatoni()

        //Para armar el contenido de forma dinámica
        var contenido = []
        contenido.push(coverPage)
        contenido.push(index2)
        
        //console.log(layouts)

        for(var i=0; i<layouts.length; i++)
        {
            if(layouts[i].Id_Layout === "HOB-CCI-PRP7500")
            {
                var progressaLayout = await progressa.getProgressa()
                contenido.push(progressaLayout)
            }
            if(layouts[i].Id_Layout === "HOB-CCI-PRP7501")
            {
                var progressaPlusLayout = await progressaPlus.getProgressaPlus()
                contenido.push(progressaPlusLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-BAR-CP7800A")
            {
                var compellaLayout = await compella.getCompella()
                contenido.push(compellaLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-CENTMB")
            {
                var centrellaLayout = await centrella.getCentrella()
                contenido.push(centrellaLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-HIRO900")
            {
                var hillroom900Layout = await hillrom900.getHillrom900()
                contenido.push(hillroom900Layout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-ACCELLA")
            {
                var hillroom900AccellaLayout = await hillrom900Accella.getHillrom900Accella()
                contenido.push(hillroom900AccellaLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-CENTURI")
            {
                var centurisProBedLayout = await centurisProBed.getCenturisProBed()
                contenido.push(centurisProBedLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-CENP750")
            {
                var theCenturisBedLayout = await theCenturisBed.getTheCenturisBed()
                contenido.push(theCenturisBedLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-305MABE")
            {
                var t305ManualBedLayout = await t305ManualBed.get305ManualBed()
                contenido.push(t305ManualBedLayout)
            }
            else if(layouts[i].Id_Layout === "ACCE-MES")
            {
                var medSurgAccesoriesLayout = await medSurgAccesories.getMedSurgAccesories()
                contenido.push(medSurgAccesoriesLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MES-RVP3200")
            {
                var reconditionatedVersaCareLayout = await reconditionatedVersaCare.getReconditionatedVersaCare()
                contenido.push(reconditionatedVersaCareLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-LTC-HR100LB")
            {
                var hillrom100LowBedLayout = await hillrom100LowBed.getHilrom100LowBed()
                contenido.push(hillrom100LowBedLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-LTC-HRRP870")
            {
                var hillromResidentLongTermLayout = await hillromResidentLongTerm.getHillromResidentLongTerm()
                contenido.push(hillromResidentLongTermLayout)
            }
            else if(layouts[i].Id_Layout === "HOB-MAT-AFF4P37")
            {
                var affinity4BirthingBedLayout = await affinity4BirthingBed.getAffinity4BirthingBed()
                contenido.push(affinity4BirthingBedLayout)
            }
            else if(layouts[i].Id_Layout === "SURFACES-THESUR")
            {
                var therapySurfacesLayout = await therapySurfaces.getTherapySurfaces()
                contenido.push(therapySurfacesLayout)
            }
            else if(layouts[i].Id_Layout === "SURFACES-THE2SYNT")
            {
                var synthetoSurfacesLayout = await synthetoSurfaces.getSynthetoSurfaces()
                contenido.push(synthetoSurfacesLayout)
            }
            else if(layouts[i].Id_Layout === "SURFACES-ACCUMAX")
            {
                var accumaxLayout = await accumax.getAccumax()
                contenido.push(accumaxLayout)
            }
            else if(layouts[i].Id_Layout === "SURFACES-POWERED")
            {
                var poweredSurfacesLayout = await poweredSurfaces.getPoweredSurfaces()
                contenido.push(poweredSurfacesLayout)
            }
            else if(layouts[i].Id_Layout === "STR-STR-STP80XX")
            {
                var stretchersLayout = await stretchers.getStretchers()
                contenido.push(stretchersLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-CH700B4")
            {
                var catoniClassicLayout = await catoniClassic.getCatoni()
                contenido.push(catoniClassicLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-CH700B3")
            {
                var catoniStyleLayout = await catoniStyle.getCatoniStyle()
                contenido.push(catoniStyleLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-SCH770A")
            {
                var catoniBedSideLayout = await catoniBedSide.getCatoniBedSide()
                contenido.push(catoniBedSideLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-OTTA270")
            {
                var overbedTablesLayout = await overbedTables.getOverbedTables()
                contenido.push(overbedTablesLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-TRC-TRCHANA")
            {
                var transportChairsLayout = await transportChairs.getTransportChairs()
                contenido.push(transportChairsLayout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-HILLRCOL")
            {
                var hillromColoursCollectionLayout = await hillromColoursCollection.getHillromColoursCollection()
                contenido.push(hillromColoursCollectionLayout)
            }
            else if(layouts[i].Id_Layout === "COAFABRCOLO")
            {
                var coatedFabricColoursLayout = await coatedFabricColours.getCoatedFabricColours()
                contenido.push(coatedFabricColoursLayout)
            }
            else if(layouts[i].Id_Layout === "UHF-REC-SEAFURN")
            {
                var seatingFurnitureLayout = await seatingFurniture.getSeatingFurniture()
                contenido.push(seatingFurnitureLayout)
            }
            else if(layouts[i].Id_Layout === "UHF-SEF-SLEESOFA")
            {
                var sleeperSofaLayout = await sleeperSofa.getSleeperSofa()
                contenido.push(sleeperSofaLayout)
            }
            else if(layouts[i].Id_Layout === "UHF-SEF-SLEECHAI")
            {
                var sleeperChairLayout = await sleeperChair.getSleeperChair()
                contenido.push(sleeperChairLayout)
            }
            else if(layouts[i].Id_Layout === "UHF-OVT-OBTAOC")
            {
                var overbedTables2Layout = await overbedTables2.getOverbedTables()
                contenido.push(overbedTables2Layout)
            }
            else if(layouts[i].Id_Layout === "UHF-BSC-BEDSPRE")
            {
                var bedsideCabinetsLayout = await bedsideCabinets.getBedsideCabinets()
                contenido.push(bedsideCabinetsLayout)
            }
            else if(layouts[i].Id_Layout === "UHF-OVT-P0094XX")
            {
                var overbedTables3Layout = await overbedTables3.getOverbedTables()
                contenido.push(overbedTables3Layout)
            }
            else if(layouts[i].Id_Layout === "FRH-MES-THERMOFOIL")
            {
                var thermofoilOptionsLayout = await thermofoilOptions.getThermofoilOptions()
                contenido.push(thermofoilOptionsLayout)
            }
            else if(layouts[i].Id_Layout === "OTR-TRANBO-TRANBO")
            {
                var transferBoardLayout = await transferBoard.getTransferBoard();
                contenido.push(transferBoardLayout);
            }
            else if(layouts[i].Id_Layout === "HOB-1048")
            {
                var t1048BariatricBedLayout = await t1048BariatricBed.get1048BariatricBed();
                contenido.push(t1048BariatricBedLayout);
            }
        }

        var docDefinition = { 
            pageMargins: [ 30, 6, 30, 30 ],
            header: function(currentPage) 
            {
                if(currentPage > 2){
                    return {
                        margin: [30, 10],
                        columns: [
                            {image: "images/BaxterEncabezado2.png", width: 537, height: 30, alignment: "center"},
                        ]
                    }
                }
            },
            footer: function(currentPage, pageCount) {
                if(currentPage > 2)
                {
                    return {
                        margin: [ 30, 0, 30, 30 ],
                        columns: [
                            {
                                text: 'Hillrom reserves the right to make changes\nwithout notice in design, specifications, and models.', style: 'footer', alignment: 'left'
                            },
                            {
                                text: 'Page ' + currentPage.toString() + ' of ' + pageCount, style: 'footer', alignment: 'center'
                            },
                            {
                                text: '00 - ' + zona + " - " + /*anio*/ "2024" + " Capital - IPL-USD V" + pdfVersion + " (" + /*anio*/ "2024" + ")", style: 'footer', alignment: 'right'
                            },
                        ]
                    }
                } 
            },
            content: contenido,
            pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
                return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
            },
            styles: {
                indexText: {
                    fontSize: 7,
                },
                header: {
                    fontSize: 15,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                headerCover: {
                    fontSize: 22,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                header2: {
                    fontSize: 22,
                    color: '#001A72',
                    font: "DIN",
                },
                headerindex: {
                    fontSize: 13,
                    bold: true,
                    color: '#001A72',
                },
                index: {
                    fontSize: 10,
                    color: '#001A72',
                    font: "DIN",
                },
                indexbackground: {
                    fontSize: 11,
                    color: '#ffffff',
                    bold: true,
                    background: '#154898'
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
                textosubrayado: {
                    fontSize: 9,
                },
                textolista: {
                    fontSize: 7,
                    font: "DIN",
                },
                textolista2: {
                    fontSize: 8,
                },
                textotabla: {
                    fontSize: 7.5,
                    font: "DIN",
                },
                textotablabold: {
                    fontSize: 7,
                    bold: true,
                    color: '#001A72',
                },
                textotablaboldlarge: {
                    fontSize: 9,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                textotablatitle: {
                    fontSize: 9,
                    bold: true,
                    color: '#154898',
                    font: "DIN",
                },
                textotablaboldblack: {
                    fontSize: 7,
                    bold: true,
                    color: '#000000',
                    font: "DIN",
                },
                textotablaboldblacklarge: {
                    fontSize: 9,
                    bold: true,
                    color: '#000000',
                    font: "DIN",
                },
                textotablacolor: {
                    fontSize: 7.5,
                    color: '#ffffff',
                    bold: true,
                    font: "DIN",
                },
                textotablacolornormal: {
                    fontSize: 7,
                    color: '#ffffff',
                    font: "DIN",
                },
                textotablacolorlarge: {
                    fontSize: 9,
                    color: '#ffffff',
                    bold: true,
                    font: "DIN",
                },
                textotablacatoni: {
                    fontSize: 6.2,
                    font: "DIN",
                },
                textotablaboldcatoni: {
                    fontSize: 5.5,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                textotablaboldlargecatoni: {
                    fontSize: 7,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                textotablaboldblackcatoni: {
                    fontSize: 5.5,
                    bold: true,
                    color: '#000000',
                    font: "DIN",
                },
                textotablacolorcatoni: {
                    fontSize: 5.5,
                    color: '#ffffff',
                    bold: true,
                    font: "DIN",
                },
                textotablacentrella: {
                    fontSize: 5,
                    font: "DIN",
                },
                textotablaboldcentrella: {
                    fontSize: 5,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                textotablaboldlargecentrella: {
                    fontSize: 6,
                    bold: true,
                    color: '#001A72',
                    font: "DIN",
                },
                textotablaboldblackcentrella: {
                    fontSize: 5,
                    bold: true,
                    color: '#000000',
                    font: "DIN",
                },
                textotablacolorcentrella: {
                    fontSize: 5,
                    color: '#ffffff',
                    bold: true,
                    font: "DIN",
                },
                parrafo: {
                    fontSize: 8,
                    font: "DIN",
                },
                parrafoBold: {
                    fontSize: 8,
                    bold: true,
                    font: "DIN",
                },
                parrafoItalic: {
                    fontSize: 8,
                    italics: true,
                },
                footer: {
                    fontSize: 6,
                    font: "DIN",
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 8
                },
                minispace: {
                    fontSize: 3
                }
            },
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

//createDocument()

function isProgressa(layout) {
    return layout.Id_Layout === 'HOB-CCI-PRP7500';
}

function isCompella(layout) {
    return layout.Id_Layout === 'HOB-BAR-CP7800A';
}

function isCentrella(layout) {
    return layout.Id_Layout === 'HOB-MES-CENTMB';
}

function isHillrom9000(layout) {
    return layout.Id_Layout === 'HOB-MES-HIRO900';
}

function isAccella(layout) {
    return layout.Id_Layout === 'HOB-MES-ACCELLA';
}

function isCenturis(layout) {
    return layout.Id_Layout === 'HOB-MES-CENTURI';
}

function isCenturisPro(layout) {
    return layout.Id_Layout === 'HOB-MES-CENP750';
}

function isManualBed(layout) {
    return layout.Id_Layout === 'HOB-MES-305MABE';
}

function isMedSurg(layout) {
    return layout.Id_Layout === 'ACCE-MES';
}

function isReconditionated(layout) {
    return layout.Id_Layout === 'HOB-MES-RVP3200';
}

function isHillrom100(layout) {
    return layout.Id_Layout === 'HOB-LTC-HR100LB';
}

function isHillromResident(layout) {
    return layout.Id_Layout === 'HOB-LTC-HRRP870';
}

function isAffinity(layout) {
    return layout.Id_Layout === 'HOB-MAT-AFF4P37';
}

function isTherapy(layout) {
    return layout.Id_Layout === 'SURFACES-THESUR';
}

function isAccumax(layout) {
    return layout.Id_Layout === 'SURFACES-ACCUMAX';
}

function isPoweredSurfaces(layout) {
    return layout.Id_Layout === 'SURFACES-POWERED';
}

function isStretchers(layout) {
    return layout.Id_Layout === 'STR-STR-STP80XX';
}

function isCatoniClassic(layout) {
    return layout.Id_Layout === 'FRH-MES-CH700B4';
}

function isCatoniStyle(layout) {
    return layout.Id_Layout === 'FRH-MES-CH700B3';
}

function isCatoniBedside(layout) {
    return layout.Id_Layout === 'FRH-MES-SCH770A';
}

function isOverbedTable(layout) {
    return layout.Id_Layout === 'FRH-MES-OTTA270';
}

function isTransportChairs(layout) {
    return layout.Id_Layout === 'FRH-TRC-TRCHANA';
}

function isOverbedTable2(layout) {
    return layout.Id_Layout === 'UHF-OVT-P0094XX';
}

function isTransferBoard(layout) {
    return layout.Id_Layout === 'OTR-TRANBO-TRANBO';
}

function isHillromColours(layout) {
    return layout.Id_Layout === 'FRH-MES-HILLRCOL';
}

function isSeatingFurniture(layout) {
    return layout.Id_Layout === 'UHF-REC-SEAFURN';
}

function isSleeperSofa(layout) {
    return layout.Id_Layout === 'UHF-SEF-SLEESOFA';
}

function isSleeperChair(layout) {
    return layout.Id_Layout === 'UHF-SEF-SLEECHAI';
}

function isOverbedTableArt(layout) {
    return layout.Id_Layout === 'UHF-OVT-OBTAOC';
}

function isBedside(layout) {
    return layout.Id_Layout === 'UHF-BSC-BEDSPRE';
}

function isCoatedFabric(layout) {
    return layout.Id_Layout === 'COAFABRCOLO';
}

function isThermofoil(layout) {
    return layout.Id_Layout === 'FRH-MES-THERMOFOIL';
}

module.exports = {
    createDocument: createDocument,
}