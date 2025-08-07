// --- Dealership Data ---
const dealerships = [
    {
        id: 'downtown',
        name: 'Wheelio Downtown',
        address: {
            line1: '123 Main Street',
            line2: 'Suite 100',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62701'
        }
    },
    {
        id: 'northside',
        name: 'Wheelio Northside',
        address: {
            line1: '456 Oak Avenue',
            line2: '',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62704'
        }
    },
    {
        id: 'westend',
        name: 'Wheelio West End',
        address: {
            line1: '789 Elm Boulevard',
            line2: 'Building C',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62712'
        }
    }
];

// --- Car Data ---
const cars = [
    // Honda Group - Downtown
    { id: 'car1', make: 'Honda', model: 'CR-V', price: 30000, mpg: { city: 28, highway: 34 }, seating: 5, features: ['Apple CarPlay', 'AWD', 'sunroof', 'adaptive cruise control'], safetyRating: 5, type: 'SUV', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/E0F2F7/0288D1?text=Honda+CR-V' },
    { id: 'car2', make: 'Honda', model: 'Accord', price: 26000, mpg: { city: 32, highway: 42 }, seating: 5, features: ['Apple CarPlay', 'Honda Sensing', 'sunroof'], safetyRating: 5, type: 'Sedan', dealershipId: 'northside', imageUrl: 'https://placehold.co/400x250/E0F2F7/0288D1?text=Honda+Accord' },
    { id: 'car3', make: 'Honda', model: 'Pilot', price: 38000, mpg: { city: 20, highway: 27 }, seating: 8, features: ['Apple CarPlay', 'AWD', '3rd row seating', 'wireless charging'], safetyRating: 5, type: 'SUV', dealershipId: 'westend', imageUrl: 'https://placehold.co/400x250/E0F2F7/0288D1?text=Honda+Pilot' },
    
    // Toyota Group - Distributed
    { id: 'car4', make: 'Toyota', model: 'Camry', price: 28000, mpg: { city: 29, highway: 38 }, seating: 5, features: ['Android Auto', 'FWD', 'blind spot monitor'], safetyRating: 5, type: 'Sedan', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/E8F5E9/388E3C?text=Toyota+Camry' },
    { id: 'car5', make: 'Toyota', model: 'RAV4', price: 32000, mpg: { city: 27, highway: 35 }, seating: 5, features: ['Apple CarPlay', 'AWD', 'Toyota Safety Sense'], safetyRating: 5, type: 'SUV', dealershipId: 'northside', imageUrl: 'https://placehold.co/400x250/E8F5E9/388E3C?text=Toyota+RAV4' },
    { id: 'car6', make: 'Toyota', model: 'Highlander', price: 40000, mpg: { city: 21, highway: 29 }, seating: 8, features: ['Apple CarPlay', 'AWD', '3rd row seating', 'JBL audio'], safetyRating: 5, type: 'SUV', dealershipId: 'westend', imageUrl: 'https://placehold.co/400x250/E8F5E9/388E3C?text=Toyota+Highlander' },
    
    // Ford Group - Distributed
    { id: 'car7', make: 'Ford', model: 'F-150', price: 40000, mpg: { city: 20, highway: 26 }, seating: 6, features: ['Towing Package', '4x4', 'large bed'], safetyRating: 4, type: 'Truck', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Ford+F-150' },
    { id: 'car8', make: 'Ford', model: 'Explorer', price: 36000, mpg: { city: 21, highway: 28 }, seating: 7, features: ['Apple CarPlay', 'AWD', '3rd row seating', 'SYNC 4'], safetyRating: 4, type: 'SUV', dealershipId: 'northside', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Ford+Explorer' },
    { id: 'car9', make: 'Ford', model: 'Mustang Mach-E', price: 48000, mpg: { city: 105, highway: 93 }, seating: 5, features: ['Fast Charging', 'AWD', 'panoramic glass roof', 'SYNC 4A'], safetyRating: 5, type: 'EV', dealershipId: 'westend', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Ford+Mustang+Mach-E' },
    
    // Tesla Group - Distributed
    { id: 'car10', make: 'Tesla', model: 'Model 3', price: 45000, mpg: { city: 132, highway: 121 }, seating: 5, features: ['Autopilot', 'AWD', 'panoramic glass roof', 'fast charging'], safetyRating: 5, type: 'EV', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/F3E5F5/7B1FA2?text=Tesla+Model+3' },
    { id: 'car11', make: 'Tesla', model: 'Model Y', price: 52000, mpg: { city: 125, highway: 115 }, seating: 7, features: ['Autopilot', 'AWD', 'panoramic glass roof', 'fast charging', '3rd row seating'], safetyRating: 5, type: 'EV', dealershipId: 'northside', imageUrl: 'https://placehold.co/400x250/F3E5F5/7B1FA2?text=Tesla+Model+Y' },
    
    // Chevrolet Group - Distributed
    { id: 'car12', make: 'Chevrolet', model: 'Bolt EV', price: 27000, mpg: { city: 120, highway: 100 }, seating: 5, features: ['Fast Charging', 'Apple CarPlay', 'Backup Camera'], safetyRating: 5, type: 'EV', dealershipId: 'westend', imageUrl: 'https://placehold.co/400x250/E1F5FE/0277BD?text=Chevrolet+Bolt+EV' },
    { id: 'car13', make: 'Chevrolet', model: 'Tahoe', price: 52000, mpg: { city: 16, highway: 20 }, seating: 9, features: ['Towing Package', '4x4', '3rd row seating', 'Bose audio'], safetyRating: 4, type: 'SUV', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/E1F5FE/0277BD?text=Chevrolet+Tahoe' },
    
    // BMW Group - Distributed
    { id: 'car14', make: 'BMW', model: 'X5', price: 60000, mpg: { city: 21, highway: 26 }, seating: 5, features: ['Leather Seats', 'Panoramic Sunroof', 'Heated Seats', 'Navigation'], safetyRating: 5, type: 'SUV', dealershipId: 'northside', imageUrl: 'https://placehold.co/400x250/FBE9E7/D84315?text=BMW+X5' },
    { id: 'car15', make: 'BMW', model: '3 Series', price: 41000, mpg: { city: 26, highway: 36 }, seating: 5, features: ['Leather Seats', 'Heated Seats', 'Navigation', 'Harman Kardon audio'], safetyRating: 5, type: 'Sedan', dealershipId: 'westend', imageUrl: 'https://placehold.co/400x250/FBE9E7/D84315?text=BMW+3+Series' },
    
    // Hyundai Group - Downtown
    { id: 'car16', make: 'Hyundai', model: 'Elantra', price: 22000, mpg: { city: 31, highway: 41 }, seating: 5, features: ['Apple CarPlay', 'Android Auto', 'Lane Keeping Assist'], safetyRating: 4, type: 'Sedan', dealershipId: 'downtown', imageUrl: 'https://placehold.co/400x250/FCE4EC/AD1457?text=Hyundai+Elantra' },
];

// --- User Preferences (will be updated by chat and facets) ---
let userPreferences = {
    brand: null,
    priceRange: null, // Changed from maxPrice to priceRange: {min: number, max: number}
    minMPGHighway: null,
    seatingCapacity: null,
    carType: null, // Can be a string like 'SUV' or an array if multiple types are allowed
    features: null,
    dealership: null // New preference for dealership location
};

// --- Guided Experience State ---
let isGuided = false;
let guidedStep = 0;
let guidedQuestions = [
    {
        question: "What's your budget range? (e.g., 'under 30k', 'between 25k and 40k', or 'around 35k')",
        preference: 'priceRange',
        pattern: /(?:between\s*\$*(\d+k?)\s*and\s*\$*(\d+k?)|under\s*\$*(\d+k?)|over\s*\$*(\d+k?)|around\s*\$*(\d+k?))/i
    },
    {
        question: "What type of vehicle are you looking for? (SUV, Sedan, Truck, or Electric Vehicle)",
        preference: 'carType',
        pattern: /(suv|sedan|truck|electric|ev)/i
    },
    {
        question: "Do you have a brand preference? (Honda, Toyota, Ford, Tesla, BMW, Chevrolet, Hyundai, or 'no preference')",
        preference: 'brand',
        pattern: /(honda|toyota|ford|tesla|bmw|chevrolet|hyundai|no preference)/i
    },
    {
        question: "How many seats do you need? (2, 4, 5, 6, 7, 8, or 9)",
        preference: 'seatingCapacity',
        pattern: /(\d+)\s*seats?/i
    },
    {
        question: "Which dealership location would you prefer? (Downtown, Northside, West End, or 'no preference')",
        preference: 'dealership',
        pattern: /(downtown|northside|north side|west end|westend|no preference)/i
    },
    {
        question: "Is fuel efficiency important to you? (e.g., 'yes', 'at least 30 mpg', or 'not important')",
        preference: 'minMPGHighway',
        pattern: /(yes|at least (\d+)|not important|\d+ mpg)/i
    },
    {
        question: "Are there any specific features you want? (e.g., 'AWD', 'sunroof', 'Apple CarPlay', 'heated seats', 'backup camera', or 'no specific features')",
        preference: 'features',
        pattern: /(awd|fwd|4x4|sunroof|carplay|android auto|heated seats|leather|navigation|backup camera|towing|autopilot|fast charging|third row|3rd row|no specific features)/i
    }
];

// --- DOM Elements ---
const chatMessagesDiv = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const carListContainer = document.getElementById('car-list-container');
const carListContainerWrapper = document.getElementById('car-list-container-wrapper');
const chatDrawer = document.getElementById('chat-drawer');
const drawerToggle = document.getElementById('drawer-toggle');
const toggleIconOpen = document.getElementById('toggle-icon-open');
const toggleIconClosed = document.getElementById('toggle-icon-closed');
const chatContent = document.getElementById('chat-content');
const chatDrawerHeader = document.getElementById('chat-drawer-header');
const facetSidebar = document.getElementById('facet-sidebar');

// --- Application State ---
let isInFullWidthMode = true; // Start in full-width chat mode
let hasProvidedZipCode = false; // Track if user has provided zip code
let isDrawerOpen = false; // Track drawer state (starts closed)

// Facet DOM Elements
const facetBrandSelect = document.getElementById('facet-brand');
const facetCarTypeDiv = document.getElementById('facet-car-type');
const facetPriceMin = document.getElementById('facet-price-min');
const facetPriceMax = document.getElementById('facet-price-max');
const facetPriceMinValueSpan = document.getElementById('facet-price-min-value');
const facetPriceMaxValueSpan = document.getElementById('facet-price-max-value');
const facetMpgRange = document.getElementById('facet-mpg-range');
const facetMpgValueSpan = document.getElementById('facet-mpg-value');
const facetSeatingSelect = document.getElementById('facet-seating');
const facetDealershipSelect = document.getElementById('facet-dealership');
const facetFeaturesDiv = document.getElementById('facet-features');
const facetResetButton = document.getElementById('facet-reset-button');

// --- Utility Functions ---

// Function to add a message to the chat window
function addChatMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender, 'p-3', 'my-2', 'max-w-[80%]', 'shadow-sm');
    messageDiv.textContent = message;
    chatMessagesDiv.appendChild(messageDiv);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight; // Scroll to bottom
}

// Function to start guided experience
function startGuidedExperience() {
    isGuided = true;
    guidedStep = 0;
    // Reset preferences for a fresh start
    userPreferences = {
        brand: null,
        priceRange: null,
        minMPGHighway: null,
        seatingCapacity: null,
        carType: null,
        features: null
    };
    updateFacetUI();
    askNextGuidedQuestion();
}

// Function to ask the next guided question
function askNextGuidedQuestion() {
    if (guidedStep >= guidedQuestions.length) {
        // All questions answered, check results
        const rankedCars = rankCars(cars, userPreferences);
        const perfectMatches = rankedCars.filter(car => car.isPerfectMatch);
        
        if (perfectMatches.length === 1) {
            addChatMessage(`Perfect! Based on your preferences, I found the ideal car for you: the ${perfectMatches[0].make} ${perfectMatches[0].model}. It's highlighted above!`, 'ai');
            setTimeout(() => {
                addChatMessage(`This car matches all your criteria perfectly! Ready to make it yours? Give us a call at (555) WHEELIO to schedule a test drive and complete your purchase. Our team is standing by to help!`, 'ai');
            }, 1500);
            isGuided = false;
        } else if (perfectMatches.length === 0) {
            addChatMessage("I couldn't find a perfect match with all your criteria, but I've ranked the cars by how well they match your preferences. The top ones are your best options!", 'ai');
            isGuided = false;
        } else {
            addChatMessage(`Great! I found ${perfectMatches.length} cars that match all your criteria. You can see them highlighted above, or feel free to ask me more specific questions to narrow it down further.`, 'ai');
            isGuided = false;
        }
        return;
    }

    const question = guidedQuestions[guidedStep];
    addChatMessage(question.question, 'ai');
}

// Function to process guided response
function processGuidedResponse(input) {
    const question = guidedQuestions[guidedStep];
    const lowerInput = input.toLowerCase();
    let processed = false;

    switch (question.preference) {
        case 'priceRange':
            const rangeMatch = lowerInput.match(/between\s*\$*(\d+k?)\s*and\s*\$*(\d+k?)/);
            const underMatch = lowerInput.match(/under\s*\$*(\d+k?)/);
            const overMatch = lowerInput.match(/over\s*\$*(\d+k?)/);
            const aroundMatch = lowerInput.match(/around\s*\$*(\d+k?)/);
            
            if (rangeMatch) {
                let minPrice = parseInt(rangeMatch[1].replace('k', '000'), 10);
                let maxPrice = parseInt(rangeMatch[2].replace('k', '000'), 10);
                userPreferences.priceRange = { value: {min: minPrice, max: maxPrice}, weight: 3, description: `price between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}` };
                addChatMessage(`Got it! Looking for cars between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}.`, 'ai');
                processed = true;
            } else if (underMatch) {
                let maxPrice = parseInt(underMatch[1].replace('k', '000'), 10);
                userPreferences.priceRange = { value: {min: 10000, max: maxPrice}, weight: 3, description: `price under $${maxPrice.toLocaleString()}` };
                addChatMessage(`Perfect! Focusing on cars under $${maxPrice.toLocaleString()}.`, 'ai');
                processed = true;
            } else if (overMatch) {
                let minPrice = parseInt(overMatch[1].replace('k', '000'), 10);
                userPreferences.priceRange = { value: {min: minPrice, max: 100000}, weight: 3, description: `price over $${minPrice.toLocaleString()}` };
                addChatMessage(`Understood! Looking for cars over $${minPrice.toLocaleString()}.`, 'ai');
                processed = true;
            } else if (aroundMatch) {
                let targetPrice = parseInt(aroundMatch[1].replace('k', '000'), 10);
                let minPrice = Math.max(10000, targetPrice - 5000);
                let maxPrice = Math.min(100000, targetPrice + 5000);
                userPreferences.priceRange = { value: {min: minPrice, max: maxPrice}, weight: 3, description: `price around $${targetPrice.toLocaleString()}` };
                addChatMessage(`Great! Searching for cars around $${targetPrice.toLocaleString()}.`, 'ai');
                processed = true;
            }
            break;

        case 'carType':
            if (lowerInput.includes('suv')) {
                userPreferences.carType = { value: 'SUV', weight: 3, description: "an SUV" };
                addChatMessage("SUVs it is! Great for versatility and space.", 'ai');
                processed = true;
            } else if (lowerInput.includes('sedan')) {
                userPreferences.carType = { value: 'Sedan', weight: 3, description: "a Sedan" };
                addChatMessage("Sedans are excellent for comfort and fuel efficiency!", 'ai');
                processed = true;
            } else if (lowerInput.includes('truck')) {
                userPreferences.carType = { value: 'Truck', weight: 3, description: "a Truck" };
                addChatMessage("Trucks are perfect for hauling and capability!", 'ai');
                processed = true;
            } else if (lowerInput.includes('electric') || lowerInput.includes('ev')) {
                userPreferences.carType = { value: 'EV', weight: 3, description: "an Electric Vehicle" };
                addChatMessage("Electric vehicles - great choice for the environment and efficiency!", 'ai');
                processed = true;
            }
            break;

        case 'brand':
            if (lowerInput.includes('no preference')) {
                addChatMessage("No problem! I'll consider all brands.", 'ai');
                processed = true;
            } else {
                const knownBrands = ["honda", "toyota", "tesla", "ford", "bmw", "chevrolet", "hyundai"];
                for (const brand of knownBrands) {
                    if (lowerInput.includes(brand)) {
                        let displayBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
                        userPreferences.brand = { value: displayBrand, weight: 2, description: `brand preference: ${displayBrand}` };
                        addChatMessage(`${displayBrand} is a great choice!`, 'ai');
                        processed = true;
                        break;
                    }
                }
            }
            break;

        case 'seatingCapacity':
            const seatMatch = lowerInput.match(/(\d+)/);
            if (seatMatch) {
                const seatingValue = parseInt(seatMatch[1], 10);
                userPreferences.seatingCapacity = { value: seatingValue, weight: 2, description: `at least ${seatingValue} seats` };
                addChatMessage(`Perfect! Looking for cars with at least ${seatingValue} seats.`, 'ai');
                processed = true;
            }
            break;

        case 'minMPGHighway':
            if (lowerInput.includes('not important')) {
                addChatMessage("Understood! Fuel efficiency won't be a priority.", 'ai');
                processed = true;
            } else if (lowerInput.includes('yes')) {
                userPreferences.minMPGHighway = { value: 30, weight: 2, description: "good highway MPG" };
                addChatMessage("Great! I'll prioritize fuel-efficient vehicles.", 'ai');
                processed = true;
            } else {
                const mpgMatch = lowerInput.match(/(\d+)/);
                if (mpgMatch) {
                    const mpgValue = parseInt(mpgMatch[1], 10);
                    userPreferences.minMPGHighway = { value: mpgValue, weight: 2, description: `highway MPG of at least ${mpgValue}` };
                    addChatMessage(`Got it! Looking for cars with at least ${mpgValue} highway MPG.`, 'ai');
                    processed = true;
                }
            }
            break;

        case 'features':
            if (lowerInput.includes('no specific features')) {
                addChatMessage("No problem! I won't prioritize any specific features.", 'ai');
                processed = true;
            } else {
                // Use the same feature mapping as in the main chat processing
                const featureMap = {
                    'awd': 'AWD',
                    'all-wheel drive': 'AWD', 
                    'all wheel drive': 'AWD',
                    'fwd': 'FWD',
                    'front-wheel drive': 'FWD',
                    'front wheel drive': 'FWD',
                    '4x4': '4x4',
                    'four wheel drive': '4x4',
                    'four-wheel drive': '4x4',
                    'apple carplay': 'Apple CarPlay',
                    'carplay': 'Apple CarPlay',
                    'android auto': 'Android Auto',
                    'autopilot': 'Autopilot',
                    'wireless charging': 'wireless charging',
                    'backup camera': 'Backup Camera',
                    'backup cam': 'Backup Camera',
                    'rear camera': 'Backup Camera',
                    'honda sensing': 'Honda Sensing',
                    'toyota safety sense': 'Toyota Safety Sense',
                    'adaptive cruise control': 'adaptive cruise control',
                    'cruise control': 'adaptive cruise control',
                    'blind spot monitor': 'blind spot monitor',
                    'blind spot': 'blind spot monitor',
                    'lane keeping assist': 'Lane Keeping Assist',
                    'lane assist': 'Lane Keeping Assist',
                    'sunroof': 'sunroof',
                    'sun roof': 'sunroof',
                    'panoramic sunroof': 'Panoramic Sunroof',
                    'panoramic glass roof': 'panoramic glass roof',
                    'heated seats': 'Heated Seats',
                    'leather seats': 'Leather Seats',
                    'leather': 'Leather Seats',
                    '3rd row seating': '3rd row seating',
                    'third row seating': '3rd row seating',
                    'third row': '3rd row seating',
                    '3rd row': '3rd row seating',
                    'jbl audio': 'JBL audio',
                    'jbl': 'JBL audio',
                    'bose audio': 'Bose audio',
                    'bose': 'Bose audio',
                    'harman kardon audio': 'Harman Kardon audio',
                    'harman kardon': 'Harman Kardon audio',
                    'sync 4': 'SYNC 4',
                    'sync4': 'SYNC 4',
                    'sync 4a': 'SYNC 4A',
                    'sync4a': 'SYNC 4A',
                    'navigation': 'Navigation',
                    'nav': 'Navigation',
                    'gps': 'Navigation',
                    'fast charging': 'Fast Charging',
                    'rapid charging': 'Fast Charging',
                    'quick charging': 'Fast Charging',
                    'towing package': 'Towing Package',
                    'towing': 'Towing Package',
                    'tow package': 'Towing Package',
                    'large bed': 'large bed',
                    'truck bed': 'large bed'
                };
                
                const foundFeatures = [];
                for (const [searchTerm, featureName] of Object.entries(featureMap)) {
                    if (lowerInput.includes(searchTerm)) {
                        if (!foundFeatures.includes(featureName)) {
                            foundFeatures.push(featureName);
                        }
                    }
                }
                
                if (foundFeatures.length > 0) {
                    userPreferences.features = { value: foundFeatures, weight: 1, description: `specific features: ${foundFeatures.join(', ')}` };
                    addChatMessage(`Great! I'll prioritize cars with: ${foundFeatures.join(', ')}.`, 'ai');
                    processed = true;
                }
            }
            break;

        case 'dealership':
            if (lowerInput.includes('no preference')) {
                addChatMessage("No problem! I'll show cars from all our locations.", 'ai');
                processed = true;
            } else if (lowerInput.includes('downtown')) {
                userPreferences.dealership = { value: 'downtown', weight: 1, description: "Downtown location" };
                addChatMessage("Great choice! Our Downtown location at 123 Main Street is very convenient.", 'ai');
                processed = true;
            } else if (lowerInput.includes('northside') || lowerInput.includes('north side')) {
                userPreferences.dealership = { value: 'northside', weight: 1, description: "Northside location" };
                addChatMessage("Perfect! Our Northside location at 456 Oak Avenue has a great selection.", 'ai');
                processed = true;
            } else if (lowerInput.includes('west end') || lowerInput.includes('westend')) {
                userPreferences.dealership = { value: 'westend', weight: 1, description: "West End location" };
                addChatMessage("Excellent! Our West End location at 789 Elm Boulevard is our newest facility.", 'ai');
                processed = true;
            }
            break;
    }

    if (processed) {
        guidedStep++;
        updateFacetUI();
        updateCarDisplay();
        
        // Check if we now have a single perfect match and stop guided experience
        const rankedCars = rankCars(cars, userPreferences);
        const perfectMatches = rankedCars.filter(car => car.isPerfectMatch);
        
        if (perfectMatches.length === 1) {
            setTimeout(() => {
                addChatMessage(`🎉 Perfect! I found your ideal match: the ${perfectMatches[0].make} ${perfectMatches[0].model}. This car meets all your criteria perfectly!`, 'ai');
                setTimeout(() => {
                    addChatMessage(`Ready to make it yours? Give us a call at (555) WHEELIO to schedule a test drive and complete your purchase. Our team is standing by to help!`, 'ai');
                }, 1500);
            }, 500);
            isGuided = false; // Stop the guided experience
        } else if (perfectMatches.length === 0 && guidedStep >= 3) {
            // If no perfect matches after collecting enough preferences, stop guided experience
            setTimeout(() => {
                addChatMessage("I couldn't find any cars that match all your criteria perfectly. The cars above are ranked by how well they match your preferences - the top ones are your best options!", 'ai');
                setTimeout(() => {
                    addChatMessage("You can try adjusting your preferences, ask me specific questions, or say 'reset' to start over with fresh criteria.", 'ai');
                }, 1500);
            }, 500);
            isGuided = false; // Stop the guided experience
        } else {
            setTimeout(() => askNextGuidedQuestion(), 500); // Small delay before next question
        }
    } else {
        addChatMessage("I didn't quite understand that. Could you please try again?", 'ai');
    }
}

// Simulates AI processing and updating preferences
async function processUserInput(input) {
    addChatMessage(input, 'user');
    userInput.value = ''; // Clear input immediately

    // Show a loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('chat-message', 'ai', 'p-3', 'my-2', 'max-w-[80%]', 'shadow-sm', 'loading-dots');
    loadingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    chatMessagesDiv.appendChild(loadingDiv);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Remove loading indicator
    chatMessagesDiv.removeChild(loadingDiv);

    const lowerInput = input.toLowerCase();

    // Check if we're in full-width mode and user hasn't provided zip code yet
    if (isInFullWidthMode && !hasProvidedZipCode) {
        // Look for zip code pattern (5 digits)
        const zipCodeMatch = input.match(/\b(\d{5})\b/);
        if (zipCodeMatch) {
            const zipCode = zipCodeMatch[1];
            hasProvidedZipCode = true;
            
            // Find nearest dealership
            const nearestDealership = findNearestDealership(zipCode);
            userPreferences.dealership = { value: nearestDealership, weight: 1, description: `Dealership location preference` };
            
            // Get dealership info
            const dealership = dealerships.find(d => d.id === nearestDealership);
            
            addChatMessage(`Perfect! I found cars available at ${dealership.name} near ${zipCode}. Let me show you our inventory and help you find your perfect match!`, 'ai');
            
            // Transition to sidebar mode
            transitionToSidebarMode();
            
            // After a brief delay, ask about preferences
            setTimeout(() => {
                addChatMessage("Now, tell me what you're looking for, or say 'guide me' and I'll ask you questions to find your ideal car!", 'ai');
            }, 1000);
            
            return;
        } else {
            addChatMessage("I need a valid 5-digit zip code to find dealerships near you. Could you please provide your zip code?", 'ai');
            return;
        }
    }

    // Check if user wants guided experience
    if (lowerInput.includes('guide me') || lowerInput.includes('guide')) {
        addChatMessage("I'd be happy to guide you! I'll ask you a few questions to find your perfect car.", 'ai');
        startGuidedExperience();
        return;
    }

    // If we're in guided mode, process the response differently
    if (isGuided) {
        processGuidedResponse(input);
        return;
    }

    let aiResponse = "I'm not sure how to interpret that. Can you tell me more about what you're looking for?";
    let preferenceUpdated = false;

    // --- Preference Parsing Logic (simplified for demo) ---
    // Brand preference
    const knownBrands = [
        "honda", "toyota", "tesla", "subaru", "ford", "bmw", "nissan", "mercedes", "mercedes-benz", "jeep", "hyundai", "audi", "chevrolet", "mazda", "lexus", "ram", "volkswagen"
    ];
    let foundBrand = null;
    for (const brand of knownBrands) {
        if (lowerInput.includes(brand)) {
            foundBrand = brand;
            break;
        }
    }
    if (foundBrand) {
        let displayBrand = foundBrand === "mercedes" ? "Mercedes-Benz" : foundBrand.charAt(0).toUpperCase() + foundBrand.slice(1);
        userPreferences.brand = { value: displayBrand, weight: 2, description: `brand preference: ${displayBrand}` };
        aiResponse = `Focusing on cars from ${displayBrand}.`;
        preferenceUpdated = true;
    }
    else if (lowerInput.includes("gas mileage") || lowerInput.includes("mpg")) {
        const match = lowerInput.match(/(\d+)\s*(mpg|miles per gallon)/);
        if (match) {
            const mpgValue = parseInt(match[1], 10);
            userPreferences.minMPGHighway = { value: mpgValue, weight: 2, description: `highway MPG of at least ${mpgValue}` };
            aiResponse = `Okay, I'll prioritize cars with at least ${mpgValue} highway MPG.`;
            preferenceUpdated = true;
        } else {
            userPreferences.minMPGHighway = { value: 30, weight: 2, description: "good highway MPG" };
            aiResponse = "Got it, looking for good gas mileage. I'll prioritize cars with high highway MPG.";
            preferenceUpdated = true;
        }
    } else if (lowerInput.includes("price") || lowerInput.includes("budget") || lowerInput.includes("cost")) {
        const rangeMatch = lowerInput.match(/between\s*\$*(\d+k?|\d+)\s*and\s*\$*(\d+k?|\d+)/);
        const underMatch = lowerInput.match(/under\s*\$*(\d+k|\d+)/);
        const overMatch = lowerInput.match(/over\s*\$*(\d+k|\d+)/);
        const aroundMatch = lowerInput.match(/around\s*\$*(\d+k|\d+)/);
        
        if (rangeMatch) {
            let minPrice = parseInt(rangeMatch[1].replace('k', '000'), 10);
            let maxPrice = parseInt(rangeMatch[2].replace('k', '000'), 10);
            userPreferences.priceRange = { value: {min: minPrice, max: maxPrice}, weight: 3, description: `price between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}` };
            aiResponse = `Searching for cars between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}.`;
            preferenceUpdated = true;
        } else if (underMatch) {
            let maxPrice = parseInt(underMatch[1].replace('k', '000'), 10);
            userPreferences.priceRange = { value: {min: 10000, max: maxPrice}, weight: 3, description: `price under $${maxPrice.toLocaleString()}` };
            aiResponse = `Searching for cars under $${maxPrice.toLocaleString()}.`;
            preferenceUpdated = true;
        } else if (overMatch) {
            let minPrice = parseInt(overMatch[1].replace('k', '000'), 10);
            userPreferences.priceRange = { value: {min: minPrice, max: 100000}, weight: 3, description: `price over $${minPrice.toLocaleString()}` };
            aiResponse = `Searching for cars over $${minPrice.toLocaleString()}.`;
            preferenceUpdated = true;
        } else if (aroundMatch) {
            let targetPrice = parseInt(aroundMatch[1].replace('k', '000'), 10);
            let minPrice = Math.max(10000, targetPrice - 5000);
            let maxPrice = Math.min(100000, targetPrice + 5000);
            userPreferences.priceRange = { value: {min: minPrice, max: maxPrice}, weight: 3, description: `price around $${targetPrice.toLocaleString()}` };
            aiResponse = `Searching for cars around $${targetPrice.toLocaleString()} (between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}).`;
            preferenceUpdated = true;
        } else {
            userPreferences.priceRange = { value: {min: 10000, max: 40000}, weight: 3, description: "affordable price range" };
            aiResponse = "Okay, I'll look for cars in an affordable price range.";
            preferenceUpdated = true;
        }
    } else {
        // Check for feature preferences using a comprehensive mapping
        const featureMap = {
            // Drive train features
            'awd': 'AWD',
            'all-wheel drive': 'AWD', 
            'all wheel drive': 'AWD',
            'fwd': 'FWD',
            'front-wheel drive': 'FWD',
            'front wheel drive': 'FWD',
            '4x4': '4x4',
            'four wheel drive': '4x4',
            'four-wheel drive': '4x4',
            
            // Tech features
            'apple carplay': 'Apple CarPlay',
            'carplay': 'Apple CarPlay',
            'android auto': 'Android Auto',
            'autopilot': 'Autopilot',
            'wireless charging': 'wireless charging',
            'backup camera': 'Backup Camera',
            'backup cam': 'Backup Camera',
            'rear camera': 'Backup Camera',
            
            // Safety features
            'honda sensing': 'Honda Sensing',
            'toyota safety sense': 'Toyota Safety Sense',
            'adaptive cruise control': 'adaptive cruise control',
            'cruise control': 'adaptive cruise control',
            'blind spot monitor': 'blind spot monitor',
            'blind spot': 'blind spot monitor',
            'lane keeping assist': 'Lane Keeping Assist',
            'lane assist': 'Lane Keeping Assist',
            
            // Comfort features
            'sunroof': 'sunroof',
            'sun roof': 'sunroof',
            'panoramic sunroof': 'Panoramic Sunroof',
            'panoramic glass roof': 'panoramic glass roof',
            'heated seats': 'Heated Seats',
            'leather seats': 'Leather Seats',
            'leather': 'Leather Seats',
            
            // Seating features
            '3rd row seating': '3rd row seating',
            'third row seating': '3rd row seating',
            'third row': '3rd row seating',
            '3rd row': '3rd row seating',
            
            // Audio features
            'jbl audio': 'JBL audio',
            'jbl': 'JBL audio',
            'bose audio': 'Bose audio',
            'bose': 'Bose audio',
            'harman kardon audio': 'Harman Kardon audio',
            'harman kardon': 'Harman Kardon audio',
            
            // Infotainment features
            'sync 4': 'SYNC 4',
            'sync4': 'SYNC 4',
            'sync 4a': 'SYNC 4A',
            'sync4a': 'SYNC 4A',
            'navigation': 'Navigation',
            'nav': 'Navigation',
            'gps': 'Navigation',
            
            // EV features
            'fast charging': 'Fast Charging',
            'rapid charging': 'Fast Charging',
            'quick charging': 'Fast Charging',
            
            // Truck features
            'towing package': 'Towing Package',
            'towing': 'Towing Package',
            'tow package': 'Towing Package',
            'large bed': 'large bed',
            'truck bed': 'large bed'
        };
        
        let foundFeature = null;
        let matchedText = null;
        
        // Check each feature mapping
        for (const [searchTerm, featureName] of Object.entries(featureMap)) {
            if (lowerInput.includes(searchTerm)) {
                foundFeature = featureName;
                matchedText = searchTerm;
                break;
            }
        }
        
        if (foundFeature) {
            if (!userPreferences.features) userPreferences.features = { value: [], weight: 1, description: "specific features" };
            if (!userPreferences.features.value.includes(foundFeature)) {
                userPreferences.features.value.push(foundFeature);
                aiResponse = `Adding '${foundFeature}' to your desired features.`;
                preferenceUpdated = true;
            } else {
                aiResponse = `You already mentioned ${foundFeature}!`;
            }
        } else if (lowerInput.includes("suv")) {
        userPreferences.carType = { value: 'SUV', weight: 3, description: "an SUV" };
        aiResponse = "Prioritizing SUVs for you.";
        preferenceUpdated = true;
    } else if (lowerInput.includes("sedan")) {
        userPreferences.carType = { value: 'Sedan', weight: 3, description: "a Sedan" };
        aiResponse = "Focusing on Sedans for your search.";
        preferenceUpdated = true;
    } else if (lowerInput.includes("electric") || lowerInput.includes("ev")) {
        userPreferences.carType = { value: 'EV', weight: 3, description: "an Electric Vehicle" };
        aiResponse = "Looking into Electric Vehicles for you.";
        preferenceUpdated = true;
    } else if (lowerInput.includes("truck") || lowerInput.includes("pickup")) {
        userPreferences.carType = { value: 'Truck', weight: 3, description: "a Truck" };
        aiResponse = "Looking for trucks - great for hauling and capability!";
        preferenceUpdated = true;
    } else if (lowerInput.includes("seats") || lowerInput.includes("seating")) {
        const match = lowerInput.match(/(\d+)\s*seats?/);
        if (match) {
            const seatingValue = parseInt(match[1], 10);
            userPreferences.seatingCapacity = { value: seatingValue, weight: 2, description: `at least ${seatingValue} seats` };
            aiResponse = `Okay, prioritizing cars with at least ${seatingValue} seats.`;
            preferenceUpdated = true;
        } else {
            userPreferences.seatingCapacity = { value: 5, weight: 2, description: "at least 5 seats." };
            aiResponse = "Looking for cars with good seating capacity, at least 5 seats.";
            preferenceUpdated = true;
        }
    } else if (lowerInput.includes("location") || lowerInput.includes("dealership") || lowerInput.includes("downtown") || lowerInput.includes("northside") || lowerInput.includes("north side") || lowerInput.includes("west end") || lowerInput.includes("westend")) {
        if (lowerInput.includes("downtown")) {
            const dealership = dealerships.find(d => d.id === 'downtown');
            userPreferences.dealership = { value: 'downtown', weight: 1, description: "Downtown location" };
            aiResponse = `Great choice! Focusing on cars available at our ${dealership.name} location at ${dealership.address.line1}, ${dealership.address.city}.`;
            preferenceUpdated = true;
        } else if (lowerInput.includes("northside") || lowerInput.includes("north side")) {
            const dealership = dealerships.find(d => d.id === 'northside');
            userPreferences.dealership = { value: 'northside', weight: 1, description: "Northside location" };
            aiResponse = `Perfect! Showing cars from our ${dealership.name} location at ${dealership.address.line1}, ${dealership.address.city}.`;
            preferenceUpdated = true;
        } else if (lowerInput.includes("west end") || lowerInput.includes("westend")) {
            const dealership = dealerships.find(d => d.id === 'westend');
            userPreferences.dealership = { value: 'westend', weight: 1, description: "West End location" };
            aiResponse = `Excellent! Looking at cars from our ${dealership.name} location at ${dealership.address.line1}, ${dealership.address.city}.`;
            preferenceUpdated = true;
        } else {
            // General dealership or location inquiry
            aiResponse = "We have three convenient locations: Downtown (123 Main Street), Northside (456 Oak Avenue), and West End (789 Elm Boulevard). Which location interests you?";
        }
    } else if (lowerInput.includes("reset") || lowerInput.includes("clear preferences")) {
        resetPreferences(); // Call the new reset function
        aiResponse = "Okay, I've cleared all your preferences. What would you like to start with? You can also say 'guide me' for a step-by-step experience!";
        preferenceUpdated = true;
    }
    } // End of main else block for feature/car type detection

    addChatMessage(aiResponse, 'ai');

    if (preferenceUpdated) {
        updateFacetUI(); // Update facets after AI changes preferences
        updateCarDisplay(); // Re-rank and re-render if preferences changed
        
        // Check if we now have a single perfect match
        const rankedCars = rankCars(cars, userPreferences);
        const perfectMatches = rankedCars.filter(car => car.isPerfectMatch);
        
        if (perfectMatches.length === 1) {
            setTimeout(() => {
                addChatMessage(`🎉 Fantastic! I found your perfect match: the ${perfectMatches[0].make} ${perfectMatches[0].model}. This car meets all your requirements perfectly!`, 'ai');
                setTimeout(() => {
                    addChatMessage(`Ready to drive home in your ideal car? Call us now at (555) WHEELIO to schedule your test drive and secure this perfect match. Don't let it slip away!`, 'ai');
                }, 2000);
            }, 1000);
        }
    }
}

// --- Ranking Algorithm ---
function rankCars(cars, userPreferences) {
    // Filter cars by dealership if preference is set (for zip code flow)
    let filteredCars = cars;
    if (userPreferences.dealership && userPreferences.dealership.value) {
        filteredCars = cars.filter(car => car.dealershipId === userPreferences.dealership.value);
    }
    
    const rankedCars = filteredCars.map(car => {
        let score = 0;
        const matchedCriteria = [];
        const unmatchedCriteria = [];

        // --- Evaluate Brand ---
        if (userPreferences.brand && userPreferences.brand.value) {
            let carBrand = car.make;
            if (carBrand.toLowerCase() === userPreferences.brand.value.toLowerCase()) {
                score += userPreferences.brand.weight;
                matchedCriteria.push(`Matches brand preference: ${carBrand}.`);
            } else {
                unmatchedCriteria.push(`Does not match brand preference (actual: ${carBrand}, desired: ${userPreferences.brand.value}).`);
            }
        }
        // --- Evaluate MPG ---
        if (userPreferences.minMPGHighway && userPreferences.minMPGHighway.value > 0) {
            if (car.mpg.highway >= userPreferences.minMPGHighway.value) {
                score += userPreferences.minMPGHighway.weight;
                matchedCriteria.push(`Meets highway MPG preference (${car.mpg.highway} MPG vs. desired ${userPreferences.minMPGHighway.value}+ MPG).`);
            } else {
                unmatchedCriteria.push(`Does not meet highway MPG preference (actual: ${car.mpg.highway} MPG, desired: ${userPreferences.minMPGHighway.value}+ MPG).`);
            }
        }

        // --- Evaluate Price ---
        if (userPreferences.priceRange && userPreferences.priceRange.value) {
            const minPrice = userPreferences.priceRange.value.min;
            const maxPrice = userPreferences.priceRange.value.max;
            if (car.price >= minPrice && car.price <= maxPrice) {
                score += userPreferences.priceRange.weight;
                matchedCriteria.push(`Meets price range preference ($${car.price.toLocaleString()} within $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}).`);
            } else {
                unmatchedCriteria.push(`Does not meet price range preference (actual: $${car.price.toLocaleString()}, desired: $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}).`);
            }
        }

        // --- Evaluate Features ---
        if (userPreferences.features && userPreferences.features.value.length > 0) {
            let featuresMatchedCount = 0;
            const missingFeatures = [];
            userPreferences.features.value.forEach(prefFeature => {
                if (car.features.includes(prefFeature)) {
                    featuresMatchedCount++;
                } else {
                    missingFeatures.push(prefFeature);
                }
            });

            if (featuresMatchedCount === userPreferences.features.value.length) {
                score += userPreferences.features.weight;
                matchedCriteria.push(`Has all desired features: ${userPreferences.features.value.join(', ')}.`);
            } else if (featuresMatchedCount > 0) {
                score += userPreferences.features.weight * (featuresMatchedCount / userPreferences.features.value.length); // Partial score
                matchedCriteria.push(`Has some desired features (${featuresMatchedCount}/${userPreferences.features.value.length} found).`);
                unmatchedCriteria.push(`Missing features: ${missingFeatures.join(', ')}.`);
            } else {
                unmatchedCriteria.push(`Does not have any of the desired features: ${userPreferences.features.value.join(', ')}.`);
            }
        }

        // --- Evaluate Seating Capacity ---
        if (userPreferences.seatingCapacity && userPreferences.seatingCapacity.value > 0) {
            if (car.seating >= userPreferences.seatingCapacity.value) {
                score += userPreferences.seatingCapacity.weight;
                matchedCriteria.push(`Meets seating capacity preference (${car.seating} seats vs. desired ${userPreferences.seatingCapacity.value}+ seats).`);
            } else {
                unmatchedCriteria.push(`Does not meet seating capacity preference (actual: ${car.seating} seats, desired: ${userPreferences.seatingCapacity.value}+ seats).`);
            }
        }

        // --- Evaluate Car Type ---
        if (userPreferences.carType && userPreferences.carType.value) {
            if (car.type === userPreferences.carType.value) {
                score += userPreferences.carType.weight;
                matchedCriteria.push(`Matches desired car type: ${car.type}.`);
            } else {
                unmatchedCriteria.push(`Does not match desired car type (actual: ${car.type}, desired: ${userPreferences.carType.value}).`);
            }
        }

        // --- Evaluate Dealership Location ---
        if (userPreferences.dealership && userPreferences.dealership.value) {
            if (car.dealershipId === userPreferences.dealership.value) {
                score += userPreferences.dealership.weight;
                const dealership = dealerships.find(d => d.id === car.dealershipId);
                matchedCriteria.push(`Available at preferred ${dealership.name} location.`);
            } else {
                const carDealership = dealerships.find(d => d.id === car.dealershipId);
                const preferredDealership = dealerships.find(d => d.id === userPreferences.dealership.value);
                unmatchedCriteria.push(`Located at ${carDealership.name} instead of preferred ${preferredDealership.name}.`);
            }
        }

        const hasPreferences = Object.values(userPreferences).some(pref => pref !== null && (pref.value !== '' && pref.value !== 0 && (Array.isArray(pref.value) ? pref.value.length > 0 : true)));
        const isPerfectMatch = hasPreferences && unmatchedCriteria.length === 0; // Perfect match only if some preferences exist and all are met
        const isPartialMatch = hasPreferences && unmatchedCriteria.length > 0 && matchedCriteria.length > 0; // Partial match if preferences exist and some match but not all
        const isNoMatch = hasPreferences && matchedCriteria.length === 0; // No match if preferences exist but none match

        return {
            ...car,
            score,
            isPerfectMatch,
            isPartialMatch,
            isNoMatch,
            matchedCriteria,
            unmatchedCriteria
        };
    });

    // Sort: perfect matches first, then by score, then randomize for ties
    rankedCars.sort((a, b) => {
        if (a.isPerfectMatch && !b.isPerfectMatch) return -1;
        if (!a.isPerfectMatch && b.isPerfectMatch) return 1;
        if (b.score !== a.score) return b.score - a.score; // Higher score first
        return Math.random() - 0.5; // Randomize for ties instead of price sorting
    });

    return rankedCars;
}

// --- FLIP Animation and Rendering ---
function renderCarList(newlyRankedCars) {
    const currentCarElements = Array.from(carListContainer.children);

    // 1. FIRST: Record initial positions
    const firstPositions = {};
    currentCarElements.forEach(carEl => {
        const id = carEl.dataset.carId;
        // Temporarily disable animation and scale transform to get accurate position measurements
        const wasOnlyPerfectMatch = carEl.classList.contains('only-perfect-match');
        if (wasOnlyPerfectMatch) {
            carEl.style.animation = 'none';
            carEl.style.transform = 'scale(1)';
        }
        firstPositions[id] = carEl.getBoundingClientRect();
        // Restore the animation and scale if it was there
        if (wasOnlyPerfectMatch) {
            carEl.style.animation = '';
            carEl.style.transform = '';
        }
    });

    // 2. LAST: Update the DOM with the new order
    // Clear existing elements
    while (carListContainer.firstChild) {
        carListContainer.removeChild(carListContainer.firstChild);
    }

    // Append new elements in the sorted order
    newlyRankedCars.forEach(car => {
        const carEl = document.createElement('div');
        carEl.classList.add('car-item', 'p-4', 'flex', 'flex-col', 'items-center', 'text-center');
        carEl.dataset.carId = car.id;

        // Count perfect matches to determine if this is the only one
        const perfectMatchCount = newlyRankedCars.filter(c => c.isPerfectMatch).length;

        // Apply styling based on match level: perfect (active), partial, or no match (inactive)
        if (car.isPerfectMatch) {
            carEl.classList.add('active');
            // Add special styling if this is the ONLY perfect match
            if (perfectMatchCount === 1) {
                carEl.classList.add('only-perfect-match');
            }
        } else if (car.isPartialMatch) {
            carEl.classList.add('partial');
        } else if (car.isNoMatch) {
            carEl.classList.add('inactive');
        }

        // Conditionally render tooltip based on userPreferences
        const hasPreferences = Object.values(userPreferences).some(pref => pref !== null && (pref.value !== '' && pref.value !== 0 && (Array.isArray(pref.value) ? pref.value.length > 0 : true)));

        const tooltipHtml = hasPreferences ? `
            <div class="tooltip">
                ${car.isPerfectMatch && car.matchedCriteria.length > 0 ?
                    `<strong>Why this car is right for you:</strong><ul>${car.matchedCriteria.map(c => `<li>${c}</li>`).join('')}</ul>` :
                    `<strong>Why this car doesn't fit all preferences:</strong><ul>${car.unmatchedCriteria.map(c => `<li>${c}</li>`).join('')}</ul>
                        ${car.matchedCriteria.length > 0 ? `<strong>It does match:</strong><ul>${car.matchedCriteria.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}`
                }
            </div>
        ` : '';

        // Group non-tooltip content for opacity
        const contentHtml = `
            <div class="car-content">
                <img src="${car.imageUrl}" alt="${car.make} ${car.model}" class="w-full h-32 object-cover rounded-lg mb-3">
                <h3 class="text-lg font-semibold text-gray-900 mb-1">${car.make} ${car.model}</h3>
                <p class="text-blue-600 text-lg font-bold mb-2">$${car.price.toLocaleString()}</p>
                
                <div class="space-y-2 text-xs text-gray-600">
                    <div class="flex justify-between">
                        <span>Type:</span>
                        <span class="font-medium">${car.type}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Seating:</span>
                        <span class="font-medium">${car.seating} seats</span>
                    </div>
                    <div class="flex justify-between">
                        <span>MPG:</span>
                        <span class="font-medium">${car.mpg.city}/${car.mpg.highway} (city/hwy)</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Safety Rating:</span>
                        <span class="font-medium">${'★'.repeat(car.safetyRating)}${' ☆'.repeat(5 - car.safetyRating)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Location:</span>
                        <span class="font-medium">${dealerships.find(d => d.id === car.dealershipId).name.replace('Wheelio ', '')}</span>
                    </div>
                </div>
                
                <div class="mt-3">
                    <p class="text-xs text-gray-500 mb-1">Key Features:</p>
                    <div class="flex flex-wrap gap-1">
                        ${car.features.slice(0, 3).map(feature => 
                            `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">${feature}</span>`
                        ).join('')}
                        ${car.features.length > 3 ? `<span class="text-xs text-gray-500">+${car.features.length - 3} more</span>` : ''}
                    </div>
                </div>
            </div>
            ${tooltipHtml}
        `;
        carEl.innerHTML = contentHtml;
        carListContainer.appendChild(carEl);
    });

    // 3. INVERT & 4. PLAY: Animate to new positions
    // Re-select elements as DOM has changed
    const newCarElements = Array.from(carListContainer.children);

    newCarElements.forEach(carEl => {
        const id = carEl.dataset.carId;
        // Temporarily disable animation and scale transform to get accurate position measurements
        const isOnlyPerfectMatch = carEl.classList.contains('only-perfect-match');
        if (isOnlyPerfectMatch) {
            carEl.style.animation = 'none';
            carEl.style.transform = 'scale(1)';
        }
        const lastPosition = carEl.getBoundingClientRect();
        const firstPosition = firstPositions[id];

        if (firstPosition) { // Only animate if the element was present before
            const deltaX = firstPosition.left - lastPosition.left;
            const deltaY = firstPosition.top - lastPosition.top;

            carEl.style.transition = 'none'; // Disable transition for the "invert" step
            carEl.style.transform = `translate(${deltaX}px, ${deltaY}px)${isOnlyPerfectMatch ? ' scale(1.05)' : ''}`;

            // Force a repaint to ensure the transform is applied before the transition
            // eslint-disable-next-line no-unused-expressions
            carEl.offsetWidth;

            carEl.style.transition = 'transform 0.5s ease-out'; // Enable transition
            carEl.style.transform = isOnlyPerfectMatch ? 'translate(0, 0) scale(1.05)' : 'translate(0, 0)'; // Animate back to final position with proper scale
            
            // After the transition completes, restore the CSS animation
            if (isOnlyPerfectMatch) {
                carEl.addEventListener('transitionend', () => {
                    carEl.style.animation = '';
                    carEl.style.transform = '';
                    carEl.style.transition = '';
                }, { once: true });
            }
        } else {
            // Handle newly added elements (e.g., fade in)
            if (isOnlyPerfectMatch) {
                carEl.style.animation = 'none';
            }
            carEl.style.opacity = '0';
            setTimeout(() => {
                carEl.style.transition = 'opacity 0.5s ease-in';
                carEl.style.opacity = '1';
                // Restore animation after fade in
                if (isOnlyPerfectMatch) {
                    setTimeout(() => {
                        carEl.style.animation = '';
                    }, 500);
                }
            }, 50); // Small delay to allow initial render
        }
    });

    // Handle removed elements (e.g., fade out and remove)
    currentCarElements.forEach(oldCarEl => {
        const id = oldCarEl.dataset.carId;
        const isStillPresent = newlyRankedCars.some(car => car.id === id);
        if (!isStillPresent) {
            oldCarEl.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            oldCarEl.style.opacity = '0';
            oldCarEl.style.transform = 'scale(0.9)';
            oldCarEl.addEventListener('transitionend', () => oldCarEl.remove(), { once: true });
        }
    });
}

// --- Layout Transition Functions ---
function transitionToSidebarMode() {
    if (!isInFullWidthMode) return; // Already in sidebar mode
    
    isInFullWidthMode = false;
    
    // Show faceted search components
    facetSidebar.classList.remove('faceted-search-hidden');
    facetSidebar.classList.add('faceted-search-visible', 'flex');
    carListContainerWrapper.classList.remove('faceted-search-hidden');
    carListContainerWrapper.classList.add('faceted-search-visible', 'flex');
    
    // Transition chat to sidebar
    chatDrawer.classList.remove('chat-drawer-fullwidth');
    chatDrawer.classList.add('chat-drawer-open');
    
    // Update header text
    chatDrawerHeader.querySelector('h2').textContent = 'AI Car Assistant';
    chatDrawerHeader.querySelector('h2').classList.remove('text-center');
    chatDrawerHeader.querySelector('h2').classList.add('text-left');
    
    // Show the drawer toggle button
    drawerToggle.classList.remove('hidden');
    
    // Set drawer as open
    isDrawerOpen = true;
    
    // Initialize facets first
    initializeFacets();
    
    // Now trigger the facet change handler to ensure everything is synced
    handleFacetChange();
}

function findNearestDealership(zipCode) {
    // Simple zip code to dealership mapping
    // In a real app, this would use a proper geolocation service
    const zipMappings = {
        '62701': 'downtown',
        '62704': 'northside', 
        '62712': 'westend'
    };
    
    // Default to downtown if zip not found
    return zipMappings[zipCode] || 'downtown';
}

// --- Drawer Toggle Functionality ---
function toggleDrawer() {
    if (isDrawerOpen) {
        // Close the drawer
        chatDrawer.classList.remove('chat-drawer-open');
        chatDrawer.classList.add('chat-drawer-closed');
        carListContainerWrapper.classList.remove('w-3/5', 'mr-4'); // Adjust for new layout
        carListContainerWrapper.classList.add('w-4/5'); // Car list takes more space
        chatContent.classList.add('hidden'); // Hide content immediately
        chatDrawerHeader.classList.add('hidden'); // Hide header content
        toggleIconOpen.classList.add('hidden');
        toggleIconClosed.classList.remove('hidden');
    } else {
        // Open the drawer
        chatDrawer.classList.remove('chat-drawer-closed');
        chatDrawer.classList.add('chat-drawer-open');
        carListContainerWrapper.classList.remove('w-4/5'); // Car list shrinks
        carListContainerWrapper.classList.add('w-3/5', 'mr-4'); // Adjust for new layout
        chatContent.classList.remove('hidden'); // Show content
        chatDrawerHeader.classList.remove('hidden'); // Show header content
        toggleIconOpen.classList.remove('hidden');
        toggleIconClosed.classList.add('hidden');
    }
    isDrawerOpen = !isDrawerOpen; // Toggle the state
}

// --- Facet Initialization and Update ---
function initializeFacets() {
    // Populate Brand Select
    const brands = [...new Set(cars.map(car => car.make))].sort();
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        facetBrandSelect.appendChild(option);
    });

    // Populate Dealership Select
    dealerships.forEach(dealership => {
        const option = document.createElement('option');
        option.value = dealership.id;
        option.textContent = dealership.name.replace('Wheelio ', '');
        facetDealershipSelect.appendChild(option);
    });

    // Populate Car Type Checkboxes
    const carTypes = [...new Set(cars.map(car => car.type))].sort();
    carTypes.forEach(type => {
        const div = document.createElement('div');
        div.classList.add('flex', 'items-center');
        div.innerHTML = `
            <input type="checkbox" id="car-type-${type.toLowerCase().replace(/\s/g, '-')}" value="${type}" class="form-checkbox h-4 w-4 text-blue-600 rounded">
            <label for="car-type-${type.toLowerCase().replace(/\s/g, '-')}" class="ml-2 text-sm">${type}</label>
        `;
        facetCarTypeDiv.appendChild(div);
    });

    // Populate Features Checkboxes (only unique features)
    const allFeatures = cars.flatMap(car => car.features);
    const uniqueFeatures = [...new Set(allFeatures)].sort();
    uniqueFeatures.forEach(feature => {
        const div = document.createElement('div');
        div.classList.add('flex', 'items-center');
        div.innerHTML = `
            <input type="checkbox" id="feature-${feature.toLowerCase().replace(/\s/g, '-')}" value="${feature}" class="form-checkbox h-4 w-4 text-blue-600 rounded">
            <label for="feature-${feature.toLowerCase().replace(/\s/g, '-')}" class="ml-2 text-sm">${feature}</label>
        `;
        facetFeaturesDiv.appendChild(div);
    });

    // Set initial values for sliders and display them
    facetPriceMin.value = 10000; // Min price initially
    facetPriceMax.value = 100000; // Max price initially
    facetPriceMinValueSpan.textContent = `${parseInt(facetPriceMin.value).toLocaleString()}`;
    facetPriceMaxValueSpan.textContent = `${parseInt(facetPriceMax.value).toLocaleString()}`;
    facetMpgRange.value = 10; // Min MPG initially
    facetMpgValueSpan.textContent = `${parseInt(facetMpgRange.value)}`;

    // Add event listeners for facets
    facetBrandSelect.addEventListener('change', handleFacetChange);
    facetCarTypeDiv.addEventListener('change', handleFacetChange);
    facetPriceMin.addEventListener('input', handleFacetChange); // Use 'input' for continuous update
    facetPriceMax.addEventListener('input', handleFacetChange);
    facetMpgRange.addEventListener('input', handleFacetChange);
    facetSeatingSelect.addEventListener('change', handleFacetChange);
    facetDealershipSelect.addEventListener('change', handleFacetChange);
    facetFeaturesDiv.addEventListener('change', handleFacetChange);
    facetResetButton.addEventListener('click', resetPreferences);

    // Update display for sliders on input
    facetPriceMin.addEventListener('input', () => {
        const minVal = parseInt(facetPriceMin.value);
        const maxVal = parseInt(facetPriceMax.value);
        // Ensure min doesn't exceed max
        if (minVal > maxVal) {
            facetPriceMax.value = minVal;
            facetPriceMaxValueSpan.textContent = `${minVal.toLocaleString()}`;
        }
        facetPriceMinValueSpan.textContent = `${minVal.toLocaleString()}`;
    });
    facetPriceMax.addEventListener('input', () => {
        const minVal = parseInt(facetPriceMin.value);
        const maxVal = parseInt(facetPriceMax.value);
        // Ensure max doesn't go below min
        if (maxVal < minVal) {
            facetPriceMin.value = maxVal;
            facetPriceMinValueSpan.textContent = `${maxVal.toLocaleString()}`;
        }
        facetPriceMaxValueSpan.textContent = `${maxVal.toLocaleString()}`;
    });
    facetMpgRange.addEventListener('input', () => {
        facetMpgValueSpan.textContent = `${parseInt(facetMpgRange.value)}`;
    });
    
    // Pre-select dealership if it's already set in userPreferences
    if (userPreferences.dealership && userPreferences.dealership.value) {
        facetDealershipSelect.value = userPreferences.dealership.value;
    }
}

function handleFacetChange() {
    // Update userPreferences based on current facet values
    userPreferences.brand = facetBrandSelect.value ? { value: facetBrandSelect.value, weight: 2, description: `brand preference: ${facetBrandSelect.value}` } : null;
    
    const minPrice = parseInt(facetPriceMin.value);
    const maxPrice = parseInt(facetPriceMax.value);
    userPreferences.priceRange = (minPrice > 10000 || maxPrice < 100000) ? { 
        value: {min: minPrice, max: maxPrice}, 
        weight: 3, 
        description: `price range: $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}` 
    } : null;
    
    userPreferences.minMPGHighway = parseInt(facetMpgRange.value) > 10 ? { value: parseInt(facetMpgRange.value), weight: 2, description: `highway MPG of at least ${parseInt(facetMpgRange.value)}` } : null;
    userPreferences.seatingCapacity = parseInt(facetSeatingSelect.value) > 0 ? { value: parseInt(facetSeatingSelect.value), weight: 2, description: `at least ${parseInt(facetSeatingSelect.value)} seats` } : null;
    
    userPreferences.dealership = facetDealershipSelect.value ? { 
        value: facetDealershipSelect.value, 
        weight: 1, 
        description: `${dealerships.find(d => d.id === facetDealershipSelect.value).name.replace('Wheelio ', '')} location` 
    } : null;

    const selectedCarTypes = Array.from(facetCarTypeDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    userPreferences.carType = selectedCarTypes.length > 0 ? { value: selectedCarTypes[0], weight: 3, description: `car type: ${selectedCarTypes[0]}` } : null; // For simplicity, only take the first selected type if multiple are allowed by UI

    const selectedFeatures = Array.from(facetFeaturesDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    userPreferences.features = selectedFeatures.length > 0 ? { value: selectedFeatures, weight: 1, description: `specific features: ${selectedFeatures.join(', ')}` } : null;

    updateCarDisplay();
}

function updateFacetUI() {
    // Update Brand Select
    facetBrandSelect.value = userPreferences.brand ? userPreferences.brand.value : '';

    // Update Price Sliders
    if (userPreferences.priceRange) {
        facetPriceMin.value = userPreferences.priceRange.value.min;
        facetPriceMax.value = userPreferences.priceRange.value.max;
    } else {
        facetPriceMin.value = 10000;
        facetPriceMax.value = 100000;
    }
    facetPriceMinValueSpan.textContent = `${parseInt(facetPriceMin.value).toLocaleString()}`;
    facetPriceMaxValueSpan.textContent = `${parseInt(facetPriceMax.value).toLocaleString()}`;

    // Update MPG Slider
    facetMpgRange.value = userPreferences.minMPGHighway ? userPreferences.minMPGHighway.value : 10;
    facetMpgValueSpan.textContent = `${parseInt(facetMpgRange.value)}`;

    // Update Seating Select
    facetSeatingSelect.value = userPreferences.seatingCapacity ? userPreferences.seatingCapacity.value : '';

    // Update Dealership Select
    facetDealershipSelect.value = userPreferences.dealership ? userPreferences.dealership.value : '';

    // Update Car Type Checkboxes
    const carTypeCheckboxes = facetCarTypeDiv.querySelectorAll('input[type="checkbox"]');
    carTypeCheckboxes.forEach(cb => {
        cb.checked = (userPreferences.carType && userPreferences.carType.value === cb.value);
    });

    // Update Features Checkboxes
    const featureCheckboxes = facetFeaturesDiv.querySelectorAll('input[type="checkbox"]');
    featureCheckboxes.forEach(cb => {
        cb.checked = (userPreferences.features && userPreferences.features.value.includes(cb.value));
    });
}

function resetPreferences() {
    userPreferences = {
        brand: null,
        priceRange: null,
        minMPGHighway: null,
        seatingCapacity: null,
        carType: null,
        features: null,
        dealership: null
    };
    isGuided = false;
    guidedStep = 0;
    updateFacetUI(); // Reset UI elements
    updateCarDisplay(); // Re-render cars
    addChatMessage("All filters have been reset.", "ai");
}


// --- Event Listeners ---
sendButton.addEventListener('click', () => {
    if (userInput.value.trim() !== '') {
        processUserInput(userInput.value.trim());
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userInput.value.trim() !== '') {
        processUserInput(e.target.value.trim());
    }
});

drawerToggle.addEventListener('click', toggleDrawer);

// Initial render on page load
window.onload = () => {
    // In full-width mode, don't initialize facets or update car display
    // This will happen after zip code is provided
    if (!isInFullWidthMode) {
        initializeFacets();
        updateCarDisplay();
        if (!isDrawerOpen) {
            toggleDrawer();
        }
    }
    // Focus on the input field for better UX
    userInput.focus();
};

function updateCarDisplay() {
    const sortedCars = rankCars(cars, userPreferences);
    renderCarList(sortedCars);
}
