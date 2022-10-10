import { Content } from "./content.interface";
import { User } from "./user.interface";

export interface Page {
    content : User[];
        "pageable": {
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "offset": number,
            "pageNumber": number,
            "pageSize": number,
            "paged": true,
            "unpaged": false
        },
        "totalPages": number,
        "totalElements": number,
        "last": false,
        "size": number,
        "number": number,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "numberOfElements": number,
        "empty": false
    }
