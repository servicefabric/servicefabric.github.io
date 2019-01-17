define({ "api": [
  {
    "type": "endpoint / addOrganizationApiKey",
    "url": "organizations/addOrganizationApiKey",
    "title": "Create the API key",
    "name": "AddOrganizationApiKey",
    "group": "ApiKey",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to create the API key (token) with assigned role (permission level - Owner/Admin/Member) in the relevant organization and allowable only for organization members who possess one of manager's roles (Owner/Admin). API keys with relevant assigned roles don't relate to the organization members' similar roles and they purposed for the appropriate permission level (write or read) provision for <a href=\"http://scalecube.io/configuration-service/index.html\">Configuration service</a> usage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKeyName",
            "description": "<p>Specified name for the relevant API key</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "claims",
            "description": "<p>(Map&lt;String,String&gt;) Specified role (Owner/Admin/Member - permission level for the relevant API key)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"apiKeyName\": \"specifiedApiKeyName\",\n    \"claims\": {\n                 \"role\": \"Owner\"\n              }\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stored id for the specific organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfo):",
          "content": "{\n    \"apiKeys\":[\n                 {\n                      \"name\":\"specifiedApiKeyName\",\n                      \"claims\":{\"role\":\"Owner\"},\n                      \"key\":\"eyJraWQiOiIyODQyYzFkYS0zMTFjZDlhNzU4NjViNTkiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJPE1NDQ0NTA4MTksInN1YiI6Ik9SRy1BQ0Y4X0.RVhFs4WENT2_cR7Jy_1yB7YStO0d5V9Va43Q7lVqarU\"\n                 }\n              ],\n    \"id\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"specifiedOrganizationName\",\n    \"email\":\"specifiedOrganization@email.com\",\n    \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n}",
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
            "description": "<p>API key name duplication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Not implemented):",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"apiKey name:'specifiedApiKeyName' already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/addOrganizationApiKey.apidoc",
    "groupTitle": "ApiKey"
  },
  {
    "type": "endpoint / deleteOrganizationApiKey",
    "url": "/organizations/deleteOrganizationApiKey",
    "title": "Delete the API key",
    "name": "DeleteOrganizationApiKey",
    "group": "ApiKey",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to delete the stored API key (token) in the relevant organization and allowable only for organization members who possess one of manager's roles (Owner/Admin). API keys with relevant assigned roles don't relate to the organization members' similar roles and they purposed for the appropriate permission level (write or read) provision for <a href=\"http://scalecube.io/configuration-service/index.html\">Configuration service</a> usage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKeyName",
            "description": "<p>Specified name for the relevant API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"apiKeyName\": \"specifiedApiKeyName\",\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stored id for the specific organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfo):",
          "content": "{\n    \"apiKeys\":[],\n    \"id\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"specifiedOrganizationName\",\n    \"email\":\"specifiedOrganization@email.com\",\n    \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n}",
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
            "description": "<p>deletion of non-existent API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Not implemented):",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"apiKey name:'specifiedApiKeyName' doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/deleteOrganizationApiKey.apidoc",
    "groupTitle": "ApiKey"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "Summary",
    "name": "Datatypes",
    "version": "2.0.15",
    "group": "Datatypes",
    "description": "<p>This chapter will detail datatypes that require specific format for or support a specific set of values. <br> Currently the validation is implemented for specific parameters which value type is string and can only contain characters in range A-Z, a-z, 0-9 as well as underscore, period, dash &amp; percent. Appropriate validation will be added soon.</p>",
    "filename": "/apidoc/docs/datatypes.apidoc",
    "groupTitle": "Datatypes"
  },
  {
    "type": "endpoint / inviteMember",
    "url": "/organizations/inviteMember",
    "title": "Invite the member to Organization",
    "name": "InviteMember",
    "group": "Member",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to invite a valid member (which id issued by relevant authority - Auth0) to step into specific organization and allowable only for organization members who possess one of manager's roles (Owner/Admin)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Already stored id for the specific organization issued by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"userId\": \"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekv@clients\"\n}",
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
            "description": "<p>Invalid role (permission level) for specified organization member either outsider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"user: 'DJMWEi19k7jxM1LasBqWAdne7oBsIJ5t@clients', name: 'null', not in role Owner or Admin of organization: 'specifiedOrganizationName'\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/inviteMember.apidoc",
    "groupTitle": "Member"
  },
  {
    "type": "endpoint / kickoutMember",
    "url": "/organizations/kickoutMember",
    "title": "Remove the member from Organization",
    "name": "KickoutMember",
    "group": "Member",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to remove the existent organization member and allowable only for organization members who possess one of manager's roles (Owner/Admin). Nevertheless at least one Owner (origin or granted one) should be persisted in the organization</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Already stored id for the specific organization issued by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"issuer\":\"auth0\",\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"userId\": \"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekv@clients\"\n}",
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
          "title": "Success-Response (not implemented):",
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
            "description": "<p>Invalid action upon the single (last one) organization Owner requested to be removed from the relevant organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"At least one Owner should be persisted in the organization: 'ORG-EA40B924B51BF3FF5611'\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/kickoutMember.apidoc",
    "groupTitle": "Member"
  },
  {
    "type": "endpoint / updateOrganizationMemberRole",
    "url": "/organizations/updateOrganizationMemberRole",
    "title": "Update the Organization member's role",
    "name": "UpdateOrganizationMemberRole",
    "group": "Member",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to upgrade/downgrade relevant member role in the specific organization and allowable only for organization members who possess one of manager's roles (Owner/Admin). Nevertheless any of the members who posses manager's roles couldn't downgrade or upgrade themselves and just only the members with relevant manager's roles are able to do that</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Already stored id for the specific organization issued by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"userId\": \"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekv@clients\",\n    \"role\": \"Owner\"\n}",
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
            "description": "<p>valid user isn't the member (outsider) of the specified organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"user: 'null', name: 'DJMWEi19k7jxM1LasBqWAdne7oBsImPy@clients', is not a member of organization: 'ORG-EA40B924B51BF3FF5611\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/updateOrganizationMemberRole.apidoc",
    "groupTitle": "Member"
  },
  {
    "type": "endpoint / getOrganizationMembers",
    "url": "/organizations/getOrganizationMembers",
    "title": "Get the Organization members",
    "name": "getOrganizationMembers",
    "group": "Member",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to fetch all the members in the relevant organization and allowable for each organization member</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\"\n}",
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
            "field": "members",
            "description": "<p>List of all the members in the specified organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"members\":[\n                 {\"id\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0EeC3@clients\",\"role\":\"Owner\"},\n                 {\"id\":\"SUeRt6rcMVNzTKFRAvMRO6FUDDtpTsQp@clients\",\"role\":\"Admin\"},\n                 {\"id\":\"VTYUg5A6gYzfDs9gf57PO8toj5TcBDt7@clients\",\"role\":\"Member\"}\n              ]\n}",
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
            "description": "<p>Invalid or non-existent organization id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"ORG-EA40B924B51BF3FF56NON\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/getOrganizationMembers.apidoc",
    "groupTitle": "Member"
  },
  {
    "type": "endpoint / create",
    "url": "/organizations/create",
    "title": "Create new Organization",
    "name": "CreateOrganization",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to create the specific organization and store its metadata (information)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"name\":\"specifiedOrganizationName\",\n    \"email\":\"specifiedOrganization@email.com\"\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Generated id for the created organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfo):",
          "content": "{\n    \"apiKeys\":[],\n    \"id\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"specifiedOrganizationName\",\n    \"email\":\"specifiedOrganization@email.com\",\n    \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n}",
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
            "description": "<p>Organization name wasn't specified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Organization name cannot be empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/createOrganization.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "endpoint / delete",
    "url": "/organizations/delete",
    "title": "Delete the Organization",
    "name": "DeleteOrganization",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to delete the specific organization and allowable only for organization members who possess one of manager's roles (Owner/Admin)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "description": "<p>The &quot;true&quot; statement</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already Stored id for the specific organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"deleted\":true,\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\"\n}",
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
            "description": "<p>Invalid or non-existent organization id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"ORG-EA40B924B51BF3FF56NON\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/deleteOrganization.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "endpoint / getOrganization",
    "url": "/organizations/getOrganization",
    "title": "Get Organization info",
    "name": "GetOrganization",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to get the relevant organization information and allowable for each organization member</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\"\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stored id for the specific organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfo):",
          "content": "{\n    \"apiKeys\":[],\n    \"id\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"specifiedOrganizationName\",\n    \"email\":\"specifiedOrganization@email.com\",\n    \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n}",
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
            "description": "<p>Invalid or expired token</p>"
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
    "filename": "/apidoc/docs/getOrganization.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "endpoint / leaveOrganization",
    "url": "/organizations/leaveOrganization",
    "title": "Leave the Organization",
    "name": "LeaveOrganization",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables to step-out from the specific organization and allowable for each organization member as do for origin owner (founder). Nevertheless at least one Owner (origin or granted one) should be persisted in the organization</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\"\n}",
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
            "description": "<p>Invalid action upon the single (last one) organization Owner requested to be removed from the relevant organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"At least one Owner should be persisted in the organization: 'ORG-EA40B924B51BF3FF5611'\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/leaveOrganization.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "endpoint / updateOrganization",
    "url": "/organizations/updateOrganization",
    "title": "Edit the Organization",
    "name": "UpdateOrganization",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables origin owner (founder) to optionally update (edit) the specific organization information either name or email and allowable only for organization members who possess one of manager's roles (Owner/Admin)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Already stored id for the specific organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New specified organization name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>New specified organization e-mail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            },\n    \"organizationId\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"newSpecifiedOrganizationName\",\n    \"email\":\"newSpecifiedOrganization@email.com\"\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stored id for the specific organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>New specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfo):",
          "content": "{\n    \"apiKeys\":[],\n    \"id\":\"ORG-EA40B924B51BF3FF5611\",\n    \"name\":\"newSpecifiedOrganizationName\",\n    \"email\":\"newSpecifiedOrganization@email.com\",\n    \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n}",
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
            "description": "<p>Organization e-mail wasn't specified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   errorCode\":500,\n   \"errorMessage\":\"Organization email cannot be empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/apidoc/docs/updateOrganization.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "endpoint / getUserOrganizationsMembership",
    "url": "/organizations/getUserOrganizationsMembership",
    "title": "Get the user membership",
    "name": "getUserOrganizationsMembership",
    "group": "Organization",
    "version": "2.0.15",
    "description": "<p>This operation enables to get the list of all relevant organizations (full info) which the valid (authorized by relevant authority - Auth0) user steeped into as the member as do the origin owner (founder)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>The requested token issued by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": {\n                 \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUSkROekJFTXpjNFJEUTFSa0UzTkRZM05FWkVOemM1TUVWQ1JFRXdOREF6UWtFelF6QkRNQSJ9.\n                 eyJpc3MiOiJodHRwczovL3BhdmxvLmF1dGgwLmNvbS8iLCJzdWIiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDM0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9w\n                 YXZsby5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTU0NjYwNjM3OCwiZXhwIjoxNTQ5MTk4Mzc4LCJhenAiOiJQcGd2TkFad1hZTHE1UnZVSWo2YkEzVjRlTGswRWtDMyIsInNj\n                 b3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkY\n                 XRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21\n                 ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOm\n                 NsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZT\n                 pjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cm\n                 Vzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3Jl\n                 ZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGR\n                 hdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXR\n                 lOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVs\"\n            }\n}",
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
            "field": "apiKeys",
            "description": "<p>List of all API keys (objects) for the relevant organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stored id for the specific organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specified organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specified organization e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id for clients already generated by relevant authority (Auth0)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Extends OrganizationInfos):",
          "content": "{\n\n    \"organizations\":[\n                       {\n                         \"apiKeys\":[],\n                         \"id\":\"ORG-ACF8F702CE82DE56D974\",\n                         \"name\":\"NewSpecifiedOrganizationName\",\n                         \"email\":\"NewspecifiedOrganization@email.com\",\n                         \"ownerId\":\"DJMWEi19k7jxM1LasBqWAdne7oBsIH7p@clients\"\n                     },\n                       {\n                         \"apiKeys\":[],\n                         \"id\":\"ORG-EA40B924B51BF3FF5611\",\n                         \"name\":\"specifiedOrganizationName\",\n                         \"email\":\"specifiedOrganization@email.com\",\n                         \"ownerId\":\"PpgvNAZwXYLq5RvUIj6bA3V4eLk0Ekp7@clients\"\n                       }\n                   ]\n}",
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
            "description": "<p>Invalid or expired token</p>"
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
    "filename": "/apidoc/docs/getUserOrganizationsMembership.apidoc",
    "groupTitle": "Organization"
  },
  {
    "type": "Transport protocols",
    "url": "/",
    "title": "General Definitions",
    "name": "GeneralDefinitions",
    "group": "Overview",
    "version": "2.0.15",
    "description": "<p>The request should contain the following structure upon the transport protocols are used: <ul> <b>Websocket</b> <li> &quot;q&quot;: The query of the relevant service path </li> <li> &quot;sid&quot;: The identifier of the stream id. </li> <li> &quot;d&quot;: The request data (parameters and values). </li> <b>RSocket</b> <li> &quot;metadata&quot; which contains object &quot;q&quot;: The query of the relevant service path </li> <li> &quot;data&quot; object: The request data (parameters and values). </li> <b>HTTP</b> <li> add the &quot;/organizations/method_name&quot; to the host and use the &quot;POST&quot; method</li> <li> &quot;headers&quot;: Content-Type json </li> <li> &quot;body&quot; json object: The request data (parameters and values). </li> </ul></p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example Websocket:",
          "content": "{\n    \"q\": \"/organizations/method_name\",\n    \"sid\": 1,\n    \"d\": {\n            \"relevant request parameters and values\"\n         }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example RSocket:",
          "content": "{\n    \"metadata\": {\n        \"q\": \"/organizations/method_name\",\n        }\n        \"d\": {\n                \"relevant request parameters and values\"\n        }\n}",
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
    "type": "Host addresses",
    "url": "/",
    "title": "Getting Started",
    "name": "GettingStarted",
    "group": "Overview",
    "version": "2.0.15",
    "description": "<p>Organization service enable you to integrate the API in order to create and manage the organizations. Besides the origin owner (founder) abilities there is necessity for relevant organization members to achieve appropriate permission level (roles: Owner/Admin) for manage. Thus each organization could be deleted or relevant credentials updated, valid members could be invited to and removed from the relevant organization as do the granted members roles (Owner/Admin/Member) could be updated and each member could get the info about the organization and own membership. Organization managers could provide and delete the relevant API keys (permission level with appropriate assigned roles: Owner/Admin/Member) which are vital leverage for the <a href=\"http://scalecube.io/configuration-service/index.html\">Configuration service</a> management and security purpose and don't relates to the organization members similar roles.</p> <p><b>Getting Started</b></p> <p>All API endpoints documented below are the integral part of <a href=\"http://scalecube.io/configuration-service/index.html\">Configuration service</a> host address. <br> You can try out any query in realtime using our interactive API. Actually service requires token authentication, so there is a necessity to get the token issued via secured authority. <br>Thus, we recommend you first to create an account in <a href=\"https://manage.auth0.com/\">Auth0</a> and issue the token whereby to perform the valid requests across all service endpoints.</p> <p>Validation for the object entities is handled by scalecube services and do the next upon the request object:</p> <blockquote> <p>~ ignores any excessive keys and values added besides the required parameters <br>~ doesn't ignore the keys duplicates and takes the last values which applied for each of the relevant key duplicate</p> </blockquote>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  },
  {
    "type": "Host addresses",
    "url": "/",
    "title": "Interactive API Explorer",
    "name": "InteractiveAPIExplorer",
    "group": "Overview",
    "version": "2.0.15",
    "description": "<p>For example <b>Websocket</b> connection is one of the accessible ways to use the API, so please follow the steps below to connect and perform requests via Sandbox:</p>   <ul>                  <li> Navigate to the sandbox: <a href=\"http://scalecube.io/api-sandbox/app/index.html\">Scalecube sandbox</a> </li>                  <li> Click on the <b>Settings</b> button and choose the relevant <b>transort</b> and host <b>address</b>: wss://configuration-service-7070.genesis.om2.com </li>                  <li> Click on <b>Import icon</b> and copy-paste the template.json file path <a href=\"https://raw.githubusercontent.com/PavloPetrina/JsonData/master/OrganizationServiceALL.json\">Organization service endpoints.json</a></li>                  <li> Click on the <b>Connect</b> button (now you are connected to the environment) and push <b>Send</b> button to make your request</li>   </ul>",
    "filename": "/apidoc/docs/overview.apidoc",
    "groupTitle": "Overview"
  }
] });
