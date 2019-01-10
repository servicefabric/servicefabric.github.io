define({ "api": [
  {
    "type": "create endpoint",
    "url": "/io.scalecube.configuration.api.ConfigurationService/createRepository",
    "title": "Create new Repo",
    "version": "2.0.17-SNAPSHOT",
    "name": "CreateRepository",
    "group": "CreateRepository",
    "description": "<p>This operation enable you to create the specific Repository for collecting and storing the relevant entries and requires a write level permission granted for owner role only</p>",
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
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Role 'Admin' has insufficient permissions for the requested operation: CreateRepoitory\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/create.apidoc",
    "groupTitle": "CreateRepository"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "Summary",
    "name": "Datatypes",
    "version": "2.0.17-SNAPSHOT",
    "group": "Datatypes",
    "description": "<p>This chapter will detail datatypes that require specific format for or support a specific set of values. <br> Currently the validation is implemented for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p>",
    "filename": "/apidoc/docs/datatypes.apidoc",
    "groupTitle": "Datatypes"
  },
  {
    "type": "delete endpoint",
    "url": "/io.scalecube.configuration.api.ConfigurationService/delete",
    "title": "Delete specified entry",
    "name": "Delete",
    "group": "Delete",
    "version": "2.0.17-SNAPSHOT",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\",\n    \"key\": \"specifiedKeyName\"\n}",
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
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Role 'Member' has insufficient permissions for the requested operation: Delete\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/delete.apidoc",
    "groupTitle": "Delete"
  },
  {
    "type": "entries endpoint",
    "url": "/io.scalecube.configuration.api.ConfigurationService/entries",
    "title": "Fetch (get) all entries",
    "name": "Entries",
    "group": "Entries",
    "version": "2.0.17-SNAPSHOT",
    "description": "<p>This operation enable you to get all values (either string or object) by retrieving all the entries (keys) from the relevant Repository and enabled for each accessible permission level (read&amp;write) granted for owner either admin or member role</p>",
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
            "type": "Array",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries from the relevant configuration setting in the repository</p>"
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
    "filename": "/apidoc/docs/entries.apidoc",
    "groupTitle": "Entries"
  },
  {
    "type": "fetch endpoint",
    "url": "/io.scalecube.configuration.api.ConfigurationService/fetch",
    "title": "Fetch (get) specified entry",
    "name": "Fetch",
    "group": "Fetch",
    "version": "2.0.17-SNAPSHOT",
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
            "description": "<p>Specified key name for relevant configuration setting in the repository</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\",\n    \"key\": \"specifiedKeyName\"\n}",
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
            "description": "<p>invalid or non-existent key name (entry in the repository)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"16562665EC17CDF08E97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/fetch.apidoc",
    "groupTitle": "Fetch"
  },
  {
    "type": "Host addresses",
    "url": "/",
    "title": "General Definitions",
    "name": "GeneralDefinitions",
    "group": "Overview",
    "version": "2.0.17-SNAPSHOT",
    "description": "<p>The request should contain the following structure upon the transport protocols are used: <ul> <b>Websocket</b> <li> &quot;q&quot;: The query of the relevant service path </li> <li> &quot;sid&quot;: The identifier of the stream id. </li> <li> &quot;d&quot;: The request data (parameters and values). </li> <b>RSocket</b> <li> &quot;metadata&quot; which contains object &quot;q&quot;: The query of the relevant service path </li> <li> &quot;data&quot; object: The request data (parameters and values). </li> <b>HTTP</b> <li> add the &quot;/io.scalecube.configuration.api.ServiceName/method_name&quot; to the host </li> <li> &quot;headers&quot;: Content-Type json </li> <li> &quot;body&quot; json object: The request data (parameters and values). </li> </ul></p>",
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
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "version": "2.0.17-SNAPSHOT",
    "description": "<p>Configuration service enable you to integrate the API in order to create and manage the separate repositories purposed for entries collection and storage.</p> <p><b>Getting Started</b></p> <p>All API endpoints are documented below. <br> You can try out any query in realtime using our interactive API. Actually all methods require API key authorization since they provide a specific permission level for the each user. So there is a necessity to get the API key (token - assigned with relevant role Member/Admin/Owner) issued via Organization Service which is basically purposed for organization managers who provide such kind permission level to potential costumers. <br>Thus, we recommend you first to be granted with valid API key assigned with relevant role (permission level) to be able to use this API key across all service endpoints.</p> <p>Validation for the object entities is handled by scalecube services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "Host addresses",
    "url": "/",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "version": "2.0.17-SNAPSHOT",
    "description": "<p>For example <b>Websocket</b> connection is one of the accessible ways to use the API, so please follow the steps below to connect and perform requests via Sandbox:</p>   <ul>                  <li> Navigate to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li>                  <li> Click on the <b>Settings</b> button and choose the relevant <b>transort</b> and host <b>address</b>: wss://configuration-service-7070.genesis.om2.com </li>                  <li> Click on <b>Import icon</b> and copy-paste the template.json file path <a href=\"https://raw.githubusercontent.com/scalecube/scalecube-configuration-service/develop/API-Calls-examples.json\">Configuration service endpoints.json</a></li>                  <li> Click on the <b>Connect</b> button (now you are connected to the environment) and push <b>Send</b> button to make your request</li>   </ul>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "save endpoint",
    "url": "/io.scalecube.configuration.api.ConfigurationService/save",
    "title": "SaveUpdate the entry",
    "name": "Save",
    "group": "Save",
    "version": "2.0.17-SNAPSHOT",
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
          "content": "{\n    \"token\": \"eyJraWQiOiIyODQyYzFkYS0zMTFmLTRjNDcIUzI1NiJ9.JvbGUiOiJPd25lciIsImV4cCI6DAzOX0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqawR\",\n    \"repository\": \"specifiedRepoName\",\n    \"key\": \"specifiedKeyName\",\n    \"value\": {\n                \"name\": \"Gold\",\n                \"instrument\": \"XAU\",\n                \"DecimalPrecision\" : \"2\",\n                \"Rounding\": \"down\"\n             }\n}",
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
            "description": "<p>invalid or non-existent repository name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Failed to open bucket: 'ORG-ACF8F702CE82DE56D737-Name'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/save.apidoc",
    "groupTitle": "Save"
  }
] });
