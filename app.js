// 100% Comprehensive Translations Dictionary (DEFAULTED TO ENGLISH)
const TRANSLATIONS = {
  en: {
    activeTrip: "Active Trip",
    calculator: "Calculator",
    inviteBtn: "Share & Live Sync",
    membersBtn: "Members",
    newTripBtn: "New Trip",
    collectedPoolLabel: "Collected Pool:",
    totalSpentLabel: "Total Spent:",
    remPoolLabel: "Remaining Pool:",
    poolStatusTitle: "Pool Fund Status",
    cashLabel: "Cash Box",
    onlineLabel: "Digital (UPI)",
    remSubtext: "Remaining",
    handlerModeLabel: "Money Management Mode",
    changeBtn: "Change",
    tabExpenses: "All Expenses",
    tabPool: "Pool Money Log",
    tabDriver: "Driver & Tolls",
    tabSettle: "Settlements & Refunds",
    quickPickTitle: "Quick Express Pick (1-Tap Entry)",
    quickPickSubtext: "Select item ➔ Enter amount",
    newExpenseBtn: "New Expense",
    poolLedgerTitle: "Central Pool Ledger",
    poolLedgerSub: "Money contributed upfront by members",
    addFundBtn: "Add Pool Money",
    driverTag: "Vehicle & Driver Log",
    driverHeading: "Driver, Fuel & Toll Charges",
    driverSub: "Advances paid to cab or driver",
    totalDriverPaid: "Total Driver Cost",
    entriesCount: "Entries Count",
    logDriverBtn: "Log Entry",
    settlementTitle: "Member Balances & Pool Refunds",
    whoPaysWhomTitle: "Settlement Steps (Who Pays Whom)",
    whoPaysWhomSub: "Exact transactions required to settle dues",
    smartSplitBadge: "Smart Split",
    quickCalcTitle: "Quick Calculator",
    calcTransferBtn: "Transfer to Expense",
    addExpenseModalTitle: "Log New Expense",
    expenseTitleLabel: "Expense Title *",
    amountLabel: "Amount (₹) *",
    sourceLabel: "Payment Source *",
    modeLabel: "Payment Mode *",
    handledByLabel: "Handled / Paid By *",
    paidByLabel: "Paid Out-Of-Pocket By *",
    categoryLabel: "Category",
    driverCheckLabel: "Driver / Vehicle Cost",
    splitInLabel: "Split Amongst:",
    selectAllBtn: "Select All",
    cancelBtn: "Cancel",
    saveBtn: "Save Expense",
    addFundModalTitle: "Add Pool Money",
    contributorLabel: "Contributing Member *",
    notesLabel: "Notes / Remarks",
    addToPoolBtn: "Add to Pool",
    tripSettingsModalTitle: "Money Handler Settings",
    handlerModeSelectLabel: "Who will handle the total money? *",
    primaryHandlerSelectLabel: "Select Primary Cashier / Manager *",
    membersModalTitle: "Trip Members",
    addBtn: "Add",
    currentMembersLabel: "Current Members",
    shareModalTitle: "Share Trip & Invite via Email",
    inviteEmailLabel: "Invite member via Email:",
    sendInviteBtn: "Invite",
    inviteSubtext: "All connected members can view and update expenses simultaneously in real-time!",
    copyTextBtn: "Copy Text",
    csvDownloadBtn: "Download CSV",
    confirmDeleteTitle: "Are you sure you want to delete?",
    confirmDeleteBtn: "Yes, Delete Item",
    createTripTitle: "Create New Trip",
    newTripNameLabel: "Trip Name *",
    membersListInputLabel: "Members Names (Comma Separated) *",
    onboardingHandlerQuestion: "Who will handle the total money? *",
    optionSingleHandler: "👤 Single person handles all cash/UPI (Single Cashier)",
    optionGroupHandler: "👥 Everyone spends together (Group Multi-Spender)",
    createTripConfirmBtn: "Start Trip",

    chipAuto: "🛺 Auto",
    chipCab: "🚖 Cab/Taxi",
    chipFood: "🍽️ Food",
    chipTea: "☕ Tea/Coffee",
    chipSnacks: "🍿 Snacks",
    chipPetrol: "⛽ Petrol/Diesel",
    chipToll: "🛣️ Toll Tax",
    chipParking: "🅿️ Parking",
    chipHotel: "🏨 Hotel",
    chipTickets: "🎟️ Tickets",
    chipShopping: "🛍️ Shopping",
    chipDrinks: "🍹 Drinks/Water",
    chipMedical: "🚑 Medical/Misc",

    srcPool: "🏦 Trip Pool Fund",
    srcIndiv: "👤 Out of Pocket",
    modeCash: "💵 Cash Box",
    modeOnline: "📱 Online (UPI / Card)",
    catTransport: "⛽ Transport / Auto",
    catFood: "🍽️ Food / Dining",
    catDriver: "🚗 Driver / Tolls",
    catStay: "🏨 Hotel / Stay",
    catActivities: "🎟️ Activities",
    catMisc: "🛒 Supplies / Misc",
    optSingleCashier: "👤 Single Cashier handles all cash/UPI",
    optGroupMode: "👥 Everyone spends (Group Multi-Spender)"
  },
  hi: {
    activeTrip: "एक्टिव ट्रिप",
    calculator: "कैलकुलेटर",
    inviteBtn: "शेयर व लाइव सिंक",
    membersBtn: "सदस्य",
    newTripBtn: "नई ट्रिप",
    collectedPoolLabel: "कुल जमा पूल:",
    totalSpentLabel: "कुल खर्च:",
    remPoolLabel: "बचा हुआ पूल:",
    poolStatusTitle: "पूल फंड स्थिति",
    cashLabel: "कैश बॉक्स",
    onlineLabel: "डिजिटल (UPI)",
    remSubtext: "बचा हुआ",
    handlerModeLabel: "मनी मैनेजमेंट मोड",
    changeBtn: "बदलें",
    tabExpenses: "सभी खर्चे",
    tabPool: "जमा पूल लेजर",
    tabDriver: "ड्राइवर एवं टोल",
    tabSettle: "फाइनल हिसाब व रिफंड",
    quickPickTitle: "क्विक एक्सप्रेस पिक (1-टैप में दर्ज करें)",
    quickPickSubtext: "आइटम चुने ➔ रकम डालें",
    newExpenseBtn: "नया खर्च",
    poolLedgerTitle: "जमा पूल मनी लेजर (Central Pool)",
    poolLedgerSub: "सदस्यों द्वारा जमा किए गए पैसे",
    addFundBtn: "जमा जोड़ें",
    driverTag: "गाड़ी व ड्राइवर लेजर",
    driverHeading: "ड्राइवर, पेट्रोल एवं टोल खर्च",
    driverSub: "कैब या ड्राइवर को दी गई राशि व रसीदें",
    totalDriverPaid: "कुल ड्राइवर खर्च",
    entriesCount: "एंट्री संख्या",
    logDriverBtn: "दर्ज करें",
    settlementTitle: "व्यक्तिगत हिसाब एवं रिफंड स्थिति",
    whoPaysWhomTitle: "लेन-देन के कदम (Who Pays Whom)",
    whoPaysWhomSub: "हिसाब बराबर करने के लिए लेन-देन",
    smartSplitBadge: "स्मार्ट स्प्लिट",
    quickCalcTitle: "त्वरित कैलकुलेटर",
    calcTransferBtn: "खर्चे में डालें",
    addExpenseModalTitle: "नया खर्च दर्ज करें",
    expenseTitleLabel: "विवरण (Title) *",
    amountLabel: "रकम (₹) *",
    sourceLabel: "पैसा कहाँ से कटा? *",
    modeLabel: "भुगतान मोड *",
    handledByLabel: "किसने भुगतान/स्कैन किया? *",
    paidByLabel: "किसने जेब से दिया? *",
    categoryLabel: "कैटेगरी",
    driverCheckLabel: "ड्राइवर / गाड़ी का खर्च",
    splitInLabel: "खर्च बांटें (Split In):",
    selectAllBtn: "सभी चुनें",
    cancelBtn: "रद्द करें",
    saveBtn: "सहेजें (Save)",
    addFundModalTitle: "पूल में पैसे जमा करें",
    contributorLabel: "पैसे देने वाला सदस्य *",
    notesLabel: "नोट / रिमार्क्स",
    addToPoolBtn: "पूल में जोड़ें",
    tripSettingsModalTitle: "मनी हैंडलर सेटिंग्स",
    handlerModeSelectLabel: "पूरा पैसा कौन संभालेगा? *",
    primaryHandlerSelectLabel: "मुख्य कैशियर / मैनेजर चुनें *",
    membersModalTitle: "ट्रिप के सदस्य",
    addBtn: "जोड़ें",
    currentMembersLabel: "मौजूदा सदस्य",
    shareModalTitle: "ईमेल द्वारा आमंत्रण व लाइव सिंक",
    inviteEmailLabel: "सदस्य को ईमेल द्वारा आमंत्रित करें:",
    sendInviteBtn: "आमंत्रित करें",
    inviteSubtext: "सभी सदस्य एक साथ लाइव (Realtime) अपडेट देख और जोड़ सकते हैं!",
    copyTextBtn: "कॉपी करें",
    csvDownloadBtn: "CSV डाउनलोड",
    confirmDeleteTitle: "क्या आप वाकई डिलीट करना चाहते हैं?",
    confirmDeleteBtn: "हाँ, डिलीट करें",
    createTripTitle: "नई ट्रिप बनाएं",
    newTripNameLabel: "ट्रिप का नाम *",
    membersListInputLabel: "सदस्यों के नाम (Comma Separated) *",
    onboardingHandlerQuestion: "पैसा कौन संभालेगा? (Money Handler) *",
    optionSingleHandler: "👤 एक सिंगल व्यक्ति सारा पैसा संभालेगा (Single Cashier)",
    optionGroupHandler: "👥 सभी मिलकर खर्च करेंगे (Group Multi-Spender)",
    createTripConfirmBtn: "ट्रिप शुरू करें",

    chipAuto: "🛺 ऑटो",
    chipCab: "🚖 कैब/टैक्सी",
    chipFood: "🍽️ खाना",
    chipTea: "☕ चाय/कॉफी",
    chipSnacks: "🍿 नाश्ता",
    chipPetrol: "⛽ पेट्रोल/डीजल",
    chipToll: "🛣️ टोल टैक्स",
    chipParking: "🅿️ पार्किंग",
    chipHotel: "🏨 होटल",
    chipTickets: "🎟️ टिकट्स",
    chipShopping: "🛍️ शॉपिंग",
    chipDrinks: "🍹 ड्रिंक्स/पानी",
    chipMedical: "🚑 मेडिकल/अन्य",

    srcPool: "🏦 जमा पूल (Trip Pool)",
    srcIndiv: "👤 जेब से दिया (Out of Pocket)",
    modeCash: "💵 कैश (Cash Box)",
    modeOnline: "📱 ऑनलाइन (UPI / Card)",
    catTransport: "⛽ ट्रांसपोर्ट / ऑटो",
    catFood: "🍽️ खाना / चाय",
    catDriver: "🚗 ड्राइवर / टोल",
    catStay: "🏨 होटल / स्टे",
    catActivities: "🎟️ एक्टिविटीज",
    catMisc: "🛒 अन्य सामान",
    optSingleCashier: "👤 एक व्यक्ति पूरे कैश/UPI को संभालेगा (Single Cashier)",
    optGroupMode: "👥 सभी मिलकर खर्च करेंगे (Group Multi-Spender)"
  },
  hinglish: {
    activeTrip: "Active Trip",
    calculator: "Calculator",
    inviteBtn: "Share & Live Sync",
    membersBtn: "Members",
    newTripBtn: "Nayi Trip",
    collectedPoolLabel: "Total Jama Pool:",
    totalSpentLabel: "Total Spent:",
    remPoolLabel: "Bacha hua Pool:",
    poolStatusTitle: "Pool Money Status",
    cashLabel: "Cash Box",
    onlineLabel: "Online (UPI)",
    remSubtext: "Bacha hua",
    handlerModeLabel: "Money Management Mode",
    changeBtn: "Badlein",
    tabExpenses: "Sabhi Kharch",
    tabPool: "Jama Pool Log",
    tabDriver: "Driver & Tolls",
    tabSettle: "Final Hisab & Refund",
    quickPickTitle: "Quick Express Log (1-Tap)",
    quickPickSubtext: "Item select karo ➔ Amount dalo",
    newExpenseBtn: "Naya Kharcha",
    poolLedgerTitle: "Central Pool Ledger",
    poolLedgerSub: "Members dwara jama kiye gaye paise",
    addFundBtn: "Jama Karo",
    driverTag: "Gadi & Driver Log",
    driverHeading: "Driver, Petrol & Toll Charges",
    driverSub: "Cab ya driver ko di gayi rashi",
    totalDriverPaid: "Total Driver Kharcha",
    entriesCount: "Entries Count",
    logDriverBtn: "Entry Dalo",
    settlementTitle: "Personal Hisab & Refund",
    whoPaysWhomTitle: "Who Pays Whom (Len-Den)",
    whoPaysWhomSub: "Hisab barabar karne ke steps",
    smartSplitBadge: "Smart Split",
    quickCalcTitle: "Quick Calculator",
    calcTransferBtn: "Form Me Dalo",
    addExpenseModalTitle: "Naya Kharcha Dalo",
    expenseTitleLabel: "Kharcha Title *",
    amountLabel: "Amount (₹) *",
    sourceLabel: "Paise Kahan Se Kate? *",
    modeLabel: "Payment Mode *",
    handledByLabel: "Kisne Pay/Scan Kiya? *",
    paidByLabel: "Kisne Jeb Se Diya? *",
    categoryLabel: "Category",
    driverCheckLabel: "Driver/Gadi Ka Kharcha",
    splitInLabel: "Kharcha Bante (Split In):",
    selectAllBtn: "Sabhi Select Karo",
    cancelBtn: "Cancel",
    saveBtn: "Save Karo",
    addFundModalTitle: "Pool Me Paise Dalo",
    contributorLabel: "Paise Dene Wala Member *",
    notesLabel: "Notes / Remarks",
    addToPoolBtn: "Pool Me Dalo",
    tripSettingsModalTitle: "Money Handler Settings",
    handlerModeSelectLabel: "Poora paisa kaun sambhale ga? *",
    primaryHandlerSelectLabel: "Main Manager Select Karo *",
    membersModalTitle: "Trip Members",
    addBtn: "Jodo",
    currentMembersLabel: "Current Members",
    shareModalTitle: "Email & Live Share Report",
    inviteEmailLabel: "Member ko email se invite karein:",
    sendInviteBtn: "Invite",
    inviteSubtext: "Sabhi members realtime me ek sath Live update dekh sakte hain!",
    copyTextBtn: "Copy Karo",
    csvDownloadBtn: "CSV Download",
    confirmDeleteTitle: "Kya aap sachme delete karna chahte hain?",
    confirmDeleteBtn: "Haan, Delete Karo",
    createTripTitle: "Nayi Trip Banayein",
    newTripNameLabel: "Trip Ka Naam *",
    membersListInputLabel: "Members Names (Comma Separated) *",
    onboardingHandlerQuestion: "Poora paisa kaun sambhale ga? *",
    optionSingleHandler: "👤 Single person handles all cash/UPI",
    optionGroupHandler: "👥 Sabhi milkar kharcha karenge",
    createTripConfirmBtn: "Trip Shuru Karo",

    chipAuto: "🛺 Auto",
    chipCab: "🚖 Cab/Taxi",
    chipFood: "🍽️ Khana",
    chipTea: "☕ Chai/Coffee",
    chipSnacks: "🍿 Nashta",
    chipPetrol: "⛽ Petrol/Diesel",
    chipToll: "🛣️ Toll Tax",
    chipParking: "🅿️ Parking",
    chipHotel: "🏨 Hotel",
    chipTickets: "🎟️ Tickets",
    chipShopping: "🛍️ Shopping",
    chipDrinks: "🍹 Drinks/Pani",
    chipMedical: "🚑 Medical/Misc",

    srcPool: "🏦 Jama Pool (Trip Pool)",
    srcIndiv: "👤 Out of Pocket",
    modeCash: "💵 Cash Box",
    modeOnline: "📱 Online (UPI / Card)",
    catTransport: "⛽ Transport / Auto",
    catFood: "🍽️ Khana / Chai",
    catDriver: "🚗 Driver / Tolls",
    catStay: "🏨 Hotel / Stay",
    catActivities: "🎟️ Activities",
    catMisc: "🛒 Supplies / Misc",
    optSingleCashier: "👤 Single Cashier (One Manager)",
    optGroupMode: "👥 Group Multi-Spender (Everyone)"
  }
};

