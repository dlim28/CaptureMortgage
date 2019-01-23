id: Number,
createdAt: Date,
customerName: String,
status: Number, 
    -3 = approval withdrawn
    -2 = lodgement declined
    -1 = lead lost
    0 = LEAD
    1 = LODGEMENT
    2 = APPROVAL
    3 = SETTLEMENT
referrer: Number
    1 = LP Staff
    2 = SP Staff
    3 = Marketing Campaigns
    4 = BDM Staff
    5 = TFC
    6 = Others
source: Number, 
    1 = Email
    2 = Phone Call
    3 = App
category: Number
    1 = Re-finance
    2 = Commercial
    3 = Investments
    4 = Purchase
    5 = Constructions
lender: Number, 
    1 = ANZ
    2 = Bank First
    3 = Bank of Melbourne Bankwest
    4 = Better Choice Beyond Bank ChoiceLend
    5 = CBA
    6 = Heritage Bank
    7 = ING Bank
    8 = Liberty Financial Macquarie Bank ME Bank
    9 = NAB
    10 = Pepper
    11 = Suncorp
    12 = St George Bank Virgin Money Westpac
history: Object,
dateOfLead: Date,
isActive: Boolean,
amount: Number,
employee: user_id number