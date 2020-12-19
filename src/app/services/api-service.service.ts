import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_API, OIDC_CLIENT_ID_B2B, OIDC_CLIENT_SECRET_B2B, OIDC_TOKEN_URL } from './config';
import { Customer } from '../models/customer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  postCustomer(
    customer:Customer,
    access_token
  ): Observable<any> {
    console.log(`Bearer ${access_token}`)
    return this.httpClient.post<any>(
      `${ROOT_API}/enterprise-customers`, customer, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json' }
      })
      .pipe(map((response) => response));
}
  // function to get b2b access token
  getToken(
  url = OIDC_TOKEN_URL,
  client_id = OIDC_CLIENT_ID_B2B,
  client_secret = OIDC_CLIENT_SECRET_B2B
): Observable<any> {
  const data =
    'grant_type=client_credentials&client_id=' +
    client_id +
    '&client_secret=' +
    client_secret;

  return this.httpClient
    .post(url, data, {
      headers: { 
      'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .pipe(map((response) => response['access_token']));
}

predictDefault(inputFeatures) : Observable<any> {
  // const data =
  // [{"BorrState":4,"BorrZip":94801,"GrossApproval":35000,
  // "ApprovalFiscalYear":2020,"InitialInterestRate":10,"TermInMonths":24, "NaicsCode":52,"FranchiseCode":0,"JobsSupported":2}];

  return this.httpClient
    .post<any>('/predictdefault/predict', inputFeatures, {
      headers: { 
      'Content-Type': 'application/json' }
    })
    .pipe(map((response) => response));
}

}