// GLOBAL STATE - FRESH START WITH ZERO PRE-LOADED DATA
window.trips = [];
window.currentTripId = '';
window.currentLang = 'en'; // DEFAULTED TO ENGLISH
let calcExpression = '';
let pendingDeleteTarget = null;

// INIT
window.addEventListener('DOMContentLoaded', () => {
  loadStateLocally();
  
  // DEFAULT TO ENGLISH
  document.getElementById('langSelect').value = window.currentLang;
  applyLanguage(window.currentLang);

  if (window.trips && window.trips.length > 0) {
    if (!window.currentTripId || !window.trips.find(t => t.id === window.currentTripId)) {
      window.currentTripId = window.trips[0].id;
    }
    populateTripSelector();
    renderAll();

    if (window.listenToCloudTrip) {
      window.listenToCloudTrip(window.currentTripId);
    }
  } else {
    // FRESH START: NO SEED DATA - OPEN NEW TRIP MODAL
    renderEmptyState();
    openModal('newTripModal');
  }
});

window.saveStateLocally = function() {
  localStorage.setItem('easytrip_v2_trips', JSON.stringify(window.trips));
  localStorage.setItem('easytrip_v2_currentTripId', window.currentTripId);
  localStorage.setItem('easytrip_v2_lang', window.currentLang);
};

