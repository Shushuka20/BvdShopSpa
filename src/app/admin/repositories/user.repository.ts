import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { IRepository } from './model.repository';

@Injectable()
export class UserRepository implements IRepository<User> {
    entities: User[] = [];

    constructor(private userSerivce: UserService) {
        userSerivce.getUsers().subscribe(data => this.entities = data)
    }

    getEntities() {
        return this.entities;
    }

    saveEntity(user) {
        let lastUser = this.entities[this.entities.length - 1]
        user.id = lastUser.id + 1;

        this.entities.push(new User(user.id, user.name, user.password, user.role))
    }

    getSearchResult(searchQuery: string){
        return this.entities.filter(user => user.name.toLowerCase().includes(searchQuery));
    }

    getFilterByCategoryResult(category: string){
        if(category == "Все")
            return this.entities;
        else
            return this.entities.filter(user => user.role == category);
    }
    
}