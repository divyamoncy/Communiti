export interface Loan {
    customerId: string;
    loanId: string;
    businessName: string;
    requestAmount: number;
    loanPurpose: string;
    newBusiness: boolean;
    businessCategory: string;
    currentEmployees: number;
    newJob: number;
    oldJob: number;
    franchise: boolean;
    latinAmericanOwned: boolean;
    africanAmericanOwned: boolean;
    nativeAmericanOwned: boolean;
    womenOwned: boolean;
    veteranOwned: boolean;
    lgbtqOwned: boolean;
    state: string;
    zipCode: string;
  }