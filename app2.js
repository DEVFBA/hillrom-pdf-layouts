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
var manualAIDS = require("./layoutsGruas/ManualAids.js")

async function createDocument()
{
    var mobileLiftsLayout = await mobileLifts.getMobileLifts()
    var vikingLayout = await viking.getViking()
    var sabinaLayout = await sabina.getSabina()
    var mobileLiftsAccesoriesLayout = await mobileLiftsAccesories.getMobileLiftAccesories()
    var overheadLiftsLayout = await overheadLifts.getOverheadLifts()
    var railSystemH70Layout = await railSystemH70.getRailSystemH70()
    var railSystemH100Layout = await railSystemH100.getRailSystemH100()
    var railSystemH140Layout = await railSystemH140.getRailSystemH140()
    var assemblyPartsLayout = await assemblyParts.getAssemblyParts()
    var railSwitchSystemLayout = await railSwitchSystem.getRailSwitchSystem()
    var freespanStraightRailLayout = await freespanStraightRail.getFreespanStraightRail()
    var freespanTraverseLayout = await freespanTraverse.getFreespanTraverse()
    var freespanUltraTwinLayout = await freespanUltraTwin.getFreespanUltraTwin()
    var freeStandLayout = await freeStand.getFreeStand()
    var freeSpiritLayout = await freeSpirit.getFreeSpirit()
    var liftingAccesoriesLayout = await liftingAccesories.getLiftingAccesories()
    var slingsForChildrenLayout = await slingsForChildren.getSlingsForChildren()
    var slingsForAdultsLayout = await slingsForAdults.getSlingsForAdults()
    var accesoriesForSlingsLayout = await accesoriesForSlings.getAccesoriesForSlings()
    var likoOriginalHighbackLayout = await likoOriginalHighback.getLikoOriginalHighback()
    var likoConfortslingLayout = await likoConfortsling.getLikoConfortsling()
    var likoMastervestLayout = await likoMastervest.getLikoMastervest()
    var likoLiftPantsLayout = await likoLiftPants.getLikoLiftPants()
    var likoStretchersLayout = await likoStretchers.getLikoStretchers()
    var likoFlexostretchLayout = await likoFlexostretch.getLikoFlexostretch()
    var reposheetLayout = await reposheet.getReposheet()
    var manualAIDSLayout = await manualAIDS.getManualAIDS()

    const fecha = new Date();
    fecha.toLocaleDateString()

    var coverPage = [
        '\n\n',
        { image: "images/BaxterEncabezado.png", width: 570, height: 30, alignment: 'center'},
        '\n\n\n\n\n\n\n\n\n\n\n',
        { image: "images/Hillroom.png", width: 120, height: 47, alignment: 'center'},
        { text: 'LIKO PRICEBOOK 2022', style: 'header', alignment: "center" },
        { text: 'USD - ALL COUNTRIES', style: 'header', alignment: "center" },
        { image: "images/Cover2.png", width: 400, height: 250, alignment: 'center'},
        { text: 'www.hillrom.com', style: 'header', alignment: "center" },
        {text: '', pageBreak: 'after'  },
    ]
    
    var index = [
        {text: 'TABLE OF CONTENTS', style: 'header', alignment: 'center' },
        {
            columns: [
                [
                    { text: 'MOBILE LIFTS SYSTEMS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Mobile Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'golvo',
            }
        },
        {
            toc: {
                id: 'viking',
            }
        },
        {
            toc: {
                id: 'sabina',
            }
        },
        {
            toc: {
                id: 'safetyvestmod91',
            }
        },
        {
            toc: {
                id: 'safetyvestmod93',
            }
        },
        {
            toc: {
                id: 'confortvestmod95',
            }
        },
        {
            toc: {
                id: 'safetyvestmod911',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Accessories for Mobile Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'accesoriesmobilelifts',
            }
        },
        "\n",
        {
            columns: [
                [
                    { text: 'OVERHEAD LIFTS SYSTEMS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Overhead Lifts', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'likoral',
            }
        },
        {
            toc: {
                id: 'accesoriesforlikoral',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Rail System', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'railsystemh70',
            }
        },
        {
            toc: {
                id: 'railsystemh100',
            }
        },
        {
            toc: {
                id: 'railsystemh140',
            }
        },
        {
            toc: {
                id: 'railsystemh160',
            }
        },
        {
            toc: {
                id: 'endcovers',
            }
        },
        {
            toc: {
                id: 'ceilingmounted',
            }
        },
        {
            toc: {
                id: 'suspendedrailsystem',
            }
        },
        {
            toc: {
                id: 'railswitchsystem',
            }
        },
        {
            toc: {
                id: 'traverserailcarrier',
            }
        },
        {
            toc: {
                id: 'traversecarriermulti',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Freestanding Lift System', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'freespanstraight',
            }
        },
        {
            toc: {
                id: 'freespantraverse',
            }
        },
        {
            toc: {
                id: 'freespanultratwin',
            }
        },
        {
            toc: {
                id: 'freestand',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Curtain System', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'freespirit',
            }
        },
        {
            toc: {
                id: 'freespirittsystem',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Accessories', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'liftingaccesories',
            }
        },
        "\n",
        {
            columns: [
                [
                    { text: 'SLINGS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Slings for Children', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'likohighback',
            }
        },
        {
            toc: {
                id: 'likosilhouettesling',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Slings for Children', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'teddyhygienesling',
            }
        },
        {
            toc: {
                id: 'teddyhygienevest',
            }
        },
        {
            toc: {
                id: 'teddyvest',
            }
        },
        {
            toc: {
                id: 'legharness',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Slings for Adults', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'likoultrasling',
            }
        },
        {
            toc: {
                id: 'likouniversalsling',
            }
        },
        {
            toc: {
                id: 'likohighback200',
            }
        },
        {
            toc: {
                id: 'likosilhouettesling22',
            }
        },
        {
            toc: {
                id: 'likosoftoriginal',
            }
        },
        {
            toc: {
                id: 'likocomfortsling300',
            }
        },
        {
            toc: {
                id: 'likosoflikocomfortsling350toriginal',
            }
        },
        {
            toc: {
                id: 'likohygienesling41',
            }
        },
        {
            toc: {
                id: 'likohygienesling45',
            }
        },
        {
            toc: {
                id: 'likohygienevest55',
            }
        },
        {
            toc: {
                id: 'likomastervest60',
            }
        },
        {
            toc: {
                id: 'likomastervest64',
            }
        },
        {
            toc: {
                id: 'likomastervest66',
            }
        },
        {
            toc: {
                id: 'likoamputee75',
            }
        },
        {
            toc: {
                id: 'likoliftpants92',
            }
        },
        {
            toc: {
                id: 'ultraliftpants920',
            }
        },
        {
            toc: {
                id: 'solohighback25',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Accessories', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'accesoriesforslings',
            }
        },
        "\n",
        {
            columns: [
                [
                    { text: 'OTHER LIKO PRODUCTS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Liko Stretchers', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'likooctostretch',
            }
        },
        {
            toc: {
                id: 'likostretch',
            }
        },
        {
            toc: {
                id: 'likoflexostretch',
            }
        },
        {
            toc: {
                id: 'likomiscellaneous',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'RepoSheet', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'reposheetoriginal',
            }
        },
        {
            toc: {
                id: 'soloreposheetoriginal',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'MultiStrap', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'multistrap',
            }
        },
        {
            toc: {
                id: 'solomultistrap',
            }
        },
        {
            table: {
                widths: [490, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Manual Aids', fillColor: '#546ce4', style: 'indexbackground'},
                        {border: [false, false, false, false], text: 'Page', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'handytube',
            }
        },
        {
            toc: {
                id: 'handysheet',
            }
        },
        {
            toc: {
                id: 'handybelt',
            }
        },
        {text: '', pageBreak: 'after'  },
    ]
    
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
                            text: '00 - All Countries - 2022 Liko Capital Price Book V01', style: 'footer', alignment: 'right'
                        },
                    ]
                }
            } 
        },
        content: [
            coverPage,
            index,
            mobileLiftsLayout,
            vikingLayout,
            sabinaLayout,
            mobileLiftsAccesoriesLayout,
            overheadLiftsLayout,
            railSystemH70Layout,
            railSystemH100Layout,
            railSystemH140Layout,
            assemblyPartsLayout,
            railSwitchSystemLayout,
            freespanStraightRailLayout,
            freespanTraverseLayout,
            freespanUltraTwinLayout,
            freeStandLayout,
            freeSpiritLayout,
            liftingAccesoriesLayout,
            slingsForChildrenLayout,
            slingsForAdultsLayout,
            likoOriginalHighbackLayout,
            likoConfortslingLayout,
            likoMastervestLayout,
            likoLiftPantsLayout,
            accesoriesForSlingsLayout,
            likoStretchersLayout,
            likoFlexostretchLayout,
            reposheetLayout,
            manualAIDSLayout
        ],
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
    pdfDoc.pipe(fs.createWriteStream('document2.pdf'));
    pdfDoc.end();
}

createDocument()