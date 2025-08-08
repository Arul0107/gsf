// backend/models/Grievance.js
import mongoose from 'mongoose';

const grievanceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number }, // 'age' is now optional by default
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  
  constituency: {
    type: String,
    enum: [
      'Adambakkam', 'Adyar', 'Alandur', 'Alapakkam', 'Alwarpet', 'Alwarthirunagar', 'Ambattur',
      'Aminjikarai', 'Anna Nagar', 'Annanur', 'Arumbakkam', 'Ashok Nagar', 'Avadi', 'Ayanavaram',
      'Beemannapettai', 'Besant Nagar', 'Basin Bridge', 'Chepauk', 'Chetput', 'Chintadripet',
      'Chitlapakkam', 'Choolai', 'Choolaimedu', 'Chrompet', 'Egmore', 'Ekkaduthangal', 'Eranavur',
      'Ennore', 'Foreshore Estate', 'Fort St. George', 'George Town', 'Gopalapuram', 'Government Estate',
      'Guindy', 'Guduvancheri', 'IIT Madras', 'Injambakkam', 'ICF', 'Iyyapanthangal', 'Jafferkhanpet',
      'Kadambathur', 'Karapakkam', 'Kattivakkam', 'Kattupakkam', 'Kazhipattur', 'K.K. Nagar',
      'Keelkattalai', 'Kilpauk', 'Kodambakkam', 'Kodungaiyur', 'Kolathur', 'Korattur', 'Korukkupet',
      'Kottivakkam', 'Kotturpuram', 'Kottur', 'Kovur', 'Koyambedu', 'Kundrathur', 'Madhavaram',
      'Madhavaram Milk Colony', 'Madipakkam', 'Madambakkam', 'Maduravoyal', 'Manali', 'Manali New Town',
      'Manapakkam', 'Mandaveli', 'Mangadu', 'Mannadi', 'Mathur', 'Medavakkam', 'Meenambakkam',
      'MGR Nagar', 'Minjur', 'Mogappair', 'MKB Nagar', 'Mount Road', 'Moolakadai', 'Moulivakkam',
      'Mugalivakkam', 'Mudichur', 'Mylapore', 'Nandanam', 'Nanganallur', 'Nanmangalam', 'Neelankarai',
      'Nemilichery', 'Nesapakkam', 'Nolambur', 'Noombal', 'Nungambakkam', 'Otteri', 'Padi', 'Pakkam',
      'Palavakkam', 'Pallavaram', 'Pallikaranai', 'Pammal', 'Park Town', 'Parry\'s Corner', 'Pattabiram',
      'Pattaravakkam', 'Pazhavanthangal', 'Peerkankaranai', 'Perambur', 'Peravallur', 'Perumbakkam',
      'Perungalathur', 'Perungudi', 'Pozhichalur', 'Poonamallee', 'Porur', 'Pudupet', 'Pulianthope',
      'Purasaiwalkam', 'Puthagaram', 'Puzhal', 'Puzhuthivakkam - Ullagaram', 'Raj Bhavan', 'Ramavaram',
      'Red Hills', 'Royapettah', 'Royapuram', 'Saidapet', 'Saligramam', 'Santhome', 'Sembakkam',
      'Selaiyur', 'Shenoy Nagar', 'Sholavaram', 'Sholinganallur', 'Sikkarayapuram', 'Sowcarpet',
      'St.Thomas Mount', 'Surapet', 'Tambaram', 'Teynampet', 'Tharamani', 'T. Nagar', 'Thirumangalam',
      'Thirumullaivoyal', 'Thiruneermalai', 'Thiruninravur', 'Thiruvanmiyur', 'Thiruvallur', 'Tiruverkadu',
      'Thiruvotriyur', 'Thuraipakkam', 'Tirusulam', 'Tiruvallikeni', 'Tondiarpet', 'United India Colony',
      'Vandalur', 'Vadapalani', 'Valasaravakkam', 'Vallalar Nagar', 'Vanagaram', 'Velachery',
      'Velappanchavadi', 'Villivakkam', 'Virugambakkam', 'Vyasarpadi', 'Washermanpet', 'West Mambalam'
    ],
    required: true,
  },

  pincode: {
    type: String,
    enum: [
      '600001', '600002', '600003', '600004', '600005', '600006', '600007', '600008', '600009', '600010',
      '600011', '600012', '600013', '600014', '600015', '600016', '600017', '600018', '600019', '600020',
      '600021', '600022', '600023', '600024', '600025', '600026', '600027', '600028', '600029', '600030',
      '600031', '600032', '600033', '600034', '600035', '600036', '600037', '600038', '600039', '600040',
      '600041', '600042', '600043', '600044', '600045', '600046', '600047', '600048', '600049', '600050',
      '600051', '600052', '600053', '600054', '600055', '600056', '600057', '600058', '600059', '600060',
      '600061', '600062', '600063', '600064', '600065', '600066', '600067', '600068', '600069', '600070',
      '600071', '600072', '600073', '600074', '600075', '600076', '600077', '600078', '600079', '600080',
      '600081', '600082', '600083', '600084', '600085', '600086', '600087', '600088', '600089', '600090',
      '600091', '600092', '600093', '600094', '600095', '600096', '600097', '600098', '600099', '600100',
      '600101', '600102', '600103', '600104', '600105', '600106', '600107', '600108', '600109', '600110',
      '600111', '600112', '600113', '600114', '600115', '600116', '600117', '600118', '600119', '600120',
      '600121', '600122', '600123', '600124', '600125', '600126', '600127'
    ],
    required: true,
  },

  wardNo: {
    type: String,
    required: true,
  },

  grievanceCategory: {
    type: String,
    enum: [ 'சாலை பராமரிப்பு',
    'பொதிய குப்பை சேகரிப்பு இல்லை',
    'தெருவிளக்கு செயலிழப்பு',
    'தமிழ்நீர் தேக்கம்',
    'சாலை பாதுகாப்பு கவலைகள்',
    'கல்வி வசதி குறைகள்',
    'பாதுகாப்பு கவலைகள்',
    'மின் தடை',
    'சுகாதாரம் மற்றும் சுகாதாரா கவலைகள்',
    'தீ பாதுகாப்பு சிக்கல்கள்',
    'கொசுக்கண் தொல்லை',
    'மற்ற குறைகள்'],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  attachment: {
    type: String, // stores filename or path
  },

  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'In Progress', 'Resolved']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Optional: pre-save hook (e.g., for validation or formatting)
grievanceSchema.pre('save', function (next) {
  // Example: you can auto-format or log data here
  // console.log('Saving grievance:', this);
  next();
});

const Grievance = mongoose.model('Grievance', grievanceSchema);
export default Grievance;
