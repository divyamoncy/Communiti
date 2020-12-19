import { StatusCodeError } from "request-promise/errors";

export interface Bid {
    customerId: string;
    loanId: string;
    lenderId: string;
    lenderName: string;
    businessName: string;
    requestAmount: number;
    amountOffered: number;
    term: number;
    offeredRate: number;
    repaymentFrequency: string;
    feesDescription: string;
    fees: number;
    possibleDisbursementDate: string;
    state: string;
    zipCode: string;
    newBusiness: boolean;
    businessCategory: string;
    currentEmployees: number;
    newJob: number;
    oldJob: number;
    franchise: boolean;
    status: string;
  }