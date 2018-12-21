define({ "api": [
  {
    "type": "websocket",
    "url": "io.scalecube.configuration.api.ConfigurationService/createRepository",
    "title": "Create new Repo",
    "name": "CreateRepository",
    "group": "CreateRepository",
    "description": "<p>This operation enable you to create the specified Repository for collecting and storing the relevant entities and requires a write level permission granted for owner role only</p>",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\"\n}",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
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
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"role: \"userId\" not in role Owner\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/create.apidoc",
    "groupTitle": "CreateRepository"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "Summary",
    "name": "Datatypes",
    "group": "Datatypes",
    "description": "<p>This chapter will detail datatypes that require specific format for or support a specific set of values. <br> Currently implemented validation for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p>",
    "version": "0.0.0",
    "filename": "/apidoc/docs/datatypes.apidoc",
    "groupTitle": "Datatypes"
  },
  {
    "type": "websocket",
    "url": "io.scalecube.configuration.api.ConfigurationService/delete",
    "title": "Delete specified entry",
    "name": "Delete",
    "group": "Delete",
    "description": "<p>This operation enable you to delete a specified entity from the relevant Repository and requires a write level permission granted for owner either admin role only</p>",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\"\n    \"key\": \"specifiedKeyName\"\n}",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
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
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"userId\" not in role Owner or Admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/delete.apidoc",
    "groupTitle": "Delete"
  },
  {
    "type": "websocket",
    "url": "io.scalecube.configuration.api.ConfigurationService/entries",
    "title": "Fetch (get) all entries",
    "name": "Entries",
    "group": "Entries",
    "description": "<p>This operation enable you to get entry object for the all entities from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\"\n    \"key\": \"specifiedKeyName\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entities from the relevant configuration setting in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"key\": \"specifiedKeyName\"\n    \"value\": {\n               \"entries\": [\n                 {\n                   \"instrumentInstance\": {\n                     \"name\": \"Bitcoin\",\n                      \"instrument\": \"BTC\",\n                      \"DecimalPrecision\" : \"2\",\n                      \"Rounding\": \"down\"\n                   },\n                   \"key\": \"8DFE2CAA35AD62F74E63\"\n                 },\n                 {\n                   \"value\": {\n                     \"name\": \"Gold\",\n                      \"instrument\": \"XAU\",\n                      \"DecimalPrecision\" : \"2\",\n                      \"Rounding\": \"down\"\n                   },\n                   \"key\": \"16562665EC17CDF08E97\"\n                 },\n                 {\n                   \"value\": {\n                     \"name\": \"USOIL\",\n                      \"instrument\": \"OIL\",\n                      \"DecimalPrecision\" : \"2\",\n                      \"Rounding\": \"down\"\n                   },\n                   \"key\": \"FCE8459CA0A728BC0922\"\n                 }\n             }\n}",
          "type": "json"
        }
      ]
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
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Token verification failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/entries.apidoc",
    "groupTitle": "Entries"
  },
  {
    "type": "websocket",
    "url": "io.scalecube.configuration.api.ConfigurationService/fetch",
    "title": "Fetch (get) specified entry",
    "name": "Fetch",
    "group": "Fetch",
    "description": "<p>This operation enable you to get entry object for specified entity from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\"\n    \"key\": \"specifiedKeyName\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"key\": \"specifiedKeyName\"\n   \"value\": {\n               \"name\": \"Gold\",\n               \"instrument\": \"XAU\",\n               \"DecimalPrecision\" : \"2\",\n               \"Rounding\": \"down\"\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid repository name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"repository: \"specified\" name doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/fetch.apidoc",
    "groupTitle": "Fetch"
  },
  {
    "type": "API Gateway protocols",
    "url": "/",
    "title": "General Definitions",
    "name": "GeneralDefinitions",
    "group": "Overview",
    "description": "<p>The request should contain the following structure upon the transport protocols are used: <ul> <b>Websocket</b> <li> 1. &quot;q&quot;: The query of the relevant service path </li> <li> 2. &quot;sid&quot;: The identifier of the stream id. </li> <li> 3. &quot;d&quot;: The request data (parameters and values). </li> <b>RSocket</b> <li> 1. &quot;metadata&quot; which contains object &quot;q&quot;: The query of the relevant service path </li> <li> 2. &quot;data&quot; object: The request data (parameters and values). </li> <b>HTTP</b> <li> 1. &quot;headers&quot;: Content-Type json </li> <li> 2. &quot;body&quot; json object: The request data (parameters and values). </li> </ul></p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example Websocket:",
          "content": "{\n    \"q\": \"/io.scalecube.configuration.api.ServiceName/method_name\",\n    \"sid\": 1,\n    \"d\": {\n            \"relevant request parameters and values\"\n         }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example RSocket:",
          "content": "{\n    \"metadata\": {\n        \"q\": \"/io.scalecube.configuration.api.ServiceName/method_name\",\n        }\n        \"d\": {\n                \"relevant request parameters and values\"\n        }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example HTTP:",
          "content": "{\n                \"relevant request parameters and values\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "description": "<p>Configuration service enable you to integrate the API in order to create and manage the separate repositories purposed for entity collection and storage.</p> <p><b>Getting Started</b></p> <p>All API endpoints are documented below. <br> You can try out any query in realtime using our interactive API. Actually all methods require API key authorization since they provide a specific permission level for the each user. So there is a necessity to get the API key (token - assigned with relevant role Member/Admin/Owner) issued via Organization Service which is basically purposed for organization managers who provide such kind permission level to potential costumers. <br>Thus, we recommend you first to be granted with valid API key assigned with relevant role (permission level) to be able to use this API key across all service endpoints.</p> <p>Validation for the object entities is handled by scalecube services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote>",
    "version": "0.0.0",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "Host addresses",
    "url": "/",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "description": "<p>Please follow the steps below to connect and run commands via Sandbox:</p>   <ul>                  <li> 1. Enter to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li>                  <li> 2. Click on the Settings button and enter the environment: wss://configuration-service-7070.genesis.om2.com </li>                  <li> 3. Import the exchange.json file path <a href=\"https://raw.githubusercontent.com/PavloPetrina/JsonData/master/OrganizationServiceALL.json\">Organization service contracts.json</a></li>                  <li> 4. Click on the Connect button (now you are connected to the environment) and push \"Send\"</li>   </ul>",
    "version": "0.0.0",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "websocket",
    "url": "io.scalecube.configuration.api.ConfigurationService/save",
    "title": "SaveUpdate the entry",
    "name": "Save",
    "group": "Save",
    "description": "<p>This operation enable you to save either update (edit) a specified entity in the relevant Repository and requires a write level permission granted for owner either admin role only. Upon the specified entity is saved then it could be updated i.e. overwritten by the common method</p>",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "JsonNode",
            "optional": false,
            "field": "value",
            "description": "<p>Specified node name applied for relevant configuration settings in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\"\n    \"key\": \"specifiedKeyName\"\n    \"value\": {\n                \"name\": \"Gold\",\n                \"instrument\": \"XAU\",\n                \"DecimalPrecision\" : \"2\",\n                \"Rounding\": \"down\"\n             }\n}",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>invalid key name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"key: \"specified\" name doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/apidoc/docs/save.apidoc",
    "groupTitle": "Save"
  }
] });
