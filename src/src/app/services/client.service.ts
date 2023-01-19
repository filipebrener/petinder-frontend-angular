import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { CreateClientDto } from '../dtos/CreateClientDto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly basePath = "api/owner"

  private httpClient: HttpClient

  constructor(private _httpClient: HttpClient) {
    this.httpClient = _httpClient
   }

  save(requestBody: CreateClientDto) {
    this.httpClient.post<CreateClientDto>(this.basePath + "/create", requestBody)
      .subscribe(response => {
        console.log(response)
      })
  }

  // getBodyRequest(value : any): CreateClientDto {
  //   return new CreateClientDto();
  // }


}
