const countries = [
    {
        name: 'France',
        greeting: 'Bonjour!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623590/alpha-guide/France_yyfh49.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 69,
        healthCode: 69,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / E"
        },
        coordinates: {
            lat: 48.856613,
            lon: 2.352222
        }
    },
    {
        name: 'United States of America',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623408/alpha-guide/United_States_rwkuu9.jpg',
        currency: 'USD',
        currencyName: "Dollar: $",
        docCode: 63,
        healthCode: 63,
        plugs: {
            volts :120, 
            hertz: 50, 
            type: "A / B"
        },
        coordinates: {
            lat: 40.712776,
            lon: -74.005974
        }
    },
    {
        name: 'Spain',
        greeting: 'Hola!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623403/alpha-guide/Spain_jqoef2.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 0,
        healthCode: 0,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 40.416775,
            lon: -3.703790
        }
    },
    {
        name: 'China',
        greeting: 'Nǐn hǎo!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/China_w9baho.jpg',
        currency: 'CNY',
        currencyName: "Yuan Renminbi: ¥",
        docCode: 40,
        healthCode: 40,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "A / C / I"
        },
        coordinates: {
            lat: 35.861660,
            lon: 104.195397 
        }
    },
    {
        name: 'Italy',
        greeting: 'Ciao!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623388/alpha-guide/Italy_alxb5w.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 96,
        healthCode: 109,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F / L" 
        },
        coordinates: {
            lat: 41.889755,
            lon: 12.480469
        }
    },
    {
        name: 'UK',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623404/alpha-guide/UK_knlrft.jpg',
        currency: 'GBP',
        currencyName: "Pound: £",
        docCode: 150,
        healthCode: 169,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type:"G"
        },
        coordinates: {
            lat: 51.507351,
            lon: -0.127758
        }
    },
    {
        name: 'Germany',
        greeting: 'Guten Tag!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623389/alpha-guide/Germany_p1gqlp.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 4,
        healthCode: 9,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 52.520007,
            lon: 13.404954
        }
    },
    {
        name: 'Mexico',
        greeting: 'Hola!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623393/alpha-guide/Mexico_h8znhe.jpg',
        currency: 'MXN',
        currencyName: "Peso: $",
        docCode: 122,
        healthCode: 140,
        plugs: {
            volts: 120, 
            hertz: 60, 
            type: "A / B"
        },
        coordinates: {
            lat: 19.432608,
            lon: -99.133208
        }
    },
    {
        name: 'Thailand',
        greeting: 'สวัสดี',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623401/alpha-guide/Thailand_lwlzis.jpg',
        currency: 'THB',
        currencyName: "Baht: ฿",
        docCode: 176,
        healthCode: 201,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "A / B / C / O" 
        },
        coordinates: {
            lat: 13.756331,
            lon: 100.501765
        }
    },
    {
        name: 'Turkey',
        greeting: 'Merhaba!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623409/alpha-guide/Turkey_rzncyy.jpg',
        currency: 'TRY',
        currencyName: "Lira: ₺",
        docCode: 187,
        healthCode: 209,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type:"C / F" 
        },
        coordinates: {
            lat: 41.005270,
            lon: 28.976960 
        }
    },
    {
        name: 'Austria',
        greeting: 'Grüß Gott!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623576/alpha-guide/Austria_dgzxt6.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 13,
        healthCode: 15,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 48.208174,
            lon: 16.373819
        }
    },
    {
        name: 'Malaysia',
        greeting: 'Apa Khabar!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623409/alpha-guide/Turkey_rzncyy.jpg',
        currency: 'MYR',
        currencyName: "Ringgit: RM",
        docCode: 114,
        healthCode: 130,
        plugs: {
            volts: 240, 
            hertz: 50, 
            type: "G" 
        },
        coordinates: {
            lat: 3.115834,
            lon: 101.678467
        }
    },
    {
        name: 'Greece',
        greeting: 'Yassas!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623389/alpha-guide/Greece_ho2wcy.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 75,
        healthCode: 75,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 37.983917,
            lon: 23.729360
        }
    },
    {
        name: 'Russia',
        greeting: 'Zdravstvuyte!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623403/alpha-guide/Russia_qkxdyr.jpg',
        currency: 'RUB',
        currencyName: "Ruble: ₽",
        docCode: 153,
        healthCode: 176,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 55.755826,
            lon: 37.617300
        }
    },
    {
        name: 'Japan',
        greeting: 'Konnichiwa!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623392/alpha-guide/Japan_vxeo7m.jpg',
        currency: 'JPY',
        currencyName: "Yen: ¥",
        docCode: 98,
        healthCode: 111,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "A / B"
        },
        coordinates: {
            lat: 35.680400,
            lon: 139.769017
        }
    },
    {
        name: 'Canada',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/Canada_vlfm46.jpg',
        currency: 'CAD',
        currencyName: "Canadian Dollar: $",
        docCode: 35,
        healthCode: 37,
        plugs: {
            volts: 120, 
            hertz: 60, 
            type: "A / B" 
        },
        coordinates: {
            lat: 45.638728,
            lon: -122.661486
        }
    },
    {
        name: 'Saudi Arabia',
        greeting: 'Asalaam alaikum!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623398/alpha-guide/Saudi_Arabia_dlxwxc.jpg',
        currency: 'SAR',
        currencyName: "Riyal: ﷼",
        docCode: 8,
        healthCode: 4,
        plugs: {
            volts: 220, 
            hertz: 60, 
            type: "G"
        },
        coordinates: {
            lat: 23.885942,
            lon: 45.079162
        }
    },
    {
        name: 'Poland',
        greeting: 'Dzień dobry!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623408/alpha-guide/Poland_kpn6ey.jpg',
        currency: 'PLN',
        currencyName: "Zloty: zł",
        docCode: 146,
        healthCode: 165,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / E"
        },
        coordinates: {
            lat: 52.229676,
            lon: 21.012229
        }
    },
    {
        name: 'Netherlands',
        greeting: 'Goedendag!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623395/alpha-guide/Netherlands_ts5abi.jpg',
        currency: 'EUR',
        currencyName: "Euro: €",
        docCode: 139,
        healthCode: 86,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F" 
        },
        coordinates: {
            lat: 52.370216,
            lon: 4.895168
        }
    },
    {
        name: 'Hungary',
        greeting: 'Helló!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623386/alpha-guide/Hungary_zglk9o.jpg',
        currency: 'HUF',
        currencyName: "Forint: Ft",
        healthCode: 89,
        docCode: 85,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 47.497912,
            lon: 19.040235
        }
    },
    {
        name: 'United Arab Emirates',
        greeting: 'Asalaam alaikum!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623407/alpha-guide/United_Arab_Emirates_yajinx.jpg',
        currency: 'AED',
        currencyName: "Dirham: درهم‎",
        docCode: 58,
        healthCode: 58,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "G"
        },
        coordinates: {
            lat: 23.424076,
            lon: 53.847818
        }
    },
    {
        name: 'India',
        greeting: 'नमस्कार!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623388/alpha-guide/India_sdimml.jpg',
        currency: 'INR',
        currencyName: "Rupee: ₹",
        docCode: 86,
        healthCode: 90,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / D / M" 
        },
        coordinates: {
            lat: 28.613939,
            lon: 77.209021 
        }
    },
    {
        name: 'Croatia',
        greeting: 'Zdravo!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/Croatia_t8hgzt.jpg',
        currency: 'HRK',
        currencyName: "Kuna: kn",
        docCode: 50,
        healthCode: 50,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 45.779017,
            lon: 16.040039
        }
    },
    {
        name: 'Ukraine',
        greeting: 'Привіт!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623410/alpha-guide/Ukraine_yz4cbt.jpg',
        currency: 'UAH',
        currencyName: "Hryvnia: ₴",
        docCode: 189,
        healthCode: 211,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        },
        coordinates: {
            lat: 50.450100,
            lon: 30.523400
        }
    },
    {
        name: 'Singapore',
        greeting: 'Apa kabar!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623398/alpha-guide/Singapore_akpurb.jpg',
        currency: 'SGD',
        currencyName: "Singapore Dollar: $",
        docCode: 165,
        healthCode: 189,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "G"
        },
        coordinates: {
            lat: 1.354942,
            lon: 103.810952
        }
    },
    {
        name: 'Czech Republic',
        greeting: 'Ahoj!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623382/alpha-guide/Czech_Republic_psgsok.jpg',
        currency: 'CZK',
        currencyName: "Koruna: Kč",
        docCode: 38,
        healthCode: 171,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "C / E"
        },
        coordinates: {
            lat: 49.817492,
            lon: 15.472962 
        }
    },
    {
        name: 'Portugal',
        greeting: 'Olá',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623396/alpha-guide/Portugal_p8bt0o.jpg',
        currency: 'EUR',
        currencyName: "Euro €",
        docCode: 147,
        healthCode: 166,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F" 
        },
        coordinates: {
            lat: 38.722252,
            lon: 9.139337
        }
    }
]

// -------DESCOMENTAR PARA CREAR SEEDS EN APPJS----------//


// Promise.all([ Country.deleteMany()])
//   .then(() => {
//       console.log('BORRADAS')
//     countries.forEach(country => {
//         let newCountry = new Country(country)
    
//         newCountry.save()
//             .then(results => console.log('guardado'))
//             .catch(error => console.log('upsy pussy'))
//     })
//   })
//   .catch(error => console.log(error))
