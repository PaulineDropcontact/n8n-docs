(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1882:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"g-suite-admin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#g-suite-admin"}},[e._v("#")]),e._v(" G Suite Admin")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developers.google.com/admin-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("G Suite Admin"),n("OutboundLink")],1),e._v(" helps you administer domain and app resources, create reports, and manage subscriptions and alerts for your G Suite organization.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.gSuiteAdmin"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get a user using the G Suite Admin node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/710",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("G Suite Admin")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(913),alt:"A workflow with the Google Sheets node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-g-suite-admin-node-create-user"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-g-suite-admin-node-create-user"}},[e._v("#")]),e._v(" 2. G Suite Admin node (create: user)")]),e._v(" "),n("p",[e._v("This node will create a user in G Suite with the following information:  first name, last name, password, domain, and username.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the G Suite Admin node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the first name of the user in the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the last name of the user in the "),n("em",[n("strong",[e._v("Last Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter a password for the user in the "),n("em",[n("strong",[e._v("Password")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the domain from the "),n("em",[n("strong",[e._v("Domain")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the username for the user in the "),n("em",[n("strong",[e._v("Username")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will observe that the node has created a new user with the first name "),n("code",[e._v("Nathan")]),e._v(", last name "),n("code",[e._v("Nat")]),e._v(", domain "),n("code",[e._v("n8n.io")]),e._v(", username "),n("code",[e._v("nat")]),e._v(", and a password, in G Suite.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(914),alt:"Using the G Suite Admin node to create a user"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-g-suite-admin1-node-update-user"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-g-suite-admin1-node-update-user"}},[e._v("#")]),e._v(" 3. G Suite Admin1 node (update: user)")]),e._v(" "),n("p",[e._v("This node will get the User ID from the previous node and update the user's last name to "),n("code",[e._v("Nate")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous G Suite Admin node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > G Suite Admin > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["G Suite Admin"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Last Name' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter the last name in the "),n("em",[n("strong",[e._v("Last Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node has updated the last name of the user that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(915),alt:"Using the G Suite Admin node to update the last name of the user"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_4-g-suite-admin2-get-user"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-g-suite-admin2-get-user"}},[e._v("#")]),e._v(" 4. G Suite Admin2 (get: user)")]),e._v(" "),n("p",[e._v("This node will get the information of the user we created in the G Suite Admin node.")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous G Suite Admin node.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > G Suite Admin > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["G Suite Admin"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the user we created in the G Suite Admin node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(916),alt:"Using the G Suite Admin node to get the information of the user"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"what-are-the-different-ways-to-project-a-user-s-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-different-ways-to-project-a-user-s-information"}},[e._v("#")]),e._v(" What are the different ways to project a user's information?")]),e._v(" "),n("p",[e._v("There are three different ways to project a user's information:")]),e._v(" "),n("ul",[n("li",[n("em",[n("strong",[e._v("Basic:")])]),e._v(" Does not include any custom fields.")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("Custom:")])]),e._v(" Includes the custom fields from schemas in customField.")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("Full:")])]),e._v(" Include all the fields associated with the user.")])]),e._v(" "),n("p",[e._v("You can include custom fields by following the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Custom' from the "),n("em",[n("strong",[e._v("Projection")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Options")])]),e._v(" button and select 'Custom Schemas' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select the schema names you want to include from the "),n("em",[n("strong",[e._v("Custom Schemas")])]),e._v(" dropdown list.")])])],1)}),[],!1,null,null,null);t.default=s.exports},913:function(e,t,o){e.exports=o.p+"assets/img/workflow.f901c414.png"},914:function(e,t,o){e.exports=o.p+"assets/img/GSuiteAdmin_node.dc188612.png"},915:function(e,t,o){e.exports=o.p+"assets/img/GSuiteAdmin1_node.eae8a4ef.png"},916:function(e,t,o){e.exports=o.p+"assets/img/GSuiteAdmin2_node.35ad294a.png"}}]);