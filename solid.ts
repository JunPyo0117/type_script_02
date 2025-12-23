// 바로 구현해서 씀
class DatabaseConnection {

    constructor(
        private readonly IP,
        private readonly PORT,
        private readonly ID,
        private readonly PASSWORD,
    ) {}

    // 연결과 설정 관련 메서드
    connect() {
        console.log("connect to database");

        return "연결 후 객체"
    }

    disconnect() {
        console.log("disconnect from database");
    }
}

interface IRepository {
    save();
    findMany();
    findOneID();
    update();
    delete();
} 

interface IQueryRepository extends IRepository {
    findManyByQuery(query);
}


class MongoRepository implements IRepository {
    constructor(private readonly connection: DatabaseConnection) {}
    // CRUD Create, Read, Update, Delete
    save() {
        console.log("save data to Mongo database");
    }

    findMany() {
        console.log("find many data from Mongo database");
    }

    findOneID() {
        console.log("find one data from Mongo database by ID");
    }

    update() {
        console.log("update data in Mongo database");
    }

    delete() {
        console.log("delete data from Mongo database");
    }
}

class MYSQLRepository implements IRepository {
    constructor(private readonly connection: DatabaseConnection) {}
    // CRUD Create, Read, Update, Delete
    save() {
        console.log("save data to MYSQL database");
    }

    findMany() {
        console.log("find many data from MYSQL database");
    }

    findOneID() {
        console.log("find one data from MYSQL database by ID");
    }

    update() {
        console.log("update data in MYSQL database");
    }

    delete() {
        console.log("delete data from MYSQL database");
    }
}

class MYSQLQueryRepository extends MYSQLRepository {
    findManyByQuery(query) {
        console.log("find many data from MYSQL database by query"); 
    }
}

// 백엔드
const repo1: IRepository = new MongoRepository(new DatabaseConnection("127.0.0.1", 27017, "root", "password"));
const repo2: IRepository = new MYSQLRepository(new DatabaseConnection("127.0.0.1", 27017, "root", "password"));

const repo3: IRepository = new MYSQLQueryRepository(new DatabaseConnection("127.0.0.1", 27017, "root", "password")); // 이것도 가능 

const repo4: IQueryRepository = new MYSQLQueryRepository(new DatabaseConnection("127.0.0.1", 27017, "root", "password"));

const repo5: IRepository & {findManyByQuery(query: any): void} = new MYSQLQueryRepository(new DatabaseConnection("127.0.0.1", 27017, "root", "password"));   