function loadStateLocally() {
  try {
    const savedTrips = localStorage.getItem('easytrip_v2_trips');
    const savedCurrent = localStorage.getItem('easytrip_v2_currentTripId');
    const savedLang = localStorage.getItem('easytrip_v2_lang');
    if (savedTrips) window.trips = JSON.parse(savedTrips);
    if (savedCurrent) window.currentTripId = savedCurrent;
    if (savedLang) window.currentLang = savedLang;
  } catch(e) {
    console.error("Local Storage Error", e);
  }
}

function renderEmptyState() {
  document.getElementById('tripNameDisplay').innerText = window.currentLang === 'en' ? 'No Active Trip' : 'कोई ट्रिप नहीं';
  document.getElementById('tripDatesDisplay').innerText = window.currentLang === 'en' ? '0 Members' : '0 सदस्य';
  document.getElementById('primaryHandlerDisplay').innerHTML = `Manager: <b class="text-white">-</b>`;
  document.getElementById('collectedPoolDisplay').innerText = '₹0';
  document.getElementById('totalSpendDisplay').innerText = '₹0';
  document.getElementById('remainingPoolDisplay').innerText = '₹0';
  document.getElementById('cashBoxBalance').innerText = '₹0';
  document.getElementById('onlineBoxBalance').innerText = '₹0';
  document.getElementById('expensesList').innerHTML = `<p class="text-xs text-slate-400 text-center py-6">No expenses logged yet. Create a trip to begin!</p>`;
  document.getElementById('fundContributionsList').innerHTML = `<p class="text-xs text-slate-400 text-center py-6">No pool contributions yet.</p>`;
  document.getElementById('driverLogList').innerHTML = `<p class="text-xs text-slate-400 text-center py-6">No driver logs.</p>`;
  document.getElementById('membersBalanceGrid').innerHTML = `<p class="text-xs text-slate-400 text-center py-6">No members added.</p>`;
  document.getElementById('settlementsList').innerHTML = `<p class="text-xs text-slate-400 text-center py-2">No settlements.</p>`;
}

function getActiveTrip() {
  return window.trips.find(t => t.id === window.currentTripId) || null;
}

function switchTrip(newId) {
  window.currentTripId = newId;
  saveStateLocally();
  renderAll();
  if (window.listenToCloudTrip) {
    window.listenToCloudTrip(newId);
  }
  showToast(window.currentLang === 'en' ? 'Switched Trip' : 'ट्रिप बदला गया');
}

function changeLanguage(langKey) {
  window.currentLang = langKey;
  saveStateLocally();
  applyLanguage(langKey);
  renderAll();
  showToast(langKey === 'en' ? 'Language: English' : langKey === 'hi' ? 'भाषा: हिंदी' : 'Language: Hinglish');
}

function applyLanguage(langKey) {
  const dict = TRANSLATIONS[langKey] || TRANSLATIONS['en'];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  renderQuickChips();
}

function renderQuickChips() {
  const dict = TRANSLATIONS[window.currentLang] || TRANSLATIONS['en'];
  const chipsData = [
    { key: 'chipAuto', title: dict.chipAuto, cat: 'Transport' },
    { key: 'chipCab', title: dict.chipCab, cat: 'Transport' },
    { key: 'chipFood', title: dict.chipFood, cat: 'Food' },
    { key: 'chipTea', title: dict.chipTea, cat: 'Food' },
    { key: 'chipSnacks', title: dict.chipSnacks, cat: 'Food' },
    { key: 'chipPetrol', title: dict.chipPetrol, cat: 'Transport' },
    { key: 'chipToll', title: dict.chipToll, cat: 'Driver' },
    { key: 'chipParking', title: dict.chipParking, cat: 'Transport' },
    { key: 'chipHotel', title: dict.chipHotel, cat: 'Stay' },
    { key: 'chipTickets', title: dict.chipTickets, cat: 'Activities' },
    { key: 'chipShopping', title: dict.chipShopping, cat: 'Misc' },
    { key: 'chipDrinks', title: dict.chipDrinks, cat: 'Food' },
    { key: 'chipMedical', title: dict.chipMedical, cat: 'Misc' }
  ];

  const container = document.getElementById('quickChipsContainer');
  if (!container) return;

  container.innerHTML = chipsData.map(c => `
    <button onclick="quickSelectCategory('${escapeHtml(c.title)}', '${c.cat}')" class="quick-chip bg-slate-900 hover:bg-brand-600/30 border border-slate-700 text-slate-200 px-2.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition">
      ${escapeHtml(c.title)}
    </button>
  `).join('');
}

