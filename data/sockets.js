//////////////////METER A PELO EN EL MODELO Y EN SEEDS




const plugs = [
      {
        "country":"Abu Dhabi", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Afghanistan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Albania", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Algeria", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"American Samoa", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B / F / I"
      },
      {
        "country":"Andorra", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Angola", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Anguilla", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Antigua and Barbuda", 
        "volts":230, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Argentina", 
        "volts":220, 
        "hertz":50, 
        "type":"C / I"
      },
      {
        "country":"Armenia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Aruba", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B / F"
      },
      {
        "country":"Australia", 
        "volts":230, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Austria", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Azerbaijan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Azores", 
        "volts":230, 
        "hertz":50, 
        "type":"B / C / F"
      },
      {
        "country":"Bahamas", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Bahrain", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Bangladesh", 
        "volts":220, 
        "hertz":50, 
        "type":"A / C / D / G / K"
      },
      {
        "country":"Barbados", 
        "volts":115, 
        "hertz":50, 
        "type":"A / B"
      },
      {
        "country":"Belarus", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Belgium", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Belize", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B / G"
      },
      {
        "country":"Benin", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Bermuda", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Bhutan", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / G"
      },
      {
        "country":"Bolivia", 
        "volts":230, 
        "hertz":50, 
        "type":"A / C"
      },
      {
        "country":"Bonaire", 
        "volts":127, 
        "hertz":50, 
        "type":"A / C"
      },
      {
        "country":"Bosnia & Herzegovina", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Botswana", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Brazil", 
        "volts":127, 
        "hertz":60, 
        "type":"C / N"
      },
      {
        "country":"British Virgin Islands", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Brunei", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Bulgaria", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Burkina Faso", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Burundi", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Cambodia", 
        "volts":230, 
        "hertz":50, 
        "type":"A / C / G"
      },
      {
        "country":"Cameroon", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Canada", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Cayman Islands", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Central African Republic", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Chad", 
        "volts":220, 
        "hertz":50, 
        "type":"C / D / E / F"
      },
      {
        "country":"Channel Islands", 
        "volts":230, 
        "hertz":50, 
        "type":"C / G"
      },
      {
        "country":"Chile", 
        "volts":220, 
        "hertz":50, 
        "type":"C / L"
      },
      {
        "country":"China", 
        "volts":220, 
        "hertz":50, 
        "type":"A / C / I"
      },
      {
        "country":"Christmas Island", 
        "volts":230, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Cocos", 
        "volts":230, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Colombia", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Comoros", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Congo, Democratic Republic of the", 
        "volts":220, 
        "hertz":50, 
        "type":"C / D / E"
      },
      {
        "country":"Congo, Republic of the", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Cook Islands", 
        "volts":240, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Costa Rica", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Ivory Coast", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Croatia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Cuba", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B / C / L"
      },
      {
        "country":"Cyprus", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Czechia", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Denmark", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E / F / K"
      },
      {
        "country":"Djibouti", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Dominica", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Dominican Republic", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B / C"
      },
      {
        "country":"Dubai", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"East Timor", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E / F / I"
      },
      {
        "country":"Ecuador", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Egypt", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"El Salvador", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"England", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Equatorial Guinea", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Eritrea", 
        "volts":230, 
        "hertz":50, 
        "type":"C / L"
      },
      {
        "country":"Estonia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Ethiopia", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F / G"
      },
      {
        "country":"Faeroe Islands", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E / F / K"
      },
      {
        "country":"Falkland Islands", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Fiji", 
        "volts":240, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Finland", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"France", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"French Guiana", 
        "volts":220, 
        "hertz":50, 
        "type":"C / D / E"
      },
      {
        "country":"Gabon", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Gambia", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Georgia", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Germany", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Ghana", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Great Britain", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Greece", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Greenland", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E / F / K"
      },
      {
        "country":"Grenada", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Guadeloupe", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Guam", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Guatemala", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Guinea", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Guinea-Bissau", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Guyana", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B / D / G"
      },
      {
        "country":"Haiti", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Honduras", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Hong Kong", 
        "volts":220, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Hungary", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Iceland", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"India", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / M"
      },
      {
        "country":"Indonesia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Iran", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Iraq", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / G"
      },
      {
        "country":"Ireland", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Israel", 
        "volts":230, 
        "hertz":50, 
        "type":"C / H"
      },
      {
        "country":"Italy", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F / L"
      },
      {
        "country":"Jamaica", 
        "volts":110, 
        "hertz":50, 
        "type":"A / B"
      },
      {
        "country":"Japan", 
        "volts":230, 
        "hertz":50, 
        "type":"A / B"
      },
      {
        "country":"Jordan", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / F / G / J"
      },
      {
        "country":"Kazakhstan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Kenya", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Kiribati", 
        "volts":240, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Korea, North", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Korea, South", 
        "volts":220, 
        "hertz":60, 
        "type":"F"
      },
      {
        "country":"Kosovo", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Kuwait", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Kyrgyzstan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Laos", 
        "volts":230, 
        "hertz":50, 
        "type":"A / B / C / E / F"
      },
      {
        "country":"Latvia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Lebanon", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / G"
      },
      {
        "country":"Lesotho", 
        "volts":220, 
        "hertz":50, 
        "type":"M"
      },
      {
        "country":"Liberia", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B / C / F"
      },
      {
        "country":"Libya", 
        "volts":230, 
        "hertz":50, 
        "type":"C / L"
      },
      {
        "country":"Liechtenstein", 
        "volts":230, 
        "hertz":50, 
        "type":"C / J"
      },
      {
        "country":"Lithuania", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Lithuania", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Macau", 
        "volts":220, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Macedonia, North", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Madagascar", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Malawi", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Malaysia", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Maldives", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / G / J / K / L"
      },
      {
        "country":"Mali", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Malta", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Martinique", 
        "volts":220, 
        "hertz":50, 
        "type":"C / D / E"
      },
      {
        "country":"Mauritania", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Mauritius", 
        "volts":230, 
        "hertz":50, 
        "type":"C / G"
      },
      {
        "country":"Mayotte", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Mexico", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Micronesia, Federated States of", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Moldova", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Monaco", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E / F"
      },
      {
        "country":"Mongolia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Montenegro", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Montserrat", 
        "volts":230, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Morocco", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Mozambique", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F / M"
      },
      {
        "country":"Myanmar", 
        "volts":230, 
        "hertz":50, 
        "type":"A / C / D / G / I"
      },
      {
        "country":"Namibia", 
        "volts":220, 
        "hertz":50, 
        "type":"D / M"
      },
      {
        "country":"Nauru", 
        "volts":240, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Nepal", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / M"
      },
      {
        "country":"Netherlands", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"New Zealand", 
        "volts":230, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Nicaragua", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Niger", 
        "volts":220, 
        "hertz":50, 
        "type":"C / D / E / F"
      },
      {
        "country":"Nigeria", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Norway", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Oman", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Pakistan", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D"
      },
      {
        "country":"Palau", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Palestine", 
        "volts":230, 
        "hertz":50, 
        "type":"C / H"
      },
      {
        "country":"Panama", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Papua New Guinea", 
        "volts":240, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"Paraguay", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Peru", 
        "volts":220, 
        "hertz":60, 
        "type":"A / B / C"
      },
      {
        "country":"Philippines", 
        "volts":220, 
        "hertz":60, 
        "type":"A / B / C"
      },
      {
        "country":"Poland", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Portugal", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Puerto Rico", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Qatar", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Réunion", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Romania", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Russia", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Rwanda", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E / F / G"
      },
      {
        "country":"Saba", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Samoa", 
        "volts":230, 
        "hertz":50, 
        "type":"I"
      },
      {
        "country":"San Marino", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"São Tomé and Príncipe", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Saudi Arabia", 
        "volts":220, 
        "hertz":60, 
        "type":"G"
      },
      {
        "country":"Scotland", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Senegal", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / E / K"
      },
      {
        "country":"Serbia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Seychelles", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Sierra Leone", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Singapore", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Slovakia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Slovenia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Somalia", 
        "volts":220, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"South Africa", 
        "volts":230, 
        "hertz":50, 
        "type":"C / M / N"
      },
      {
        "country":"South Sudan", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D"
      },
      {
        "country":"Spain", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Sri Lanka", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Sudan", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D"
      },
      {
        "country":"Suriname", 
        "volts":127, 
        "hertz":60, 
        "type":"A / B / C / F"
      },
      {
        "country":"Swaziland", 
        "volts":230, 
        "hertz":50, 
        "type":"M"
      },
      {
        "country":"Sweden", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Switzerland", 
        "volts":230, 
        "hertz":50, 
        "type":"C / J"
      },
      {
        "country":"Syria", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E / L"
      },
      {
        "country":"Tahiti", 
        "volts":220, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Taiwan", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Tajikistan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Tanzania", 
        "volts":230, 
        "hertz":50, 
        "type":"D / G"
      },
      {
        "country":"Thailand", 
        "volts":230, 
        "hertz":50, 
        "type":"A / B / C / O"
      },
      {
        "country":"Togo", 
        "volts":220, 
        "hertz":50, 
        "type":"C"
      },
      {
        "country":"Trinidad & Tobago", 
        "volts":115, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Tunisia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / E"
      },
      {
        "country":"Turkey", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Turkmenistan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Uganda", 
        "volts":240, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Ukraine", 
        "volts":230, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"United Arab Emirates", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"United States of America", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Uruguay", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F / L"
      },
      {
        "country":"Uzbekistan", 
        "volts":220, 
        "hertz":50, 
        "type":"C / F"
      },
      {
        "country":"Venezuela", 
        "volts":120, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Vietnam", 
        "volts":220, 
        "hertz":50, 
        "type":"A / B / C"
      },
      {
        "country":"Virgin Islands", 
        "volts":110, 
        "hertz":60, 
        "type":"A / B"
      },
      {
        "country":"Wales", 
        "volts":230, 
        "hertz":50, 
        "type":"G"
      },
      {
        "country":"Yemen", 
        "volts":230, 
        "hertz":50, 
        "type":"A / D / G"
      },
      {
        "country":"Zambia", 
        "volts":230, 
        "hertz":50, 
        "type":"C / D / G"
      },
      {
        "country":"Zimbabwe", 
        "volts":240, 
        "hertz":50, 
        "type":"D / G"
      }
    ]
module.exports = {plugs}

