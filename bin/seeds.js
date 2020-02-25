const countries = [
    {
        name: 'France',
        greeting: 'Bonjour!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623590/alpha-guide/France_yyfh49.jpg',
        currency: 'EUR',
        docCode: 69,
        healthCode: 69,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / E"
        }
    },
    {
        name: 'United States',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623408/alpha-guide/United_States_rwkuu9.jpg',
        currency: 'USD',
        docCode: 63,
        healthCode: 63,
        plugs: {
            volts :120, 
            hertz: 50, 
            type: "A / B"
        }
    },
    {
        name: 'Spain',
        greeting: 'Hola!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623403/alpha-guide/Spain_jqoef2.jpg',
        currency: 'EUR',
        docCode: 0,
        healthCode: 0,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'China',
        greeting: 'Nǐn hǎo!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/China_w9baho.jpg',
        currency: 'CNY',
        docCode: 40,
        healthCode: 40,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "A / C / I"
        }
    },
    {
        name: 'Italy',
        greeting: 'Ciao!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623388/alpha-guide/Italy_alxb5w.jpg',
        currency: 'EUR',
        docCode: 96,
        healthCode: 109,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F / L" 
        }
    },
    {
        name: 'UK',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623404/alpha-guide/UK_knlrft.jpg',
        currency: 'GBP',
        docCode: 150,
        healthCode: 169,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type:"G"
        }
    },
    {
        name: 'Germany',
        greeting: 'Guten Tag!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623389/alpha-guide/Germany_p1gqlp.jpg',
        currency: 'EUR',
        docCode: 4,
        healthCode: 9,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Mexico',
        greeting: 'Hola!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623393/alpha-guide/Mexico_h8znhe.jpg',
        currency: 'MXN',
        docCode: 122,
        healthCode: 140,
        plugs: {
            volts: 120, 
            hertz: 60, 
            type: "A / B"
        }
    },
    {
        name: 'Thailand',
        greeting: 'สวัสดี',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623401/alpha-guide/Thailand_lwlzis.jpg',
        currency: 'THB',
        docCode: 176,
        healthCode: 201,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "A / B / C / O" 
        }
    },
    {
        name: 'Turkey',
        greeting: 'Merhaba!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623409/alpha-guide/Turkey_rzncyy.jpg',
        currency: 'TRY',
        docCode: 187,
        healthCode: 209,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type:"C / F" 
        }
    },
    {
        name: 'Austria',
        greeting: 'Grüß Gott!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623576/alpha-guide/Austria_dgzxt6.jpg',
        currency: 'EUR',
        docCode: 13,
        healthCode: 15,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Malaysia',
        greeting: 'Apa Khabar!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623409/alpha-guide/Turkey_rzncyy.jpg',
        currency: 'MYR',
        docCode: 114,
        healthCode: 130,
        plugs: {
            volts: 240, 
            hertz: 50, 
            type: "G" 
        }
    },
    {
        name: 'Greece',
        greeting: 'Yassas!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623389/alpha-guide/Greece_ho2wcy.jpg',
        currency: 'EUR',
        docCode: 75,
        healthCode: 75,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Russia',
        greeting: 'Zdravstvuyte!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623403/alpha-guide/Russia_qkxdyr.jpg',
        currency: 'RUB',
        docCode: 153,
        healthCode: 176,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Japan',
        greeting: 'Konnichiwa!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623392/alpha-guide/Japan_vxeo7m.jpg',
        currency: 'JPY',
        docCode: 98,
        healthCode: 111,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "A / B"
        }
    },
    {
        name: 'Canada',
        greeting: 'Hello!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/Canada_vlfm46.jpg',
        currency: 'CAD',
        docCode: 35,
        healthCode: 37,
        plugs: {
            volts: 120, 
            hertz: 60, 
            type: "A / B" 
        }
    },
    {
        name: 'Saudi Arabia',
        greeting: 'Asalaam alaikum!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623398/alpha-guide/Saudi_Arabia_dlxwxc.jpg',
        currency: 'SAR',
        docCode: 8,
        healthCode: 4,
        plugs: {
            volts: 220, 
            hertz: 60, 
            type: "G"
        }
    },
    {
        name: 'Poland',
        greeting: 'Dzień dobry!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623408/alpha-guide/Poland_kpn6ey.jpg',
        currency: 'PLN',
        docCode: 146,
        healthCode: 165,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / E"
        }
    },
    {
        name: 'Netherlands',
        greeting: 'Goedendag!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623395/alpha-guide/Netherlands_ts5abi.jpg',
        currency: 'EUR',
        docCode: 139,
        healthCode: 86,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F" 
        }
    },
    {
        name: 'Hungary',
        greeting: 'Helló!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623386/alpha-guide/Hungary_zglk9o.jpg',
        currency: 'HUF',
        healthCode: 89,
        docCode: 85,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'United Arab Emirates',
        greeting: 'Asalaam alaikum!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623407/alpha-guide/United_Arab_Emirates_yajinx.jpg',
        currency: 'AED',
        docCode: 58,
        healthCode: 58,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "G"
        }
    },
    {
        name: 'India',
        greeting: 'नमस्कार!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623388/alpha-guide/India_sdimml.jpg',
        currency: 'INR',
        docCode: 86,
        healthCode: 90,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / D / M" 
        }
    },
    {
        name: 'Croatia',
        greeting: 'Zdravo!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623384/alpha-guide/Croatia_t8hgzt.jpg',
        currency: 'HRK',
        docCode: 50,
        healthCode: 50,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Ukraine',
        greeting: 'Привіт!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623410/alpha-guide/Ukraine_yz4cbt.jpg',
        currency: 'UAH',
        docCode: 189,
        healthCode: 211,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F"
        }
    },
    {
        name: 'Singapore',
        greeting: 'Apa kabar!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623398/alpha-guide/Singapore_akpurb.jpg',
        currency: 'SGD',
        docCode: 165,
        healthCode: 189,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "G"
        }
    },
    {
        name: 'Czech Republic',
        greeting: 'Ahoj!',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623382/alpha-guide/Czech_Republic_psgsok.jpg',
        currency: 'CZK',
        docCode: 38,
        healthCode: 171,
        plugs: {
            volts: 220, 
            hertz: 50, 
            type: "C / E"
        }
    },
    {
        name: 'Portugal',
        greeting: 'Olá',
        image_cover: 'https://res.cloudinary.com/daf9dmsqa/image/upload/v1581623396/alpha-guide/Portugal_p8bt0o.jpg',
        currency: 'EUR',
        docCode: 147,
        healthCode: 166,
        plugs: {
            volts: 230, 
            hertz: 50, 
            type: "C / F" 
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
