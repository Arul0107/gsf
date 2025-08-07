// backend/controllers/enumController.js
import Grievance from '../models/Grievance.js';
import { extractEnumValues } from '../utils/extractEnums.js';

// Hardcoded mapping for constituencies, pincodes, and wards.
// In a production app, this data would be in a database.
const constituencyData = {
  'Adambakkam': {
    pincodes: ['600088'],
    pincodeWardMap: { '600088': '163' }
  },
  'Adyar': {
    pincodes: ['600020', '600041', '600090'],
    pincodeWardMap: { '600020': '173', '600041': '182', '600090': '178' }
  },
  'Alandur': {
    pincodes: ['600016', '600032'],
    pincodeWardMap: { '600016': '164', '600032': '165' }
  },
  'Alapakkam': {
    pincodes: ['600116'],
    pincodeWardMap: { '600116': '144' }
  },
  'Alwarpet': {
    pincodes: ['600018'],
    pincodeWardMap: { '600018': '124' }
  },
  'Alwarthirunagar': {
    pincodes: ['600087'],
    pincodeWardMap: { '600087': '138' }
  },
  'Ambattur': {
    pincodes: ['600053', '600058'],
    pincodeWardMap: { '600053': '80', '600058': '82' }
  },
  'Aminjikarai': {
    pincodes: ['600029', '600030'],
    pincodeWardMap: { '600029': '104', '600030': '105' }
  },
  'Anna Nagar': {
    pincodes: ['600040', '600101', '600102'],
    pincodeWardMap: { '600040': '100', '600101': '101', '600102': '103' }
  },
  'Arumbakkam': {
    pincodes: ['600106'],
    pincodeWardMap: { '600106': '107' }
  },
  'Ashok Nagar': {
    pincodes: ['600083'],
    pincodeWardMap: { '600083': '132' }
  },
  'Ayanavaram': {
    pincodes: ['600023'],
    pincodeWardMap: { '600023': '68' }
  },
  'Basin Bridge': {
    pincodes: ['600021'],
    pincodeWardMap: { '600021': '51' }
  },
  'Besant Nagar': {
    pincodes: ['600090'],
    pincodeWardMap: { '600090': '178' }
  },
  'Chepauk': {
    pincodes: ['600005'],
    pincodeWardMap: { '600005': '59' }
  },
  'Chetpet': {
    pincodes: ['600031'],
    pincodeWardMap: { '600031': '106' }
  },
  'Chintadripet': {
    pincodes: ['600002'],
    pincodeWardMap: { '600002': '61' }
  },
  'Choolai': {
    pincodes: ['600112'],
    pincodeWardMap: { '600112': '69' }
  },
  'Choolaimedu': {
    pincodes: ['600094'],
    pincodeWardMap: { '600094': '107' }
  },
  'Egmore': {
    pincodes: ['600008'],
    pincodeWardMap: { '600008': '61' }
  },
  'Ekkaduthangal': {
    pincodes: ['600032'],
    pincodeWardMap: { '600032': '133' }
  },
  'Ennore': {
    pincodes: ['600057'],
    pincodeWardMap: { '600057': '1' }
  },
  'Foreshore Estate': {
    pincodes: ['600028'],
    pincodeWardMap: { '600028': '179' }
  },
  'George Town': {
    pincodes: ['600001', '600079'],
    pincodeWardMap: { '600001': '57', '600079': '58' }
  },
  'Gopalapuram': {
    pincodes: ['600086'],
    pincodeWardMap: { '600086': '111' }
  },
  'Guindy': {
    pincodes: ['600032'],
    pincodeWardMap: { '600032': '133' }
  },
  'Injambakkam': {
    pincodes: ['600115'],
    pincodeWardMap: { '600115': '197' }
  },
  'Jafferkhanpet': {
    pincodes: ['600083'],
    pincodeWardMap: { '600083': '132' }
  },
  'K.K. Nagar': {
    pincodes: ['600078'],
    pincodeWardMap: { '600078': '134' }
  },
  'Karapakkam': {
    pincodes: ['600097'],
    pincodeWardMap: { '600097': '198' }
  },
  'Kattivakkam': {
    pincodes: ['600068'],
    pincodeWardMap: { '600068': '2' }
  },
  'Kilpauk': {
    pincodes: ['600010'],
    pincodeWardMap: { '600010': '70' }
  },
  'Kodambakkam': {
    pincodes: ['600024'],
    pincodeWardMap: { '600024': '128' }
  },
  'Kodungaiyur': {
    pincodes: ['600118'],
    pincodeWardMap: { '600118': '33' }
  },
  'Kolathur': {
    pincodes: ['600099'],
    pincodeWardMap: { '600099': '65' }
  },
  'Korattur': {
    pincodes: ['600080'],
    pincodeWardMap: { '600080': '83' }
  },
  'Korukkupet': {
    pincodes: ['600021'],
    pincodeWardMap: { '600021': '37' }
  },
  'Kottivakkam': {
    pincodes: ['600041'],
    pincodeWardMap: { '600041': '186' }
  },
  'Kotturpuram': {
    pincodes: ['600085'],
    pincodeWardMap: { '600085': '171' }
  },
  'Koyambedu': {
    pincodes: ['600107'],
    pincodeWardMap: { '600107': '129' }
  },
  'Madhavaram': {
    pincodes: ['600060', '600051'],
    pincodeWardMap: { '600060': '32', '600051': '31' }
  },
  'Madipakkam': {
    pincodes: ['600091'],
    pincodeWardMap: { '600091': '188' }
  },
  'Maduravoyal': {
    pincodes: ['600095'],
    pincodeWardMap: { '600095': '145' }
  },
  'Manali': {
    pincodes: ['600103', '600068'],
    pincodeWardMap: { '600103': '15', '600068': '16' }
  },
  'Mandaveli': {
    pincodes: ['600004', '600028'],
    pincodeWardMap: { '600004': '172', '600028': '179' }
  },
  'Mylapore': {
    pincodes: ['600004'],
    pincodeWardMap: { '600004': '124' }
  },
  'Nandanam': {
    pincodes: ['600035'],
    pincodeWardMap: { '600035': '123' }
  },
  'Nanganallur': {
    pincodes: ['600061'],
    pincodeWardMap: { '600061': '167' }
  },
  'Neelankarai': {
    pincodes: ['600115'],
    pincodeWardMap: { '600115': '195' }
  },
  'Nungambakkam': {
    pincodes: ['600034'],
    pincodeWardMap: { '600034': '111' }
  },
  'Padi': {
    pincodes: ['600050'],
    pincodeWardMap: { '600050': '93' }
  },
  'Palavakkam': {
    pincodes: ['600041'],
    pincodeWardMap: { '600041': '186' }
  },
  'Pallavaram': {
    pincodes: ['600043'],
    pincodeWardMap: { '600043': '166' }
  },
  'Pallikaranai': {
    pincodes: ['600100'],
    pincodeWardMap: { '600100': '189' }
  },
  'Pattabiram': {
    pincodes: ['600072'],
    pincodeWardMap: { '600072': '88' }
  },
  'Perambur': {
    pincodes: ['600011', '600082'],
    pincodeWardMap: { '600011': '71', '600082': '72' }
  },
  'Perungalathur': {
    pincodes: ['600063'],
    pincodeWardMap: { '600063': '166' }
  },
  'Perungudi': {
    pincodes: ['600096'],
    pincodeWardMap: { '600096': '183' }
  },
  'Poonamallee': {
    pincodes: ['600056'],
    pincodeWardMap: { '600056': '147' }
  },
  'Porur': {
    pincodes: ['600116'],
    pincodeWardMap: { '600116': '144' }
  },
  'Purasaiwalkam': {
    pincodes: ['600007'],
    pincodeWardMap: { '600007': '57' }
  },
  'Puzhal': {
    pincodes: ['600066'],
    pincodeWardMap: { '600066': '28' }
  },
  'Red Hills': {
    pincodes: ['600052'],
    pincodeWardMap: { '600052': '30' }
  },
  'Royapettah': {
    pincodes: ['600014'],
    pincodeWardMap: { '600014': '113' }
  },
  'Royapuram': {
    pincodes: ['600013'],
    pincodeWardMap: { '600013': '49' }
  },
  'Saidapet': {
    pincodes: ['600015'],
    pincodeWardMap: { '600015': '139' }
  },
  'Saligramam': {
    pincodes: ['600093'],
    pincodeWardMap: { '600093': '131' }
  },
  'Santhome': {
    pincodes: ['600004'],
    pincodeWardMap: { '600004': '172' }
  },
  'Shenoy Nagar': {
    pincodes: ['600030'],
    pincodeWardMap: { '600030': '105' }
  },
  'Sholinganallur': {
    pincodes: ['600119'],
    pincodeWardMap: { '600119': '193' }
  },
  'Sowcarpet': {
    pincodes: ['600079'],
    pincodeWardMap: { '600079': '58' }
  },
  'St.Thomas Mount': {
    pincodes: ['600016'],
    pincodeWardMap: { '600016': '164' }
  },
  'Tambaram': {
    pincodes: ['600045'],
    pincodeWardMap: { '600045': '166' }
  },
  'Teynampet': {
    pincodes: ['600018'],
    pincodeWardMap: { '600018': '124' }
  },
  'Tharamani': {
    pincodes: ['600113'],
    pincodeWardMap: { '600113': '182' }
  },
  'T. Nagar': {
    pincodes: ['600017'],
    pincodeWardMap: { '600017': '137' }
  },
  'Thirumullaivoyal': {
    pincodes: ['600062'],
    pincodeWardMap: { '600062': '89' }
  },
  'Thiruvanmiyur': {
    pincodes: ['600041'],
    pincodeWardMap: { '600041': '182' }
  },
  'Thiruvotriyur': {
    pincodes: ['600019'],
    pincodeWardMap: { '600019': '10' }
  },
  'Thuraipakkam': {
    pincodes: ['600097'],
    pincodeWardMap: { '600097': '198' }
  },
  'Tondiarpet': {
    pincodes: ['600081'],
    pincodeWardMap: { '600081': '41' }
  },
  'Vadapalani': {
    pincodes: ['600026'],
    pincodeWardMap: { '600026': '129' }
  },
  'Valasaravakkam': {
    pincodes: ['600087'],
    pincodeWardMap: { '600087': '141' }
  },
  'Velachery': {
    pincodes: ['600042'],
    pincodeWardMap: { '600042': '176' }
  },
  'Villivakkam': {
    pincodes: ['600049'],
    pincodeWardMap: { '600049': '98' }
  },
  'Virugambakkam': {
    pincodes: ['600092'],
    pincodeWardMap: { '600092': '131' }
  },
  'Vyasarpadi': {
    pincodes: ['600039'],
    pincodeWardMap: { '600039': '44' }
  },
  'Washermanpet': {
    pincodes: ['600021'],
    pincodeWardMap: { '600021': '41' }
  },
  'West Mambalam': {
    pincodes: ['600033'],
    pincodeWardMap: { '600033': '137' }
  },
};


export const getGrievanceEnums = (req, res) => {
  try {
    const schema = Grievance.schema;
    res.json({
      constituencies: Object.keys(constituencyData),
      grievanceCategories: extractEnumValues(schema, 'grievanceCategory'),
      statuses: extractEnumValues(schema, 'status')
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPincodesByConstituency = (req, res) => {
  try {
    const { constituencyName } = req.params;
    const data = constituencyData[constituencyName];
    if (!data) {
      return res.status(404).json({ error: 'Constituency not found.' });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};