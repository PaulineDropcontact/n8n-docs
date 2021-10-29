(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1532:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-getting-data-from-the-data-warehouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-getting-data-from-the-data-warehouse"}},[e._v("#")]),e._v(" 1. Getting Data From the Data Warehouse")]),e._v(" "),a("p",[e._v("In this part of the workflow you will learn how to get data by making HTTP requests using the "),a("em",[e._v("HTTP Request")]),e._v(" node.")]),e._v(" "),a("p",[e._v("First, let’s set up the scene for building Nathan’s workflow. Open your Editor UI and create a new workflow with one of the two possible commands:")]),e._v(" "),a("ul",[a("li",[e._v("Click "),a("strong",[e._v("Ctrl + Alt + N")]),e._v(" or "),a("strong",[e._v("Cmd + Option + N")]),e._v(" on your keyboard")]),e._v(" "),a("li",[e._v("Open the left menu and click on "),a("em",[e._v("New")]),e._v(" under the Workflow section")])]),e._v(" "),a("p",[e._v("Name this new workflow “Nathan’s workflow”.")]),e._v(" "),a("p",[e._v("The first thing we need to do is get data from Evil Corp’s old data warehouse.")]),e._v(" "),a("p",[e._v("In the previous chapter, we used a regular node for a specific app (Hacker News). However, not all apps or services have dedicated nodes – like the legacy data warehouse from Nathan’s company. Nathan mentioned that it’s not possible to directly export the data, however the data warehouse has a couple of API endpoints.")]),e._v(" "),a("p",[e._v("That’s all we need to access the data via the "),a("a",{attrs:{href:"https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest/",target:"_blank",rel:"noopener noreferrer"}},[a("em",[a("strong",[e._v("HTTP Request node")])]),a("OutboundLink")],1),e._v("in n8n.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 No node for that service?")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("HTTP Request node")]),e._v(" is one of the most versatile nodes, allowing you to make HTTP requests which can be used to query data from apps and services. You can use it to access data from apps or services that don’t have a dedicated node in n8n.")])]),e._v(" "),a("p",[e._v("Now, in your Editor UI, add an "),a("em",[e._v("HTTP Request node")]),e._v(" like you learned in the "),a("RouterLink",{attrs:{to:"/courses/level-one/chapter-1.html#adding-nodes"}},[e._v("lesson "),a("em",[e._v("Adding nodes")])]),e._v(". The node window will open, where you need to configure some parameters.")],1),e._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:o(411),alt:"HTTP Request node"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[e._v("HTTP Request node")])])]),e._v(" "),a("p",[e._v("In the left panel, select:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Authentication:")]),e._v(" Header Auth")]),e._v(" "),a("li",[a("em",[e._v("URL:")]),e._v(" "),a("code",[e._v("https://internal.users.n8n.cloud/webhook/custom-erp")])]),e._v(" "),a("li",[a("em",[e._v("Options > Add Option > Split Into Items:")]),e._v(" toggle to true.\nThis option will output each element of an array as its own item.")]),e._v(" "),a("li",[a("em",[e._v("Headers > Add Header:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Name:")]),e._v(" "),a("code",[e._v("unique_id")])]),e._v(" "),a("li",[a("em",[e._v("Value:")]),e._v(" your_unique_id")])])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" In case you don't already have your Unique ID, please sign-up "),a("a",{attrs:{href:"https://n8n-community.typeform.com/to/PDEMrevI",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to obtain it.")]),e._v(" "),a("p",[e._v("Since you selected "),a("em",[e._v("Header Authentication")]),e._v(", now you need to enter your "),a("a",{attrs:{href:"https://docs.n8n.io/reference/glossary.html%23credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("credentials"),a("OutboundLink")],1),e._v(" in order to be able to access the data.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📖 Credentials")]),e._v(" "),a("p",[e._v("Credentials are unique pieces of information that identify a user or a service and enable them to access apps or services (in our case, represented as n8n nodes). A common form of credentials is a username and a password, but they can take other forms depending on the service.")])]),e._v(" "),a("p",[e._v("In the left panel, click on "),a("em",[e._v("Create New")]),e._v(" in the box next to the parameter "),a("em",[e._v("Credentials")]),e._v(". This will open the Credentials window where you need to add the following information in the "),a("em",[e._v("Connection")]),e._v(" tab:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Credentials Name")]),e._v(" in the top left corner, next to the node logo. By default, the name of the credentials is "),a("code",[e._v("Header Auth account")]),e._v(", but you can can rename to "),a("code",[e._v("beginner_course")]),e._v(", for example.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Credentials naming")]),e._v(" "),a("p",[e._v("You can name your credentials however you want. It’s good practice to give them descriptive names for the app/service, type, and purpose of the credential. A naming convention will make it easier for you to keep track of and identify your credentials.")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Name:")]),e._v(" "),a("code",[e._v("api_key")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Value:")]),e._v(" "),a("code",[e._v("j[vKYdY68H(:WFb")])])])]),e._v(" "),a("p",[e._v("Click on the "),a("em",[e._v("Save")]),e._v(" button in the top right corner to save your credentials. Your "),a("em",[e._v("Credentials Connection")]),e._v(" window should look like this:")]),e._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:o(412),alt:"HTTP Request node credentials"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[e._v("HTTP Request node credentials")])])]),e._v(" "),a("p",[e._v("Now click the "),a("em",[e._v("Save")]),e._v(" button in the bottom right corner of the window.")]),e._v(" "),a("p",[e._v("In the "),a("em",[e._v("HTTP Request node")]),e._v(" window, click the "),a("em",[e._v("Execute Node")]),e._v(" button. The result of the HTTP request should look like this:")]),e._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:o(413),alt:"HTTP Request node window"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[e._v("HTTP Request node window")])])]),e._v(" "),a("p",[e._v("This view should be familiar to you from the "),a("RouterLink",{attrs:{to:"/courses/level-one/chapter-2.html"}},[e._v("Hacker News mini-workflow")]),e._v(". This is the data from EvilCorp's data warehouse that Nathan needs to work with. This data set includes sales information of 30 customers with 5 features:")],1),e._v(" "),a("ul",[a("li",[a("em",[e._v("orderID:")]),e._v(" The unique id of each order.")]),e._v(" "),a("li",[a("em",[e._v("customerID:")]),e._v(" The unique id of each customer.")]),e._v(" "),a("li",[a("em",[e._v("employeeName:")]),e._v(" The name of Nathan’s colleagues who are responsible for each client.")]),e._v(" "),a("li",[a("em",[e._v("orderPrice:")]),e._v(" The total price of the customer’s order.")]),e._v(" "),a("li",[a("em",[e._v("orderStatus:")]),e._v(" Whether the customer’s order is booked or still in processing.")])]),e._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),a("p",[a("strong",[e._v("Nathan 🙋")]),e._v(": This is great! You already automated an important part of my job with only one node. Now instead of manually accessing the data every time I need it, I can use the HTTP Node to automatically get the information.")]),e._v(" "),a("p",[a("strong",[e._v("You 👩‍🔧")]),e._v(": Exactly! In the next step, I’ll help you one step further and insert the received data into Airtable, as you need it.")])])}),[],!1,null,null,null);t.default=n.exports},411:function(e,t,o){e.exports=o.p+"assets/img/HTTP-request-node.703ee86e.png"},412:function(e,t,o){e.exports=o.p+"assets/img/HTTP-credentials.64ecac20.png"},413:function(e,t,o){e.exports=o.p+"assets/img/HTTP-Request-window.0b3261ce.png"}}]);