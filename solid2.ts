interface IUser {
    id: string;
    name: string;
}

interface IPost {
    id: number;
    title: string;
}

interface IRepository2 {
    findMany();
    findOne();
}

// abstract class NewRepository<T> implements Omit<IRepository2, "findMany"> {
//     abstract findOne(): T;
// }

abstract class NewRepository<T> implements Pick<IRepository2, "findMany" | "findOne"> {
    abstract findMany(): T[];
    abstract findOne(): T;
}

abstract class Repository2<T> implements IRepository2 {
    abstract findMany(): T[];
    abstract findOne(): T;
}

class MongoRepository2 extends Repository2<IUser> {
    findMany(): IUser[] {
        return [
            {
                id: "objectId-1",
                name: "John Doe",
            },

            {
                id: "objectId-2",
                name: "Jane Doe",
            },
        ];
    }

    findOne(): IUser {
        return {
            id: "objectId-1",
            name: "John Doe",
        };
    }
}

class MYSQLRepository2 extends Repository2<IPost> {
    findMany(): IPost[] {
        return [
            {
                id: 1,
                title: "Post 1",
            },

            {
                id: 2,
                title: "Post 2",
            },
        ];
    }

    findOne(): IPost {
        return {
            id: 2,
            title: "Post 2",
        };
    }
}

const repo: Repository2<IUser> = new MongoRepository2();