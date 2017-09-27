import elasticsearch from "elasticsearch";

const elasticClient = new elasticsearch.Client({
    host: process.env.ELASTICSEARCH_CONN,
    log: process.env.ELASTICSEARCH_LOG_LEVEL
});

const elasticService = {};
const index = "persons";
const type = "person";

/**
 * Add a person
 */

elasticService.addPerson = name => {
    return elasticClient.index({
        index,
        type,
        body: {
            name,
            suggest: name.split(" ")
        }
    });
};

/**
 * Fetch suggestions
 */

elasticService.getSuggestions = input => {
    return elasticClient.suggest({
        index,
        body: {
            persons: {
                prefix: input,
                completion: {
                    field: "suggest",
                    fuzzy: true,
                    size: 10
                }
            }
        }
    });
};

export default elasticService;
