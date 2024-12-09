const reasons = [
  { value: "Vaccination", label: "Vaccination" },
  { value: "Injury", label: "Injury" },
  { value: "Regular Checkup", label: "Regular Checkup" },
  { value: "Skin Issues", label: "Skin Issues" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Allergies", label: "Allergies" },
  { value: "Parasite Control", label: "Parasite Control" },
  { value: "Spaying/Neutering", label: "Spaying/Neutering" },
  { value: "Behavioral Issues", label: "Behavioral Issues" },
  { value: "Emergency Treatment", label: "Emergency Treatment" },
  { value: "Pregnancy Care", label: "Pregnancy Care" },
  { value: "Digestive Issues", label: "Digestive Issues" },
  { value: "Respiratory Problems", label: "Respiratory Problems" },
  { value: "Post-Surgery Follow-Up", label: "Post-Surgery Follow-Up" },
  { value: "Chronic Illness Management", label: "Chronic Illness Management" },
  { value: "Vaccination Update", label: "Vaccination Update" },
  { value: "Weight Management", label: "Weight Management" },
  { value: "Microchipping", label: "Microchipping" },
  { value: "Ear Infections", label: "Ear Infections" },
  { value: "Eye Problems", label: "Eye Problems" },
];


const adoptionReasons = [
  { value: "Put the Pet Up for Adoption", label: "Put the Pet Up for Adoption" },
  { value: "Found a Stray Pet", label: "Found a Stray Pet" },
  { value: "Unable to Care for Pet Anymore", label: "Unable to Care for Pet Anymore" },
  { value: "Pet Needs Medical Attention", label: "Pet Needs Medical Attention" },
  { value: "Pet Requires a Specialized Home", label: "Pet Requires a Specialized Home" },
  { value: "Relocating and Cannot Take Pet", label: "Relocating and Cannot Take Pet" },
  { value: "Pet Has Behavioral Issues", label: "Pet Has Behavioral Issues" },
  { value: "Pet's Owner Passed Away", label: "Pet's Owner Passed Away" },
  { value: "Pet No Longer Fits Lifestyle", label: "Pet No Longer Fits Lifestyle" },
  { value: "Pet Needs More Attention/Space", label: "Pet Needs More Attention/Space" },
];


const appointments = [
  {
    petName: "Buddy",
    clinicName: "Happy Pets Clinic",
    date: "2023-01-15",
    approval: "Approved",
  },
  {
    petName: "Mittens",
    clinicName: "Healthy Paws Clinic",
    date: "2023-02-20",
    approval: "Pending",
  },
  {
    petName: "Rex",
    clinicName: "VetCare Clinic",
    date: "2023-03-10",
    approval: "Rejected",
  },
  {
    petName: "Whiskers",
    clinicName: "Pet Wellness Center",
    date: "2023-04-05",
    approval: "Approved",
  },
  {
    petName: "Bella",
    clinicName: "Animal Health Clinic",
    date: "2023-05-18",
    approval: "Approved",
  },
  {
    petName: "Max",
    clinicName: "Pet Health Clinic",
    date: "2023-06-22",
    approval: "Pending",
  },
  {
    petName: "Luna",
    clinicName: "Happy Tails Clinic",
    date: "2023-07-30",
    approval: "Rejected",
  },
];

const animalList = [
  { value: "Dog", label: "Dog" },
  { value: "Cat", label: "Cat" },
  { value: "Bird", label: "Bird" },
];

const dogList = [
  { value: "Labrador Retriever", label: "Labrador Retriever" },
  { value: "Golden Retriever", label: "Golden Retriever" },
  { value: "German Shepherd", label: "German Shepherd" },
  { value: "Pug", label: "Pug" },
  { value: "Beagle", label: "Beagle" },
  { value: "Doberman Pinscher", label: "Doberman Pinscher" },
  { value: "Rottweiler", label: "Rottweiler" },
  { value: "Shih Tzu", label: "Shih Tzu" },
  { value: "Boxer", label: "Boxer" },
  { value: "Dachshund", label: "Dachshund" },
  { value: "Chihuahua", label: "Chihuahua" },
  { value: "Cocker Spaniel", label: "Cocker Spaniel" },
  { value: "French Bulldog", label: "French Bulldog" },
  { value: "Dalmatian", label: "Dalmatian" },
  { value: "Siberian Husky", label: "Siberian Husky" },
  { value: "Great Dane", label: "Great Dane" },
  { value: "Saint Bernard", label: "Saint Bernard" },
  { value: "Maltese", label: "Maltese" },
  { value: "Pomeranian", label: "Pomeranian" },
  { value: "Bichon Frise", label: "Bichon Frise" },
];

const catList = [
  { value: "Abyssinian", label: "Abyssinian" },
  { value: "Aegean", label: "Aegean" },
  { value: "American Bobtail", label: "American Bobtail" },
  { value: "American Curl", label: "American Curl" },
  { value: "American Shorthair", label: "American Shorthair" },
  { value: "American Wirehair", label: "American Wirehair" },
  { value: "Arabian Mau", label: "Arabian Mau" },
  { value: "Asian", label: "Asian" },
  { value: "Australian Mist", label: "Australian Mist" },
  { value: "Balinese", label: "Balinese" },
  { value: "Bambino", label: "Bambino" },
  { value: "Bengal", label: "Bengal" },
  { value: "Birman", label: "Birman" },
  { value: "Bombay", label: "Bombay" },
  { value: "Brazilian Shorthair", label: "Brazilian Shorthair" },
  { value: "British Longhair", label: "British Longhair" },
  { value: "British Shorthair", label: "British Shorthair" },
  { value: "Burmese", label: "Burmese" },
  { value: "Burmilla", label: "Burmilla" },
  { value: "California Spangled", label: "California Spangled" },
];

const birdList = [
  { value: "Parakeet", label: "Parakeet" },
  { value: "Canary", label: "Canary" },
  { value: "Cockatiel", label: "Cockatiel" },
  { value: "Budgerigar", label: "Budgerigar" },
  { value: "Finch", label: "Finch" },
  { value: "Lovebird", label: "Lovebird" },
  { value: "African Grey Parrot", label: "African Grey Parrot" },
  { value: "Macaw", label: "Macaw" },
  { value: "Cockatoo", label: "Cockatoo" },
  { value: "Conure", label: "Conure" },
  { value: "Canary-winged Parakeet", label: "Canary-winged Parakeet" },
  { value: "Quaker Parrot", label: "Quaker Parrot" },
  { value: "Eclectus Parrot", label: "Eclectus Parrot" },
  { value: "Sun Conure", label: "Sun Conure" },
  { value: "Indian Ringneck Parakeet", label: "Indian Ringneck Parakeet" },
];

export { reasons, appointments, animalList, dogList, catList, birdList, adoptionReasons };
