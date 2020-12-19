export interface Address {
    addressType: 'BUSINESS';
    country: 'US';
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    postalCode: string;
    buildingNumber: string;

  }
export interface PhoneNumber {
    type: 'OFFICE';
    number: string;

}
export interface EmailAddress {
    type: 'OFFICE';
    address: string;

}
export interface Customer {
    branchCode: string;
    enterpriseName: string;
    registrationNumber: string;
    countryOfRegistration: string;
    address: Address[];
    phoneNumber: PhoneNumber[];
    emailAddress: EmailAddress[];
    kycCheckRequired: 'CORE-DEFINED';
}
export interface DBCustomer {
    customerId: string;
    businessName: string;
    businessCategory: string;
    businessRegNo: string;
    annualRevenue: number;
    businessAge: number;
    franchise: boolean;
    latinAmericanOwned: boolean;
    africanAmericanOwned: boolean;
    nativeAmericanOwned: boolean;
    womenOwned: boolean;
    veteranOwned: boolean;
    lgbtqOwned: boolean;
    ownerName: string;
    phoneNumber: string;
    emailAddress: string;
    state: string;
    zipCode: string;
    
}