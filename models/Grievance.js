// backend/models/Grievance.js
import mongoose from 'mongoose';

const grievanceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number },
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
    enum: ['600001', '600002', '600003', '600004', '600005', '600006'],
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