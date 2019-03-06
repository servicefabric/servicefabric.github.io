define({ "api": [
  {
    "type": "ServiceMethod: createRepository",
    "url": "/configuration/createRepository",
    "title": "createRepository",
    "name": "CreateRepository",
    "group": "Methods",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to create the specified Repository for collecting and storing the relevant entries and requires a write permission level granted for owner role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/createRepository\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/createRepository\"\n        }\n    }\n\nError Response:\n\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"Role 'Member' has insufficient permissions for the requested operation: CreateRepoitory\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/createRepository (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/create.apidoc",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: createRepository",
    "url": "/configuration/createRepository",
    "title": "createRepository",
    "name": "CreateRepository",
    "group": "Methods",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to create the specified Repository for collecting and storing the relevant entries and requires a write permission level granted for owner role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/createRepository\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/createRepository\"\n        }\n    }\n\nError Response:\n\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"Role 'Member' has insufficient permissions for the requested operation: CreateRepoitory\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/createRepository (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: createRepository",
    "url": "/configuration/createRepository",
    "title": "createRepository",
    "name": "CreateRepository",
    "group": "Methods",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to create the specified Repository for collecting and storing the relevant entries and requires a write permission level granted for owner role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/createRepository\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/createRepository\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/createRepository\"\n        }\n    }\n\nError Response:\n\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"Role 'Member' has insufficient permissions for the requested operation: CreateRepoitory\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/createRepository (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: delete",
    "url": "/configuration/delete",
    "title": "delete",
    "name": "Delete",
    "group": "Methods",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to delete a specified entry (key) from the relevant Repository and requires a write level permission granted for owner either admin role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/delete\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/delete\"\n        }\n    }\n\nError Response:\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/delete (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n    {\n       errorCode\":500,\n       \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/delete.apidoc",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: delete",
    "url": "/configuration/delete",
    "title": "delete",
    "name": "Delete",
    "group": "Methods",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to delete a specified entry (key) from the relevant Repository and requires a write level permission granted for owner either admin role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/delete\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/delete\"\n        }\n    }\n\nError Response:\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/delete (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n    {\n       errorCode\":500,\n       \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: delete",
    "url": "/configuration/delete",
    "title": "delete",
    "name": "Delete",
    "group": "Methods",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to delete a specified entry (key) from the relevant Repository and requires a write level permission granted for owner either admin role only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid permission level for specified API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/delete\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/delete\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/delete\"\n        }\n    }\n\nError Response:\n    {\n         \"data\":{\n         \"errorCode\":500,\n         \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n         },\n         \"metadata\":{\n             \"q\":\"/io.scalecube.services.error/500\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP",
          "content": "Request:\nhttps://localhost:port/configuration/delete (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n    {\n\n    }\n\nError Response:\n    {\n       errorCode\":500,\n       \"errorMessage\":\"ole 'Member' has insufficient permissions for the requested operation: Delete\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: entries",
    "url": "/configuration/entries",
    "title": "entries",
    "name": "Entries",
    "group": "Methods",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get all values (array of objects) by retrieving all the entries (keys) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries from the relevant configuration setting in the repository (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entries.value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid API key (token)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\": \"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             }\n    }\n    {\n        \"sig\":1,\n        \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Token verification failed\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/entries\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n      \"data\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             },\n      \"metadata\":{\n         \"q\": \"/configuration/entries\"\n      }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Token verification failed\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/entries (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n      \"entries\": [\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Bitcoin\",\n                     \"instrument\": \"BTC\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Gold\",\n                     \"instrument\": \"XAU\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName2\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"USOIL\",\n                     \"instrument\": \"OIL\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName3\"\n          }\n        }\n        ]\n   }\n\nError Response:\n   {\n      errorCode\":500,\n      \"errorMessage\":\"Token verification failed\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/entries.apidoc",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: entries",
    "url": "/configuration/entries",
    "title": "entries",
    "name": "Entries",
    "group": "Methods",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get all values (array of objects) by retrieving all the entries (keys) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries from the relevant configuration setting in the repository (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entries.value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid API key (token)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\": \"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             }\n    }\n    {\n        \"sig\":1,\n        \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Token verification failed\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/entries\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n      \"data\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             },\n      \"metadata\":{\n         \"q\": \"/configuration/entries\"\n      }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Token verification failed\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/entries (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n      \"entries\": [\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Bitcoin\",\n                     \"instrument\": \"BTC\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Gold\",\n                     \"instrument\": \"XAU\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName2\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"USOIL\",\n                     \"instrument\": \"OIL\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName3\"\n          }\n        }\n        ]\n   }\n\nError Response:\n   {\n      errorCode\":500,\n      \"errorMessage\":\"Token verification failed\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: entries",
    "url": "/configuration/entries",
    "title": "entries",
    "name": "Entries",
    "group": "Methods",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get all values (array of objects) by retrieving all the entries (keys) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries from the relevant configuration setting in the repository (Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entries.value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid API key (token)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket",
          "content": "Request:\n    {\n        \"q\":\"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\": \"/configuration/entries\",\n        \"sid\": 1,\n        \"d\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             }\n    }\n    {\n        \"sig\":1,\n        \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Token verification failed\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/entries\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n        }\n    }\n\nResponse:\n\n    {\n      \"data\":{\n               \"entries\": [\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Bitcoin\",\n                              \"instrument\": \"BTC\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"Gold\",\n                              \"instrument\": \"XAU\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName2\"\n                   }\n                 },\n                 {\n                   \"value\": {\n                              \"instrumentInstance\": {\n                              \"name\": \"USOIL\",\n                              \"instrument\": \"OIL\",\n                              \"DecimalPrecision\" : \"2\",\n                              \"Rounding\": \"down\"\n                   },\n                   \"key\": \"specifiedKeyName3\"\n                   }\n                 }\n                 ]\n             },\n      \"metadata\":{\n         \"q\": \"/configuration/entries\"\n      }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Token verification failed\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/entries (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\"\n    }\n\nResponse:\n    {\n      \"entries\": [\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Bitcoin\",\n                     \"instrument\": \"BTC\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"Gold\",\n                     \"instrument\": \"XAU\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName2\"\n          }\n        },\n        {\n          \"value\": {\n                     \"instrumentInstance\": {\n                     \"name\": \"USOIL\",\n                     \"instrument\": \"OIL\",\n                     \"DecimalPrecision\" : \"2\",\n                     \"Rounding\": \"down\"\n          },\n          \"key\": \"specifiedKeyName3\"\n          }\n        }\n        ]\n   }\n\nError Response:\n   {\n      errorCode\":500,\n      \"errorMessage\":\"Token verification failed\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: fetch",
    "url": "/configuration/fetch",
    "title": "fetch",
    "name": "Fetch",
    "group": "Methods",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get specific value (either string or object) by retrieving specified entry (key) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent plain key name (entry in the repository)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\":1,\n        \"d\":{\n        \"value\": {\n                   \"name\": \"Gold\",\n                   \"instrument\": \"XAU\",\n                   \"DecimalPrecision\" : \"2\",\n                   \"Rounding\": \"down\"\n                 },\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n   {\n        \"sig\":2,\n        \"q\":\"/io.scalecube.services.error/500\",\n        \"sid\":1,\n        \"d\":{\n                errorCode\":500,\n                \"errorMessage\":\"16562665EC17CDF08E97\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/fetch\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n   {\n       \"data\":{\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n      },\n      \"metadata\":{\n         \"q\": \"/configuration/fetch\"\n      }\n   }\n\nError Response:\n   {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"16562665EC17CDF08E97\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/fetch (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n\n   {\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n   }\n\nError Response (HTTP):\n   {\n      errorCode\":500,\n      \"errorMessage\":\"16562665EC17CDF08E97\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/fetch.apidoc",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: fetch",
    "url": "/configuration/fetch",
    "title": "fetch",
    "name": "Fetch",
    "group": "Methods",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get specific value (either string or object) by retrieving specified entry (key) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent plain key name (entry in the repository)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\":1,\n        \"d\":{\n        \"value\": {\n                   \"name\": \"Gold\",\n                   \"instrument\": \"XAU\",\n                   \"DecimalPrecision\" : \"2\",\n                   \"Rounding\": \"down\"\n                 },\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n   {\n        \"sig\":2,\n        \"q\":\"/io.scalecube.services.error/500\",\n        \"sid\":1,\n        \"d\":{\n                errorCode\":500,\n                \"errorMessage\":\"16562665EC17CDF08E97\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/fetch\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n   {\n       \"data\":{\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n      },\n      \"metadata\":{\n         \"q\": \"/configuration/fetch\"\n      }\n   }\n\nError Response:\n   {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"16562665EC17CDF08E97\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/fetch (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n\n   {\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n   }\n\nError Response (HTTP):\n   {\n      errorCode\":500,\n      \"errorMessage\":\"16562665EC17CDF08E97\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: fetch",
    "url": "/configuration/fetch",
    "title": "fetch",
    "name": "Fetch",
    "group": "Methods",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to get specific value (either string or object) by retrieving specified entry (key) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent plain key name (entry in the repository)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n    {\n        \"q\":\"/configuration/fetch\",\n        \"sid\":1,\n        \"d\":{\n        \"value\": {\n                   \"name\": \"Gold\",\n                   \"instrument\": \"XAU\",\n                   \"DecimalPrecision\" : \"2\",\n                   \"Rounding\": \"down\"\n                 },\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n   {\n        \"sig\":2,\n        \"q\":\"/io.scalecube.services.error/500\",\n        \"sid\":1,\n        \"d\":{\n                errorCode\":500,\n                \"errorMessage\":\"16562665EC17CDF08E97\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/fetch\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n        }\n    }\n\nResponse:\n\n   {\n       \"data\":{\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n      },\n      \"metadata\":{\n         \"q\": \"/configuration/fetch\"\n      }\n   }\n\nError Response:\n   {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"16562665EC17CDF08E97\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n   }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/configuration/fetch (endpoint url)\n\nBody:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\"\n    }\n\nResponse:\n\n   {\n       \"value\": {\n                  \"name\": \"Gold\",\n                  \"instrument\": \"XAU\",\n                  \"DecimalPrecision\" : \"2\",\n                  \"Rounding\": \"down\"\n                },\n       \"key\": \"specifiedKeyName\"\n   }\n\nError Response (HTTP):\n   {\n      errorCode\":500,\n      \"errorMessage\":\"16562665EC17CDF08E97\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: save",
    "url": "/configuration/save",
    "title": "save",
    "name": "Save",
    "group": "Methods",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to save either to update (edit) a specified entry in the relevant Repository and requires a write level permission granted for owner either admin role only. Upon the specified entry is saved then it could be updated i.e. overwritten by the common method</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "JsonNode",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node (entry) name applied for relevant configuration settings in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent repository name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n\n    {\n        \"q\": \"/configuration/save\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"q\":\"/configuration/save\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/save\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/save\"\n        }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n    }\n\nResponse:\n    {\n\n    }\n\nError-Response (HTTP):\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/save.apidoc",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: save",
    "url": "/configuration/save",
    "title": "save",
    "name": "Save",
    "group": "Methods",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to save either to update (edit) a specified entry in the relevant Repository and requires a write level permission granted for owner either admin role only. Upon the specified entry is saved then it could be updated i.e. overwritten by the common method</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "JsonNode",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node (entry) name applied for relevant configuration settings in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent repository name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n\n    {\n        \"q\": \"/configuration/save\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"q\":\"/configuration/save\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/save\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/save\"\n        }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n    }\n\nResponse:\n    {\n\n    }\n\nError-Response (HTTP):\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "ServiceMethod: save",
    "url": "/configuration/save",
    "title": "save",
    "name": "Save",
    "group": "Methods",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Request / Response / Error-response"
      }
    ],
    "description": "<p>This operation enable you to save either to update (edit) a specified entry in the relevant Repository and requires a write level permission granted for owner either admin role only. Upon the specified entry is saved then it could be updated i.e. overwritten by the common method</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested API key (token) which assigned with relevant role (permission level)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Specified name of the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name (entry) for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "JsonNode",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node (entry) name applied for relevant configuration settings in the repository</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Acknowledgment",
            "description": "<p>Empty object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid or non-existent repository name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n\n    {\n        \"q\": \"/configuration/save\",\n        \"sid\": 1,\n        \"d\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"q\":\"/configuration/save\",\n        \"sid\":1,\n        \"d\":{}\n    }\n\n    {\n         \"sig\":1,\n         \"sid\":1\n    }\n\nError Response:\n    {\n         \"sig\":2,\n         \"q\":\"/io.scalecube.services.error/500\",\n         \"sid\":1,\n         \"d\":{\n                 errorCode\":500,\n                 \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n         }\n    }",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n    {\n      \"metadata\":{\n        \"q\": \"/configuration/save\"\n        },\n        \"data\":{\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n        }\n    }\n\nResponse:\n    {\n        \"data\":{},\n        \"metadata\":{\n          \"q\": \"/configuration/save\"\n        }\n    }\n\nError Response:\n    {\n        \"data\":{\n        \"errorCode\":500,\n        \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n        },\n        \"metadata\":{\n            \"q\":\"/io.scalecube.services.error/500\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\n    {\n        \"token\": \"API-TOKEN\",\n        \"repository\": \"specifiedRepoName\",\n        \"key\": \"specifiedKeyName\",\n        \"value\": {\n                    \"name\": \"Gold\",\n                    \"instrument\": \"XAU\",\n                    \"DecimalPrecision\" : \"2\",\n                    \"Rounding\": \"down\"\n                 }\n    }\n\nResponse:\n    {\n\n    }\n\nError-Response (HTTP):\n    {\n       errorCode\":500,\n       \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Methods"
  },
  {
    "type": "",
    "url": ".",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "version": "2.1.2-SNAPSHOT",
    "description": "<p>Configuration service enable you to integrate the API in order to create and manage the separate repositories purposed for entries collection and storage.</p> <p><b>Getting Started</b></p> <p>All API endpoints are documented below. You can try out any query in realtime using our interactive API. <br>Configuration service is a provider for <a href=\"http://scalecube.io/organization-service/index.html\">Organization service</a> management. Actually all methods require <a href=\"http://scalecube.io/organization-service/index.html#api-ApiKey-AddOrganizationApiKey\">API key</a> authorization since they provide a specific permission level (write or read ) for the each user. So there is a necessity to get the API key (token - assigned with relevant role Member/Admin/Owner) which is basically purposed for organization managers who provide such kind permission level to potential costumers. <br>Thus, we recommend you first to be granted with valid <b>API key</b> assigned with relevant role (permission level) to be able to make valid requests across all service <b>endpoints</b>.</p> <p><b>Validation</b> for the object entities is handled by <b>Scalecube</b> services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote> <blockquote> <p>Contracts validation is implemented for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p> </blockquote>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "version": "2.1.1-SNAPSHOT",
    "description": "<p>Configuration service enable you to integrate the API in order to create and manage the separate repositories purposed for entries collection and storage.</p> <p><b>Getting Started</b></p> <p>All API endpoints are documented below. You can try out any query in realtime using our interactive API. <br>Configuration service is a provider for <a href=\"http://scalecube.io/organization-service/index.html\">Organization service</a> management. Actually all methods require <a href=\"http://scalecube.io/organization-service/index.html#api-ApiKey-AddOrganizationApiKey\">API key</a> authorization since they provide a specific permission level (write or read ) for the each user. So there is a necessity to get the API key (token - assigned with relevant role Member/Admin/Owner) which is basically purposed for organization managers who provide such kind permission level to potential costumers. <br>Thus, we recommend you first to be granted with valid <b>API key</b> assigned with relevant role (permission level) to be able to make valid requests across all service <b>endpoints</b>.</p> <p><b>Validation</b> for the object entities is handled by <b>Scalecube</b> services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote> <blockquote> <p>Contracts validation is implemented for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p> </blockquote>",
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "version": "2.0.20-SNAPSHOT",
    "description": "<p>Configuration service enable you to integrate the API in order to create and manage the separate repositories purposed for entries collection and storage.</p> <p><b>Getting Started</b></p> <p>All API endpoints are documented below. You can try out any query in realtime using our interactive API. <br>Configuration service is a provider for <a href=\"http://scalecube.io/organization-service/index.html\">Organization service</a> management. Actually all methods require <a href=\"http://scalecube.io/organization-service/index.html#api-ApiKey-AddOrganizationApiKey\">API key</a> authorization since they provide a specific permission level (write or read ) for the each user. So there is a necessity to get the API key (token - assigned with relevant role Member/Admin/Owner) which is basically purposed for organization managers who provide such kind permission level to potential costumers. <br>Thus, we recommend you first to be granted with valid <b>API key</b> assigned with relevant role (permission level) to be able to make valid requests across all service <b>endpoints</b>.</p> <p><b>Validation</b> for the object entities is handled by <b>Scalecube</b> services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote> <blockquote> <p>Contracts validation is implemented for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p> </blockquote>",
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "version": "2.1.2-SNAPSHOT",
    "description": "<p><b>WebSocket and RSocket</b> transport are accessible to use the API via in-house developed API Explorer called <b>Sandbox</b> thus to connect and run follow up the next steps: <ul> <li> Navigate to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li> <li> Click on the <b>Settings</b> button then set the relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> for the chosen <b>transport</b> </li> <li> Click on <b>Import icon</b> and copy-paste the template.json file path for <a href=\"https://raw.githubusercontent.com/scalecube/scalecube-configuration-service/master/API-Calls-examples.json\">Configuration service endpoints.json</a></li> <li> Click on the <b>Connect</b> button (now you are connected to the environment) and push <b>Send</b> button to make your request</li> </ul></p>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "version": "2.1.1-SNAPSHOT",
    "description": "<p><b>WebSocket and RSocket</b> transport are accessible to use the API via in-house developed API Explorer called <b>Sandbox</b> thus to connect and run follow up the next steps: <ul> <li> Navigate to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li> <li> Click on the <b>Settings</b> button then set the relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> for the chosen <b>transport</b> </li> <li> Click on <b>Import icon</b> and copy-paste the template.json file path for <a href=\"https://raw.githubusercontent.com/scalecube/scalecube-configuration-service/master/API-Calls-examples.json\">Configuration service endpoints.json</a></li> <li> Click on the <b>Connect</b> button (now you are connected to the environment) and push <b>Send</b> button to make your request</li> </ul></p>",
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "version": "2.0.20-SNAPSHOT",
    "description": "<p><b>WebSocket and RSocket</b> transport are accessible to use the API via in-house developed API Explorer called <b>Sandbox</b> thus to connect and run follow up the next steps: <ul> <li> Navigate to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li> <li> Click on the <b>Settings</b> button then set the relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> for the chosen <b>transport</b> </li> <li> Click on <b>Import icon</b> and copy-paste the template.json file path for <a href=\"https://raw.githubusercontent.com/scalecube/scalecube-configuration-service/master/API-Calls-examples.json\">Configuration service endpoints.json</a></li> <li> Click on the <b>Connect</b> button (now you are connected to the environment) and push <b>Send</b> button to make your request</li> </ul></p>",
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Transport protocols API",
    "name": "TransportProtocols",
    "group": "Overview",
    "version": "2.1.2-SNAPSHOT",
    "permission": [
      {
        "name": "Successful requests and responses"
      }
    ],
    "description": "<p>You are able to manage the service API through the three types of transport protocols which are supported. <br>Upon relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> was set the <b>request</b> should contain the following structure according to transport protocol usage: <ul> <b>Websocket (WS)</b> <li> &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;sid&quot;: The stream identifier (couldn't be reused upon current stream connection is opened)</li> <li> &quot;d&quot;: The request data object (keys and values) </li> <br><b>RSocket (RS)</b> <li> &quot;metadata&quot;: object which contains &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;d&quot;: object: The request data (parameters and values) </li> <br><b>HTTP</b> (service name and method used should be added to the relevant host address) <li> &quot;headers&quot;: Content-Type application/json </li> <li> &quot;body&quot; json: The request data object (parameters and values) </li> <li>  request &quot;method&quot;: POST </li> </ul></p>",
    "parameter": {
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n{\n    \"q\": \"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\": {\n            \"relevant request parameters and values\"\n         }\n}\n\nResponse:\n\n{\n    \"q\":\"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\":{\n           \"relevant response parameters and values\"\n        }\n}\n{\n    \"sig\":1,\n    \"sid\":int\n}",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n{\n   \"metadata\": {\n       \"q\": \"/serviceName/method_name\"\n               },\n       \"data\": {\n                  \"relevant request parameters and values\"\n               }\n}\n\nResponse:\n{\n    \"data\":{\n              \"relevant response parameters and values\"\n    },\n    \"metadata\":{\n      \"q\": \"/serviceName/method_name\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/serviceName/method_name (endpoint url)\n\nBody:\n{\n   \"relevant request parameters and values\"\n}\n\nResponse:\n{\n   \"relevant response parameters and values\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Transport protocols API",
    "name": "TransportProtocols",
    "group": "Overview",
    "version": "2.1.1-SNAPSHOT",
    "permission": [
      {
        "name": "Successful requests and responses"
      }
    ],
    "description": "<p>You are able to manage the service API through the three types of transport protocols which are supported. <br>Upon relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> was set the <b>request</b> should contain the following structure according to transport protocol usage: <ul> <b>Websocket (WS)</b> <li> &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;sid&quot;: The stream identifier (couldn't be reused upon current stream connection is opened)</li> <li> &quot;d&quot;: The request data object (keys and values) </li> <br><b>RSocket (RS)</b> <li> &quot;metadata&quot;: object which contains &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;d&quot;: object: The request data (parameters and values) </li> <br><b>HTTP</b> (service name and method used should be added to the relevant host address) <li> &quot;headers&quot;: Content-Type application/json </li> <li> &quot;body&quot; json: The request data object (parameters and values) </li> <li>  request &quot;method&quot;: POST </li> </ul></p>",
    "parameter": {
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n{\n    \"q\": \"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\": {\n            \"relevant request parameters and values\"\n         }\n}\n\nResponse:\n\n{\n    \"q\":\"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\":{\n           \"relevant response parameters and values\"\n        }\n}\n{\n    \"sig\":1,\n    \"sid\":int\n}",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n{\n   \"metadata\": {\n       \"q\": \"/serviceName/method_name\"\n               },\n       \"data\": {\n                  \"relevant request parameters and values\"\n               }\n}\n\nResponse:\n{\n    \"data\":{\n              \"relevant response parameters and values\"\n    },\n    \"metadata\":{\n      \"q\": \"/serviceName/method_name\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/serviceName/method_name (endpoint url)\n\nBody:\n{\n   \"relevant request parameters and values\"\n}\n\nResponse:\n{\n   \"relevant response parameters and values\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  },
  {
    "type": "",
    "url": ".",
    "title": "Transport protocols API",
    "name": "TransportProtocols",
    "group": "Overview",
    "version": "2.0.20-SNAPSHOT",
    "permission": [
      {
        "name": "Successful requests and responses"
      }
    ],
    "description": "<p>You are able to manage the service API through the three types of transport protocols which are supported. <br>Upon relevant <a href=\"https://github.com/jivygroup/exchange/wiki/Configuration-&-Organization-services-host-addresses\"><b>Host address</b></a> was set the <b>request</b> should contain the following structure according to transport protocol usage: <ul> <b>Websocket (WS)</b> <li> &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;sid&quot;: The stream identifier (couldn't be reused upon current stream connection is opened)</li> <li> &quot;d&quot;: The request data object (keys and values) </li> <br><b>RSocket (RS)</b> <li> &quot;metadata&quot;: object which contains &quot;q&quot;: The query of the relevant service name and method used </li> <li> &quot;d&quot;: object: The request data (parameters and values) </li> <br><b>HTTP</b> (service name and method used should be added to the relevant host address) <li> &quot;headers&quot;: Content-Type application/json </li> <li> &quot;body&quot; json: The request data object (parameters and values) </li> <li>  request &quot;method&quot;: POST </li> </ul></p>",
    "parameter": {
      "examples": [
        {
          "title": "WebSocket:",
          "content": "Request:\n{\n    \"q\": \"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\": {\n            \"relevant request parameters and values\"\n         }\n}\n\nResponse:\n\n{\n    \"q\":\"/serviceName/method_name\",\n    \"sid\":int,\n    \"d\":{\n           \"relevant response parameters and values\"\n        }\n}\n{\n    \"sig\":1,\n    \"sid\":int\n}",
          "type": "json"
        },
        {
          "title": "RSocket:",
          "content": "Request:\n{\n   \"metadata\": {\n       \"q\": \"/serviceName/method_name\"\n               },\n       \"data\": {\n                  \"relevant request parameters and values\"\n               }\n}\n\nResponse:\n{\n    \"data\":{\n              \"relevant response parameters and values\"\n    },\n    \"metadata\":{\n      \"q\": \"/serviceName/method_name\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "HTTP:",
          "content": "Request:\nhttps://localhost:port/serviceName/method_name (endpoint url)\n\nBody:\n{\n   \"relevant request parameters and values\"\n}\n\nResponse:\n{\n   \"relevant response parameters and values\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/_apidoc.js",
    "groupTitle": "Overview"
  }
] });
