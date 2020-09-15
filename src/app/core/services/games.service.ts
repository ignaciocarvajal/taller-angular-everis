import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IGameModel } from '../models/gameData.model';
import { catchError, map } from 'rxjs/operators';



const PATH = {
  getAll: '/api/games/',
  getById: '/api/games/',
  create:'/api/games/create',
  update: '/api/games/update/',
  delete: '/api/games/delete/',
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  urlApi: string;
  constructor(
    private http: HttpClient
  ) {
    this.urlApi = environment.apiUrl
  }

  getAll() : Observable<IGameModel[]> {
    const url: string = `${PATH.getAll}`;
    return this.http.get(url).pipe(
      map( (response: IGameModel[]) => response)
    );

  }

  getById(id: string): Observable<any> {
    const url: string = `${PATH.getById}${id}`;
    return this.http.get(url).pipe(
      map( (response: IGameModel) => {
        return response
      })

    );
  }

  create(plan: any) {
    const url: string = `${PATH.create}`;
    return this.http.post(url, plan).pipe(
      map((res: any) => {
        return res;
      }
      ),
      catchError(async (err) => console.error(err))
    )
  }

  update(id: string, plan: any) {
    const url: string = `${PATH.update}${id}`;
    return this.http.put(url, plan).pipe(
      map((res: any) => {
        return res;
      }
      ),
      catchError(async (err) => console.error(err))
    )
  }

  delete(id: string) {
    const url: string = `${PATH.delete}${id}`;
    return this.http.delete(url).pipe(
      map((res: any) => {
        return res;
      }
      ),
      catchError(async (err) => console.error(err))
    )
  }
}