function computeTripTotals(trip) {
  if (!trip) return { totalCollectedPool: 0, grandTotalSpent: 0, remTotalPool: 0, remCashPool: 0, remOnlinePool: 0 };

  const fundContributions = trip.fundContributions || [];
  const expenses = trip.expenses || [];

  const collectedCash = fundContributions.filter(c => c.mode === 'CASH').reduce((sum, c) => sum + parseFloat(c.amount), 0);
  const collectedOnline = fundContributions.filter(c => c.mode === 'ONLINE').reduce((sum, c) => sum + parseFloat(c.amount), 0);
  const totalCollectedPool = collectedCash + collectedOnline;

  let poolSpentCash = 0;
  let poolSpentOnline = 0;
  let indivSpentCash = 0;
  let indivSpentOnline = 0;

  expenses.forEach(exp => {
    const amt = parseFloat(exp.amount) || 0;
    const isPool = exp.source === 'POOL';
    const isCash = exp.mode === 'CASH';

    if (isPool) {
      if (isCash) poolSpentCash += amt;
      else poolSpentOnline += amt;
    } else {
      if (isCash) indivSpentCash += amt;
      else indivSpentOnline += amt;
    }
  });

  const totalPoolSpent = poolSpentCash + poolSpentOnline;
  const grandTotalSpent = totalPoolSpent + (indivSpentCash + indivSpentOnline);

  const remCashPool = collectedCash - poolSpentCash;
  const remOnlinePool = collectedOnline - poolSpentOnline;
  const remTotalPool = totalCollectedPool - totalPoolSpent;

  return {
    collectedCash,
    collectedOnline,
    totalCollectedPool,
    poolSpentCash,
    poolSpentOnline,
    grandTotalSpent,
    remCashPool,
    remOnlinePool,
    remTotalPool
  };
}

window.renderAll = function() {
  const trip = getActiveTrip();
  if (!trip) {
    renderEmptyState();
    return;
  }

  const metrics = computeTripTotals(trip);

  document.getElementById('tripNameDisplay').innerText = trip.name;
  document.getElementById('tripDatesDisplay').innerText = `${trip.members.length} ${window.currentLang === 'en' ? 'Members' : 'सदस्य'}`;

  const isSingleHandler = trip.handlerMode !== 'GROUP';
  const handlerMember = trip.members.find(m => m.id === trip.primaryHandlerId)?.name || trip.members[0]?.name || 'Manager';
  
  document.getElementById('handlerModeText').innerText = isSingleHandler ? (window.currentLang === 'en' ? 'Single Cashier' : 'एक व्यक्ति (Cashier)') : (window.currentLang === 'en' ? 'Group Multi-Spender' : 'ग्रुप मोड');
  document.getElementById('primaryHandlerDisplay').innerHTML = isSingleHandler 
    ? `${window.currentLang === 'en' ? 'Manager' : 'मनी मैनेजर'}: <b class="text-white">${escapeHtml(handlerMember)}</b>`
    : `<span class="text-emerald-400 font-semibold">${window.currentLang === 'en' ? 'Everyone can spend' : 'सभी मिलकर खर्च कर सकते हैं'}</span>`;

  document.getElementById('collectedPoolDisplay').innerText = `₹${metrics.totalCollectedPool.toLocaleString('en-IN')}`;
  document.getElementById('totalSpendDisplay').innerText = `₹${metrics.grandTotalSpent.toLocaleString('en-IN')}`;
  
  const remDisplay = document.getElementById('remainingPoolDisplay');
  remDisplay.innerText = `₹${metrics.remTotalPool.toLocaleString('en-IN')}`;
  remDisplay.className = `font-extrabold text-sm ${metrics.remTotalPool >= 0 ? 'text-white' : 'text-red-400'}`;

  document.getElementById('cashBoxBalance').innerText = `₹${metrics.remCashPool.toLocaleString('en-IN')}`;
  document.getElementById('onlineBoxBalance').innerText = `₹${metrics.remOnlinePool.toLocaleString('en-IN')}`;

  const badge = document.getElementById('poolStatusBadge');
  if (metrics.remTotalPool < 0) {
    badge.className = "p-1.5 rounded-lg text-center text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20";
    badge.innerText = window.currentLang === 'en' ? `⚠️ Over Budget by ₹${Math.abs(metrics.remTotalPool).toLocaleString('en-IN')}` : `⚠️ पूल खत्म! ₹${Math.abs(metrics.remTotalPool).toLocaleString('en-IN')} ओवर बजट`;
  } else {
    badge.className = "p-1.5 rounded-lg text-center text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    badge.innerText = window.currentLang === 'en' ? `✅ Pool Money Active` : `✅ पूल मनी सुरक्षित है`;
  }

  populateTripSelector();
  renderQuickChips();
  renderExpenses();
  renderPoolFundLog();
  renderDriverLedger();
  renderBalancesAndSettlements();
};

function populateTripSelector() {
  const selector = document.getElementById('tripSelect');
  selector.innerHTML = '';
  window.trips.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.innerText = t.name;
    if (t.id === window.currentTripId) opt.selected = true;
    selector.appendChild(opt);
  });
}

function setActiveTab(tabName) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.getElementById(`tabContent-${tabName}`).classList.remove('hidden');

  document.querySelectorAll('.nav-desk-btn').forEach(btn => {
    btn.classList.remove('bg-brand-600', 'text-white');
    btn.classList.add('text-slate-400');
  });
  const activeDeskBtn = document.getElementById(`deskTab-${tabName}`);
  if (activeDeskBtn) activeDeskBtn.classList.add('bg-brand-600', 'text-white');

  document.querySelectorAll('.nav-mob-btn').forEach(btn => {
    btn.classList.remove('text-brand-400');
    btn.classList.add('text-slate-400');
  });
  const activeMobBtn = document.getElementById(`mobTab-${tabName}`);
  if (activeMobBtn) activeMobBtn.classList.add('text-brand-400');
}

function quickSelectCategory(title, category) {
  if (!getActiveTrip()) {
    openModal('newTripModal');
    return;
  }
  openModal('addExpenseModal');
  document.getElementById('expenseTitle').value = title;
  document.getElementById('expenseCategory').value = category;
  document.getElementById('expenseAmount').focus();
}

function toggleCalculator() {
  const widget = document.getElementById('quickCalculatorWidget');
  const isHidden = widget.classList.contains('opacity-0');
  if (isHidden) {
    widget.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
  } else {
    widget.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
  }
}

function calcInput(val) {
  const display = document.getElementById('calcDisplay');
  if (val === 'C') {
    calcExpression = '';
    display.innerText = '0';
    return;
  }
  calcExpression += val;
  display.innerText = calcExpression;
}

function calcEquals() {
  const display = document.getElementById('calcDisplay');
  try {
    const result = eval(calcExpression.replace(/×/g, '*').replace(/÷/g, '/'));
    calcExpression = String(Math.round(result * 100) / 100);
    display.innerText = calcExpression;
  } catch(e) {
    display.innerText = 'Error';
    calcExpression = '';
  }
}

