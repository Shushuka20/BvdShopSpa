export interface IRepository<T> { 
    entities: T[];

    getEntities(): T[];
    
    saveEntity(entity: T): void;   
}
