import { BadRequestError } from './../../common/validators/bad-request-error';
import { AppError } from './../../common/validators/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { NotFoundError } from '../../common/validators/not-found-error';



@Injectable()
export class DataService {

    constructor(private url: string,private http: Http) { }

    getAll() {
        return this.http.get(this.url)
        .map(response => response.json());
    }
    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch((error: Response) => {
                if (error.status === 400) {
                    return Observable.throw(new BadRequestError(error.json()));
                }
                return Observable.throw(new AppError(error));
            });
    }
    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .catch((error: Response) => {
                if (error.status === 404) {
                    return Observable.throw(new NotFoundError());
                }
                return Observable.throw(new AppError(error));
            })
    }

}
