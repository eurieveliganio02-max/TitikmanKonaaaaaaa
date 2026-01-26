/*function init360() {

    if (document.getElementById("parking")) {
        pannellum.viewer("parking", {
            type: "equirectangular",
            panorama: "Parking.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("canteenb")) {
        pannellum.viewer("canteenb", {
            type: "equirectangular",
            panorama: "canteenb.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("CBs")) {
        pannellum.viewer("CBs", {
            type: "equirectangular",
            panorama: "CB2.1.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("CBt")) {
        pannellum.viewer("CBt", {
            type: "equirectangular",
            panorama: "CB2.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("fFun")) {
        pannellum.viewer("fFun", {
            type: "equirectangular",
            panorama: "FFUNR.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("Libh")) {
        pannellum.viewer("Libh", {
            type: "equirectangular",
            panorama: "LIBRARY360.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("Mb303360")) {
        pannellum.viewer("Mb303360", {
            type: "equirectangular",
            panorama: "MB3033.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("midw")) {
        pannellum.viewer("midw", {
            type: "equirectangular",
            panorama: "midw.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("NF205360")) {
        pannellum.viewer("NF205360", {
            type: "equirectangular",
            panorama: "NF2053.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("SHS360")) {
        pannellum.viewer("SHS360", {
            type: "equirectangular",
            panorama: "SHS360.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("SHS2013")) {
        pannellum.viewer("SHS2013", {
            type: "equirectangular",
            panorama: "SHS2013.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("SHS3013")) {
        pannellum.viewer("SHS3013", {
            type: "equirectangular",
            panorama: "SHS3013.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("SHSS360")) {
        pannellum.viewer("SHSS360", {
            type: "equirectangular",
            panorama: "SHSS360.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("SHSSH")) {
        pannellum.viewer("SHSSH", {
            type: "equirectangular",
            panorama: "SHSSH.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("STAGEHAL")) {
        pannellum.viewer("STAGEHAL", {
            type: "equirectangular",
            panorama: "StageHal.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("STSHS")) {
        pannellum.viewer("STSHS", {
            type: "equirectangular",
            panorama: "stshs.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }

    if (document.getElementById("TLEA")) {
        pannellum.viewer("TLEA", {
            type: "equirectangular",
            panorama: "TLEA.jpg",
            autoLoad: true,
            autoRotate: 6
        });
    }
}*/

pannellum.viewer('parking', {
        type: 'equirectangular',   
        panorama: 'Parking.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('canteen', {
        type: 'equirectangular',
        panorama: 'canteenb.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('shs201', {
        type: 'equirectangular',  
        panorama: 'CB2.1.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('shs301', {
        type: 'equirectangular',   
        panorama: 'CB2.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('libr', {
        type: 'equirectangular',   
        panorama: 'FFUNR.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('shssh', {
        type: 'equirectangular',
        panorama: 'LIBRARY360.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('shss360', {
        type: 'equirectangular',  
        panorama: 'MB3033.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('stshs', {
        type: 'equirectangular', 
        panorama: 'midw.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('tlea', {
        type: 'equirectangular',  
        panorama: 'NF2053.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('stagehal', {
        type: 'equirectangular',
        panorama: 'SHS360.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('nf205', {
        type: 'equirectangular',   
        panorama: 'SHS2013.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('midw', {
        type: 'equirectangular',   
        panorama: 'SHS3013.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('mb303', {
        type: 'equirectangular',    
        panorama: 'SHSS360.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });


pannellum.viewer('ffunc', {
        type: 'equirectangular',    
        panorama: 'SHSSH.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('cb2', {
        type: 'equirectangular',    
        panorama: 'StageHal.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('cb3', {
        type: 'equirectangular',    
        panorama: 'stshs.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });

pannellum.viewer('shs360', {
        type: 'equirectangular',   
        panorama: 'TLEA.jpg',
        autoLoad: true,
        autoRotate: true,
        autoRotateSpeed: 6,
    });