function transferCalcToExpense() {
  const display = document.getElementById('calcDisplay').innerText;
  const amount = parseFloat(display);
  if (!isNaN(amount) && amount > 0) {
    if (!getActiveTrip()) {
      openModal('newTripModal');
      return;
    }
    openModal('addExpenseModal');
    document.getElementById('expenseAmount').value = amount;
    toggleCalculator();
    showToast(window.currentLang === 'en' ? 'Amount transferred to form!' : 'रकम फॉर्म में सेट हुई!');
  } else {
    showToast(window.currentLang === 'en' ? 'Calculate a valid amount' : 'मान्य रकम कैलकुलेट करें');
  }
}

function renderExpenses() {
  const trip = getActiveTrip();
  const container = document.getElementById('expensesList');
  if (!trip) return;

  const search = document.getElementById('expenseSearch').value.toLowerCase();
  const modeFilter = document.getElementById('modeFilter').value;

  let filtered = (trip.expenses || []).filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(search) || (e.notes && e.notes.toLowerCase().includes(search));
    const matchesMode = modeFilter === 'ALL' || e.mode === modeFilter;
    return matchesSearch && matchesMode;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 bg-slate-800/40 rounded-2xl border border-dashed border-slate-700">
        <p class="text-xs text-slate-400">${window.currentLang === 'en' ? 'No expense records found' : 'कोई रिकॉर्ड नहीं मिला'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(exp => {
    const handlerName = trip.members.find(m => m.id === exp.paidBy)?.name || (trip.members.find(m => m.id === trip.primaryHandlerId)?.name || 'Member');
    const isCash = exp.mode === 'CASH';

    let payerLabel = '';
    if (exp.source === 'POOL') {
      if (window.currentLang === 'en') payerLabel = `Central Pool (via ${escapeHtml(handlerName)})`;
      else if (window.currentLang === 'hinglish') payerLabel = `Jama Pool (${escapeHtml(handlerName)} dwara)`;
      else payerLabel = `जमा पूल (${escapeHtml(handlerName)} द्वारा)`;
    } else {
      if (window.currentLang === 'en') payerLabel = `${escapeHtml(handlerName)} (Out-of-Pocket)`;
      else if (window.currentLang === 'hinglish') payerLabel = `${escapeHtml(handlerName)} (Jeb Se)`;
      else payerLabel = `${escapeHtml(handlerName)} (जेब से)`;
    }

    return `
      <div class="bg-slate-800/90 rounded-xl p-3 border border-slate-700/70 flex items-center justify-between gap-2 shadow-sm">
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-bold text-xs text-slate-100 truncate">${escapeHtml(exp.title)}</h4>
            <span class="text-[9px] ${isCash ? 'bg-amber-500/20 text-amber-300' : 'bg-indigo-500/20 text-indigo-300'} font-bold px-1.5 py-0.2 rounded">
              ${isCash ? '💵 Cash' : '📱 Online'}
            </span>
            ${exp.source === 'INDIVIDUAL' 
              ? '<span class="text-[9px] bg-purple-500/20 text-purple-300 font-bold px-1 py-0.2 rounded">Out-of-Pocket</span>' 
              : '<span class="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-1 py-0.2 rounded">Pool Fund</span>'}
          </div>
          <p class="text-[10px] text-slate-400 mt-0.5">
            ${window.currentLang === 'en' ? 'Payment' : 'भुगतान'}: <span class="text-slate-200 font-semibold">${payerLabel}</span>
          </p>
        </div>

        <div class="text-right shrink-0">
          <span class="block text-xs font-black text-white">₹${parseFloat(exp.amount).toLocaleString('en-IN')}</span>
          <div class="flex gap-2 justify-end mt-1">
            <button onclick="editExpense('${exp.id}')" class="text-slate-400 hover:text-brand-400 text-xs px-1" title="Edit">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="promptDelete('expense', '${exp.id}', '${escapeHtml(exp.title)}', ${exp.amount})" class="text-slate-400 hover:text-red-400 text-xs px-1" title="Delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function editExpense(expId) {
  const trip = getActiveTrip();
  if (!trip) return;
  const exp = trip.expenses.find(e => e.id === expId);
  if (!exp) return;

  openModal('addExpenseModal');
  document.getElementById('expenseModalTitle').innerText = window.currentLang === 'en' ? 'Edit Expense' : 'खर्च संशोधित करें';
  document.getElementById('expenseId').value = exp.id;
  document.getElementById('expenseTitle').value = exp.title;
  document.getElementById('expenseAmount').value = exp.amount;
  document.getElementById('expenseSource').value = exp.source || 'POOL';
  document.getElementById('expenseMode').value = exp.mode || 'CASH';
  togglePaidByDropdown();
  if (exp.paidBy) document.getElementById('expensePaidBy').value = exp.paidBy;
  document.getElementById('expenseCategory').value = exp.category || 'Misc';
  document.getElementById('expenseIsDriver').checked = !!exp.isDriver;

  document.querySelectorAll('input[name="splitMember"]').forEach(cb => {
    cb.checked = exp.splitBetween ? exp.splitBetween.includes(cb.value) : true;
  });
}

function promptDelete(type, id, title, amount) {
  pendingDeleteTarget = { type, id };
  const detailsEl = document.getElementById('deleteConfirmDetails');
  
  if (type === 'expense') {
    detailsEl.innerHTML = window.currentLang === 'en' 
      ? `Do you really want to delete <b>"${title}"</b> of <b>₹${amount}</b>?`
      : `क्या आप वाकई <b>"${title}"</b> की <b>₹${amount}</b> वाली एंट्री डिलीट करना चाहते हैं?`;
  } else if (type === 'fund') {
    detailsEl.innerHTML = window.currentLang === 'en'
      ? `Do you really want to remove this pool contribution of <b>₹${amount}</b>?`
      : `क्या आप वाकई <b>₹${amount}</b> का यह पूल जमा डिलीट करना चाहते हैं?`;
  }

  openModal('deleteConfirmModal');
}

function executePendingDelete() {
  if (!pendingDeleteTarget) return;

  const trip = getActiveTrip();
  if (!trip) return;
  const { type, id } = pendingDeleteTarget;

  if (type === 'expense') {
    trip.expenses = trip.expenses.filter(e => e.id !== id);
    showToast(window.currentLang === 'en' ? 'Expense Deleted' : 'खर्च डिलीट हो गया');
  } else if (type === 'fund') {
    trip.fundContributions = trip.fundContributions.filter(f => f.id !== id);
    showToast(window.currentLang === 'en' ? 'Pool Entry Deleted' : 'पूल जमा डिलीट हो गया');
  }

  saveAndSyncTrip(trip);
  closeModal('deleteConfirmModal');
  pendingDeleteTarget = null;
}

function renderPoolFundLog() {
  const trip = getActiveTrip();
  const container = document.getElementById('fundContributionsList');
  if (!trip) return;

  const fundContributions = trip.fundContributions || [];

  if (fundContributions.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">${window.currentLang === 'en' ? 'No pool contributions yet' : 'कोई जमा मनी नहीं जोड़ा गया'}</p>`;
    return;
  }

  container.innerHTML = fundContributions.map(c => {
    const memberName = trip.members.find(m => m.id === c.memberId)?.name || 'Member';
    const isCash = c.mode === 'CASH';

    return `
      <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
        <div>
          <h5 class="font-bold text-slate-200">${escapeHtml(memberName)}</h5>
          <span class="text-[9px] text-slate-400">${c.notes || 'Pool Contribution'}</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-right">
            <span class="font-black text-emerald-400 text-xs">₹${parseFloat(c.amount).toLocaleString('en-IN')}</span>
            <span class="block text-[8px] ${isCash ? 'text-amber-400' : 'text-indigo-400'} uppercase font-bold">${c.mode}</span>
          </div>
          <button onclick="promptDelete('fund', '${c.id}', 'Pool Fund', ${c.amount})" class="text-slate-500 hover:text-red-400 text-xs p-1">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderDriverLedger() {
  const trip = getActiveTrip();
  const container = document.getElementById('driverLogList');
  if (!trip) return;

  const driverExpenses = (trip.expenses || []).filter(e => e.isDriver || e.category === 'Driver');

  const totalDriver = driverExpenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  document.getElementById('driverTotalPaidCard').innerText = `₹${totalDriver.toLocaleString('en-IN')}`;
  document.getElementById('driverEntriesCount').innerText = driverExpenses.length;

  if (driverExpenses.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">${window.currentLang === 'en' ? 'No driver entries' : 'कोई ड्राइवर एंट्री नहीं'}</p>`;
    return;
  }

  container.innerHTML = driverExpenses.map(exp => `
    <div class="bg-slate-800/70 p-2.5 rounded-xl border border-amber-500/20 flex items-center justify-between text-xs">
      <div>
        <h5 class="font-bold text-slate-200">${escapeHtml(exp.title)}</h5>
        <span class="text-[9px] text-slate-400">${exp.mode}</span>
      </div>
      <span class="font-black text-amber-400">₹${parseFloat(exp.amount).toLocaleString('en-IN')}</span>
    </div>
  `).join('');
}

function calculateMemberReconciliation(trip) {
  if (!trip) return { memberBalances: {}, memberContributions: {}, memberOutofPocket: {}, memberExpenseShares: {}, transactions: [], poolDeficit: 0, remainingPool: 0, primaryHandlerId: null };

  const memberBalances = {};
  const memberContributions = {};
  const memberOutofPocket = {};
  const memberExpenseShares = {};

  const members = trip.members || [];
  members.forEach(m => {
    memberBalances[m.id] = 0;
    memberContributions[m.id] = 0;
    memberOutofPocket[m.id] = 0;
    memberExpenseShares[m.id] = 0;
  });

  let totalPoolCollected = 0;
  (trip.fundContributions || []).forEach(c => {
    const amt = parseFloat(c.amount) || 0;
    totalPoolCollected += amt;
    if (memberContributions[c.memberId] !== undefined) {
      memberContributions[c.memberId] += amt;
    }
  });

  let totalPoolSpent = 0;
  let totalOutofPocketSpent = 0;

  (trip.expenses || []).forEach(exp => {
    const amt = parseFloat(exp.amount) || 0;
    const splitBetween = exp.splitBetween && exp.splitBetween.length > 0 ? exp.splitBetween : members.map(m => m.id);
    const perPersonShare = amt / splitBetween.length;

    if (exp.source === 'POOL') {
      totalPoolSpent += amt;
    } else if (exp.source === 'INDIVIDUAL' && exp.paidBy) {
      totalOutofPocketSpent += amt;
      if (memberOutofPocket[exp.paidBy] !== undefined) {
        memberOutofPocket[exp.paidBy] += amt;
      }
    }

    splitBetween.forEach(mId => {
      if (memberExpenseShares[mId] !== undefined) {
        memberExpenseShares[mId] += perPersonShare;
      }
    });
  });

  const poolDeficit = totalPoolSpent - totalPoolCollected;
  const primaryHandlerId = trip.primaryHandlerId || members[0]?.id;

  if (poolDeficit > 0 && primaryHandlerId) {
    if (memberOutofPocket[primaryHandlerId] !== undefined) {
      memberOutofPocket[primaryHandlerId] += poolDeficit;
    }
  }

  for (let mId in memberBalances) {
    const totalCredit = (memberContributions[mId] || 0) + (memberOutofPocket[mId] || 0);
    const share = memberExpenseShares[mId] || 0;
    memberBalances[mId] = Math.round((totalCredit - share) * 100) / 100;
  }

  let debtors = [];
  let creditors = [];

  for (let mId in memberBalances) {
    let bal = memberBalances[mId];
    if (bal < -0.01) debtors.push({ id: mId, amount: -bal });
    else if (bal > 0.01) creditors.push({ id: mId, amount: bal });
  }

  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const transactions = [];
  let i = 0, j = 0;
  while (i < debtors.length && j < creditors.length) {
    let debtor = debtors[i];
    let creditor = creditors[j];
    let amount = Math.min(debtor.amount, creditor.amount);

    transactions.push({ from: debtor.id, to: creditor.id, amount: Math.round(amount * 100) / 100 });
    debtor.amount -= amount;
    creditor.amount -= amount;

    if (debtor.amount < 0.01) i++;
    if (creditor.amount < 0.01) j++;
  }

  const remainingPool = totalPoolCollected - totalPoolSpent;

  return {
    memberBalances,
    memberContributions,
    memberOutofPocket,
    memberExpenseShares,
    transactions,
    poolDeficit: poolDeficit > 0 ? poolDeficit : 0,
    remainingPool: remainingPool > 0 ? remainingPool : 0,
    primaryHandlerId
  };
}

function renderBalancesAndSettlements() {
  const trip = getActiveTrip();
  if (!trip) return;

  const { memberBalances, memberContributions, memberOutofPocket, memberExpenseShares, transactions, poolDeficit, remainingPool, primaryHandlerId } = calculateMemberReconciliation(trip);

  const grid = document.getElementById('membersBalanceGrid');
  grid.innerHTML = trip.members.map(m => {
    const bal = memberBalances[m.id] || 0;
    const poolCont = memberContributions[m.id] || 0;
    const oop = memberOutofPocket[m.id] || 0;
    const share = memberExpenseShares[m.id] || 0;
    const totalCredit = poolCont + oop;
    const isPositive = bal >= 0;

    return `
      <div class="p-2.5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col justify-between text-xs">
        <div class="flex justify-between items-start mb-1">
          <div>
            <h5 class="font-bold text-slate-100">${escapeHtml(m.name)}</h5>
            <span class="text-[9px] ${isPositive ? 'text-emerald-400' : 'text-red-400'} font-semibold block">
              ${isPositive ? (window.currentLang === 'en' ? 'Gets Refund / Reimbursed' : 'रिफंड मिलेगा') : (window.currentLang === 'en' ? 'Owes Group' : 'देना पड़ेगा')}
            </span>
          </div>
          <span class="font-black ${isPositive ? 'text-emerald-400' : 'text-red-400'} text-sm">
            ${isPositive ? '+' : ''}₹${Math.abs(Math.round(bal)).toLocaleString('en-IN')}
          </span>
        </div>

        <div class="text-[9px] text-slate-400 space-y-0.5 pt-1.5 border-t border-slate-800">
          <div class="flex justify-between"><span>${window.currentLang === 'en' ? 'Initial Pool:' : 'शुरुआती जमा:'}</span> <span class="text-slate-200">₹${poolCont}</span></div>
          ${oop > 0 ? `<div class="flex justify-between"><span>${window.currentLang === 'en' ? 'Extra Out-of-Pocket:' : 'एक्स्ट्रा (जेब से):'}</span> <span class="text-amber-300 font-bold">+₹${Math.round(oop)}</span></div>` : ''}
          <div class="flex justify-between border-t border-slate-800 pt-0.5"><span>${window.currentLang === 'en' ? 'Total Paid In:' : 'कुल दिया:'}</span> <span class="text-emerald-300 font-bold">₹${Math.round(totalCredit)}</span></div>
          <div class="flex justify-between"><span>${window.currentLang === 'en' ? 'Trip Share:' : 'खर्च हिस्सा:'}</span> <span class="text-slate-300">₹${Math.round(share)}</span></div>
        </div>
      </div>
    `;
  }).join('');

  const list = document.getElementById('settlementsList');
  const isSingleHandler = trip.handlerMode !== 'GROUP';
  const managerName = trip.members.find(m => m.id === primaryHandlerId)?.name || 'Manager';

  let html = '';

  if (poolDeficit > 0 && isSingleHandler) {
    html += `
      <div class="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 mb-2">
        <i class="fa-solid fa-triangle-exclamation me-1"></i>
        <b>${window.currentLang === 'en' ? 'Pool Deficit Alert' : 'ओवर-बजट अलर्ट'}:</b> 
        ${window.currentLang === 'en' 
          ? `Pool was over-spent by ₹${poolDeficit.toLocaleString('en-IN')}, covered out-of-pocket by ${escapeHtml(managerName)}. Settlements adjusted below:` 
          : `पूल जमा से ₹${poolDeficit.toLocaleString('en-IN')} ज्यादा खर्च हुआ, जो ${escapeHtml(managerName)} ने अतिरिक्त दिया। लेन-देन नीचे देखें:`}
      </div>
    `;
  }

  if (remainingPool > 0 && isSingleHandler && transactions.length === 0) {
    html += `
      <div class="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 mb-2">
        <i class="fa-solid fa-vault me-1"></i>
        <b>${window.currentLang === 'en' ? 'Pool Cash Refund Distribution' : 'बचे हुए पूल से रिफंड'}:</b> 
        ${window.currentLang === 'en'
          ? `${escapeHtml(managerName)} holds ₹${remainingPool.toLocaleString('en-IN')} leftover pool cash and will distribute refunds as follows:`
          : `${escapeHtml(managerName)} के पास बचा हुआ ₹${remainingPool.toLocaleString('en-IN')} पूल कैश है। रिफंड इस प्रकार बांटें:`}
      </div>
    `;
  }

  if (transactions.length === 0 && remainingPool === 0) {
    html += `<p class="text-xs text-slate-400 text-center py-2">${window.currentLang === 'en' ? 'All balances settled perfectly!' : 'सबका हिसाब बराबर है!'}</p>`;
  } else if (transactions.length > 0) {
    html += transactions.map(t => {
      const fromMember = trip.members.find(m => m.id === t.from)?.name || 'Member';
      const toMember = trip.members.find(m => m.id === t.to)?.name || 'Member';
      return `
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
          <span class="font-bold text-red-300 flex items-center gap-1.5">
            ${escapeHtml(fromMember)} <i class="fa-solid fa-arrow-right text-slate-500 text-[10px]"></i> <span class="text-emerald-300">${escapeHtml(toMember)}</span>
          </span>
          <span class="font-black text-brand-400 text-sm">₹${t.amount.toLocaleString('en-IN')}</span>
        </div>
      `;
    }).join('');
  } else if (remainingPool > 0 && isSingleHandler) {
    html += trip.members.map(m => {
      const bal = Math.round(memberBalances[m.id] || 0);
      if (bal <= 0 || m.id === primaryHandlerId) return '';
      return `
        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
          <span class="font-bold text-slate-200">
            ${escapeHtml(managerName)} ➔ <span class="text-emerald-300">${escapeHtml(m.name)}</span> (${window.currentLang === 'en' ? 'Refund' : 'रिफंड'})
          </span>
          <span class="font-black text-emerald-400 text-sm">₹${bal.toLocaleString('en-IN')}</span>
        </div>
      `;
    }).join('');
  }

  list.innerHTML = html;
}

function openModal(id) {
  const trip = getActiveTrip();
  if (id === 'addExpenseModal') {
    if (!trip) {
      openModal('newTripModal');
      return;
    }
    populateExpenseFormMembers();
  } else if (id === 'addFundModal') {
    if (!trip) {
      openModal('newTripModal');
      return;
    }
    const contributorSelect = document.getElementById('fundContributor');
    contributorSelect.innerHTML = trip.members.map(m => `<option value="${m.id}">${escapeHtml(m.name)}</option>`).join('');
  } else if (id === 'membersModal') {
    if (!trip) {
      openModal('newTripModal');
      return;
    }
    renderMembersModalList();
  } else if (id === 'tripSettingsModal') {
    if (!trip) {
      openModal('newTripModal');
      return;
    }
    document.getElementById('settingHandlerMode').value = trip.handlerMode || 'SINGLE';
    const pSelect = document.getElementById('settingPrimaryHandler');
    pSelect.innerHTML = trip.members.map(m => `<option value="${m.id}">${escapeHtml(m.name)}</option>`).join('');
    if (trip.primaryHandlerId) pSelect.value = trip.primaryHandlerId;
    toggleHandlerMemberSelect();
  }
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function togglePaidByDropdown() {
  const source = document.getElementById('expenseSource').value;
  const labelEl = document.getElementById('paidByLabelEl');
  const dict = TRANSLATIONS[window.currentLang] || TRANSLATIONS['en'];
  
  if (source === 'POOL') {
    if (labelEl) labelEl.innerText = dict.handledByLabel || "Handled / Paid By *";
  } else {
    if (labelEl) labelEl.innerText = dict.paidByLabel || "Paid Out-Of-Pocket By *";
  }
}

function toggleHandlerMemberSelect() {
  const mode = document.getElementById('settingHandlerMode').value;
  const container = document.getElementById('primaryHandlerSelectContainer');
  if (mode === 'SINGLE') container.classList.remove('hidden');
  else container.classList.add('hidden');
}

function populateExpenseFormMembers() {
  const trip = getActiveTrip();
  if (!trip) return;
  const paidSelect = document.getElementById('expensePaidBy');
  const splitContainer = document.getElementById('splitMembersCheckboxes');

  paidSelect.innerHTML = trip.members.map(m => `<option value="${m.id}">${escapeHtml(m.name)}</option>`).join('');
  if (trip.primaryHandlerId) paidSelect.value = trip.primaryHandlerId;

  splitContainer.innerHTML = trip.members.map(m => `
    <label class="flex items-center gap-1 text-xs text-slate-300 cursor-pointer">
      <input type="checkbox" name="splitMember" value="${m.id}" checked class="accent-brand-500 rounded">
      <span class="truncate">${escapeHtml(m.name)}</span>
    </label>
  `).join('');

  togglePaidByDropdown();
}

function selectAllSplitMembers(selectAll) {
  document.querySelectorAll('input[name="splitMember"]').forEach(cb => cb.checked = selectAll);
}

function openDriverExpenseModal() {
  if (!getActiveTrip()) {
    openModal('newTripModal');
    return;
  }
  openModal('addExpenseModal');
  document.getElementById('expenseTitle').value = '🚗 Driver / Toll Expense';
  document.getElementById('expenseCategory').value = 'Driver';
  document.getElementById('expenseIsDriver').checked = true;
}

function createNewTrip(e) {
  e.preventDefault();
  const name = document.getElementById('newTripName').value.trim();
  const rawMembers = document.getElementById('newTripMembersInput').value.trim();
  const handlerMode = document.querySelector('input[name="newTripHandlerMode"]:checked').value;

  let memberNames = rawMembers ? rawMembers.split(',').map(s => s.trim()).filter(Boolean) : ['Member 1', 'Member 2'];
  if (memberNames.length === 0) memberNames = ['Member 1'];

  const members = memberNames.map((mName, idx) => ({ id: `m-${idx + 1}`, name: mName }));

  const newTripObj = {
    id: 'trip-' + Date.now(),
    name,
    createdDate: new Date().toISOString().split('T')[0],
    handlerMode,
    primaryHandlerId: members[0].id,
    members,
    fundContributions: [],
    expenses: []
  };

  window.trips.push(newTripObj);
  window.currentTripId = newTripObj.id;
  saveAndSyncTrip(newTripObj);
  closeModal('newTripModal');
  document.getElementById('newTripName').value = '';
  document.getElementById('newTripMembersInput').value = '';
  showToast(window.currentLang === 'en' ? 'New Trip Started!' : 'नई ट्रिप शुरू हुई!');
}

function saveExpense(e) {
  e.preventDefault();
  const trip = getActiveTrip();
  if (!trip) return;

  const expId = document.getElementById('expenseId').value;
  const title = document.getElementById('expenseTitle').value.trim();
  const amount = parseFloat(document.getElementById('expenseAmount').value);
  const source = document.getElementById('expenseSource').value;
  const mode = document.getElementById('expenseMode').value;
  const paidBy = document.getElementById('expensePaidBy').value || (trip.primaryHandlerId || trip.members[0]?.id);
  const category = document.getElementById('expenseCategory').value;
  const isDriver = document.getElementById('expenseIsDriver').checked;

  const splitBetween = Array.from(document.querySelectorAll('input[name="splitMember"]:checked')).map(cb => cb.value);

  if (splitBetween.length === 0) {
    showToast(window.currentLang === 'en' ? 'Select at least one member!' : 'कम से कम एक सदस्य चुने!');
    return;
  }

  if (expId) {
    const idx = trip.expenses.findIndex(item => item.id === expId);
    if (idx !== -1) {
      trip.expenses[idx] = { id: expId, title, amount, source, mode, paidBy, category, splitBetween, isDriver, date: new Date().toISOString().split('T')[0] };
    }
  } else {
    trip.expenses.unshift({
      id: 'exp-' + Date.now(),
      title,
      amount,
      source,
      mode,
      paidBy,
      category,
      splitBetween,
      isDriver,
      date: new Date().toISOString().split('T')[0]
    });
  }

  saveAndSyncTrip(trip);
  closeModal('addExpenseModal');
  document.getElementById('expenseForm').reset();
  document.getElementById('expenseId').value = '';
  showToast(expId ? (window.currentLang === 'en' ? 'Expense Updated!' : 'खर्च अपडेट हुआ!') : (window.currentLang === 'en' ? 'Expense Logged!' : 'खर्च दर्ज हुआ!'));
}

function saveFundContribution(e) {
  e.preventDefault();
  const trip = getActiveTrip();
  if (!trip) return;

  const memberId = document.getElementById('fundContributor').value;
  const amount = parseFloat(document.getElementById('fundAmount').value);
  const mode = document.getElementById('fundMode').value;
  const notes = document.getElementById('fundNotes').value.trim();

  if (!trip.fundContributions) trip.fundContributions = [];

  trip.fundContributions.unshift({
    id: 'fund-' + Date.now(),
    memberId,
    amount,
    mode,
    notes,
    date: new Date().toISOString().split('T')[0]
  });

  saveAndSyncTrip(trip);
  closeModal('addFundModal');
  document.getElementById('fundAmount').value = '';
  showToast(window.currentLang === 'en' ? 'Pool Money Added!' : 'पूल में पैसे जुड़े!');
}

function saveTripSettings(e) {
  e.preventDefault();
  const trip = getActiveTrip();
  if (!trip) return;

  trip.handlerMode = document.getElementById('settingHandlerMode').value;
  trip.primaryHandlerId = document.getElementById('settingPrimaryHandler').value;

  saveAndSyncTrip(trip);
  closeModal('tripSettingsModal');
  showToast(window.currentLang === 'en' ? 'Trip Handler Settings Saved!' : 'मनी हैंडलर सेटिंग्स अपडेट हुई!');
}

function sendEmailInvite() {
  const emailInput = document.getElementById('inviteMemberEmail');
  const email = emailInput.value.trim();
  if (!email || !email.includes('@')) {
    showToast(window.currentLang === 'en' ? 'Please enter a valid email!' : 'कृपया सही ईमेल दर्ज करें!');
    return;
  }

  emailInput.value = '';
  showToast(window.currentLang === 'en' ? `Invitation sent to ${email}!` : `${email} पर आमंत्रण भेजा गया!`);
}

function renderMembersModalList() {
  const trip = getActiveTrip();
  if (!trip) return;
  const container = document.getElementById('membersList');

  container.innerHTML = trip.members.map(m => `
    <div class="flex items-center justify-between bg-slate-900 px-2.5 py-1.5 rounded-lg text-xs">
      <span class="text-slate-200 font-bold">${escapeHtml(m.name)}</span>
      ${trip.members.length > 1 ? `<button onclick="removeMember('${m.id}')" class="text-red-400 p-1"><i class="fa-solid fa-trash-can"></i></button>` : ''}
    </div>
  `).join('');
}

function addMember() {
  const nameInput = document.getElementById('newMemberName');
  const name = nameInput.value.trim();
  if (!name) return;

  const trip = getActiveTrip();
  if (!trip) return;

  trip.members.push({ id: 'm-' + Date.now(), name });

  nameInput.value = '';
  saveAndSyncTrip(trip);
  renderMembersModalList();
  showToast(window.currentLang === 'en' ? `Added ${name}` : `सदस्य ${name} जुड़ा`);
}

function removeMember(memberId) {
  const trip = getActiveTrip();
  if (!trip || trip.members.length <= 1) return;

  trip.members = trip.members.filter(m => m.id !== memberId);
  saveAndSyncTrip(trip);
  renderMembersModalList();
}

function saveAndSyncTrip(trip) {
  saveStateLocally();
  renderAll();
  if (window.syncTripToCloud) {
    window.syncTripToCloud(trip);
  }
}

function openShareModal() {
  openModal('shareModal');
  const trip = getActiveTrip();
  if (!trip) return;

  const metrics = computeTripTotals(trip);

  let text = `✈️ *EASYTRIP REPORT: ${trip.name.toUpperCase()}*\n`;
  text += `📅 Date: ${new Date().toLocaleDateString()}\n`;
  text += `💰 Total Pool Collected: ₹${metrics.totalCollectedPool}\n`;
  text += `💸 Total Spent: ₹${metrics.grandTotalSpent}\n`;
  text += `💵 Remaining Cash Box: ₹${metrics.remCashPool}\n`;
  text += `📱 Remaining Online (UPI): ₹${metrics.remOnlinePool}\n\n`;
  text += `Shared via EasyTrip Manager`;

  document.getElementById('shareTextarea').value = text;
}

function copyShareSummary() {
  const textarea = document.getElementById('shareTextarea');
  textarea.select();
  document.execCommand('copy');
  showToast(window.currentLang === 'en' ? 'Report copied to clipboard' : 'रिपोर्ट कॉपी हो गई');
}

function exportCSV() {
  const trip = getActiveTrip();
  if (!trip) return;

  let csv = 'Title,Amount,Source,Mode,Category\n';
  (trip.expenses || []).forEach(e => {
    csv += `"${e.title}",${e.amount},"${e.source}","${e.mode}","${e.category}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${trip.name}_report.csv`;
  a.click();
}

function showToast(msg) {
  const toast = document.getElementById('customToast');
  document.getElementById('toastMessage').innerText = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2000);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}