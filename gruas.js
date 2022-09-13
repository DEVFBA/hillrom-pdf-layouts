var fonts = {
    Roboto: {
      normal: './fonts/CenturyGothic.ttf',
      bold: './fonts/CenturyGothicBold.ttf',
      italics: './fonts/CenturyGothic.ttf',
      bolditalics: './fonts/CenturyGothic.ttf'
    }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');
var ruta = "/Users/alexishernandezolvera/Desktop/GTC/PROYECTOS/hillrom-pdf-layouts/"

var mobileLifts = require("./layoutsGruas/MobileLifts.js")
var viking = require("./layoutsGruas/Viking.js")
var sabina = require("./layoutsGruas/Sabina.js")
var mobileLiftsAccesories = require("./layoutsGruas/MobileLiftsAccesories.js")
var overheadLifts = require("./layoutsGruas/OverheadLifts.js")
var railSystemH70 = require("./layoutsGruas/RailSystemH70.js")
var railSystemH100 = require("./layoutsGruas/RailSystemH100.js")
var railSystemH140 = require("./layoutsGruas/RailSystemH140.js")
var railSystemH160 = require("./layoutsGruas/RailSystemH160.js")
var railSystemEndCovers = require("./layoutsGruas/RailSystemEndCovers.js")
var assemblyParts = require("./layoutsGruas/AssemblyParts.js")
var railSwitchSystem = require("./layoutsGruas/RailSwitchSystem.js")
var freespanStraightRail = require("./layoutsGruas/FreespanStraightRail.js")
var freespanTraverse = require("./layoutsGruas/FreespanTraverse.js")
var freespanUltraTwin = require("./layoutsGruas/FreespanUltraTwin.js")
var freeStand = require("./layoutsGruas/FreeStand.js")
var freeSpirit = require("./layoutsGruas/FreeSpirit.js")
var liftingAccesories = require("./layoutsGruas/LiftingAccesories.js")
var slingsForChildren = require("./layoutsGruas/SlingsForChildren.js")
var slingsForAdults = require("./layoutsGruas/SlingsForAdults.js")
var accesoriesForSlings = require("./layoutsGruas/AccesoriesForSlings.js")
var likoOriginalHighback = require("./layoutsGruas/LikoHighback.js")
var likoConfortsling = require("./layoutsGruas/LikoConfortSling.js")
var likoMastervest = require("./layoutsGruas/LikoMastervest.js")
var likoLiftPants = require("./layoutsGruas/LikoLiftPants.js")
var likoStretchers = require("./layoutsGruas/LikoStretchers.js")
var likoFlexostretch = require("./layoutsGruas/LikoFlexostretch.js")
var reposheet = require("./layoutsGruas/Reposheet.js")
var manualAIDS = require("./layoutsGruas/ManualAids.js");
const curtainsystem = require('./controllers/curtainsystem.js');

async function createDocument(rutaPdf, rutaPdfIp, nombreArchivo, zona, pdfVersion, layouts, pdfZone)
{
    try{
        /*var mobileLiftsLayout = await mobileLifts.getMobileLifts(pdfZone)
        var vikingLayout = await viking.getViking(pdfZone)
        var sabinaLayout = await sabina.getSabina(pdfZone)
        var mobileLiftsAccesoriesLayout = await mobileLiftsAccesories.getMobileLiftAccesories(pdfZone)
        var overheadLiftsLayout = await overheadLifts.getOverheadLifts(pdfZone)
        var railSystemH70Layout = await railSystemH70.getRailSystemH70(pdfZone)
        var railSystemH100Layout = await railSystemH100.getRailSystemH100(pdfZone)
        var railSystemH140Layout = await railSystemH140.getRailSystemH140(pdfZone)
        var railSystemH160Layout = await railSystemH160.getRailSystemH160(pdfZone)
        var railSystemEndCoversLayout = await railSystemEndCovers.getRailSystemEndCovers(pdfZone)
        var assemblyPartsLayout = await assemblyParts.getAssemblyParts(pdfZone)
        var railSwitchSystemLayout = await railSwitchSystem.getRailSwitchSystem(pdfZone)
        var freespanStraightRailLayout = await freespanStraightRail.getFreespanStraightRail(pdfZone)
        var freespanTraverseLayout = await freespanTraverse.getFreespanTraverse(pdfZone)
        var freespanUltraTwinLayout = await freespanUltraTwin.getFreespanUltraTwin(pdfZone)
        var freeStandLayout = await freeStand.getFreeStand(pdfZone)
        var freeSpiritLayout = await freeSpirit.getFreeSpirit(pdfZone)
        var liftingAccesoriesLayout = await liftingAccesories.getLiftingAccesories(pdfZone)
        var slingsForChildrenLayout = await slingsForChildren.getSlingsForChildren(pdfZone)
        var slingsForAdultsLayout = await slingsForAdults.getSlingsForAdults(pdfZone)
        var accesoriesForSlingsLayout = await accesoriesForSlings.getAccesoriesForSlings(pdfZone)
        var likoOriginalHighbackLayout = await likoOriginalHighback.getLikoOriginalHighback(pdfZone)
        var likoConfortslingLayout = await likoConfortsling.getLikoConfortsling(pdfZone)
        var likoMastervestLayout = await likoMastervest.getLikoMastervest(pdfZone)
        var likoLiftPantsLayout = await likoLiftPants.getLikoLiftPants(pdfZone)
        var likoStretchersLayout = await likoStretchers.getLikoStretchers(pdfZone)
        var likoFlexostretchLayout = await likoFlexostretch.getLikoFlexostretch(pdfZone)
        var reposheetLayout = await reposheet.getReposheet(pdfZone)
        var manualAIDSLayout = await manualAIDS.getManualAIDS(pdfZone)*/

        const fecha = new Date();
        const anio = fecha.getFullYear()
        fecha.toLocaleDateString()

        console.log(layouts)

        var coverPage = [
            '\n\n',
            { image: "images/BaxterEncabezado.png", width: 570, height: 30, alignment: 'center'},
            '\n\n\n\n\n\n\n\n\n\n\n',
            { image: "images/Hillroom.png", width: 120, height: 47, alignment: 'center'},
            { text: 'LIKO PRICEBOOK 2022', style: 'header', alignment: "center" },
            { text: 'USD - ' + zona, style: 'header', alignment: "center" },
            { image: "images/Cover2.png", width: 400, height: 250, alignment: 'center'},
            { text: 'www.hillrom.com', style: 'header', alignment: "center" },
            {text: '', pageBreak: 'after'  },
        ]

        var index2 = []
        
        index2.push({text: 'TABLE OF CONTENTS', style: 'header', alignment: 'center' })
        index2.push({
            columns: [
                [
                    { text: 'MOBILE LIFTS SYSTEMS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        })

        if(layouts.find(isGolvo) !== undefined || layouts.find(isViking) !== undefined || layouts.find(isSabina) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Mobile Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'golvo',
            }
        })

        index2.push({
            toc: {
                id: 'viking',
            }
        })

        index2.push({
            toc: {
                id: 'sabina',
            }
        })

        index2.push( {
            toc: {
                id: 'safetyvestmod91',
            }
        })

        index2.push({
            toc: {
                id: 'safetyvestmod93',
            }
        })

        index2.push({
            toc: {
                id: 'confortvestmod95',
            }
        })

        index2.push({
            toc: {
                id: 'safetyvestmod911',
            }
        })

        if(layouts.find(isMobileLift) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Accessories for Mobile Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'accesoriesmobilelifts',
            }
        })

        index2.push({text: "\n", style: "textotabla"})

        index2.push({
            columns: [
                [
                    { text: 'OVERHEAD LIFTS SYSTEMS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        })

        if(layouts.find(isLikorall) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Overhead Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        } 
        index2.push({
            toc: {
                id: 'likoral',
            }
        })

        index2.push({
            toc: {
                id: 'accesoriesforlikoral',
            }
        })

        if(layouts.find(isRailSystem) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Rail System', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'railsystemh70',
            }
        })
        index2.push({
            toc: {
                id: 'railsystemh100',
            }
        })
        index2.push({
            toc: {
                id: 'railsystemh140',
            }
        })
        index2.push({
            toc: {
                id: 'railsystemh160',
            }
        })
        index2.push({
            toc: {
                id: 'endcovers',
            }
        })
        index2.push({
            toc: {
                id: 'ceilingmounted',
            }
        })
        index2.push({
            toc: {
                id: 'suspendedrailsystem',
            }
        })
        index2.push({
            toc: {
                id: 'railswitchsystem',
            }
        })
        index2.push({
            toc: {
                id: 'traverserailcarrier',
            }
        })
        index2.push({
            toc: {
                id: 'traversecarriermulti',
            }
        })

        if(layouts.find(isFreestlift) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Freestanding Lift System', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'freespanstraight',
            }
        })
        index2.push({
            toc: {
                id: 'freespantraverse',
            }
        })
        index2.push({
            toc: {
                id: 'freespanultratwin',
            }
        })
        index2.push({
            toc: {
                id: 'freestand',
            }
        })

        if(layouts.find(isCurtainSystem) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Curtain System', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push( {
            toc: {
                id: 'freespirit',
            }
        })
        index2.push({
            toc: {
                id: 'freespirittsystem',
            }
        })
        
        if(layouts.find(isLiftingAccesories) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Accessories', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'liftingaccesories',
            }
        })
        index2.push({text: "\n", style: "textotabla"})

        index2.push({
            columns: [
                [
                    { text: 'SLINGS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        })

        if(layouts.find(isSlingChildren) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Slings for Children', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'likohighback',
            }
        })
        index2.push({
            toc: {
                id: 'likosilhouettesling',
            }
        })
        index2.push({
            toc: {
                id: 'teddyhygienesling',
            }
        })
        index2.push({
            toc: {
                id: 'teddyhygienevest',
            }
        })
        index2.push({
            toc: {
                id: 'teddyvest',
            }
        })
        index2.push({
            toc: {
                id: 'legharness',
            }
        })

        index2.push("\n")

        if(layouts.find(isSlingAdults) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Slings for Adults', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'likoultrasling',
            }
        })
        index2.push({
            toc: {
                id: 'likouniversalsling',
            }
        })
        index2.push({
            toc: {
                id: 'likohighback200',
            }
        })
        index2.push({
            toc: {
                id: 'likosilhouettesling22',
            }
        })
        index2.push({
            toc: {
                id: 'likosoftoriginal',
            }
        })
        index2.push({
            toc: {
                id: 'likocomfortsling300',
            }
        })
        index2.push({
            toc: {
                id: 'likosoflikocomfortsling350toriginal',
            }
        })
        index2.push({
            toc: {
                id: 'likohygienesling41',
            }
        })
        index2.push({
            toc: {
                id: 'likohygienesling45',
            }
        })
        index2.push({
            toc: {
                id: 'likohygienevest55',
            }
        })
        index2.push({
            toc: {
                id: 'likomastervest60',
            }
        })
        index2.push({
            toc: {
                id: 'likomastervest64',
            }
        })
        index2.push({
            toc: {
                id: 'likomastervest66',
            }
        })
        index2.push({
            toc: {
                id: 'likoamputee75',
            }
        })
        index2.push({
            toc: {
                id: 'likoliftpants92',
            }
        })
        index2.push({
            toc: {
                id: 'ultraliftpants920',
            }
        })
        index2.push({
            toc: {
                id: 'solohighback25',
            }
        })

        if(layouts.find(isSlingAccesories) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Accessories', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'accesoriesforslings',
            }
        })
        index2.push({text: "\n", style: "textotabla"})

        index2.push({
            columns: [
                [
                    { text: 'OTHER LIKO PRODUCTS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        })

        if(layouts.find(isLikoStretchers) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Liko Stretchers', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'likooctostretch',
            }
        })
        index2.push( {
            toc: {
                id: 'likostretch',
            }
        })
        index2.push({
            toc: {
                id: 'likoflexostretch',
            }
        })
        index2.push({
            toc: {
                id: 'likomiscellaneous',
            }
        })

        if(layouts.find(isRepomulti) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'RepoSheet', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push( {
            toc: {
                id: 'reposheetoriginal',
            }
        })
        index2.push({
            toc: {
                id: 'soloreposheetoriginal',
            }
        })
        index2.push({
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'MultiStrap', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        })
        index2.push({
            toc: {
                id: 'multistrap',
            }
        })
        index2.push({
            toc: {
                id: 'solomultistrap',
            }
        })

        if(layouts.find(isManualAids) !== undefined)
        {
            index2.push({
                table: {
                    widths: [490, 30],
                    body: [
                        [
                            {border: [false, false, false, false], text: 'Manual Aids', fillColor: '#546ce4', style: 'indexbackground'},
                            {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                        ],
                    ]
                }
            })
        }
        index2.push({
            toc: {
                id: 'handytube',
            }
        })
        index2.push({
            toc: {
                id: 'handysheet',
            }
        })
        index2.push({
            toc: {
                id: 'handybelt',
            }
        })

        index2.push({text: "\nThe Product List does not contain the entire product range. If there are products you cannot find, contact Liko. Liko reserves the right, without prior notice, to change, modify, re-design or discontinue any item at any time. Liko is quality certified according to ISO 9001 and it's equivalence for the medical device industry, ISO 13485 Liko is also certified according to environmental standard ISO 14001.", style: "textotabla", alignment: "center"},)
        index2.push({text: '', pageBreak: 'after'  })

        var contenido = []
        contenido.push(coverPage)
        contenido.push(index2)

        for(var i=0; i<layouts.length; i++)
        {
            if(layouts[i].Id_Layout === "MLS-MLS-GOLVO9000")
            {
                var mobileLiftsLayout = await mobileLifts.getMobileLifts(pdfZone)
                contenido.push(mobileLiftsLayout)
            }
            else if(layouts[i].Id_Layout === "MLS-MLS-VIKING")
            {
                var vikingLayout = await viking.getViking(pdfZone)
                contenido.push(vikingLayout)
            }
            else if(layouts[i].Id_Layout === "MLS-MLS-SABINA")
            {
                var sabinaLayout = await sabina.getSabina(pdfZone)
                contenido.push(sabinaLayout)
            }
            else if(layouts[i].Id_Layout === "MLS-MLS-MOBLIFTACCE")
            {
                var mobileLiftsAccesoriesLayout = await mobileLiftsAccesories.getMobileLiftAccesories(pdfZone)
                contenido.push(mobileLiftsAccesoriesLayout)
            }
            else if(layouts[i].Id_Layout === "OLS-OLS-OLLIKORALL")
            {
                var overheadLiftsLayout = await overheadLifts.getOverheadLifts(pdfZone)
                contenido.push(overheadLiftsLayout)
            }
            else if(layouts[i].Id_Layout === "OLS-OLS-RAILSYSTEM")
            {
                var railSystemH70Layout = await railSystemH70.getRailSystemH70(pdfZone)
                var railSystemH100Layout = await railSystemH100.getRailSystemH100(pdfZone)
                var railSystemH140Layout = await railSystemH140.getRailSystemH140(pdfZone)
                var railSystemH160Layout = await railSystemH160.getRailSystemH160(pdfZone)
                var railSystemEndCoversLayout = await railSystemEndCovers.getRailSystemEndCovers(pdfZone)
                var assemblyPartsLayout = await assemblyParts.getAssemblyParts(pdfZone)
                var railSwitchSystemLayout = await railSwitchSystem.getRailSwitchSystem(pdfZone)
                contenido.push(railSystemH70Layout)
                contenido.push(railSystemH100Layout)
                contenido.push(railSystemH140Layout)
                contenido.push(railSystemH160Layout)
                contenido.push(railSystemEndCoversLayout)
                contenido.push(assemblyPartsLayout)
                contenido.push(railSwitchSystemLayout)
            }
            else if(layouts[i].Id_Layout === "FREESTLIFT")
            {
                var freespanStraightRailLayout = await freespanStraightRail.getFreespanStraightRail(pdfZone)
                var freespanTraverseLayout = await freespanTraverse.getFreespanTraverse(pdfZone)
                var freespanUltraTwinLayout = await freespanUltraTwin.getFreespanUltraTwin(pdfZone)
                var freeStandLayout = await freeStand.getFreeStand(pdfZone)
                contenido.push(freespanStraightRailLayout)
                contenido.push(freespanTraverseLayout)
                contenido.push(freespanUltraTwinLayout)
                contenido.push(freeStandLayout)
            }
            else if(layouts[i].Id_Layout === "CURTAINSYST")
            {
                var freeSpiritLayout = await freeSpirit.getFreeSpirit(pdfZone)
                contenido.push(freeSpiritLayout)
            }
            else if(layouts[i].Id_Layout === "LIFTINGACCE")
            {
                var liftingAccesoriesLayout = await liftingAccesories.getLiftingAccesories(pdfZone)
                contenido.push(liftingAccesoriesLayout)
            }
            else if(layouts[i].Id_Layout === "SLINGCHILDREN")
            {
                var slingsForChildrenLayout = await slingsForChildren.getSlingsForChildren(pdfZone)
                contenido.push(slingsForChildrenLayout)
            }
            else if(layouts[i].Id_Layout === "SLINGADULTS")
            {
                var slingsForAdultsLayout = await slingsForAdults.getSlingsForAdults(pdfZone)
                var likoOriginalHighbackLayout = await likoOriginalHighback.getLikoOriginalHighback(pdfZone)
                var likoConfortslingLayout = await likoConfortsling.getLikoConfortsling(pdfZone)
                var likoMastervestLayout = await likoMastervest.getLikoMastervest(pdfZone)
                var likoLiftPantsLayout = await likoLiftPants.getLikoLiftPants(pdfZone)
                contenido.push(slingsForAdultsLayout)
                contenido.push(likoOriginalHighbackLayout)
                contenido.push(likoConfortslingLayout)
                contenido.push(likoMastervestLayout)
                contenido.push(likoLiftPantsLayout)
            }
            else if(layouts[i].Id_Layout === "SLINGACCESS")
            {
                var accesoriesForSlingsLayout = await accesoriesForSlings.getAccesoriesForSlings(pdfZone)
                contenido.push(accesoriesForSlingsLayout)
            }
            else if(layouts[i].Id_Layout === "LIKOSTRET")
            {
                var likoStretchersLayout = await likoStretchers.getLikoStretchers(pdfZone)
                var likoFlexostretchLayout = await likoFlexostretch.getLikoFlexostretch(pdfZone)
                contenido.push(likoStretchersLayout)
                contenido.push(likoFlexostretchLayout)
            }
            else if(layouts[i].Id_Layout === "REPOMULTI")
            {
                var reposheetLayout = await reposheet.getReposheet(pdfZone)
                contenido.push(reposheetLayout)
            }
            else if(layouts[i].Id_Layout === "MANUALAIDS")
            {
                var manualAIDSLayout = await manualAIDS.getManualAIDS(pdfZone)
                contenido.push(manualAIDSLayout)
            }
        }
        
        var docDefinition = {
            pageMargins: [ 30, 10, 30, 30 ],
            header: function(currentPage) 
            {
                if(currentPage > 3){
                    return {
                        margin: [30, 20],
                        columns: [
                            {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
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
                                text: '00 - ' + zona + " - " + anio + 'Liko Capital Price Book ' + pdfVersion, style: 'footer', alignment: 'right'
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
                header: {
                    fontSize: 15,
                    bold: true,
                    color: '#1c3384',
                },
                index: {
                    fontSize: 11,
                    color: '#1c3384',
                },
                indexbackground: {
                    fontSize: 11,
                    color: '#ffffff',
                    bold: true,
                    background: '#546ce4'
                },
                subheader: {
                    fontSize: 13,
                    bold: true,
                    color: '#1c3384',
                },
                textosubrayado: {
                    fontSize: 9,
                },
                textolista: {
                    fontSize: 7,
                },
                textolista2: {
                    fontSize: 8,
                },
                textotabla: {
                    fontSize: 7,
                },
                textotablabold: {
                    fontSize: 7,
                    bold: true,
                    color: '#1c3384',
                },
                textotablaboldlarge: {
                    fontSize: 9,
                    bold: true,
                    color: '#1c3384',
                },
                textotablatitle: {
                    fontSize: 9,
                    bold: true,
                    color: '#546ce4',
                },
                textotablaboldblack: {
                    fontSize: 7,
                    bold: true,
                    color: '#000000',
                },
                textotablaboldblacklarge: {
                    fontSize: 9,
                    bold: true,
                    color: '#000000',
                },
                textotablacolor: {
                    fontSize: 7,
                    color: '#ffffff',
                    bold: true,
                },
                textotablacolor: {
                    fontSize: 9,
                    color: '#ffffff',
                    bold: true,
                },
                textotablacolornormal: {
                    fontSize: 7,
                    color: '#ffffff',
                },
                textotablacolorlarge: {
                    fontSize: 13,
                    color: '#ffffff',
                    bold: true,
                },
                textotablacolorlargecatoni: {
                    fontSize: 10,
                    color: '#ffffff',
                    bold: true,
                },
                textotablacatoni: {
                    fontSize: 5.5,
                },
                textotablaboldcatoni: {
                    fontSize: 5.5,
                    bold: true,
                    color: '#1c3384',
                },
                textotablaboldlargecatoni: {
                    fontSize: 7,
                    bold: true,
                    color: '#1c3384',
                },
                textotablaboldblackcatoni: {
                    fontSize: 5.5,
                    bold: true,
                    color: '#000000',
                },
                textotablacolorcatoni: {
                    fontSize: 5.5,
                    color: '#ffffff',
                    bold: true,
                },
                parrafo: {
                    fontSize: 8,
                },
                parrafoBold: {
                    fontSize: 8,
                    bold: true,
                },
                parrafoItalic: {
                    fontSize: 8,
                    italics: true,
                },
                footer: {
                    fontSize: 6,
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

function isGolvo(layout) {
    return layout.Id_Layout === 'MLS-MLS-GOLVO9000';
}

function isViking(layout) {
    return layout.Id_Layout === 'MLS-MLS-VIKING';
}

function isSabina(layout) {
    return layout.Id_Layout === 'MLS-MLS-SABINA';
}

function isMobileLift(layout) {
    return layout.Id_Layout === 'MLS-MLS-MOBLIFTACCE';
}

function isLikorall(layout) {
    return layout.Id_Layout === 'OLS-OLS-OLLIKORALL';
}

function isRailSystem(layout) {
    return layout.Id_Layout === 'OLS-OLS-RAILSYSTEM';
}

function isFreestlift(layout) {
    return layout.Id_Layout === 'FREESTLIFT';
}

function isCurtainSystem(layout) {
    return layout.Id_Layout === 'CURTAINSYST';
}

function isLiftingAccesories(layout) {
    return layout.Id_Layout === 'LIFTINGACCE';
}

function isSlingChildren(layout) {
    return layout.Id_Layout === 'SLINGCHILDREN';
}

function isSlingAdults(layout) {
    return layout.Id_Layout === 'SLINGADULTS';
}

function isSlingAccesories(layout) {
    return layout.Id_Layout === 'SLINGACCESS';
}

function isLikoStretchers(layout) {
    return layout.Id_Layout === 'LIKOSTRET';
}

function isRepomulti(layout) {
    return layout.Id_Layout === 'REPOMULTI';
}

function isManualAids(layout) {
    return layout.Id_Layout === 'MANUALAIDS';
}

module.exports = {
    createDocument: createDocument,
}