(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1796:function(t,e,n){"use strict";n.r(e);var s=n(26),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),s("p",[t._v("The Merge node is useful to merge data of multiple streams, once data of both streams is available.")]),t._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),s("h3",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" Mode")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),s("p",[t._v("The items passed into Input 1 of the Merge node will take precedence. For example, if 5 items are received in Input 1 and 10 items are received in Input 2, the Merge node will only process 5 items. The remaining 5 items from Input 2 will not be processed.")])]),t._v(" "),s("p",[t._v("You can specify how data of branches should be merged. The following options are available:")]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("Append:")])]),t._v(" Combines data of both inputs. The output will contain items of input 1 and input 2.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Keep Key Matches:")])]),t._v(" Keeps data of input 1 if it finds a match with data of input 2.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Merge By Index:")])]),t._v(" Merges data of both the inputs. The output will contain the data of input 1 merged with the data of input 2. The merge occurs based on the index of the items. For example, the first item of input 1 will be merged with the first item of input 2.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Merge By Key:")])]),t._v(" Merges data of both the inputs. The output will contain the data of input 1 merged with the data of input 2. The merge occurs depending on a defined key.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Multiples:")])]),t._v(" Merges each value of one input with each value of the other input. The output will contain (m*n) items where (m) and (n) are lengths of the inputs.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Pass-through:")])]),t._v(" Passes through the data of one input. The output will contain items of the defined input.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Remove Key Matches:")])]),t._v(" Keeps the data of input 1 if it does not find a match with the data of input 2.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Wait:")])]),t._v(" Waits till the data of both the inputs is available. It will then output a single empty item.")])]),t._v(" "),s("h3",{attrs:{id:"additional-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-fields"}},[t._v("#")]),t._v(" Additional Fields")]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("Property Input 1:")])]),t._v(" The name of the property which decides which items of input 1 to merge. This field is displayed when 'Keep Key Matches', 'Merge By Key', or 'Remove Key Matches' is selected in the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Property Input 2:")])]),t._v(" The name of the property which decides which items of input 2 to merge. This field is displayed when 'Keep Key Matches', 'Merge By Key', or 'Remove Key Matches' is selected in the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Join:")])]),t._v(" Use this to specify how many items the output should contain if inputs contain different amount of items. This field is displayed when 'Merge By Index' is selected in the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),s("ul",[s("li",[s("em",[s("strong",[t._v("Inner Join:")])]),t._v(" Merges as many items as both the inputs contains. For example, if input 1 contains 3 items and input 2 contains 3 items, the output will contain 3 items.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Left Join:")])]),t._v(" Merges as many items as the first input contains. For example, if input 1 contains 3 items and input 2 contains 5 items, the output will contain 3 items.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Outer Join:")])]),t._v(" Merges as many items as input contains with most items. For example, if input 1 contains 3 items and input 2 contains 5 items, the output will contain 5 items.")])])]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Overwrite:")])]),t._v(" Select when to overwrite the values from Input1 with values from Input 2. This field is displayed when 'Merge By Key' is selected from the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),s("ul",[s("li",[s("em",[s("strong",[t._v("Always:")])]),t._v(" Always overwrites everything.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("If Blank:")])]),t._v(" Overwrites only values of 'null', 'undefined' or the empty strings.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("If Missing:")])]),t._v(" Only adds values which do not exist yet.")])])]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Output Data:")])]),t._v(" Defines which input data should be used as the output of the node. This field is displayed when 'Pass-through' is selected from the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list. You can select from the following options.\n"),s("ul",[s("li",[s("em",[s("strong",[t._v("Input 1")])])]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Input 2")])])])])])]),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to merge greetings for the users based on their associated language using the Merge node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/655",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Funtion")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Merge")])])]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:n(692),alt:"A workflow with the HTML Extract node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("h3",{attrs:{id:"_2-function-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),s("ol",[s("li",[t._v("Paste the following JavaScript code snippet in the "),s("em",[s("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Stefan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jim'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hans'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[s("img",{attrs:{src:n(693),alt:"Generate users information using the Function node"}})]),t._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_3-function1-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-function1-node"}},[t._v("#")]),t._v(" 3. Function1 node")]),t._v(" "),s("ol",[s("li",[t._v("Paste the following JavaScript code snippet in the "),s("em",[s("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-js extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hallo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{pre:!0,attrs:{start:"2"}},[s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(694),alt:"Generate greetings information using the Function node"}})]),t._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_4-merge-node-mergebykey"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-merge-node-mergebykey"}},[t._v("#")]),t._v(" 4. Merge node (mergeByKey)")]),t._v(" "),s("ol",[s("li",[t._v("Select 'Merge By Key' from the "),s("em",[s("strong",[t._v("Mode")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Enter "),s("code",[t._v("language")]),t._v(" in the "),s("em",[s("strong",[t._v("Property Input 1")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Enter "),s("code",[t._v("language")]),t._v(" in the "),s("em",[s("strong",[t._v("Property Input 2")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(695),alt:"Merge user information and greetings information using the Merge node"}})]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("FurtherReadingBlog")],1)}),[],!1,null,null,null);e.default=a.exports},692:function(t,e,n){t.exports=n.p+"assets/img/workflow.598098da.png"},693:function(t,e,n){t.exports=n.p+"assets/img/Function_node.3a7485fd.png"},694:function(t,e,n){t.exports=n.p+"assets/img/Function1_node.8584dcc1.png"},695:function(t,e,n){t.exports=n.p+"assets/img/Merge_node.01a18f0d.png"}}]);